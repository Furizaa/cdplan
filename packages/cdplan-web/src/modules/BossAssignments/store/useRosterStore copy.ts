import { VERSION_STORAGE } from "@Core/util/version";
import {
  selectById,
  whitelistHealingSpells,
  whitelistOffensiveSpells,
  whitelistMovementSpells,
  CLASSES,
  SPECS,
  COVENANTS,
  SPELLS,
} from "@cdplan/db";
import { ClassId, CovenantId, SpecId, SpellId } from "@dbc/types";
import produce from "immer";
import { DBC, ProfileId, RaidCooldown, RaidCooldownId, RosterCharacter, RosterCharacterId } from "types";
import create, { GetState, SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type RosterState = {
  profile: Record<
    string,
    {
      roster: Record<string, RosterCharacter>;
      bench: RosterCharacterId[];
      groups: Record<number, RosterCharacterId[]>;
    }
  >;
  addCharacterToRoster: (
    profile: ProfileId,
    name: string,
    classId: DBC.ClassId,
    specId: DBC.SpecId,
    covenantId: DBC.CovenantId
  ) => RosterCharacterId | undefined;
  editCharacter: (
    profile: ProfileId,
    id: RosterCharacterId,
    name: string,
    classId: DBC.ClassId,
    specId: DBC.SpecId,
    covenantId: DBC.CovenantId
  ) => RosterCharacterId | undefined;
  addCharacterToGroup: (profile: ProfileId, groupNumber: number, index: number, characterId: RosterCharacterId) => void;
  addCharacterToBench: (profile: ProfileId, index: number, characterId: RosterCharacterId) => void;
  removeCharacterFromGroups: (profile: ProfileId, characterId: RosterCharacterId) => void;
  removeCharacter: (profile: ProfileId, characterId: RosterCharacterId) => void;
  removeAllCharactersFromGroups: (profile: ProfileId) => void;

  clear: (profile: ProfileId) => void;

  getBenchCharacters: (profile: ProfileId) => RosterCharacter[];
  getGroupCharacters: (profile: ProfileId, groupNumber: number) => RosterCharacter[];
  getAllGroupCharacters: (profile: ProfileId) => RosterCharacter[];
  getWhitelistedCooldowns: (profile: ProfileId, whitelist: Readonly<DBC.SpellId[]>) => RaidCooldown[];
  getCooldowns: (profile: ProfileId, flavor?: DBC.MechanicMitigationFlavor) => RaidCooldown[];
};

export const EVERYONE_CHARACTER: RosterCharacter = {
  id: "__everyone/0" as RosterCharacterId,
  name: "Everyone",
  covenant: {
    icon: "ability_seal",
    id: -1 as CovenantId,
    key: "UNKNOWN",
    name: "",
    spellId: 999999 as SpellId,
    spells: [],
  },
  spec: {
    icon: "ability_seal",
    id: -1 as SpecId,
    name: "",
    position: "MELEE",
    role: "DPS",
    spells: {
      PERSONALS: SPELLS.SHARED.PERSONALS,
      POTIONS: SPELLS.SHARED.POTIONS,
    },
  },
  pclass: {
    color: "gray",
    colorHex: "333333",
    covenantSpells: {
      NIGHT_FAE: {},
      NECROLORD: {},
      VENTHYR: {},
      KYRIAN: {},
      UNKNOWN: {},
    },
    id: -1 as ClassId,
    importName: "WARRIOR",
    name: "",
    specs: {},
    talents: {},
  },
};

const store = (set: SetState<RosterState>, get: GetState<RosterState>) => ({
  profile: {},

  addCharacterToRoster: (
    profile: ProfileId,
    name: string,
    classId: DBC.ClassId,
    specId: DBC.SpecId,
    covenantId: DBC.CovenantId
  ): RosterCharacterId | undefined => {
    const id = `${name.toLocaleLowerCase()}/${classId}` as RosterCharacterId;
    const pclass = selectById(CLASSES, classId);
    const spec = selectById(SPECS, specId);
    const covenant = selectById(COVENANTS, covenantId);

    if (!pclass || !spec || !covenant) {
      return undefined;
    }

    const covenantSpells = Object.values(pclass.covenantSpells[covenant.key]);

    set((state) =>
      produce(state, (draft) => {
        if (!draft.profile[profile]) {
          draft.profile[profile] = {
            roster: {},
            bench: [],
            groups: { 0: [], 1: [], 2: [], 3: [], 4: [] },
          };
        }
        draft.profile[profile].roster[id] = {
          id,
          name,
          pclass,
          spec,
          covenant: {
            ...covenant,
            spells: covenantSpells,
          },
        };
      })
    );
    get().addCharacterToBench(profile, 0, id);
    return id;
  },

  editCharacter: (
    profile: ProfileId,
    id: RosterCharacterId,
    name: string,
    classId: DBC.ClassId,
    specId: DBC.SpecId,
    covenantId: DBC.CovenantId
  ): RosterCharacterId | undefined => {
    const pclass = selectById(CLASSES, classId);
    const spec = selectById(SPECS, specId);
    const covenant = selectById(COVENANTS, covenantId);

    if (!pclass || !spec || !covenant) {
      return undefined;
    }

    const covenantSpells = Object.values(pclass.covenantSpells[covenant.key]);

    set((state) =>
      produce(state, (draft) => {
        draft.profile[profile].roster[id] = {
          id,
          name,
          pclass,
          spec,
          covenant: {
            ...covenant,
            spells: covenantSpells,
          },
        };
      })
    );
    return id;
  },

  addCharacterToGroup(profile: ProfileId, groupNumber: number, index: number, characterId: RosterCharacterId) {
    get().removeCharacterFromGroups(profile, characterId);
    set((state) =>
      produce(state, (draft) => {
        draft.profile[profile].groups[groupNumber] = [
          ...draft.profile[profile].groups[groupNumber].slice(0, index),
          characterId,
          ...draft.profile[profile].groups[groupNumber].slice(index),
        ];
        draft.profile[profile].bench = draft.profile[profile].bench.filter((id) => id !== characterId);
      })
    );
  },

  addCharacterToBench: (profile: ProfileId, index: number, characterId: RosterCharacterId) => {
    get().removeCharacterFromGroups(profile, characterId);
    set((state) =>
      produce(state, (draft) => {
        if (draft.profile[profile].bench[index]) {
          draft.profile[profile].bench.push(characterId);
        } else {
          draft.profile[profile].bench = [
            ...draft.profile[profile].bench.slice(0, index),
            characterId,
            ...draft.profile[profile].bench.slice(index),
          ];
        }
      })
    );
  },

  removeCharacterFromGroups: (profile: ProfileId, characterId: RosterCharacterId) => {
    set((state) =>
      produce(state, (draft) => {
        for (let g = 0; g <= 4; g += 1) {
          draft.profile[profile].groups[g] = draft.profile[profile].groups[g].filter((id) => id !== characterId);
        }
      })
    );
  },

  removeCharacter: (profile: ProfileId, characterId: RosterCharacterId) => {
    get().removeCharacterFromGroups(profile, characterId);
    set((state) =>
      produce(state, (draft) => {
        draft.profile[profile].bench = draft.profile[profile].bench.filter((id) => id !== characterId);
        delete draft.profile[profile].roster[characterId];
      })
    );
  },

  removeAllCharactersFromGroups: (profile: ProfileId) => {
    set((state) =>
      produce(state, (draft) => {
        for (let g = 0; g <= 4; g += 1) {
          draft.profile[profile].groups[g].forEach((charId) => draft.profile[profile].bench.push(charId));
          draft.profile[profile].groups[g] = [];
        }
      })
    );
  },

  clear: (profile: ProfileId) => {
    set((state) =>
      produce(state, (draft) => {
        draft.profile[profile].roster = {};
        draft.profile[profile].bench = [];
        draft.profile[profile].groups = { 0: [], 1: [], 2: [], 3: [], 4: [] };
      })
    );
  },

  getBenchCharacters(profile: ProfileId) {
    return get().profile[profile].bench.map((id) => get().profile[profile].roster[id]);
  },

  getGroupCharacters(profile: ProfileId, groupNumber: number) {
    return get().profile[profile].groups[groupNumber].map((id) => get().profile[profile].roster[id]);
  },

  getAllGroupCharacters(profile: ProfileId) {
    const ids = Object.values(get().profile[profile].groups).flat();
    return Object.values(get().profile[profile].roster).filter((char) => ids.includes(char.id));
  },

  getWhitelistedCooldowns(profile: ProfileId, whitelist: Readonly<DBC.SpellId[]>) {
    const groupCharacters = get().getAllGroupCharacters(profile);
    groupCharacters.push(EVERYONE_CHARACTER);
    return groupCharacters.flatMap((char) => {
      const spells = Object.values(char.spec.spells).filter((spell) => whitelist.includes(spell.id));
      const talents = Object.values(char.pclass.talents).filter((talent) => whitelist.includes(talent.id));
      const covenantSpells = char.covenant.spells.filter((spell) => whitelist.includes(spell.id));

      const cooldowns: RaidCooldown[] = [...spells, ...talents, ...covenantSpells].map((spell) => ({
        id: `${char.id}/${spell.id}` as RaidCooldownId,
        caster: char,
        spell,
      }));
      return cooldowns;
    });
  },

  getCooldowns(profile: ProfileId, flavor?: DBC.MechanicMitigationFlavor) {
    if (flavor === "HealingCooldowns") {
      return get().getWhitelistedCooldowns(profile, whitelistHealingSpells);
    }
    if (flavor === "OffensiveBurst") {
      return get().getWhitelistedCooldowns(profile, whitelistOffensiveSpells);
    }
    if (flavor === "Mobility") {
      return get().getWhitelistedCooldowns(profile, whitelistMovementSpells);
    }

    return [
      ...get().getWhitelistedCooldowns(profile, whitelistHealingSpells),
      ...get().getWhitelistedCooldowns(profile, whitelistOffensiveSpells),
      ...get().getWhitelistedCooldowns(profile, whitelistMovementSpells),
    ];
  },
});

export default create<RosterState>(persist(devtools(store, "RosterStore"), { name: `roster/${VERSION_STORAGE}` }));

import { useProfileStores } from "@BossAssignments/context/ProfileStoreProvider";
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
import create, { GetState, SetState, StateSelector } from "zustand";
import { devtools, persist } from "zustand/middleware";
import useProfileStore from "./useProfileStore";

export type RosterState = {
  roster: Record<string, RosterCharacter>;
  bench: RosterCharacterId[];
  groups: Record<number, RosterCharacterId[]>;
  addCharacterToRoster: (
    name: string,
    classId: DBC.ClassId,
    specId: DBC.SpecId,
    covenantId: DBC.CovenantId
  ) => RosterCharacterId | undefined;
  editCharacter: (
    id: RosterCharacterId,
    name: string,
    classId: DBC.ClassId,
    specId: DBC.SpecId,
    covenantId: DBC.CovenantId
  ) => RosterCharacterId | undefined;
  addCharacterToGroup: (groupNumber: number, index: number, characterId: RosterCharacterId) => void;
  addCharacterToBench: (index: number, characterId: RosterCharacterId) => void;
  removeCharacterFromGroups: (characterId: RosterCharacterId) => void;
  removeCharacter: (characterId: RosterCharacterId) => void;
  removeAllCharactersFromGroups: () => void;

  clear: () => void;

  getBenchCharacters: () => RosterCharacter[];
  getGroupCharacters: (groupNumber: number) => RosterCharacter[];
  getAllGroupCharacters: () => RosterCharacter[];
  getWhitelistedCooldowns: (whitelist: Readonly<DBC.SpellId[]>) => RaidCooldown[];
  getCooldowns: (flavor?: DBC.MechanicMitigationFlavor) => RaidCooldown[];
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
  roster: {},
  bench: [],
  groups: { 0: [], 1: [], 2: [], 3: [], 4: [] },

  addCharacterToRoster: (
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
        draft.roster[id] = {
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
    get().addCharacterToBench(0, id);
    return id;
  },

  editCharacter: (
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
        draft.roster[id] = {
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

  addCharacterToGroup(groupNumber: number, index: number, characterId: RosterCharacterId) {
    get().removeCharacterFromGroups(characterId);
    set((state) =>
      produce(state, (draft) => {
        draft.groups[groupNumber] = [
          ...draft.groups[groupNumber].slice(0, index),
          characterId,
          ...draft.groups[groupNumber].slice(index),
        ];
        draft.bench = draft.bench.filter((id) => id !== characterId);
      })
    );
  },

  addCharacterToBench: (index: number, characterId: RosterCharacterId) => {
    get().removeCharacterFromGroups(characterId);
    set((state) =>
      produce(state, (draft) => {
        if (draft.bench[index]) {
          draft.bench.push(characterId);
        } else {
          draft.bench = [...draft.bench.slice(0, index), characterId, ...draft.bench.slice(index)];
        }
      })
    );
  },

  removeCharacterFromGroups: (characterId: RosterCharacterId) => {
    set((state) =>
      produce(state, (draft) => {
        for (let g = 0; g <= 4; g += 1) {
          draft.groups[g] = draft.groups[g].filter((id) => id !== characterId);
        }
      })
    );
  },

  removeCharacter: (characterId: RosterCharacterId) => {
    get().removeCharacterFromGroups(characterId);
    set((state) =>
      produce(state, (draft) => {
        draft.bench = draft.bench.filter((id) => id !== characterId);
        delete draft.roster[characterId];
      })
    );
  },

  removeAllCharactersFromGroups: () => {
    set((state) =>
      produce(state, (draft) => {
        for (let g = 0; g <= 4; g += 1) {
          draft.groups[g].forEach((charId) => draft.bench.push(charId));
          draft.groups[g] = [];
        }
      })
    );
  },

  clear: () => {
    set((state) =>
      produce(state, (draft) => {
        draft.roster = {};
        draft.bench = [];
        draft.groups = { 0: [], 1: [], 2: [], 3: [], 4: [] };
      })
    );
  },

  getBenchCharacters() {
    return get().bench.map((id) => get().roster[id]);
  },

  getGroupCharacters(groupNumber: number) {
    return get().groups[groupNumber].map((id) => get().roster[id]);
  },

  getAllGroupCharacters() {
    const ids = Object.values(get().groups).flat();
    return Object.values(get().roster).filter((char) => ids.includes(char.id));
  },

  getWhitelistedCooldowns(whitelist: Readonly<DBC.SpellId[]>) {
    const groupCharacters = get().getAllGroupCharacters();
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

  getCooldowns(flavor?: DBC.MechanicMitigationFlavor) {
    if (flavor === "HealingCooldowns") {
      return get().getWhitelistedCooldowns(whitelistHealingSpells);
    }
    if (flavor === "OffensiveBurst") {
      return get().getWhitelistedCooldowns(whitelistOffensiveSpells);
    }
    if (flavor === "Mobility") {
      return get().getWhitelistedCooldowns(whitelistMovementSpells);
    }

    return [
      ...get().getWhitelistedCooldowns(whitelistHealingSpells),
      ...get().getWhitelistedCooldowns(whitelistOffensiveSpells),
      ...get().getWhitelistedCooldowns(whitelistMovementSpells),
    ];
  },
});

const profiledStore = <U>(selector: StateSelector<RosterState, U>): U => {
  const activeProfileId = useProfileStore((profileStore) => profileStore.activeProfile ?? "_default_profile");
  const { rosterStores, addRosterStore } = useProfileStores();

  if (rosterStores[activeProfileId] === undefined) {
    const newStore = create<RosterState>(
      persist(devtools(store, `roster/${activeProfileId}`), { name: `roster/${activeProfileId}` })
    );
    addRosterStore(activeProfileId as ProfileId, newStore);

    return newStore(selector);
  }

  return rosterStores[activeProfileId](selector);
};

export default profiledStore;

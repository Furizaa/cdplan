import {
  selectById,
  whitelistHealingSpells,
  whitelistOffensiveSpells,
  whitelistMovementSpells,
  CLASSES,
  SPECS,
  COVENANTS,
} from "@cdplan/db";
import produce from "immer";
import { v4 as uuidv4 } from "uuid";
import { DBC, RaidCooldown, RaidCooldownId, RosterCharacter, RosterCharacterId } from "types";
import create, { GetState, SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

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
  addCharacterToGroup: (groupNumber: number, index: number, characterId: RosterCharacterId) => void;
  addCharacterToBench: (index: number, characterId: RosterCharacterId) => void;
  removeCharacterFromGroups: (characterId: RosterCharacterId) => void;

  getBenchCharacters: () => RosterCharacter[];
  getGroupCharacters: (groupNumber: number) => RosterCharacter[];
  getAllGroupCharacters: () => RosterCharacter[];
  getWhitelistedCooldowns: (whitelist: Readonly<DBC.SpellId[]>) => RaidCooldown[];
  getCooldowns: (flavor: DBC.MechanicMitigationFlavor) => RaidCooldown[];
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
    const id = uuidv4() as RosterCharacterId;
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
        draft.bench = [...draft.bench.slice(0, index), characterId, ...draft.bench.slice(index)];
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
    return get()
      .getAllGroupCharacters()
      .flatMap((char) => {
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

  getCooldowns(flavor: DBC.MechanicMitigationFlavor) {
    if (flavor === "HealingCooldowns") {
      return get().getWhitelistedCooldowns(whitelistHealingSpells);
    }
    if (flavor === "OffensiveBurst") {
      return get().getWhitelistedCooldowns(whitelistOffensiveSpells);
    }
    if (flavor === "Mobility") {
      return get().getWhitelistedCooldowns(whitelistMovementSpells);
    }

    return [];
  },
});

export default create<RosterState>(persist(devtools(store, "RosterStore"), { name: "roster-v2" }));

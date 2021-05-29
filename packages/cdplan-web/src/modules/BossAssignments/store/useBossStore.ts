import produce from "immer";
import { RaidCooldown, RaidCooldownId, RosterCharacterId } from "types";
import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";

export type BossState = {
  mitigations: Record<string /* BossMechanic['key'] */, RaidCooldownId[]>;
  soaks: Record<string /* BossMechanic['key'] */, Record<number, RosterCharacterId[]>>;

  addMitigation: (mechanicKey: string, cooldownId: RaidCooldownId) => void;
  getMitigations: () => Record<string /* BossMechanic['key'] */, RaidCooldownId[]>;
  removeMitigation: (mechanicKey: string, mitigationId: RaidCooldownId) => void;

  addSoak: (mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => void;
  getSoaks: () => Record<string /* BossMechanic['key'] */, Record<number, RosterCharacterId[]>>;
  removeSoak: (mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => void;

  combineMitigationsToCooldowns: (
    cooldowns: RaidCooldown[]
  ) => Record<string /* BossMechanic['key'] */, RaidCooldown[]>;
};

const store = (set: SetState<BossState>, get: GetState<BossState>) => ({
  mitigations: {},
  soaks: {},

  addMitigation: (mechanicKey: string, cooldownId: RaidCooldownId) => {
    set((state) =>
      produce(state, (draft) => {
        if (!Array.isArray(draft.mitigations[mechanicKey])) {
          draft.mitigations[mechanicKey] = [cooldownId];
        } else if (!draft.mitigations[mechanicKey].includes(cooldownId)) {
          draft.mitigations[mechanicKey].push(cooldownId);
        }
      })
    );
  },

  removeMitigation: (mechanicKey: string, mitigationId: RaidCooldownId) => {
    set((state) =>
      produce(state, (draft) => {
        draft.mitigations[mechanicKey] = (draft.mitigations?.[mechanicKey] ?? []).filter((id) => id !== mitigationId);
      })
    );
  },

  getMitigations: () => {
    return get().mitigations;
  },

  addSoak: (mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => {
    set((state) =>
      produce(state, (draft) => {
        if (!draft.soaks[mechanikKey]) {
          draft.soaks[mechanikKey] = {};
        }
        if (!draft.soaks[mechanikKey][soakGroupIndex]) {
          draft.soaks[mechanikKey][soakGroupIndex] = [];
        }
        if (!draft.soaks[mechanikKey][soakGroupIndex].includes(characterId)) {
          draft.soaks[mechanikKey][soakGroupIndex].push(characterId);
        }
      })
    );
  },

  getSoaks: () => get().soaks,

  removeSoak: (mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => {
    set((state) =>
      produce(state, (draft) => {
        if (draft.soaks[mechanikKey][soakGroupIndex].includes(characterId)) {
          draft.soaks[mechanikKey][soakGroupIndex] = draft.soaks[mechanikKey][soakGroupIndex].filter(
            (charId) => charId !== characterId
          );
        }
      })
    );
  },

  combineMitigationsToCooldowns: (cooldowns: RaidCooldown[]) => {
    return Object.entries(get().mitigations).reduce(
      (prev, [key, cdIds]) => ({
        ...prev,
        [key]: cdIds.map((id) => cooldowns.find((cd) => cd.id === id)).filter(Boolean),
      }),
      {}
    );
  },
});

export default create<BossState>(devtools(store, "BossStore"));

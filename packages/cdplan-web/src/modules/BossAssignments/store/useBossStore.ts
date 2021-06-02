import produce from "immer";
import { DBC, MitigationDB, RaidCooldown, RaidCooldownId, RosterCharacterId } from "types";
import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";

export type BossState = {
  mitigations: MitigationDB<RaidCooldownId[]>;
  soaks: Record<string /* BossMechanic['key'] */, Record<number, RosterCharacterId[]>>;

  addMitigation: (
    mechanicKey: string,
    mechanicFlavor: DBC.MechanicMitigationFlavor,
    cooldownId: RaidCooldownId
  ) => void;
  getMitigations: () => MitigationDB<RaidCooldownId[]>;
  removeMitigation: (
    mechanicKey: string,
    mechanicFlavor: DBC.MechanicMitigationFlavor,
    cooldownId: RaidCooldownId
  ) => void;

  addSoak: (mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => void;
  getSoaks: () => Record<string /* BossMechanic['key'] */, Record<number, RosterCharacterId[]>>;
  removeSoak: (mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => void;

  clearAllForBoss: (bossKey: DBC.BossKey) => void;

  getCooldowns: (
    availableRaidCooldowns: RaidCooldown[],
    mechanicKey: string,
    mitigationFlavor: DBC.MechanicMitigationFlavor
  ) => RaidCooldown[];
};

const store = (set: SetState<BossState>, get: GetState<BossState>) => ({
  mitigations: {},
  soaks: {},

  addMitigation: (mechanicKey: string, mechanicFlavor: DBC.MechanicMitigationFlavor, cooldownId: RaidCooldownId) => {
    set((state) =>
      produce(state, (draft) => {
        if (!draft.mitigations[mechanicKey]) {
          draft.mitigations[mechanicKey] = {};
        }
        if (!draft.mitigations[mechanicKey][mechanicFlavor]) {
          draft.mitigations[mechanicKey][mechanicFlavor] = [];
        }
        if (!draft.mitigations[mechanicKey][mechanicFlavor]?.includes(cooldownId)) {
          draft.mitigations[mechanicKey][mechanicFlavor]?.push(cooldownId);
        }
      })
    );
  },

  removeMitigation: (mechanicKey: string, mechanicFlavor: DBC.MechanicMitigationFlavor, cooldownId: RaidCooldownId) => {
    set((state) =>
      produce(state, (draft) => {
        if (draft.mitigations[mechanicKey][mechanicFlavor]?.includes(cooldownId)) {
          draft.mitigations[mechanicKey][mechanicFlavor]?.filter((id) => id !== cooldownId);
        }
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

  clearAllForBoss: (bossKey: DBC.BossKey) => {
    set((state) =>
      produce(state, (draft) => {
        Object.keys(draft.mitigations).forEach((mechanicKey) => {
          if (mechanicKey.startsWith(bossKey)) {
            delete draft.mitigations[mechanicKey];
          }
        });
        Object.keys(draft.soaks).forEach((mechanicKey) => {
          if (mechanicKey.startsWith(bossKey)) {
            delete draft.soaks[mechanicKey];
          }
        });
      })
    );
  },

  getCooldowns: (
    availableRaidCooldowns: RaidCooldown[],
    mechanicKey: string,
    mitigationFlavor: DBC.MechanicMitigationFlavor
  ): RaidCooldown[] => {
    return (
      (get()
        .mitigations[mechanicKey]?.[mitigationFlavor]?.map(
          (id) => availableRaidCooldowns.find((cd) => cd.id === id) || false
        )
        .filter(Boolean) as RaidCooldown[]) ?? []
    );
  },
});

export default create<BossState>(devtools(store, "BossStore"));

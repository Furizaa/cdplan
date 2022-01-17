import { useProfileStores } from "@BossAssignments/context/ProfileStoreProvider";
import produce from "immer";
import { DBC, MitigationDB, ProfileId, RaidCooldown, RaidCooldownId, RosterCharacterId, SoakDB } from "types";
import create, { GetState, SetState, StateSelector } from "zustand";
import { devtools, persist } from "zustand/middleware";
import useProfileStore from "../../Core/store/useProfileStore";

export type BossState = {
  mitigations: MitigationDB<RaidCooldownId[]>;
  soaks: SoakDB;

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
  getSoaks: () => SoakDB;
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
          draft.mitigations[mechanicKey][mechanicFlavor] = draft.mitigations[mechanicKey][mechanicFlavor]?.filter(
            (id) => id !== cooldownId
          );
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

const profiledStore = <U>(selector: StateSelector<BossState, U>): U => {
  const activeProfileId = useProfileStore((profileStore) => profileStore.activeProfile ?? "_default_profile");
  const { bossStores, addBossStore } = useProfileStores();

  if (bossStores[activeProfileId] === undefined) {
    const newStore = create<BossState>(
      persist(devtools(store, `boss/${activeProfileId}`), { name: `boss/${activeProfileId}` })
    );
    addBossStore(activeProfileId as ProfileId, newStore);

    return newStore(selector);
  }

  return bossStores[activeProfileId](selector);
};

export default profiledStore;

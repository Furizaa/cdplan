import { VERSION_STORAGE } from "@Core/util/version";
import produce from "immer";
import { DBC, MitigationDB, ProfileId, RaidCooldown, RaidCooldownId, RosterCharacterId, SoakDB } from "types";
import create, { GetState, SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type BossState = {
  profile: Record<
    string,
    {
      mitigations: MitigationDB<RaidCooldownId[]>;
      soaks: SoakDB;
    }
  >;

  addMitigation: (
    profileId: ProfileId,
    mechanicKey: string,
    mechanicFlavor: DBC.MechanicMitigationFlavor,
    cooldownId: RaidCooldownId
  ) => void;

  removeMitigation: (
    profileId: ProfileId,
    mechanicKey: string,
    mechanicFlavor: DBC.MechanicMitigationFlavor,
    cooldownId: RaidCooldownId
  ) => void;

  getMitigations: (profileId: ProfileId) => MitigationDB<RaidCooldownId[]>;

  addSoak: (profileId: ProfileId, mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => void;
  getSoaks: (profileId: ProfileId) => SoakDB;
  removeSoak: (
    profileId: ProfileId,
    mechanikKey: string,
    soakGroupIndex: number,
    characterId: RosterCharacterId
  ) => void;

  clearAllForBoss: (profileId: ProfileId, bossKey: DBC.BossKey) => void;

  getCooldowns: (
    profileId: ProfileId,
    availableRaidCooldowns: RaidCooldown[],
    mechanicKey: string,
    mitigationFlavor: DBC.MechanicMitigationFlavor
  ) => RaidCooldown[];
};

const store = (set: SetState<BossState>, get: GetState<BossState>) => ({
  profile: {},

  addMitigation: (
    profileId: ProfileId,
    mechanicKey: string,
    mechanicFlavor: DBC.MechanicMitigationFlavor,
    cooldownId: RaidCooldownId
  ) => {
    set((state) =>
      produce(state, (draft) => {
        if (!draft.profile[profileId]) {
          draft.profile[profileId] = {
            mitigations: {},
            soaks: {},
          };
        }
        if (!draft.profile[profileId].mitigations[mechanicKey]) {
          draft.profile[profileId].mitigations[mechanicKey] = {};
        }
        if (!draft.profile[profileId].mitigations[mechanicKey][mechanicFlavor]) {
          draft.profile[profileId].mitigations[mechanicKey][mechanicFlavor] = [];
        }
        if (!draft.profile[profileId].mitigations[mechanicKey][mechanicFlavor]?.includes(cooldownId)) {
          draft.profile[profileId].mitigations[mechanicKey][mechanicFlavor]?.push(cooldownId);
        }
      })
    );
  },

  removeMitigation: (
    profileId: ProfileId,
    mechanicKey: string,
    mechanicFlavor: DBC.MechanicMitigationFlavor,
    cooldownId: RaidCooldownId
  ) => {
    set((state) =>
      produce(state, (draft) => {
        if (draft.profile[profileId]?.mitigations[mechanicKey][mechanicFlavor]?.includes(cooldownId)) {
          draft.profile[profileId].mitigations[mechanicKey][mechanicFlavor] = draft.profile[profileId].mitigations[
            mechanicKey
          ][mechanicFlavor]?.filter((id) => id !== cooldownId);
        }
      })
    );
  },

  getMitigations: (profileId: ProfileId) => {
    return get().profile[profileId].mitigations;
  },

  addSoak: (profileId: ProfileId, mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => {
    set((state) =>
      produce(state, (draft) => {
        if (!draft.profile[profileId]) {
          draft.profile[profileId] = {
            mitigations: {},
            soaks: {},
          };
        }
        if (!draft.profile[profileId].soaks[mechanikKey]) {
          draft.profile[profileId].soaks[mechanikKey] = {};
        }
        if (!draft.profile[profileId].soaks[mechanikKey][soakGroupIndex]) {
          draft.profile[profileId].soaks[mechanikKey][soakGroupIndex] = [];
        }
        if (!draft.profile[profileId].soaks[mechanikKey][soakGroupIndex].includes(characterId)) {
          draft.profile[profileId].soaks[mechanikKey][soakGroupIndex].push(characterId);
        }
      })
    );
  },

  removeSoak: (profileId: ProfileId, mechanikKey: string, soakGroupIndex: number, characterId: RosterCharacterId) => {
    set((state) =>
      produce(state, (draft) => {
        if (draft.profile[profileId].soaks[mechanikKey][soakGroupIndex].includes(characterId)) {
          draft.profile[profileId].soaks[mechanikKey][soakGroupIndex] = draft.profile[profileId].soaks[mechanikKey][
            soakGroupIndex
          ].filter((charId) => charId !== characterId);
        }
      })
    );
  },

  getSoaks: (profileId: ProfileId) => get().profile[profileId].soaks,

  clearAllForBoss: (profileId: ProfileId, bossKey: DBC.BossKey) => {
    set((state) =>
      produce(state, (draft) => {
        Object.keys(draft.profile[profileId].mitigations).forEach((mechanicKey) => {
          if (mechanicKey.startsWith(bossKey)) {
            delete draft.profile[profileId].mitigations[mechanicKey];
          }
        });
        Object.keys(draft.profile[profileId].soaks).forEach((mechanicKey) => {
          if (mechanicKey.startsWith(bossKey)) {
            delete draft.profile[profileId].soaks[mechanicKey];
          }
        });
      })
    );
  },

  getCooldowns: (
    profileId: ProfileId,
    availableRaidCooldowns: RaidCooldown[],
    mechanicKey: string,
    mitigationFlavor: DBC.MechanicMitigationFlavor
  ): RaidCooldown[] => {
    return (
      (get()
        .profile[profileId]?.mitigations[mechanicKey]?.[mitigationFlavor]?.map(
          (id) => availableRaidCooldowns.find((cd) => cd.id === id) || false
        )
        .filter(Boolean) as RaidCooldown[]) ?? []
    );
  },
});

export default create<BossState>(persist(devtools(store, "BossStore"), { name: `boss/${VERSION_STORAGE}` }));

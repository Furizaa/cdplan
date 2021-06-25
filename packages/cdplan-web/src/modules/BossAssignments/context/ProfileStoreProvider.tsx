import { BossState } from "@BossAssignments/store/useBossStore";
import { RosterState } from "@BossAssignments/store/useRosterStore";
import React, { useContext, useRef } from "react";
import { ProfileId } from "types";
import { UseStore } from "zustand";

interface ProviderProps {
  children?: React.ReactNode;
}

interface ProfileStoreContextProps {
  rosterStores: Record<string, UseStore<RosterState>>;
  addRosterStore: (profileId: ProfileId, store: UseStore<RosterState>) => void;

  bossStores: Record<string, UseStore<BossState>>;
  addBossStore: (profileId: ProfileId, store: UseStore<BossState>) => void;
}

const ProfileStoreContext = React.createContext<ProfileStoreContextProps>({
  rosterStores: {},
  addRosterStore: () => {},
  bossStores: {},
  addBossStore: () => {},
});

const ProfileStoreContextProvider = ({ children }: ProviderProps) => {
  const rosterRef = useRef<Record<string, UseStore<RosterState>>>({});
  const bossRef = useRef<Record<string, UseStore<BossState>>>({});

  const contextValue = {
    rosterStores: rosterRef.current,
    bossStores: bossRef.current,

    addRosterStore: (profileId: ProfileId, store: UseStore<RosterState>) => {
      rosterRef.current[profileId as string] = store;
    },

    addBossStore: (profileId: ProfileId, store: UseStore<BossState>) => {
      bossRef.current[profileId as string] = store;
    },
  };

  return <ProfileStoreContext.Provider value={contextValue}>{children}</ProfileStoreContext.Provider>;
};

const ProfileStoreContextConsumer = ProfileStoreContext.Consumer;

const useProfileStores = () => useContext(ProfileStoreContext);

export { ProfileStoreContext, ProfileStoreContextProvider, ProfileStoreContextConsumer, useProfileStores };

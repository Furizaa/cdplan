import { VERSION } from "@Core/util/version";
import produce from "immer";
import ShortUniqueId from "short-unique-id";
import { ProfileDB, ProfileId, Semver } from "types";
import create, { SetState } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ProfileState = {
  profiles: ProfileDB;
  activeProfile: ProfileId | undefined;

  createProfile: (name: string) => ProfileId;
  setActiveProfile: (id: ProfileId) => void;
};

const uid = new ShortUniqueId();

const store = (set: SetState<ProfileState>) => ({
  profiles: {},
  activeProfile: undefined,

  createProfile: (name: string) => {
    const id = uid() as ProfileId;
    set((state) =>
      produce(state, (draft) => {
        draft.profiles[id] = {
          id,
          name,
          appVersion: VERSION as Semver,
        };
      })
    );
    return id;
  },

  setActiveProfile: (id: ProfileId) => {
    set((state) =>
      produce(state, (draft) => {
        draft.activeProfile = id;
      })
    );
  },
});

export default create<ProfileState>(persist(devtools(store, "ProfileStore"), { name: `profile/_hard_version_1` }));

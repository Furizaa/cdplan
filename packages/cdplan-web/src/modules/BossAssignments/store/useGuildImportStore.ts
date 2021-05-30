import produce from "immer";
import { DBC } from "types";
import { SetState } from "zustand";
import { devtools } from "zustand/middleware";
import create from "zustand/vanilla";

export type GuildImportState = {
  members: DBC.API.GuildMember[];

  setMembers: (members: DBC.API.GuildMember[]) => void;
};

const store = (set: SetState<GuildImportState>) => ({
  members: [],

  setMembers: (memberList: DBC.API.GuildMember[]) => {
    set(
      produce((state, draft) => {
        draft.members = memberList;
      })
    );
  },
});

export default create<GuildImportState>(devtools(store, "BaseItemStore"));

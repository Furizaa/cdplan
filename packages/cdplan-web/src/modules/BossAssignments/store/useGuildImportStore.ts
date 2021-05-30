import fetchQueue from "@BossAssignments/util/fetchQueue";
import produce from "immer";
import { DBC } from "types";
import { SetState } from "zustand";
import { devtools } from "zustand/middleware";
import create, { GetState } from "zustand/vanilla";

export type GuildImportStatus = {
  total: number;
  loaded: number;
};

export type GuildImportState = {
  list: Record<number, DBC.API.AsyncStore<DBC.API.Character>>;

  add: (region: string, character: DBC.API.GuildMember) => void;

  getStatus: () => GuildImportStatus;
};

const processAsyncResult = (
  result: DBC.API.AsyncStore<DBC.API.CharacterRequestResponse>
): DBC.API.AsyncStore<DBC.API.Character> => {
  if (result.data) {
    return { status: "done", data: result.data.character, error: null };
  }
  return (result as unknown) as DBC.API.AsyncStore<DBC.API.Character>;
};

const store = (set: SetState<GuildImportState>, get: GetState<GuildImportState>) => ({
  list: {},

  add: (region: string, character: DBC.API.GuildMember) => {
    const query = {
      type: "character",
      params: {
        region,
        realm: character.realm.slug,
        name: character.name,
      },
    };

    fetchQueue<DBC.API.CharacterRequestResponse>({
      body: query,
      onUpdate: (update) => {
        set(
          produce((_, draft) => {
            draft.list[character.id] = processAsyncResult(update);
          })
        );
      },
    });
  },

  getStatus: () => {
    const list = Object.values(get().list);
    return {
      total: list.length,
      loaded: list.filter((item) => item.status === "done"),
    };
  },
});

export default create<GuildImportState>(devtools(store, "BaseItemStore"));

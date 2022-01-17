import { LogicEntry } from "@BossTimelines/types";

export default function logicEntryToString(entry: LogicEntry) {
  const actionName =
    entry.enable && entry.disable
      ? `E(${entry.enable.join(",")}) D(${entry.disable.join(",")})`
      : entry.enable
      ? `E(${entry.enable.join(",")})`
      : `D(${entry.disable?.join(",")})`;

  return actionName;
}

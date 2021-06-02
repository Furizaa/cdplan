import { addSeconds, format } from "date-fns";
import { DBC } from "types";

export default function getMechanicTimestamp(mechanic: DBC.BossMechanic) {
  return "timeMs" in mechanic.trigger
    ? format(addSeconds(new Date(0), mechanic.trigger.timeMs / 1000), "mm:ss")
    : undefined;
}

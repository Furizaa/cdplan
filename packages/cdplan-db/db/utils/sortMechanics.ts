import { BossMechanic } from "../types";

export default function sortMechanics(mechanics: Record<string, BossMechanic>) {
  return Object.values(mechanics).sort((a, b) => {
    if ("timeMs" in a.trigger && "timeMs" in b.trigger) {
      if (a.trigger.timeMs > b.trigger.timeMs) {
        return 1;
      }
      if (a.trigger.timeMs < b.trigger.timeMs) {
        return -1;
      }
      return 0;
    }
    if ("healthPercentage" in a.trigger && "healthPercentage" in b.trigger) {
      if (a.trigger.healthPercentage > b.trigger.healthPercentage) {
        return 1;
      }
      if (a.trigger.healthPercentage < b.trigger.healthPercentage) {
        return -1;
      }
      return 0;
    }
    return 0;
  });
}

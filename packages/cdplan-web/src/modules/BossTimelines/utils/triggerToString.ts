import {
  LogicTrigger,
  triggerIsBossStage,
  triggerIsBwMessage,
  triggerIsBwTimer,
  triggerIsHealthPct,
} from "@BossTimelines/types";
import { Boss } from "@dbc/types";
import getBossMechanicForBwTimerTrigger from "./getBossMechanicForBwTimerTrigger";

export default function triggerToString(boss: Boss, stageKey: string, trigger: LogicTrigger, onFinish?: boolean) {
  if (triggerIsBossStage(trigger)) {
    return `at Stage ${trigger.stage}`;
  }
  if (triggerIsHealthPct(trigger)) {
    return `at Health ${trigger.comparator} ${trigger.healthPct}%`;
  }
  if (triggerIsBwMessage(trigger)) {
    return `on ${trigger.message}`;
  }
  if (triggerIsBwTimer(trigger)) {
    const mechanicDesc = getBossMechanicForBwTimerTrigger(boss, stageKey, trigger)?.description ?? "UNKNOWN_MECHANIC";
    return `${onFinish ? "after" : "at"} ${mechanicDesc} ${trigger.comparator} ${trigger.offsetSeconds}`;
  }

  return "UNKNOWN_TRIGGER";
}

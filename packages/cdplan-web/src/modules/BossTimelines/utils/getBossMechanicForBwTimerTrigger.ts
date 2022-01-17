import { LogicTriggerBwTimer } from "@BossTimelines/types";
import { Boss, BossMechanic } from "@dbc/types";

export default function getBossMechanicForBwTimerTrigger(
  boss: Boss,
  stageKey: string,
  trigger: LogicTriggerBwTimer
): BossMechanic | undefined {
  const mechanics = boss.stages[stageKey]?.mechanics;
  if (!mechanics) {
    console.warn(`No mechanics for ${stageKey}`);
    return undefined;
  }

  const mechanic = Object.values(mechanics).filter((m) => "spell" in m && m.spell.id === trigger.spell.id)[
    trigger.occurence - 1
  ] as BossMechanic;
  if (!mechanic) {
    console.warn(`No mechanic for ${trigger.spell.name} occurence ${trigger.occurence}`);
    return undefined;
  }

  return mechanic;
}

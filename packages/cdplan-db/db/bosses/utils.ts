import { BossMechanic, Spell } from "../types";

export function generateCastsFromBigwigs(
  keyGen: (index: number) => string,
  descGen: (index: number) => string,
  spell: Spell,
  timerTableSeconds: number[]
): Record<string, BossMechanic> {
  return timerTableSeconds.reduce<Record<string, BossMechanic>>((prev, secondsIn, index) => {
    const previous = Object.values(prev)[index - 1];
    const previousTimeMs = previous && "timeMs" in previous.trigger ? previous.trigger.timeMs : 0;
    const key = keyGen(index + 1);
    return {
      ...prev,
      [key]: {
        key,
        description: descGen(index + 1),
        spell,
        trigger: {
          timeMs: secondsIn * 1000 + previousTimeMs,
        },
      },
    } as Record<string, BossMechanic>;
  }, {});
}

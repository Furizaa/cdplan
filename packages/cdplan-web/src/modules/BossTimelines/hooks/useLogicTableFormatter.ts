import { LogicTable, WaTemplateOpts } from "@BossTimelines/types";
import logicEntryToString from "@BossTimelines/utils/logicEntryToString";
import triggerToString from "@BossTimelines/utils/triggerToString";
import { Boss } from "@dbc/types";

export default function useLogicTableFormatter(
  boss: Boss,
  logicTable: LogicTable
): { waName: string; formattedLogicBlocks: WaTemplateOpts[] } {
  const parentName = `00 HeroActions ${boss.name} SIN`;
  const uid = (i: string) => `_UUID_SIN_${boss.encounterId}__${i}`;

  const opts: WaTemplateOpts[] = [];
  const names = [];
  logicTable.forEach((stage, stageIndex) => {
    stage.entries.forEach((stageEvent, stageEventIndex) => {
      const name = `[${stageIndex + 1}.${stageEventIndex + 1}] ${logicEntryToString(stageEvent)} ${triggerToString(
        boss,
        stage.stageKey,
        stageEvent.triggers[0],
        stageEvent.onFinish ?? false
      )}`;

      names.push(name);
      opts.push({
        name,
        boss,
        parentName,
        stageEvent: { ...stageEvent, triggers: [...stageEvent.triggers, ...stage.triggers] },
        stageKey: stage.stageKey,
        uid: uid(`${stageIndex}_${stageEventIndex}`),
      });
    });
  });

  return { waName: parentName, formattedLogicBlocks: opts };
}

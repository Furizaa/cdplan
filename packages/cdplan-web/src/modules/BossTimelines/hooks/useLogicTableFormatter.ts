import {
  logicIsMessageTriggered,
  logicIsTimed,
  LogicTable,
  WaHealtOperator,
  WaTemplateOpts,
} from "@BossTimelines/types";
import { Boss, BossMechanic } from "@dbc/types";

export default function useLogicTableFormatter(
  boss: Boss,
  logicTable: LogicTable
): { waName: string; formattedLogicBlocks: WaTemplateOpts[] } {
  const parentName = `00 HeroActions ${boss.name}`;
  const uid = (i: string) => `_UUID_${boss.encounterId}__${i}`;

  const opts: WaTemplateOpts[] = [];
  const names = [];
  logicTable.forEach((p, pi) => {
    p.entries.forEach((e, i) => {
      const disable = e.disable && e.disable.join(",");
      const enable = e.enable && e.enable.join(",");

      let healthSymbol: WaHealtOperator = "<";
      let health = p.healthLt || 100;
      if (p.healthGt) {
        healthSymbol = ">";
        health = p.healthGt;
      }
      if (p.healthGte) {
        healthSymbol = ">=";
        health = p.healthGte;
      }
      if (p.healthLte) {
        healthSymbol = "<=";
        health = p.healthLte;
      }

      const actionName =
        enable && disable
          ? `Enable(${enable})/Disable(${disable})`
          : enable
          ? `Enable(${enable})`
          : `Disable(${disable})`;

      if (logicIsTimed(e)) {
        const mechanics = boss.stages[p.stageKey]?.mechanics;
        if (!mechanics) {
          console.warn(`No mechanics for ${p.stageKey}`);
          return;
        }

        const mechanic = Object.values(mechanics).filter((m) => "spell" in m && m.spell.id === e.at.id)[
          e.atOccurence - 1
        ] as BossMechanic;
        if (!mechanic) {
          console.warn(`No mechanic for ${e.at.name} occurence ${e.atOccurence}`);
          return;
        }

        const name = `[${pi + 1}.${i + 1}] ${p.stageKey} ${actionName} ${e.onFinish ? "after" : "at"} [${
          mechanic.description
        }] ${e.remaining ? `< ${e.remaining}` : ""}`;
        names.push(`"${name}"`);

        const actions = [];
        let startAction = "";
        let finishAction = "";
        if (enable) actions.push(`HeroRotation:SetFlags('${enable}')`);
        if (disable) actions.push(`HeroRotation:UnsetFlags('${disable}')`);
        if (e.onFinish) {
          finishAction = actions.join(";");
        } else {
          startAction = actions.join(";");
        }

        opts.push({
          type: "timer",
          parentName,
          name,
          messageContains: mechanic.description,
          triggerRemaining: e.remaining,
          healthOperator: healthSymbol,
          health,
          encounterId: boss.encounterId,
          startAction,
          finishAction,
          uid: uid(`${pi}_${p}`),
        });
      }

      if (logicIsMessageTriggered(e)) {
        const name = `[${pi + 1}.${i + 1}] ${p.stageKey} ${actionName} on [${e.at}]`;
        names.push(`"${name}"`);

        const actions = [];
        if (enable) actions.push(`HeroRotation:SetFlags('${enable}')`);
        if (disable) actions.push(`HeroRotation:UnsetFlags('${disable}')`);

        opts.push({
          type: "message",
          parentName,
          name,
          messageContains: e.at,
          healthOperator: healthSymbol,
          health,
          encounterId: boss.encounterId,
          action: actions.join(";"),
          uid: uid(`${pi}_${p}`),
        });
      }
    });
  });

  return { waName: parentName, formattedLogicBlocks: opts };
}

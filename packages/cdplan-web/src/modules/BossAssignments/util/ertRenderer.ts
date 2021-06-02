import ertTemplateStage from "@BossAssignments/ert-templates/ertTemplateStage";
import { DBC, MitigationDB, RaidCooldown, RaidCooldownId } from "types";

export default function ertRenderer(
  boss: DBC.Boss,
  raidCooldowns: RaidCooldown[],
  mitigations: MitigationDB<RaidCooldownId[]>
) {
  return Object.values(boss.stages)
    .map((stage) => ertTemplateStage(stage, raidCooldowns, mitigations))
    .join("/n");
}

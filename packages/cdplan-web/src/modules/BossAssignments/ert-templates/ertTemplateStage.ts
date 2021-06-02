import { DBC, MitigationDB, RaidCooldown, RaidCooldownId } from "types";
import ertTemplateMechanic from "./ertTemplateMechanic";

export default function ertTemplateState(
  stage: DBC.BossStage,
  raidCooldowns: RaidCooldown[],
  mitigations: MitigationDB<RaidCooldownId[]>
) {
  return Object.values(stage.mechanics)
    .map((mechanic) => ertTemplateMechanic(mechanic, raidCooldowns, mitigations))
    .filter(Boolean)
    .join("\n");
}

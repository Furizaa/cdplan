import { DBC, MitigationDB, RaidCooldown, RaidCooldownId } from "types";
import ertTemplateBurstMitigation from "./ertTemplateBurstMitigation";
import ertTemplateHealingMitigation from "./ertTemplateHealingMitigation";

export default function ertTemplateMechanic(
  mechanic: DBC.BossMechanic,
  raidCooldowns: RaidCooldown[],
  mitigations: MitigationDB<RaidCooldownId[]>
) {
  const parts = [];

  if (mechanic.mitigationFlavors.includes("HealingCooldowns")) {
    const cooldowns =
      (mitigations[mechanic.key]?.HealingCooldowns?.map((id) => raidCooldowns.find((cd) => cd.id === id)).filter(
        Boolean
      ) as RaidCooldown[]) ?? [];
    parts.push(ertTemplateHealingMitigation(mechanic, cooldowns));
  }

  if (mechanic.mitigationFlavors.includes("OffensiveBurst")) {
    const cooldowns =
      (mitigations[mechanic.key]?.OffensiveBurst?.map((id) => raidCooldowns.find((cd) => cd.id === id)).filter(
        Boolean
      ) as RaidCooldown[]) ?? [];
    parts.push(ertTemplateBurstMitigation(mechanic, cooldowns));
  }

  return `${mechanic.description}\n${parts.join("\n")}\n`;
}

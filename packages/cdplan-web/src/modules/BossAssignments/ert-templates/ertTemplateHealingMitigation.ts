import getMechanicTimestamp from "@BossAssignments/util/getMechanicTimestamp";
import { DBC, RaidCooldown } from "types";
import ertTemplateMitigation from "./ertTemplateMitigation";

export default function ertTemplateHealingMitigation(mechanic: DBC.BossMechanic, mitigations: RaidCooldown[]) {
  const time = getMechanicTimestamp(mechanic);

  const timePart = `${time && `{time:${time},glow} `}`;
  const bossSpellPart = `{spell:${mechanic.spell.id}} `;
  const mitigationsParts = mitigations.map(ertTemplateMitigation);

  return mitigationsParts.length ? `{H}${timePart}${bossSpellPart}${mitigationsParts.join(" + ")}{/H}` : "";
}

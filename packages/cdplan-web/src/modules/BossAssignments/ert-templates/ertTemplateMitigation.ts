import { RaidCooldown } from "types";

export default function ertTemplateMitigation(mitigation: RaidCooldown) {
  return `{spell:${mitigation.spell.id}}|c${mitigation.caster.pclass.colorHex}${mitigation.caster.name}|r`;
}

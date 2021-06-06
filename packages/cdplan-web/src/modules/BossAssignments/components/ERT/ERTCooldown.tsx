import React from "react";
import { RaidCooldown } from "types";
import ERTPlayer from "./ERTPlayer";
import ERTSpell from "./ERTSpell";

interface ERTCooldownProps {
  cooldown: RaidCooldown;
}

export default function ERTCooldown({ cooldown }: ERTCooldownProps) {
  return (
    <>
      <ERTSpell spellId={cooldown.spell.id} />
      <ERTPlayer name={cooldown.caster.name} pClass={cooldown.caster.pclass} />
    </>
  );
}

import { SPELLS } from "@cdplan/db";
import React from "react";
import { DBC } from "types";

interface ERTSpellProps {
  spellId: DBC.SpellId;
}

export default function ERTSpell({ spellId }: ERTSpellProps) {
  if (SPELLS.SHARED.PERSONALS.id === spellId) {
    return <>PERSONALS</>;
  }
  if (SPELLS.SHARED.POTIONS.id === spellId) {
    return <>POTIONS</>;
  }

  return <>{`{spell:${spellId}}`}</>;
}

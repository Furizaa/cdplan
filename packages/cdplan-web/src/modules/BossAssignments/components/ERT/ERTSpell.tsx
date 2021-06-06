import React from "react";
import { DBC } from "types";

interface ERTSpellProps {
  spellId: DBC.SpellId;
}

export default function ERTSpell({ spellId }: ERTSpellProps) {
  return <>{`{spell:${spellId}}`}</>;
}

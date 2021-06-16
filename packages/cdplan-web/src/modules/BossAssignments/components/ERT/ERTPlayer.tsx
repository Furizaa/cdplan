import { EVERYONE_CHARACTER } from "@BossAssignments/store/useRosterStore";
import React from "react";
import { RosterCharacter } from "types";

interface ERTPlayerProps {
  character: RosterCharacter;
}

export default function ERTPlayer({ character }: ERTPlayerProps) {
  if (character.id === EVERYONE_CHARACTER.id) {
    return null;
  }
  return <>{`|cff${character.pclass.colorHex}${character.name}|r`}</>;
}

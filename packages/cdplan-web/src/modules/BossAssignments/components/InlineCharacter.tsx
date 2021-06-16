import useRosterStore from "@BossAssignments/store/useRosterStore";
import { Text, TextProps } from "@chakra-ui/layout";
import React, { useCallback } from "react";
import { RosterCharacterId } from "types";

interface InlineCharacterProps extends TextProps {
  characterId: RosterCharacterId;
}

export default function InlineCharacter({ characterId, ...textProps }: InlineCharacterProps) {
  const character = useRosterStore(
    useCallback((store) => store.getAllGroupCharacters().find((char) => char.id === characterId), [characterId])
  );

  if (!character) {
    return null;
  }

  return (
    <Text color={`${character.pclass.color}.200`} {...textProps}>
      {character.name}
    </Text>
  );
}

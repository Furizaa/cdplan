import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { RosterCharacter } from "types";
import GameIcon from "./GameIcon";

export interface AssignmentCharacterCardProps extends Omit<BoxProps, "onClick"> {
  character: RosterCharacter;
  onClick?: (character: RosterCharacter) => void;
}

export default function AssignmentCharacterCard({ character, onClick, ...boxProps }: AssignmentCharacterCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(character);
    }
  };

  return (
    <Box
      _hover={{
        bgColor: "gray.600",
      }}
      borderRadius="md"
      px={2}
      py={1}
      w="100%"
      h="52px"
      cursor="pointer"
      onClick={handleClick}
      {...boxProps}
    >
      <HStack>
        <GameIcon name={character.spec.icon} borderRadius="md" />
        <Box alignItems="flex-start">
          <Text lineHeight="0" as="strong" fontSize="md" casing="capitalize" color={`${character.pclass.color}.200`}>
            {character.name}
          </Text>
          <Text fontSize="xs" color="gray.400">
            {character.covenant.name} {character.spec.name} {character.pclass.name}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

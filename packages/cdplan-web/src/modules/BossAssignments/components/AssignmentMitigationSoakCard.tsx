import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { RosterCharacter } from "types";
import GameIcon from "./GameIcon";

export interface AssignmentMitigationSoakCardProps extends Omit<BoxProps, "onClick"> {
  character: RosterCharacter;
  onClick?: (character: RosterCharacter) => void;
}

export default function AssignmentMitigationSoakCard({
  character,
  onClick,
  ...boxProps
}: AssignmentMitigationSoakCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(character);
    }
  };

  return (
    <Box
      bgColor="gray.700"
      borderRadius="md"
      display="inline-block"
      cursor="pointer"
      overflow="hidden"
      backgroundColor="gray.700"
      width="120px"
      onClick={handleClick}
      {...boxProps}
    >
      <HStack>
        <GameIcon name={character.spec.icon} />
        <Box alignItems="flex-start" mt={1}>
          <Text
            maxWidth="80px"
            fontWeight="bold"
            fontSize="xs"
            casing="capitalize"
            color={`${character.pclass.color}.200`}
            isTruncated
          >
            {character.name}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

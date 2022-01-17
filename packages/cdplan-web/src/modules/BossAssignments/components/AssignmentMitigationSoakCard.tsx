import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { RosterCharacter } from "types";
import GameIcon from "@Core/components/GameIcon";

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
      role="group"
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
            display="block"
            _groupHover={{ display: "none" }}
          >
            {character.name}
          </Text>
          <Text
            maxWidth="80px"
            fontWeight="bold"
            fontSize="xs"
            casing="capitalize"
            color="red.400"
            isTruncated
            display="none"
            _groupHover={{ display: "block" }}
          >
            Remove
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

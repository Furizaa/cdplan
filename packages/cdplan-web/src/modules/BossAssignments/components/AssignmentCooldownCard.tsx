import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { RaidCooldown } from "types";
import GameIcon from "./GameIcon";

export interface AssignmentCooldownCardProps extends Omit<BoxProps, "onClick"> {
  cooldown: RaidCooldown;
  onClick?: (cooldown: RaidCooldown) => void;
}

export default function AssignmentCooldownCard({ cooldown, onClick, ...boxProps }: AssignmentCooldownCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(cooldown);
    }
  };

  return (
    <Box
      bgColor="gray.700"
      borderRadius="md"
      px={2}
      py={1}
      w="100%"
      h="52px"
      borderWidth="1px"
      borderColor="gray.500"
      cursor="pointer"
      onClick={handleClick}
      {...boxProps}
    >
      <HStack>
        <GameIcon name={cooldown.spell.icon} borderRadius="md" />
        <Box alignItems="flex-start">
          <Text
            maxWidth="180px"
            fontWeight="bold"
            fontSize="md"
            casing="capitalize"
            color={`${cooldown.caster.pclass.color}.200`}
            isTruncated
            float="left"
          >
            {cooldown.spell.name}
          </Text>

          <Text fontSize="xs" color="gray.500">
            {cooldown.caster.name}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

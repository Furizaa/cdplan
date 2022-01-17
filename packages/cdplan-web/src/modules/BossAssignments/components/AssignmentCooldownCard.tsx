import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React, { forwardRef } from "react";
import { RaidCooldown } from "types";
import GameIcon from "@Core/components/GameIcon";

export interface AssignmentCooldownCardProps extends Omit<BoxProps, "onClick"> {
  cooldown: RaidCooldown;
  onClick?: (cooldown: RaidCooldown) => void;
  isActive?: boolean;
}

export default forwardRef<HTMLDivElement, AssignmentCooldownCardProps>(function AssignmentCooldownCard(
  { cooldown, onClick, isActive = false, ...boxProps }: AssignmentCooldownCardProps,
  ref
) {
  const handleClick = () => {
    if (onClick) {
      onClick(cooldown);
    }
  };

  return (
    <Box
      bgColor={isActive ? "gray.600" : "transparent"}
      borderRadius="md"
      px={2}
      py={1}
      w="100%"
      cursor="pointer"
      onClick={handleClick}
      innerRef={ref}
      {...boxProps}
    >
      <HStack pointerEvents="none">
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

          <Text fontSize="xs" color="gray.300">
            {cooldown.caster.name}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
});

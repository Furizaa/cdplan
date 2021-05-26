import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { RaidCooldown } from "types";
import GameIcon from "./GameIcon";

export interface AssignmentMitigationSpellCardProps extends Omit<BoxProps, "onClick"> {
  mitigation: RaidCooldown;
  onClick?: (mitigation: RaidCooldown) => void;
}

export default function AssignmentMitigationSpellCard({
  mitigation,
  onClick,
  ...boxProps
}: AssignmentMitigationSpellCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(mitigation);
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
        <GameIcon name={mitigation.spell.icon} />
        <Box alignItems="flex-start" mt={1}>
          <Text
            maxWidth="80px"
            fontWeight="bold"
            fontSize="xs"
            casing="capitalize"
            color={`${mitigation.caster.pclass.color}.200`}
            isTruncated
          >
            {mitigation.caster.name}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

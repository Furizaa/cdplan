import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import GameIcon from "./GameIcon";

export interface AssignmentDummyCardProps extends Omit<BoxProps, "onClick"> {
  title: string;
  icon: string;
  onClick?: () => void;
}

export default function AssignmentDummyCard({ title, icon, onClick, ...boxProps }: AssignmentDummyCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
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
        <GameIcon name={icon} borderRadius="md" />
        <Box alignItems="flex-start">
          <Text lineHeight="0" as="strong" fontSize="md" casing="capitalize">
            {title}
          </Text>
          <Box maxW="160px">
            <Text fontSize="xs" color="gray.400" isTruncated>
              Add All
            </Text>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}

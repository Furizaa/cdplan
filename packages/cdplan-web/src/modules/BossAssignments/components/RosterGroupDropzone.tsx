import { Box, Text } from "@chakra-ui/layout";
import React from "react";

export interface RosterGroupDropzoneProps {
  placeholder?: string;
  isHover?: boolean;
}

export default function RosterGroupDropzone({ placeholder = "", isHover = false }: RosterGroupDropzoneProps) {
  const color = isHover ? "gray.400" : "gray.500";
  return (
    <Box w="100%" h="52px" borderWidth={1} borderColor={color} borderRadius="md" borderStyle="dashed" p={4}>
      <Text fontSize="xs" color={color}>
        {placeholder}
      </Text>
    </Box>
  );
}

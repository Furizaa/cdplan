import { HStack, Text, VStack } from "@chakra-ui/layout";
import { Progress } from "@chakra-ui/progress";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

export interface RosterFormImportQueueProgressProps {
  total: number;
  loaded: number;
}

export default function RosterFormImportQueueProgress({ total, loaded }: RosterFormImportQueueProgressProps) {
  return (
    <VStack my={8} spacing={8} width="100%">
      <HStack spacing={6}>
        <Spinner thickness="2px" speed="0.65s" color="blue.500" size="md" />
        <VStack spacing={1} alignItems="start">
          <Text as="i" color="gray.300">{`Loading ${loaded} of ${total} guild members from queue.`}</Text>
          <Text as="i" color="gray.300">
            Please wait...
          </Text>
        </VStack>
      </HStack>
      <Progress hasStripe value={Math.ceil((100 / total) * loaded)} width="100%" />
    </VStack>
  );
}

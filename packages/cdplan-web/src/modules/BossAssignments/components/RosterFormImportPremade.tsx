import { Alert, AlertDescription, AlertTitle } from "@chakra-ui/alert";
import { Button } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";
import React from "react";

export interface RosterFormImportPremadeProps {
  onCancel: () => void;
  onCreate: () => void;
}

export default function RosterFormImportPremade({ onCancel, onCreate }: RosterFormImportPremadeProps) {
  return (
    <Box>
      <Alert status="info" flexDirection="column" justifyContent="flex-start" textAlign="start">
        <AlertTitle>Import random premade group.</AlertTitle>
        <AlertDescription mt={4}>Import a premade group of 22 random players into your roster.</AlertDescription>
      </Alert>
      <HStack width="100%" spacing={6} justifyContent="flex-end" mt={4}>
        <Button variant="ghost" flexShrink={0} colorScheme="blue" onClick={onCancel}>
          Cancel
        </Button>
        <Button flexShrink={0} colorScheme="blue" onClick={onCreate}>
          Create Random Roster
        </Button>
      </HStack>
    </Box>
  );
}

import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { Box } from "@chakra-ui/layout";
import React from "react";

export default function RosterFormImportArmory() {
  return (
    <Box>
      <Alert status="warning">
        <AlertIcon />
        <AlertTitle>Comming Soon!</AlertTitle>
        <AlertDescription>This feature is not yet implemented.</AlertDescription>
      </Alert>
    </Box>
  );
}

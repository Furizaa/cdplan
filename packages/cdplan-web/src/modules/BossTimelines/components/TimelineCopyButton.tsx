import React from "react";
import copy from "copy-to-clipboard";
import { LogicTable } from "@BossTimelines/types";
import { Boss } from "@dbc/types";
import useLogicTableFormatter from "@BossTimelines/hooks/useLogicTableFormatter";
import useLogictTableWaFormatter from "@BossTimelines/hooks/useLogicTableWaFormatter";
import { Box, Button, Text, useToast, VStack } from "@chakra-ui/react";

type TimelineCopyButtonProps = {
  boss: Boss;
  logicTable: LogicTable;
};

export default function TimelineCopyButton({ boss, logicTable }: TimelineCopyButtonProps) {
  const toast = useToast();
  const { formattedLogicBlocks, waName } = useLogicTableFormatter(boss, logicTable);
  const waCode = useLogictTableWaFormatter(waName, formattedLogicBlocks);

  const handleClipboardCopy = () => {
    copy(waCode);
    toast({
      title: "Copied to Clipboard",
      description: "WeakAura Config Copied to Clipboard",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <VStack alignItems="start" justifyContent="start">
      {formattedLogicBlocks.map((flb) => (
        <Box key={flb.uid} borderColor="gray.700" borderWidth={1} bgColor="gray.800" width="100%">
          <Text fontSize="xs">{flb.name}</Text>
        </Box>
      ))}
      <Button colorScheme="green" onClick={handleClipboardCopy}>
        Copy WA Code
      </Button>
    </VStack>
  );
}

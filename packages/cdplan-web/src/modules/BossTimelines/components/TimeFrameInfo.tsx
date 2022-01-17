import React from "react";
import { TimeFrame } from "@BossTimelines/types";
import { Box, Text, VStack } from "@chakra-ui/react";

type TimeFrameInfoProps = {
  timeFrame: TimeFrame;
};

export default function TimeFrameInfo({ timeFrame }: TimeFrameInfoProps) {
  let startCausa = "";
  if (timeFrame.in.trigger.type === "stage_start") {
    startCausa = "its the Beginning of the Boss Stage";
  } else if (timeFrame.in.trigger.type === "stage_end") {
    startCausa = "its the End of the Boss Stage";
  } else if (timeFrame.in.trigger.type === "mechanic") {
    startCausa = `of BigWigs Timer "${timeFrame.in.trigger.mechanic.description}" < TODO Seconds`;
  } else {
    startCausa = `of BigWigs Message "${timeFrame.in.trigger.timelineEvent.name}"`;
  }

  let endCausa = "";
  if (timeFrame.out.trigger.type === "stage_start") {
    endCausa = "its the Beginning of the Boss Stage";
  } else if (timeFrame.out.trigger.type === "stage_end") {
    endCausa = "its the End of the Boss Stage";
  } else if (timeFrame.out.trigger.type === "mechanic") {
    endCausa = `of BigWigs Timer "${timeFrame.out.trigger.mechanic.description}" < TODO Seconds`;
  } else {
    endCausa = `of BigWigs Message "${timeFrame.out.trigger.timelineEvent.name}"`;
  }

  return (
    <Box bgColor="gray.800" borderColor="gray.700" borderWidth={1} p={2}>
      <VStack alignItems="start">
        <Text>Lasts {(timeFrame.out.atMs - timeFrame.in.atMs) / 1000} Seconds</Text>
        <Text fontSize="xs">
          Starts at {timeFrame.in.atMs / 1000} Seconds in because of {startCausa}
        </Text>
        <Text fontSize="xs">
          Ends at {timeFrame.out.atMs / 1000} Seconds in because of {endCausa}
        </Text>
      </VStack>
    </Box>
  );
}

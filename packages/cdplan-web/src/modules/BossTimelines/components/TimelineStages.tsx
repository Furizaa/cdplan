import { HStack } from "@chakra-ui/react";
import { Boss, BossStage } from "@dbc/types";
import React from "react";

type TimelineStagesProps = {
  boss: Boss;
  children: (renderOpts: { stage: BossStage }) => React.ReactNode;
};

export default function TimelineStages({ boss, children }: TimelineStagesProps) {
  return (
    <HStack>
      {Object.values(boss.stages)
        .filter((stage) => stage.timelineSettings)
        .map((stage) => children({ stage }))}
    </HStack>
  );
}

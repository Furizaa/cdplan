import Layout from "@BossTimelines/components/Layout";
import TimeFrameInfo from "@BossTimelines/components/TimeFrameInfo";
import Timeline from "@BossTimelines/components/Timeline";
import TimelineCopyButton from "@BossTimelines/components/TimelineCopyButton";
import TimelineStages from "@BossTimelines/components/TimelineStages";
import { LogicTable, TimeFrame } from "@BossTimelines/types";
import { BOSSES, SPELLS } from "@cdplan/db";
import { HStack, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const BOSS = BOSSES.T27.SYLVANAS_WINDRUNNER;

const LOGIC_TABLE: LogicTable = [
  {
    stageKey: "T27/B10/S1",
    healthGte: 83,
    entries: [
      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
        atOccurence: 1,
        type: "timer",
        remaining: 4,
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 1,
        type: "timer",
        remaining: 20,
      },
      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
        atOccurence: 2,
        type: "timer",
        remaining: 4,
      },
      {
        // After Chains 2 Activate on Chains
        enable: ["dance"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
        atOccurence: 2,
        type: "timer",
        remaining: 12,
      },
      {
        disable: ["vanish"],
        enable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
        atOccurence: 2,
        type: "timer",
        remaining: 4,
      },
      {
        enable: ["vanish"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 3,
        type: "timer",
        remaining: 10,
      },

      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 3,
        type: "timer",
        remaining: 3,
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
        atOccurence: 3,
        type: "timer",
        remaining: 1,
        onFinish: true,
      },
      {
        disable: ["dagger"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 4,
        type: "timer",
        remaining: 40,
      },
      {
        disable: ["vanish"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
        atOccurence: 3,
        type: "timer",
        remaining: 2,
      },
    ],
  },
  {
    stageKey: "T27/B10/S2",
    healthLt: 100,
    entries: [
      {
        enable: ["ALL"],
        at: "Stage 2",
        type: "message",
      },
      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
        atOccurence: 2,
        type: "timer",
        remaining: 6,
      },
      {
        enable: ["ALL"],
        at: "Banshee Shroud Removed",
        type: "message",
      },
      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
        atOccurence: 4,
        type: "timer",
        remaining: 4,
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        at: "Bridges (3)",
        type: "message",
      },
      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
        atOccurence: 6,
        type: "timer",
        remaining: 7,
      },
      {
        enable: ["dance"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
        atOccurence: 7,
        type: "timer",
        remaining: 9,
      },
      {
        enable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
        atOccurence: 8,
        type: "timer",
        remaining: 23,
      },
      {
        disable: ["dagger", "symbols", "cov"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
        atOccurence: 8,
        type: "timer",
        remaining: 3,
      },
    ],
  },
  // Phase 3
  {
    stageKey: "T27/B10/S3",
    healthLt: 78,
    entries: [
      {
        enable: ["ALL"],
        disable: ["dagger"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 1,
        type: "timer",
        remaining: 15,
      },
      {
        disable: ["symbols", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 2,
        type: "timer",
        remaining: 15,
      },
      {
        disable: ["dance"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 2,
        type: "timer",
        remaining: 7,
      },
      {
        enable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
        atOccurence: 2,
        type: "timer",
        remaining: 27,
      },
      {
        disable: ["symbols", "dagger", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
        atOccurence: 3,
        type: "timer",
        remaining: 20,
      },
      {
        disable: ["dance"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
        atOccurence: 3,
        type: "timer",
        remaining: 7,
      },
      {
        enable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 5,
        type: "timer",
        remaining: 45,
      },
      {
        disable: ["symbols", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 6,
        type: "timer",
        remaining: 13,
      },
      {
        disable: ["dance"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS,
        atOccurence: 6,
        type: "timer",
        remaining: 7,
      },
      {
        enable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
        atOccurence: 6,
        type: "timer",
        remaining: 30,
      },
      // ---
      {
        disable: ["dance", "symbols", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
        atOccurence: 1,
        type: "timer",
        remaining: 2,
      },
      {
        enable: ["dance", "symbols", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
        atOccurence: 1,
        type: "timer",
        remaining: 8,
      },
      {
        disable: ["dance", "symbols", "cov", "dagger", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
        atOccurence: 2,
        type: "timer",
        remaining: 2,
      },
      {
        enable: ["dance", "symbols", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
        atOccurence: 3,
        type: "timer",
        remaining: 17,
      },
      {
        disable: ["ALL"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
        atOccurence: 3,
        type: "timer",
        remaining: 2,
      },
      {
        enable: ["dance", "symbols", "cov", "vanish", "t"],
        at: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
        atOccurence: 4,
        type: "timer",
        remaining: 9,
      },
    ],
  },
];

export default function SylvanasTimeline() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<TimeFrame>();

  const handleSelectTimeFrame = (timing: TimeFrame) => {
    setSelectedTimeFrame(timing);
  };

  return (
    <Layout heading={BOSS.name} gameIcon={BOSS.icon}>
      <HStack justify="start" alignItems="start" spacing={10}>
        <TimelineStages boss={BOSS}>
          {({ stage }) => (
            <Timeline
              bossStage={stage}
              logicTable={LOGIC_TABLE}
              onSelectTimeFrame={handleSelectTimeFrame}
              selectedTimeFrameId={selectedTimeFrame && selectedTimeFrame.id}
              key={stage.key}
            />
          )}
        </TimelineStages>
        <VStack alignItems="start" justifyContent="start">
          {selectedTimeFrame && <TimeFrameInfo timeFrame={selectedTimeFrame} />}
          <TimelineCopyButton boss={BOSS} logicTable={LOGIC_TABLE} />
        </VStack>
      </HStack>
    </Layout>
  );
}

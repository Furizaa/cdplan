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
    triggers: [{ type: "bossstage", stage: 1 }],
    entries: [
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            comparator: "<",
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["vendetta", "cov", "vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            comparator: "<",
            offsetSeconds: 20,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            comparator: "<",
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
          },
        ],
      },
      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            comparator: "<",
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },

      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 2,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["vendetta", "cov", "vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 14,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 2,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },

      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 4,
            comparator: "<",
            offsetSeconds: 5,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        disable: ["vendetta", "cov", "vanish"],
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_message",
            message: "Intermission",
          },
        ],
      },
    ],
  },
  {
    stageKey: "T27/B10/S2",
    triggers: [{ type: "bossstage", stage: 2 }],
    entries: [
      {
        enable: ["ALL"],
        triggers: [{ type: "bw_message", message: "Stage 2" }],
      },
    ],
  },
  // Phase 3
  {
    stageKey: "T27/B10/S3",
    triggers: [{ type: "bossstage", stage: 3 }],
    entries: [
      {
        enable: ["ALL"],
        disable: ["vendetta", "vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            offsetSeconds: 15,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 15,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        enable: ["ALL"],
        onFinish: true,
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 10,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 20,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
          },
        ],
      },
      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 5,
            offsetSeconds: 45,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 10,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },

      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 19,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      // ---
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            offsetSeconds: 2,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          },
        ],
      },
      {
        enable: ["shiv", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            offsetSeconds: 8,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 2,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          },
        ],
      },
      {
        enable: ["shiv", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 17,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 2,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          },
        ],
      },
      {
        enable: ["shiv", "symbols", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 4,
            offsetSeconds: 9,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
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
              boss={BOSS}
              stageKey={stage.key}
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

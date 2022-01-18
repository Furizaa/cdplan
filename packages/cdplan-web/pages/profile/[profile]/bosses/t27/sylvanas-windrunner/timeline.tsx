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
        disable: ["dagger"],
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
        // After Chains 2 Activate on Chains
        enable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            comparator: "<",
            offsetSeconds: 14,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["vanish"],
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
        enable: ["vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 10,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
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
            offsetSeconds: 3,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 18,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["dagger"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 4,
            comparator: "<",
            offsetSeconds: 40,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
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
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 2,
            offsetSeconds: 6,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        enable: ["ALL"],
        triggers: [{ type: "bw_message", message: "Bridges (2)" }],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 4,
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [{ type: "bw_message", message: "Bridges (3)" }],
      },
      {
        disable: ["symbols", "cov", "vanish", "t"],
        triggers: [{ type: "bw_message", message: "Bridges (4)" }],
      },
      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 8,
            offsetSeconds: 23,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        disable: ["dagger", "symbols", "cov", "t", "vanish"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 8,
            offsetSeconds: 3,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
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
        disable: ["dagger"],
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
        disable: ["symbols", "cov", "vanish", "t"],
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
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 7,
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
            occurence: 2,
            offsetSeconds: 27,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
          },
        ],
      },
      {
        disable: ["symbols", "dagger", "cov", "vanish", "t"],
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
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 7,
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
        disable: ["symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 13,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 7,
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
            offsetSeconds: 30,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      // ---
      {
        disable: ["dance", "symbols", "cov", "vanish", "t"],
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
        enable: ["dance", "symbols", "cov", "vanish", "t"],
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
        disable: ["dance", "symbols", "cov", "dagger", "vanish", "t"],
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
        enable: ["dance", "symbols", "cov", "vanish", "t"],
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
        enable: ["dance", "symbols", "cov", "vanish", "t"],
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
import React from "react";
import { Box, HStack, Tooltip } from "@chakra-ui/react";
import { BossMechanic, BossStage, BossStageTimelineEvent } from "@dbc/types";
import GameIcon from "@Core/components/GameIcon";
import {
  LogicEntry,
  logicIsMessageTriggered,
  logicIsTimed,
  LogicTable,
  SkillTiming,
  TimeableSkill,
  TimeFrame,
  Timing,
} from "@BossTimelines/types";

type TimelineProps = {
  bossStage: BossStage;
  logicTable: LogicTable;
  selectedTimeFrameId?: string;
  onSelectTimeFrame: (timing: TimeFrame) => void;
};

const skills: Array<TimeableSkill> = [
  {
    key: "dance",
    color: "#2f8094",
    name: "Shadow Dance",
  },
  {
    key: "symbols",
    color: "#954dbf",
    name: "Symbols of Death",
  },
  {
    key: "cov",
    color: "#2b47ba",
    name: "Covenant Ability",
  },
  {
    key: "dagger",
    color: "#8007b0",
    name: "Shadow Blades",
  },
  {
    key: "vanish",
    color: "#696564",
    name: "Vanish",
  },
  {
    key: "t",
    color: "#917c40",
    name: "On Use Trinkets",
  },
];

export default function Timeline({ bossStage, logicTable, onSelectTimeFrame, selectedTimeFrameId }: TimelineProps) {
  if (!bossStage.timelineSettings) {
    return null;
  }

  const WIDTH = 140;
  const HEIGHT = 1200;
  const BOSS_DURATION_MS = bossStage.timelineSettings.durationMs ?? 100000;
  const logicStageEntries = logicTable.find((stage) => stage.stageKey === bossStage.key)?.entries ?? [];

  const events = Object.values(bossStage.mechanics)
    .map((mechanic) => {
      if (
        "timeMs" in mechanic.trigger &&
        "timelineSettings" in bossStage &&
        bossStage.timelineSettings &&
        "spell" in mechanic
      ) {
        if (mechanic.trigger.timeMs > BOSS_DURATION_MS) {
          return undefined;
        }

        const castTimeMs = mechanic?.spell?.timelineInformation?.castTimeMs ?? 0;
        const blockDurationMs = mechanic?.spell?.timelineInformation?.blockDurationMs ?? 0;
        const blockOffset = (1 / BOSS_DURATION_MS) * castTimeMs * HEIGHT;
        const durationOffset = (1 / BOSS_DURATION_MS) * blockDurationMs * HEIGHT;

        return {
          ...mechanic,
          topPosition: (1 / BOSS_DURATION_MS) * mechanic.trigger.timeMs * HEIGHT + blockOffset - durationOffset,
          height: Math.max(1, blockOffset + durationOffset),
        };
      }
      return undefined;
    })
    .filter(Boolean) as Array<BossMechanic & { topPosition: number; height: number }>;

  const additionalEvents = (bossStage.timelineSettings?.additionalEvents ?? []).map((aevent) => {
    return {
      ...aevent,
      topPosition: (1 / BOSS_DURATION_MS) * aevent.atMs * HEIGHT,
      height: 2,
    };
  }) as Array<BossStageTimelineEvent & { topPosition: number; height: number }>;

  const skillTimings = skills.map((skill) => {
    const timings: Timing[] = logicStageEntries
      .map((entry: LogicEntry) => {
        if (logicIsTimed(entry)) {
          const mechanicRef = Object.values(bossStage.mechanics).filter(
            (mechanic) => "spell" in mechanic && mechanic.spell.id === entry.at.id
          )[entry.atOccurence - 1];

          if (mechanicRef && "spell" in mechanicRef && "timeMs" in mechanicRef.trigger) {
            const occurenceMs =
              "onFinish" in entry && entry.onFinish
                ? mechanicRef.trigger.timeMs
                : mechanicRef.trigger.timeMs - entry.remaining * 1000;
            if (entry.disable && (entry.disable.includes(skill.key) || entry.disable.includes("ALL"))) {
              return {
                atMs: occurenceMs,
                switch: "off",
                trigger: { type: "mechanic", mechanic: { ...mechanicRef }, logicEntry: { ...entry } },
              };
            }
            if (entry.enable && (entry.enable.includes(skill.key) || entry.enable.includes("ALL"))) {
              return {
                atMs: occurenceMs,
                switch: "on",
                trigger: { type: "mechanic", mechanic: { ...mechanicRef }, logicEntry: { ...entry } },
              };
            }
          }
        }

        if (logicIsMessageTriggered(entry)) {
          const additionalEventRef = bossStage.timelineSettings?.additionalEvents?.find(
            (ae) => ae.name.toLowerCase() === entry.at.toLowerCase()
          );

          if (additionalEventRef) {
            if (entry.disable && (entry.disable.includes(skill.key) || entry.disable.includes("ALL"))) {
              return {
                atMs: additionalEventRef.atMs,
                switch: "off",
                trigger: { type: "timeline_event", timelineEvent: { ...additionalEventRef }, logicEntry: { ...entry } },
              };
            }
            if (entry.enable && (entry.enable.includes(skill.key) || entry.enable.includes("ALL"))) {
              return {
                atMs: additionalEventRef.atMs,
                switch: "on",
                trigger: { type: "timeline_event", timelineEvent: { ...additionalEventRef }, logicEntry: { ...entry } },
              };
            }
          }
        }

        return undefined;
      })
      .filter(Boolean)
      .sort((a, b) => {
        if (a && b) {
          if (a?.atMs > b?.atMs) return 1;
          if (a?.atMs < b?.atMs) return -1;
        }
        return 0;
      }) as Timing[];

    const dedupedTimings = timings.reduce<Timing[]>((prev, curr) => {
      const last = prev[prev.length - 1];
      if (last && last.switch !== curr.switch) {
        return [...prev, curr];
      }
      if (!last) {
        return [curr];
      }
      return prev;
    }, []);

    if (dedupedTimings[0] && dedupedTimings[0].switch === "off") {
      dedupedTimings.unshift({ atMs: 0, switch: "on", trigger: { type: "stage_start" } });
    }
    if (dedupedTimings[dedupedTimings.length - 1] && dedupedTimings[dedupedTimings.length - 1].switch === "on") {
      dedupedTimings.push({ atMs: BOSS_DURATION_MS, switch: "off", trigger: { type: "stage_start" } });
    }

    const chunkedTimings = dedupedTimings.reduce<Timing[][]>((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 2);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);

    const timingsOut = chunkedTimings.map((chunk) => {
      let id = `${bossStage.key}/${skill.key}/`;
      if (chunk[0].trigger.type === "stage_end" || chunk[0].trigger.type === "stage_start") {
        id += chunk[0].trigger.type;
      } else if (chunk[0].trigger.type === "mechanic") {
        id += chunk[0].trigger.mechanic.key;
      } else {
        id += chunk[0].trigger.timelineEvent.id;
      }
      return { in: chunk[0], out: chunk[1], skill, id };
    });

    const out: SkillTiming = { skill, timings: timingsOut };
    return out;
  });

  return (
    <HStack spacing={1}>
      <Box
        bgColor="gray.800"
        borderColor="gray.700"
        borderWidth={1}
        height={`${HEIGHT}px`}
        width={`${WIDTH}px`}
        position="relative"
        overflow="hidden"
      >
        {events.map((e) => (
          <Box
            key={e.key}
            height={`${e.height}px`}
            width={`${WIDTH}px`}
            opacity={0.3}
            bgColor="red.500"
            position="absolute"
            top={e.topPosition}
          />
        ))}
        {additionalEvents.map((e) => (
          <Box
            key={e.id}
            height={`${e.height}px`}
            width={`${WIDTH}px`}
            opacity={0.3}
            bgColor="green.500"
            position="absolute"
            top={e.topPosition}
          />
        ))}
        {skillTimings.map((skill, skillIndex) =>
          skill.timings.map((switches, index) => (
            <Box
              key={`${skill.skill.key}_${index}`}
              position="absolute"
              height={`${(1 / BOSS_DURATION_MS) * (switches.out.atMs - switches.in.atMs) * HEIGHT}px`}
              top={`${(1 / BOSS_DURATION_MS) * switches.in.atMs * HEIGHT}px`}
              left={`${skillIndex * 20}px`}
              width="10px"
              bgColor={skill.skill.color}
              onClick={() => onSelectTimeFrame(switches)}
              opacity={selectedTimeFrameId === switches.id ? 1.0 : 0.7}
              border={selectedTimeFrameId === switches.id ? "1px solid #ffffff88" : undefined}
            />
          ))
        )}
      </Box>
      <Box width="20px" height={`${HEIGHT}px`} position="relative">
        {events.map((e) => (
          <Tooltip key={e.key} label={e.spell.name}>
            <GameIcon size="xs" name={e.spell.icon} position="absolute" top={e.topPosition - (8 - e.height / 2)} />
          </Tooltip>
        ))}
        {additionalEvents.map((e) => (
          <Tooltip key={e.id} label={e.name}>
            <GameIcon size="xs" name={e.icon} position="absolute" top={e.topPosition - (8 - e.height / 2)} />
          </Tooltip>
        ))}
      </Box>
    </HStack>
  );
}

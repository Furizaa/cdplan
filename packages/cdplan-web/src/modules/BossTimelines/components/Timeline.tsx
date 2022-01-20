import React from "react";
import { Box, HStack, Tooltip } from "@chakra-ui/react";
import { Boss, BossMechanic, BossStageTimelineEvent } from "@dbc/types";
import GameIcon from "@Core/components/GameIcon";
import {
  LogicEntry,
  LogicTable,
  SkillTiming,
  TimeableSkill,
  TimeFrame,
  Timing,
  triggerIsBwMessage,
  triggerIsBwTimer,
} from "@BossTimelines/types";
import getBossMechanicForBwTimerTrigger from "@BossTimelines/utils/getBossMechanicForBwTimerTrigger";

type TimelineProps = {
  boss: Boss;
  stageKey: string;
  logicTable: LogicTable;
  selectedTimeFrameId?: string;
  onSelectTimeFrame: (timing: TimeFrame) => void;
};

type MechanicTimelineIndicator = {
  mechanic: BossMechanic;
  cast?: {
    top: number;
    height: number;
  };
  block: {
    top: number;
    height: number;
  };
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

export default function Timeline({
  boss,
  stageKey,
  logicTable,
  onSelectTimeFrame,
  selectedTimeFrameId,
}: TimelineProps) {
  const bossStage = boss.stages[stageKey];
  const stageIndex = Object.keys(boss.stages).indexOf(stageKey);
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

        const triggerMs = mechanic.trigger.timeMs;
        const castTimeMs = mechanic.spell.timelineInformation?.castTimeMs ?? 0;
        const blockDurationMs = mechanic.spell.timelineInformation?.blockDurationMs ?? 0;

        return {
          mechanic,
          cast: castTimeMs
            ? {
                top: (1 / BOSS_DURATION_MS) * triggerMs * HEIGHT,
                height: (1 / BOSS_DURATION_MS) * castTimeMs * HEIGHT,
              }
            : undefined,
          block: {
            top: (1 / BOSS_DURATION_MS) * (triggerMs + castTimeMs) * HEIGHT,
            height: Math.max(1, (1 / BOSS_DURATION_MS) * blockDurationMs * HEIGHT),
          },
        };
      }
      return undefined;
    })
    .filter(Boolean) as Array<MechanicTimelineIndicator>;

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
        const trigger = entry.triggers.filter((t) => triggerIsBwMessage(t) || triggerIsBwTimer(t))[0];

        if (triggerIsBwTimer(trigger)) {
          const mechanicRef = getBossMechanicForBwTimerTrigger(boss, stageKey, trigger);

          if (mechanicRef && "timeMs" in mechanicRef.trigger) {
            const occurenceMs = trigger.onFinish
              ? mechanicRef.trigger.timeMs
              : mechanicRef.trigger.timeMs - trigger.offsetSeconds * 1000;
            if (entry.disable && (entry.disable.includes(skill.key) || entry.disable.includes("ALL"))) {
              return {
                atMs: occurenceMs,
                switch: "off",
                trigger: { type: "mechanic", mechanic: { ...mechanicRef } },
              };
            }
            if (entry.enable && (entry.enable.includes(skill.key) || entry.enable.includes("ALL"))) {
              return {
                atMs: occurenceMs,
                switch: "on",
                trigger: { type: "mechanic", mechanic: { ...mechanicRef } },
              };
            }
          }
        }

        if (triggerIsBwMessage(trigger)) {
          const additionalEventRef = bossStage.timelineSettings?.additionalEvents?.find(
            (ae) => ae.name.toLowerCase() === trigger.message.toLowerCase()
          );

          if (additionalEventRef) {
            if (entry.disable && (entry.disable.includes(skill.key) || entry.disable.includes("ALL"))) {
              return {
                atMs: additionalEventRef.atMs,
                switch: "off",
                trigger: { type: "timeline_event", timelineEvent: { ...additionalEventRef } },
              };
            }
            if (entry.enable && (entry.enable.includes(skill.key) || entry.enable.includes("ALL"))) {
              return {
                atMs: additionalEventRef.atMs,
                switch: "on",
                trigger: { type: "timeline_event", timelineEvent: { ...additionalEventRef } },
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
      if (stageIndex > 0) {
        dedupedTimings.shift();
      } else {
        dedupedTimings.unshift({ atMs: 0, switch: "on", trigger: { type: "stage_start" } });
      }
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
          <Box key={e.mechanic.key} width={`${WIDTH}px`}>
            {e.cast && (
              <Box
                height={`${e.cast.height}px`}
                width={`${WIDTH}px`}
                opacity={0.3}
                bgColor="yellow.500"
                position="absolute"
                top={e.cast.top}
              />
            )}
            <Box
              height={`${e.block.height}px`}
              width={`${WIDTH}px`}
              opacity={0.3}
              bgColor="red.500"
              position="absolute"
              top={e.block.top}
            />
          </Box>
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
        {events.map((e) => {
          const castOrBlock = e.cast || e.block;
          return (
            <Tooltip key={e.mechanic.key} label={e.mechanic.spell.name}>
              <GameIcon
                size="xs"
                name={e.mechanic.spell.icon}
                position="absolute"
                top={castOrBlock.top - (8 - castOrBlock.height / 2)}
              />
            </Tooltip>
          );
        })}
        {additionalEvents.map((e) => (
          <Tooltip key={e.id} label={e.name}>
            <GameIcon size="xs" name={e.icon} position="absolute" top={e.topPosition - (8 - e.height / 2)} />
          </Tooltip>
        ))}
      </Box>
    </HStack>
  );
}

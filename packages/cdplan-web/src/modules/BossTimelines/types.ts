import { Boss, BossMechanic, BossStageTimelineEvent, Spell } from "@dbc/types";

export type Comparator = ">" | "<" | ">=" | "<=";

export type LogicFlag = "dagger" | "cov" | "symbols" | "dance" | "vanish" | "t" | "vendetta" | "shiv" | "ALL";

export type LogicEntry = {
  enable?: LogicFlag[];
  disable?: LogicFlag[];
  triggers: LogicTrigger[];
  onFinish?: boolean;
};

export type LogicTriggerHealthPct = {
  type: "healthpct";
  comparator: Comparator;
  healthPct: number;
};

export type LogicTriggerBossStage = {
  type: "bossstage";
  stage: number;
};

export type LogicTriggerBwMessage = {
  type: "bw_message";
  message: string;
};

export type LogicTriggerBwTimer = {
  type: "bw_timer";
  spell: Spell;
  comparator: Comparator;
  occurence: number;
  offsetSeconds: number;
};

export type LogicTrigger = LogicTriggerHealthPct | LogicTriggerBossStage | LogicTriggerBwMessage | LogicTriggerBwTimer;
export const triggerIsHealthPct = (trigger: LogicTrigger): trigger is LogicTriggerHealthPct =>
  trigger.type === "healthpct";
export const triggerIsBossStage = (trigger: LogicTrigger): trigger is LogicTriggerBossStage =>
  trigger.type === "bossstage";
export const triggerIsBwMessage = (trigger: LogicTrigger): trigger is LogicTriggerBwMessage =>
  trigger.type === "bw_message";
export const triggerIsBwTimer = (trigger: LogicTrigger): trigger is LogicTriggerBwTimer => trigger.type === "bw_timer";

export type LogicStage = {
  stageKey: string;
  triggers: LogicTrigger[];
  entries: LogicEntry[];
};

export type LogicTable = LogicStage[];

export type TimingTriggerStageStart = { type: "stage_start" };
export type TimingTriggerStageEnd = { type: "stage_end" };
export type TimingTriggerMechanic = { type: "mechanic"; mechanic: BossMechanic };
export type TimingTriggerTimelineEvent = {
  type: "timeline_event";
  timelineEvent: BossStageTimelineEvent;
};
export type TimingTrigger =
  | TimingTriggerStageStart
  | TimingTriggerStageEnd
  | TimingTriggerMechanic
  | TimingTriggerTimelineEvent;

export type TimeableSkill = { key: LogicFlag; color: string; name: string };
export type Timing = {
  atMs: number;
  switch: "on" | "off";
  trigger: TimingTrigger;
};
export type TimeFrame = { in: Timing; out: Timing; id: string; skill: TimeableSkill };
export type SkillTiming = { skill: TimeableSkill; timings: TimeFrame[] };

export type WaTemplateOpts = {
  parentName: string;
  name: string;
  boss: Boss;
  uid: string;
  stageEvent: LogicEntry;
  stageKey: string;
};

import { BossMechanic, BossStageTimelineEvent, Spell } from "@dbc/types";

export type LogicFlag = "dagger" | "cov" | "symbols" | "dance" | "vanish" | "t" | "ALL";

export type LogicTimerEntry = {
  type: "timer";
  enable?: LogicFlag[];
  disable?: LogicFlag[];
  at: Spell;
  atOccurence: number;
  remaining: number;
  onFinish?: boolean;
};
export type LogicMessageEntry = {
  type: "message";
  enable?: LogicFlag[];
  disable?: LogicFlag[];
  at: string;
};

export type LogicEntry = LogicTimerEntry | LogicMessageEntry;

export type LogicStage = {
  stageKey: string;
  healthLt?: number;
  healthLte?: number;
  healthGt?: number;
  healthGte?: number;
  entries: LogicEntry[];
};

export type LogicTable = LogicStage[];

export const logicIsTimed = (entry: LogicEntry): entry is LogicTimerEntry => entry.type === "timer";
export const logicIsMessageTriggered = (entry: LogicEntry): entry is LogicMessageEntry => entry.type === "message";

export type TimingTriggerStageStart = { type: "stage_start" };
export type TimingTriggerStageEnd = { type: "stage_end" };
export type TimingTriggerMechanic = { type: "mechanic"; mechanic: BossMechanic; logicEntry: LogicTimerEntry };
export type TimingTriggerTimelineEvent = {
  type: "timeline_event";
  timelineEvent: BossStageTimelineEvent;
  logicEntry: LogicMessageEntry;
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

export type WaHealtOperator = ">" | "<" | ">=" | "<=";

export type WaTemplateBaseOpts = {
  parentName: string;
  name: string;
  healthOperator: WaHealtOperator;
  messageContains: string;
  health: number;
  encounterId: number;
  uid: string;
};

export type WaMessageTemplateOpts = WaTemplateBaseOpts & {
  type: "message";
  action: string;
};

export type WaTimerTemplateOpts = WaTemplateBaseOpts & {
  type: "timer";
  triggerRemaining: number;
  startAction?: string;
  finishAction?: string;
};

export type WaTemplateOpts = WaMessageTemplateOpts | WaTimerTemplateOpts;

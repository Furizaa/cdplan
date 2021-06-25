import { LiteralUnion, Opaque } from "type-fest";

export * as API from "./types-api";

export type SpellId = Opaque<number, "SpellId">;
export type ClassId = Opaque<number, "ClassId">;
export type SpecId = Opaque<number, "SpecId">;
export type BossId = Opaque<number, "BossId">;
export type BossKey = Opaque<string, "BossKey">;
export type CovenantId = Opaque<number, "CovenantId">;

export interface GameDataObject<T> {
  id: T;
  name: string;
  icon: string;
}

export interface Spell extends GameDataObject<SpellId> {
  // Death Knights
  runesCost?: number;
  runicPowerCost?: number;
  // Demon Hunter
  furyCost?: number;
  painCost?: number;
  // Feral Druid & Rogue
  energyCost?: number;
  comboPointsCost?: number;
  // Hunter
  focusCost?: number;
  // Mage, Healers & Warlock
  manaCost?: number;
  // Monk
  chiCost?: number;
  // Paladin
  holyPowerCost?: number;
  // Priest
  insanityCost?: number;
  // Warlock
  soulShardsCost?: number;
  // Warrior
  rageCost?: number;
}

export interface SpellList<T extends Spell = Spell> {
  [key: string]: T;
}

export type ClassUnion =
  | "WARRIOR"
  | "PRIEST"
  | "DEATHKNIGHT"
  | "ROGUE"
  | "PALADIN"
  | "SHAMAN"
  | "DEMONHUNTER"
  | "MAGE"
  | "DRUID"
  | "WARLOCK"
  | "HUNTER"
  | "MONK";

export type SpecUnion =
  | "WARRIOR_ARMS"
  | "WARRIOR_PROTECTION"
  | "WARRIOR_FURY"
  | "PALADIN_HOLY"
  | "PALADIN_PROTECTION"
  | "PALADIN_RETRIBUTION"
  | "HUNTER_BEASTMASTERY"
  | "HUNTER_MARKSMANSHIP"
  | "HUNTER_SURVIVAL"
  | "ROGUE_ASSASSINATION"
  | "ROGUE_OUTLAW"
  | "ROGUE_SUBTLETY"
  | "PRIEST_DISCIPLINE"
  | "PRIEST_HOLY"
  | "PRIEST_SHADOW"
  | "DEATHKNIGHT_BLOOD"
  | "DEATHKNIGHT_FROST"
  | "DEATHKNIGHT_UNHOLY"
  | "SHAMAN_ELEMENTAL"
  | "SHAMAN_ENHANCEMENT"
  | "SHAMAN_RESTORATION"
  | "MAGE_ARCANE"
  | "MAGE_FIRE"
  | "MAGE_FROST"
  | "WARLOCK_AFFLICTION"
  | "WARLOCK_DEMONOLOGY"
  | "WARLOCK_DESTRUCTION"
  | "MONK_BREWMASTER"
  | "MONK_WINDWALKER"
  | "MONK_MISTWEAVER"
  | "DRUID_BALANCE"
  | "DRUID_FERAL"
  | "DRUID_GUARDIAN"
  | "DRUID_RESTORATION"
  | "DEMONHUNTER_HAVOC"
  | "DEMONHUNTER_VENGEANCE";

export type PositionUnion = "MELEE" | "RANGED";

export type RoleUnion = "TANK" | "DPS" | "HEAL";

export type TierUnion = "T26";

export type BossUnionT26 = "SIRE_DENATHRIUS";

export type CovenenatUnion = "KYRIAN" | "VENTHYR" | "NIGHT_FAE" | "NECROLORD" | "UNKNOWN";

export type RaidMarkerUnion = "SKULL" | "CROSS" | "SQUARE" | "TRIANGLE" | "CIRCLE" | "DIAMOND" | "STAR" | "MOON";

export interface ClassSpec extends GameDataObject<SpecId> {
  spells: Record<string, Spell>;
  position: PositionUnion;
  role: RoleUnion;
}

export interface PClass {
  id: ClassId;
  name: string;
  importName: ClassUnion;
  color: string;
  colorHex: string;
  talents: SpellList;
  specs: Partial<Record<LiteralUnion<SpecUnion, string>, ClassSpec>>;
  covenantSpells: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>>;
}

export interface EventTriggerTime {
  timeMs: number;
}

export interface EventTriggerHealth {
  healthPercentage: number;
}

export interface EventTriggerWeight {
  weight: number;
}

export type EventTrigger = EventTriggerTime | EventTriggerHealth | EventTriggerWeight;

export type MechanicMitigationFlavor =
  | "OffensiveBurst"
  | "HealingCooldowns"
  | "PlayerSoak"
  | "Mobility"
  | "None"
  | "Other";

export interface BossMechanic {
  key: string;
  spell: Spell;
  description: string;
  image?: string;
  trigger: EventTrigger;
  mitigationFlavors: MechanicMitigationFlavor[];
  mitigationOptions?: {
    soakGroups?: Array<{
      name: string;
      id: number;
      isRaidSplit?: boolean;
      marker?: RaidMarkerUnion;
    }>;
  };
}

export interface BossStage {
  key: string;
  name: string;
  slug: string;
  trigger?: EventTrigger;
  mechanics: Record<string, BossMechanic>;
}

export interface Boss extends GameDataObject<BossId> {
  key: BossKey;
  slug: string;
  stages: Record<string, BossStage>;
}

export interface Covenant extends GameDataObject<CovenantId> {
  spellId: SpellId;
  key: CovenenatUnion;
}

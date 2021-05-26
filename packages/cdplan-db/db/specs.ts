import { LiteralUnion } from "type-fest";
import { ClassSpec, SpecId, SpecUnion } from "./types";
import SPELLS from "./spells";

const specs: Record<LiteralUnion<SpecUnion, string>, ClassSpec> = {
  WARRIOR_ARMS: {
    id: 71 as SpecId,
    name: "Arms",
    icon: "ability_warrior_savageblow",
    spells: { ...SPELLS.WARRIOR, ...SPELLS.WARRIOR_ARMS },
  },
  WARRIOR_PROTECTION: {
    id: 73 as SpecId,
    name: "Protection",
    icon: "ability_warrior_innerrage",
    spells: { ...SPELLS.WARRIOR, ...SPELLS.WARRIOR_PROTECTION },
  },
  WARRIOR_FURY: {
    id: 72 as SpecId,
    name: "Fury",
    icon: "ability_warrior_defensivestance",
    spells: { ...SPELLS.WARRIOR, ...SPELLS.WARRIOR_FURY },
  },
  PALADIN_HOLY: {
    id: 65 as SpecId,
    name: "Holy",
    icon: "spell_holy_holybolt",
    spells: { ...SPELLS.PALADIN, ...SPELLS.PALADIN_HOLY },
  },
  PALADIN_PROTECTION: {
    id: 66 as SpecId,
    name: "Protection",
    icon: "ability_paladin_shieldofthetemplar",
    spells: { ...SPELLS.PALADIN, ...SPELLS.PALADIN_PROTECTION },
  },
  PALADIN_RETRIBUTION: {
    id: 70 as SpecId,
    name: "Retribution",
    icon: "spell_holy_auraoflight",
    spells: { ...SPELLS.PALADIN, ...SPELLS.PALADIN_RETRIBUTION },
  },
  HUNTER_BEASTMASTERY: {
    id: 253 as SpecId,
    name: "Beastmastery",
    icon: "ability_hunter_bestialdiscipline",
    spells: { ...SPELLS.HUNTER, ...SPELLS.HUNTER_BEASTMASTERY },
  },
  HUNTER_MARKSMANSHIP: {
    id: 254 as SpecId,
    name: "Marksmanship",
    icon: "ability_hunter_focusedaim",
    spells: { ...SPELLS.HUNTER, ...SPELLS.HUNTER_MARKSMAN },
  },
  HUNTER_SURVIVAL: {
    id: 255 as SpecId,
    name: "Survival",
    icon: "ability_hunter_camouflage",
    spells: { ...SPELLS.HUNTER, ...SPELLS.HUNTER_SURVIVAL },
  },
  ROGUE_ASSASSINATION: {
    id: 259 as SpecId,
    name: "Assassination",
    icon: "ability_rogue_deadlybrew",
    spells: { ...SPELLS.ROGUE, ...SPELLS.ROGUE_ASSASSINATION },
  },
  ROGUE_OUTLAW: {
    id: 260 as SpecId,
    name: "Outlaw",
    icon: "inv_sword_30",
    spells: { ...SPELLS.ROGUE, ...SPELLS.ROGUE_OUTLAW },
  },
  ROGUE_SUBTLETY: {
    id: 261 as SpecId,
    name: "Subtlety",
    icon: "ability_stealth",
    spells: { ...SPELLS.ROGUE, ...SPELLS.ROGUE_SUBTLETY },
  },
  PRIEST_DISCIPLINE: {
    id: 256 as SpecId,
    name: "Discipline",
    icon: "spell_holy_powerwordshield",
    spells: { ...SPELLS.PRIEST, ...SPELLS.PRIEST_DISCIPLINE },
  },
  PRIEST_HOLY: {
    id: 257 as SpecId,
    name: "Holy",
    icon: "spell_holy_guardianspirit",
    spells: { ...SPELLS.PRIEST, ...SPELLS.PRIEST_HOLY },
  },
  PRIEST_SHADOW: {
    id: 258 as SpecId,
    name: "Shadow",
    icon: "spell_shadow_shadowwordpain",
    spells: { ...SPELLS.PRIEST, ...SPELLS.PRIEST_SHADOW },
  },
  DEATHKNIGHT_BLOOD: {
    id: 250 as SpecId,
    name: "Blood",
    icon: "spell_deathknight_bloodpresence",
    spells: { ...SPELLS.DEATHKNIGHT, ...SPELLS.DEATHKNIGHT_BLOOD },
  },
  DEATHKNIGHT_FROST: {
    id: 251 as SpecId,
    name: "Frost",
    icon: "spell_deathknight_frostpresence",
    spells: { ...SPELLS.DEATHKNIGHT, ...SPELLS.DEATHKNIGHT_FROST },
  },
  DEATHKNIGHT_UNHOLY: {
    id: 252 as SpecId,
    name: "Unholy",
    icon: "spell_deathknight_unholypresence",
    spells: { ...SPELLS.DEATHKNIGHT, ...SPELLS.DEATHKNIGHT_UNHOLY },
  },
  SHAMAN_ELEMENTAL: {
    id: 262 as SpecId,
    name: "Elemental",
    icon: "spell_nature_lightning",
    spells: { ...SPELLS.SHAMAN, ...SPELLS.SHAMAN_ELEMENTAL },
  },
  SHAMAN_ENHANCEMENT: {
    id: 263 as SpecId,
    name: "Enhancement",
    icon: "spell_shaman_improvedstormstrike",
    spells: { ...SPELLS.SHAMAN, ...SPELLS.SHAMAN_ENHANCEMENT },
  },
  SHAMAN_RESTORATION: {
    id: 264 as SpecId,
    name: "Restoration",
    icon: "spell_nature_magicimmunity",
    spells: { ...SPELLS.SHAMAN, ...SPELLS.SHAMAN_RESTORATION },
  },
  MAGE_ARCANE: {
    id: 62 as SpecId,
    name: "Arcane",
    icon: "spell_holy_magicalsentry",
    spells: { ...SPELLS.MAGE, ...SPELLS.MAGE_ARCANE },
  },
  MAGE_FIRE: {
    id: 63 as SpecId,
    name: "Fire",
    icon: "spell_fire_firebolt02",
    spells: { ...SPELLS.MAGE, ...SPELLS.MAGE_FIRE },
  },
  MAGE_FROST: {
    id: 64 as SpecId,
    name: "Frost",
    icon: "spell_frost_frostbolt02",
    spells: { ...SPELLS.MAGE, ...SPELLS.MAGE_FROST },
  },
  WARLOCK_AFFLICTION: {
    id: 265 as SpecId,
    name: "Afflication",
    icon: "spell_shadow_deathcoil",
    spells: { ...SPELLS.WARLOCK, ...SPELLS.WARLOCK_AFFLICTION },
  },
  WARLOCK_DEMONOLOGY: {
    id: 266 as SpecId,
    name: "Demonology",
    icon: "spell_shadow_metamorphosis",
    spells: { ...SPELLS.WARLOCK, ...SPELLS.WARLOCK_DEMENOLOGY },
  },
  WARLOCK_DESTRUCTION: {
    id: 267 as SpecId,
    name: "Destruction",
    icon: "spell_shadow_rainoffire",
    spells: { ...SPELLS.WARLOCK, ...SPELLS.WARLOCK_DESTRUCTION },
  },
  MONK_BREWMASTER: {
    id: 268 as SpecId,
    name: "Brewmaster",
    icon: "spell_monk_brewmaster_spec",
    spells: { ...SPELLS.MONK, ...SPELLS.MONK_BREWMASTER },
  },
  MONK_WINDWALKER: {
    id: 269 as SpecId,
    name: "Windwalker",
    icon: "spell_monk_windwalker_spec",
    spells: { ...SPELLS.MONK, ...SPELLS.MONK_WINDWALKER },
  },
  MONK_MISTWEAVER: {
    id: 270 as SpecId,
    name: "Mistweaver",
    icon: "spell_monk_mistweaver_spec",
    spells: { ...SPELLS.MONK, ...SPELLS.MONK_MISTWEAVER },
  },
  DRUID_BALANCE: {
    id: 102 as SpecId,
    name: "Balance",
    icon: "spell_nature_starfall",
    spells: { ...SPELLS.DRUID, ...SPELLS.DRUID_BALANCE },
  },
  DRUID_FERAL: {
    id: 103 as SpecId,
    name: "Feral",
    icon: "ability_druid_catform",
    spells: { ...SPELLS.DRUID, ...SPELLS.DRUID_FERAL },
  },
  DRUID_GUARDIAN: {
    id: 104 as SpecId,
    name: "Guardian",
    icon: "ability_racial_bearform",
    spells: { ...SPELLS.DRUID, ...SPELLS.DRUID_GUARDIAN },
  },
  DRUID_RESTORATION: {
    id: 105 as SpecId,
    name: "Restoration",
    icon: "spell_nature_healingtouch",
    spells: { ...SPELLS.DRUID, ...SPELLS.DRUID_RESTORATION },
  },
  DEMONHUNTER_HAVOC: {
    id: 577 as SpecId,
    name: "Havoc",
    icon: "ability_demonhunter_specdps",
    spells: { ...SPELLS.DEMONHUNTER, ...SPELLS.DEMONHUNTER_HAVOC },
  },
  DEMONHUNTER_VENGEANCE: {
    id: 581 as SpecId,
    name: "Vengeance",
    icon: "ability_demonhunter_spectank",
    spells: { ...SPELLS.DEMONHUNTER, ...SPELLS.DEMONHUNTER_VENGEANCE },
  },
};

export const ALL = specs;

export const WARRIOR = {
  WARRIOR_ARMS: specs.WARRIOR_ARMS,
  WARRIOR_FURY: specs.WARRIOR_FURY,
  WARRIOR_PROTECTION: specs.WARRIOR_PROTECTION,
};
export const PALADIN = {
  PALADIN_HOLY: specs.PALADIN_HOLY,
  PALADIN_RETRIBUTION: specs.PALADIN_RETRIBUTION,
  PALADIN_PROTECTION: specs.PALADIN_PROTECTION,
};
export const MAGE = {
  MAGE_FIRE: specs.MAGE_FIRE,
  MAGE_FROST: specs.MAGE_FROST,
  MAGE_ARCANE: specs.MAGE_ARCANE,
};
export const WARLOCK = {
  WARLOCK_AFFLICTION: specs.WARLOCK_AFFLICTION,
  WARLOCK_DESTRUCTION: specs.WARLOCK_DESTRUCTION,
  WARLOCK_DEMONOLOGY: specs.WARLOCK_DEMONOLOGY,
};
export const ROGUE = {
  ROGUE_ASSASSINATION: specs.ROGUE_ASSASSINATION,
  ROGUE_OUTLAW: specs.ROGUE_OUTLAW,
  ROGUE_SUBTLETY: specs.ROGUE_SUBTLETY,
};
export const DRUID = {
  DRUID_RESTORATION: specs.DRUID_RESTORATION,
  DRUID_BALANCE: specs.DRUID_BALANCE,
  DRUID_GUARDIAN: specs.DRUID_GUARDIAN,
  DRUID_FERAL: specs.DRUID_FERAL,
};
export const DEATHKNIGHT = {
  DEATHKNIGHT_BLOOD: specs.DEATHKNIGHT_BLOOD,
  DEATHKNIGHT_UNHOLY: specs.DEATHKNIGHT_UNHOLY,
  DEATHKNIGHT_FROST: specs.DEATHKNIGHT_FROST,
};
export const DEMONHUNTER = {
  DEMONHUNTER_HAVOC: specs.DEMONHUNTER_HAVOC,
  DEMONHUNTER_VENGEANCE: specs.DEMONHUNTER_VENGEANCE,
};
export const SHAMAN = {
  SHAMAN_RESTORATION: specs.SHAMAN_RESTORATION,
  SHAMAN_ELEMENTAL: specs.SHAMAN_ELEMENTAL,
  SHAMAN_ENHANCEMENT: specs.SHAMAN_ENHANCEMENT,
};
export const HUNTER = {
  HUNTER_SURVIVAL: specs.HUNTER_SURVIVAL,
  HUNTER_MARKSMANSHIP: specs.HUNTER_MARKSMANSHIP,
  HUNTER_BEASTMASTERY: specs.HUNTER_BEASTMASTERY,
};
export const PRIEST = {
  PRIEST_HOLY: specs.PRIEST_HOLY,
  PRIEST_DISCIPLINE: specs.PRIEST_DISCIPLINE,
  PRIEST_SHADOW: specs.PRIEST_SHADOW,
};
export const MONK = {
  MONK_MISTWEAVER: specs.MONK_MISTWEAVER,
  MONK_WINDWALKER: specs.MONK_WINDWALKER,
  MONK_BREWMASTER: specs.MONK_BREWMASTER,
};

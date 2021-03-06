import { LiteralUnion } from "type-fest";
import { PClass, ClassId, ClassUnion } from "./types";
import TALENTS from "./talents";
import * as SPECS from "./specs";
import COVENANT_SPELLS from "./covenant-spells";

const classes: Readonly<Record<LiteralUnion<ClassUnion, string>, PClass>> = {
  WARRIOR: {
    id: 1 as ClassId,
    name: "Warrior",
    importName: "WARRIOR",
    color: "classWarrior",
    colorHex: "C79C6E",
    talents: { ...TALENTS.WARRIOR, ...TALENTS.WARRIOR_ARMS, ...TALENTS.WARRIOR_FURY, ...TALENTS.WARRIOR_PROTECTION },
    specs: SPECS.WARRIOR,
    covenantSpells: COVENANT_SPELLS.WARRIOR,
  },
  PALADIN: {
    id: 2 as ClassId,
    name: "Paladin",
    importName: "PALADIN",
    colorHex: "F58CBA",
    color: "classPaladin",
    talents: {
      ...TALENTS.PALADIN,
      ...TALENTS.PALADIN_PROTECTION,
      ...TALENTS.PALADIN_HOLY,
      ...TALENTS.PALADIN_RETRIBUTION,
    },
    specs: SPECS.PALADIN,
    covenantSpells: COVENANT_SPELLS.PALADIN,
  },
  HUNTER: {
    id: 3 as ClassId,
    name: "Hunter",
    importName: "HUNTER",
    colorHex: "ABD473",
    color: "classHunter",
    talents: {
      ...TALENTS.HUNTER,
      ...TALENTS.HUNTER_SURVIVAL,
      ...TALENTS.HUNTER_BEASTMASTERY,
      ...TALENTS.HUNTER_MARKSMAN,
    },
    specs: SPECS.HUNTER,
    covenantSpells: COVENANT_SPELLS.HUNTER,
  },
  ROGUE: {
    id: 4 as ClassId,
    name: "Rogue",
    importName: "ROGUE",
    colorHex: "FFF569",
    color: "classRogue",
    talents: { ...TALENTS.ROGUE, ...TALENTS.ROGUE_ASSASSINATION, ...TALENTS.ROGUE_SUBTLETY, ...TALENTS.ROGUE_OUTLAW },
    specs: SPECS.ROGUE,
    covenantSpells: COVENANT_SPELLS.ROGUE,
  },
  PRIEST: {
    id: 5 as ClassId,
    name: "Priest",
    importName: "PRIEST",
    colorHex: "FFFFFF",
    color: "classPriest",
    talents: { ...TALENTS.PRIEST, ...TALENTS.PRIEST_HOLY, ...TALENTS.PRIEST_DISCIPLINE, ...TALENTS.PRIEST_SHADOW },
    specs: SPECS.PRIEST,
    covenantSpells: COVENANT_SPELLS.PRIEST,
  },
  DEATHKNIGHT: {
    id: 6 as ClassId,
    name: "Death Knight",
    importName: "DEATHKNIGHT",
    colorHex: "C41E3A",
    color: "classDeathknight",
    talents: {
      ...TALENTS.DEATHKNIGHT,
      ...TALENTS.DEATHKNIGHT_BLOOD,
      ...TALENTS.DEATHKNIGHT_FROST,
      ...TALENTS.DEATHKNIGHT_UNHOLY,
    },
    specs: SPECS.DEATHKNIGHT,
    covenantSpells: COVENANT_SPELLS.DEATHKNIGHT,
  },
  SHAMAN: {
    id: 7 as ClassId,
    name: "Shaman",
    importName: "SHAMAN",
    colorHex: "0070DE",
    color: "classShaman",
    talents: {
      ...TALENTS.SHAMAN,
      ...TALENTS.SHAMAN_ENHANCEMENT,
      ...TALENTS.SHAMAN_ELEMENTAL,
      ...TALENTS.SHAMAN_RESTORATION,
    },
    specs: SPECS.SHAMAN,
    covenantSpells: COVENANT_SPELLS.SHAMAN,
  },
  MAGE: {
    id: 8 as ClassId,
    name: "Mage",
    importName: "MAGE",
    colorHex: "69CCF0",
    color: "classMage",
    talents: { ...TALENTS.MAGE, ...TALENTS.MAGE_ARCANE, ...TALENTS.MAGE_FIRE, ...TALENTS.MAGE_FROST },
    specs: SPECS.MAGE,
    covenantSpells: COVENANT_SPELLS.MAGE,
  },
  WARLOCK: {
    id: 9 as ClassId,
    name: "Warlock",
    importName: "WARLOCK",
    colorHex: "9482C9",
    color: "classWarlock",
    talents: {
      ...TALENTS.WARLOCK,
      ...TALENTS.WARLOCK_AFFLICTION,
      ...TALENTS.WARLOCK_DEMENOLOGY,
      ...TALENTS.WARLOCK_DESTRUCTION,
    },
    specs: SPECS.WARLOCK,
    covenantSpells: COVENANT_SPELLS.WARLOCK,
  },
  MONK: {
    id: 10 as ClassId,
    name: "Monk",
    importName: "MONK",
    colorHex: "00FF98",
    color: "classMonk",
    talents: { ...TALENTS.MONK, ...TALENTS.MONK_WINDWALKER, ...TALENTS.MONK_MISTWEAVER, ...TALENTS.MONK_BREWMASTER },
    specs: SPECS.MONK,
    covenantSpells: COVENANT_SPELLS.MONK,
  },
  DRUID: {
    id: 11 as ClassId,
    name: "Druid",
    importName: "DRUID",
    colorHex: "FF7D0A",
    color: "classDruid",
    talents: {
      ...TALENTS.DRUID,
      ...TALENTS.DRUID_BALANCE,
      ...TALENTS.DRUID_FERAL,
      ...TALENTS.DRUID_GUARDIAN,
      ...TALENTS.DRUID_RESTORATION,
    },
    specs: SPECS.DRUID,
    covenantSpells: COVENANT_SPELLS.DRUID,
  },
  DEMONHUNTER: {
    id: 12 as ClassId,
    name: "Demon Hunter",
    importName: "DEMONHUNTER",
    colorHex: "A330C9",
    color: "classDemonhunter",
    talents: { ...TALENTS.DEMONHUNTER, ...TALENTS.DEMONHUNTER_HAVOC, ...TALENTS.DEMONHUNTER_VENGEANCE },
    specs: SPECS.DEMONHUNTER,
    covenantSpells: COVENANT_SPELLS.DEMONHUNTER,
  },
};

export default classes;

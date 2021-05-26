import { SpellId } from "../types";

const spells = {
  SWIPE_CAT: {
    id: 106785 as SpellId,
    name: "Swipe",
    icon: "inv_misc_monsterclaw_03",
  },
  FEROCIOUS_BITE: {
    id: 22568 as SpellId,
    name: "Ferocious Bite",
    icon: "ability_druid_ferociousbite",
  },
  RIP: {
    id: 1079 as SpellId,
    name: "Rip",
    icon: "ability_ghoulfrenzy",
  },
  RAKE: {
    id: 1822 as SpellId,
    name: "Rake",
    icon: "ability_druid_disembowel",
  },
  TIGERS_FURY: {
    id: 5217 as SpellId,
    name: "Tiger's Fury",
    icon: "ability_mount_jungletiger",
  },
  SKULL_BASH_FERAL: {
    id: 93985 as SpellId,
    name: "Skull Bash",
    icon: "inv_bone_skull_04",
  },
  PRIMAL_FURY: {
    id: 16953 as SpellId,
    name: "Primal Fury",
    icon: "ability_racial_cannibalize",
  },
  MAIM: {
    id: 22570 as SpellId,
    name: "Maim",
    icon: "ability_druid_mangle",
  },
  MAIM_DEBUFF: {
    // the stun caused by Maim, which shows in the log as a 0 damage event
    id: 203123 as SpellId,
    name: "Maim",
    icon: "ability_druid_mangle",
  },
  RAKE_BLEED: {
    id: 155722 as SpellId,
    name: "Rake",
    icon: "ability_druid_disembowel",
  },
  RAKE_STUN: {
    id: 163505 as SpellId,
    name: "Rake",
    icon: "ability_druid_disembowel",
  },
  MOONFIRE_FERAL: {
    id: 155625 as SpellId,
    name: "Moonfire",
    icon: "spell_nature_starfall",
  },
  THRASH_FERAL: {
    id: 106830 as SpellId,
    name: "Thrash",
    icon: "spell_druid_thrash",
  },
  BERSERK: {
    id: 106951 as SpellId,
    name: "Berserk",
    icon: "ability_druid_berserk",
  },
  PROWL: {
    id: 5215 as SpellId,
    name: "Prowl",
    icon: "ability_druid_prowl",
  },
  // a version of prowl that can be activated in combat through the Incarnation: King of the Jungle talent
  PROWL_INCARNATION: {
    id: 102547 as SpellId,
    name: "Prowl",
    icon: "ability_druid_prowl",
  },
  // buff from the bloodtalons talent (different id from BLOODTALONS_TALENT)
  BLOODTALONS_BUFF: {
    id: 145152 as SpellId,
    name: "Bloodtalons",
    icon: "spell_druid_bloodythrash",
  },
  FERAL_FRENZY_DEBUFF: {
    id: 274838 as SpellId,
    name: "Feral Frenzy",
    icon: "ability_druid_rake",
  },
  CLEARCASTING_FERAL: {
    id: 135700 as SpellId,
    name: "Clearcasting",
    icon: "spell_shadow_manaburn",
  },
  INFECTED_WOUNDS_DEBUFF: {
    id: 58180 as SpellId,
    name: "Infected Wounds",
    icon: "ability_druid_infectedwound",
  },
  MASTERY_RAZOR_CLAWS: {
    id: 77493 as SpellId,
    name: "Mastery: Razor Claws",
    icon: "inv_misc_monsterclaw_05",
  },
  PREDATORY_SWIFTNESS: {
    id: 69369 as SpellId,
    name: "Predatory Swiftness",
    icon: "ability_hunter_pet_cat",
  },
  JUNGLE_STALKER: {
    id: 252071 as SpellId,
    name: "Jungle Stalker",
    icon: "ability_mount_siberiantigermount",
  },
  // effect that shows up in the combat log for energy generated from feral's Soul of the Forest talent.
  SOUL_OF_THE_FOREST_FERAL_ENERGY: {
    id: 114113 as SpellId,
    name: "Soul of the Forest",
    icon: "ability_druid_manatree",
  },

  // feral legion tier sets
  FERAL_DRUID_T19_2SET_BONUS_BUFF: {
    id: 211140 as SpellId,
    name: "T19 2 set bonus",
    icon: "trade_engineering",
  },
  FERAL_DRUID_T19_4SET_BONUS_BUFF: {
    id: 211142 as SpellId,
    name: "T19 4 set bonus",
    icon: "trade_engineering",
  },
  FERAL_DRUID_T20_2SET_BONUS_BUFF: {
    id: 242234 as SpellId,
    name: "T20 2 set bonus",
    icon: "ability_druid_catform",
  },
  ENERGETIC_RIP: {
    id: 245591 as SpellId,
    name: "Energetic Rip",
    icon: "ability_deathwing_bloodcorruption_earth",
  },
  FERAL_DRUID_T20_4SET_BONUS_BUFF: {
    id: 242235 as SpellId,
    name: "T20 4 set bonus",
    icon: "ability_druid_catform",
  },
  FERAL_DRUID_T21_2SET_BONUS_BUFF: {
    id: 251789 as SpellId,
    name: "T21 2 set bonus",
    icon: "ability_druid_cower",
  },
  BLOODY_GASH: {
    id: 252750 as SpellId,
    name: "Bloody Gash",
    icon: "artifactability_feraldruid_ashamanesbite",
  },
  FERAL_DRUID_T21_4SET_BONUS_BUFF: {
    id: 251790 as SpellId,
    name: "T21 4 set bonus",
    icon: "ability_druid_cower",
  },
  APEX_PREDATOR: {
    id: 252752 as SpellId,
    name: "Apex Predator",
    icon: "ability_druid_primaltenacity",
  },
};

export default spells;

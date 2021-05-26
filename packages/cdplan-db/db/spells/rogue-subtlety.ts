import { SpellId } from "../types";

const spells = {
  BACKSTAB: {
    id: 53 as SpellId,
    name: "Backstab",
    icon: "ability_backstab",
  },
  SHADOWSTRIKE: {
    id: 185438 as SpellId,
    name: "Shadowstrike",
    icon: "ability_rogue_shadowstrike",
  },
  SHURIKEN_STORM: {
    id: 197835 as SpellId,
    name: "Shuriken Storm",
    icon: "ability_rogue_shurikenstorm",
  },
  SHURIKEN_TOSS: {
    id: 114014 as SpellId,
    name: "Shuriken Toss",
    icon: "inv_throwingknife_07",
  },
  // Main finishing move
  NIGHTBLADE: {
    id: 195452 as SpellId,
    name: "Nightblade",
    icon: "ability_rogue_nightblade",
  },
  EVISCERATE: {
    id: 196819 as SpellId,
    name: "Eviscerate",
    icon: "ability_rogue_eviscerate",
  },
  BLACK_POWDER: {
    id: 319175 as SpellId,
    name: "Black Powder",
    icon: "spell_priest_divinestar_shadow",
  },
  // Offensive cooldown
  SHADOW_BLADES: {
    id: 121471 as SpellId,
    name: "Shadow Blades",
    icon: "inv_knife_1h_grimbatolraid_d_03",
  },
  SHADOW_DANCE: {
    id: 185313 as SpellId,
    name: "Shadow Dance",
    icon: "ability_rogue_shadowdance",
  },
  SHADOW_DANCE_BUFF: {
    id: 185422 as SpellId,
    name: "Shadow Dance",
    icon: "ability_rogue_shadowdance",
  },
  SYMBOLS_OF_DEATH: {
    id: 212283 as SpellId,
    name: "Symbols of Death",
    icon: "spell_shadow_rune",
  },

  // CP Generation
  SHADOW_TECHNIQUES: {
    id: 196911 as SpellId,
    name: "Shadow Techniques",
    icon: "ability_rogue_masterofsubtlety",
  },
  SHURIKEN_STORM_CP: {
    id: 212743 as SpellId,
    name: "Shuriken Storm",
    icon: "ability_rogue_shurikenstorm",
  },
  // ENERGY REGEN
  RELENTLESS_STRIKES: {
    id: 98440 as SpellId,
    name: "Relentless Strikes",
    icon: "ability_warrior_decisivestrike",
  },
  SHADOW_SATYRS_WALK_ENERGY_BASE: {
    id: 224914 as SpellId,
    name: "Shadow Satyr's Walk",
    icon: "inv_boots_mail_dungeonmail_c_04",
  },
  SHADOW_SATYRS_WALK_ENERGY_EXTRA: {
    id: 208440 as SpellId,
    name: "Shadow Satyr's Walk",
    icon: "inv_boots_mail_dungeonmail_c_04",
  },
  MASTER_OF_SHADOWS_ENERGY: {
    id: 196980 as SpellId,
    name: "Master of Shadows",
    icon: "spell_shadow_charm",
  },

  //Buffs
  MASTER_ASSASSINS_INITIATIVE_BUFF: {
    id: 235027 as SpellId,
    name: "Master Assassin's Initiative",
    icon: "inv_weapon_shortblade_25",
  },
  THE_FIRST_OF_THE_DEAD_BUFF: {
    id: 248210 as SpellId,
    name: "The First of the Dead",
    icon: "inv_glove_cloth_raidwarlockmythic_q_01",
  },

  // Sets

  //Tooltips for T20 are swapped on Wowhead.
  //Names of variables correctly reflect in-game.
  SUB_ROGUE_T20_2SET_BONUS: {
    id: 242280 as SpellId,
    name: "T20 2 set bonus",
    icon: "spell_shadow_rune",
  },
  SUB_ROGUE_T20_4SET_BONUS: {
    id: 242279 as SpellId,
    name: "T20 4 set bonus",
    icon: "ability_stealth",
  },

  SUB_ROGUE_T21_2SET_BONUS: {
    id: 251785 as SpellId,
    name: "T21 2 set bonus",
    icon: "ability_rogue_eviscerate",
  },
  SUB_ROGUE_T21_4SET_BONUS: {
    id: 251788 as SpellId,
    name: "T21 4 set bonus",
    icon: "ability_rogue_eviscerate",
  },
  SUB_ROGUE_T21_4SET_BONUS_BUFF: {
    id: 257945 as SpellId,
    name: "Shadow Gestures",
    icon: "spell_shadow_painspike",
  },
  SUB_ROGUE_T21_4SET_BONUS_CP_EFFECT: {
    id: 252732 as SpellId,
    name: "Shadow Gestures",
    icon: "ability_rogue_eviscerate",
  },
};

export default spells;

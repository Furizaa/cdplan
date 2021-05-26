import { SpellId } from "../types";

const spells = {
  BATTLE_SHOUT: {
    id: 6673 as SpellId,
    name: "Battle Shout",
    icon: "ability_warrior_battleshout",
  },
  BERSERKER_RAGE: {
    id: 18499 as SpellId,
    name: "Berserker Rage",
    icon: "spell_nature_ancestralguardian",
  },
  CHALLENGING_SHOUT: {
    id: 1161 as SpellId,
    name: "Challenging Shout",
    icon: "ability_bullrush",
  },
  // Utility
  CHARGE: {
    id: 100 as SpellId,
    name: "Charge",
    icon: "ability_warrior_charge",
  },
  CHARGE_2: {
    id: 126664 as SpellId,
    name: "Charge",
    icon: "ability_warrior_charge",
  },

  // have to double check
  CHARGE_SLOW: {
    id: 236027 as SpellId,
    name: "Charge",
    icon: "ability_rogue_trip",
  },
  CHARGE_ROOT: {
    id: 105771 as SpellId,
    name: "Charge",
    icon: "ability_warrior_charge",
  },
  // so execute is a mess... its all shared but its not
  // Arms/prot
  EXECUTE: {
    id: 163201 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  EXECUTE_GLYPHED: {
    id: 281000 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  EXECUTE_DAMAGE: {
    id: 260798 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  // Fury
  EXECUTE_FURY: {
    id: 5308 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  EXECUTE_FURY_MASSACRE: {
    id: 280735 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  EXECUTE_DAMAGE_FURY: {
    id: 280849 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  EXECUTE_DAMAGE_OH_FURY: {
    id: 163558 as SpellId,
    name: "Execute",
    icon: "inv_sword_48",
  },
  HAMSTRING: {
    id: 1715 as SpellId,
    name: "Hamstring",
    icon: "ability_shockwave",
  },
  HEROIC_LEAP: {
    id: 52174 as SpellId,
    name: "Heroic Leap",
    icon: "ability_heroicleap",
  },
  HEROIC_THROW: {
    id: 57755 as SpellId,
    name: "Heroic Throw",
    icon: "inv_axe_66",
  },
  IGNORE_PAIN: {
    id: 190456 as SpellId,
    name: "Ignore Pain",
    icon: "ability_warrior_renewedvigor",
  },
  INTERVENE_CAST: {
    id: 3411 as SpellId,
    name: "Intervene",
    icon: "ability_warrior_victoryrush",
  },
  INTERVENE_BUFF: {
    id: 147833 as SpellId,
    name: "Intervene",
    icon: "ability_warrior_victoryrush",
  },
  INTERVENE_CHARGE: {
    id: 316531 as SpellId,
    name: "Intervene",
    icon: "ability_warrior_victoryrush",
  },
  INTIMIDATING_SHOUT: {
    id: 5246 as SpellId,
    name: "Intimidating Shout",
    icon: "ability_golemthunderclap",
  },
  PUMMEL: {
    id: 6552 as SpellId,
    name: "Pummel",
    icon: "inv_gauntlets_04",
  },
  RALLYING_CRY: {
    id: 97462 as SpellId,
    name: "Rallying Cry",
    icon: "ability_warrior_rallyingcry",
  },
  RALLYING_CRY_BUFF: {
    id: 97463 as SpellId,
    name: "Rallying Cry",
    icon: "ability_warrior_rallyingcry",
  },
  SHATTERING_THROW: {
    id: 64382 as SpellId,
    name: "Shattering Throw",
    icon: "ability_warrior_shatteringthrow",
  },
  SHIELD_BLOCK: {
    id: 2565 as SpellId,
    name: "Shield Block",
    icon: "ability_defend",
  },
  SHIELD_BLOCK_BUFF: {
    id: 132404 as SpellId,
    name: "Shield Block Buff",
    icon: "ability_defend",
  },
  SHIELD_SLAM: {
    id: 23922 as SpellId,
    name: "Shield Slam",
    icon: "inv_shield_05",
  },
  SLAM: {
    id: 1464 as SpellId,
    name: "Slam",
    icon: "ability_warrior_decisivestrike",
  },
  SPELL_REFLECTION: {
    id: 23920 as SpellId,
    name: "Spell Reflection",
    icon: "ability_warrior_shieldreflection",
  },
  TAUNT: {
    id: 355 as SpellId,
    name: "Taunt",
    icon: "spell_nature_reincarnation",
  },
  VICTORY_RUSH: {
    id: 34428 as SpellId,
    name: "Victory Rush",
    icon: "ability_warrior_devastate",
  },
  // Shared but not really
  // Arms/prot
  WHIRLWIND: {
    id: 1680 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  WHIRLWIND_DAMAGE_1: {
    id: 199658 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  WHIRLWIND_DAMAGE_2_3: {
    id: 199850 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  // Fury
  WHIRLWIND_FURY_CAST: {
    id: 190411 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  WHIRLWIND_FURY_ENERGIZE: {
    id: 280715 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  WHIRLWIND_FURY_DAMAGE_MH: {
    id: 199667 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  WHIRLWIND_FURY_DAMAGE_OH: {
    id: 44949 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  // ??? nobody can tell me why but these are in log
  WHIRLWIND_FURY_DAMAGE_OTHER_MH: {
    id: 199852 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  WHIRLWIND_FURY_DAMAGE_OTHER_OH: {
    id: 199851 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },
  // The cleave buff of whirlwind
  WHIRLWIND_BUFF: {
    id: 85739 as SpellId,
    name: "Whirlwind",
    icon: "ability_whirlwind",
  },

  // Arms/Fury:
  PIERCING_HOWL: {
    id: 12323 as SpellId,
    name: "Piercing Howl",
    icon: "spell_shadow_deathscream",
  },

  // Arms/Prot
  RAVAGER_DAMAGE: {
    id: 156287 as SpellId,
    name: "Ravager",
    icon: "warrior_talent_icon_ravager",
  },
  RAVAGER_ENERGIZE: {
    id: 334934 as SpellId,
    name: "Ravager",
    icon: "warrior_talent_icon_ravager",
  },

  // Shared Talent buffs
  BOUNDING_STRIDE_BUFF: {
    id: 202164 as SpellId,
    name: "Bounding Stride",
    icon: "ability_heroicleap",
  },
  WAR_MACHINE_TALENT_BUFF: {
    id: 262232 as SpellId,
    name: "War Machine",
    icon: "ability_hunter_rapidkilling",
  },
  STORM_BOLT_TALENT_DEBUFF: {
    id: 132169 as SpellId,
    name: "Storm Bolt",
    icon: "warrior_talent_icon_stormbolt",
  },
  IMPENDING_VICTORY_TALENT_HEAL: {
    id: 202166 as SpellId,
    name: "Impending Victory",
    icon: "spell_impending_victory",
  },
};

export default spells;

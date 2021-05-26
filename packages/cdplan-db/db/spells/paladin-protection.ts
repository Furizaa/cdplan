import { SpellId } from "../types";

const spells = {
  ARDENT_DEFENDER: {
    id: 31850 as SpellId,
    name: "Ardent Defender",
    icon: "spell_holy_ardentdefender",
  },
  AVENGERS_SHIELD: {
    id: 31935 as SpellId,
    name: "Avenger's Shield",
    icon: "spell_holy_avengersshield",
  },
  GUARDIAN_OF_ANCIENT_KINGS: {
    id: 86659 as SpellId,
    name: "Guardian of Ancient Kings",
    icon: "spell_holy_heroism",
  },
  // GoAK has a different spell ID with Glyph of the Queen
  GUARDIAN_OF_ANCIENT_KINGS_QUEEN: {
    id: 212641 as SpellId,
    name: "Guardian of Ancient Kings",
    icon: "spell_holy_heroism",
  },
  HAMMER_OF_THE_RIGHTEOUS: {
    id: 53595 as SpellId,
    name: "Hammer of the Righteous",
    icon: "ability_paladin_hammeroftherighteous",
  },
  LIGHT_OF_THE_PROTECTOR: {
    id: 184092 as SpellId,
    name: "Light of the Protector",
    icon: "ability_paladin_lightoftheprotector",
  },
  SHIELD_OF_THE_RIGHTEOUS: {
    id: 53600 as SpellId,
    name: "Shield of the Righteous",
    icon: "ability_paladin_shieldofvengeance",
  },
  CLEANSE_TOXINS: {
    id: 213644 as SpellId,
    name: "Cleanse Toxins",
    icon: "spell_holy_renew",
  },
  REBUKE: {
    id: 96231 as SpellId,
    name: "Rebuke",
    icon: "spell_holy_rebuke",
  },
  GRAND_CRUSADER: {
    id: 85043 as SpellId,
    name: "Grand Crusader",
    icon: "inv_helmet_74",
  },
  //artifact
  EYE_OF_TYR: {
    id: 209202 as SpellId,
    name: "Eye of Tyr",
    icon: "inv_shield_1h_artifactnorgannon_d_01",
  },
  UNFLINCHING_DEFENSE: {
    id: 209220 as SpellId,
    name: "Unflinching Defense",
    icon: "spell_holy_ardentdefender",
  },
  SACRIFICE_OF_THE_JUST: {
    id: 209285 as SpellId,
    name: "Sacrifice of the Just",
    icon: "spell_holy_divineshield",
  },

  // Buffs
  SHIELD_OF_THE_RIGHTEOUS_BUFF: {
    id: 132403 as SpellId,
    name: "Shield of the Righteous",
    icon: "ability_paladin_shieldofvengeance",
  },
  CONSECRATION_BUFF: {
    id: 188370 as SpellId,
    name: "Consecration",
    icon: "spell_holy_innerfire",
  },
  BLESSED_STALWART_BUFF: {
    id: 242869 as SpellId,
    name: "Blessed Stalwart",
    icon: "ability_paladin_shieldofvengeance",
  },
  FAITHS_ARMOR_BUFF: {
    id: 211903 as SpellId,
    name: "Faith's Armor",
    icon: "inv_misc_armorkit_23",
  },
  BULWARK_OF_ORDER_SHIELD: {
    id: 209388 as SpellId,
    name: "Bulwark of Order",
    icon: "spell_holy_pureofheart",
  },
  IMMORTAL_OBJECT: {
    id: 207603 as SpellId,
    name: "Immortal Object",
    icon: "spell_holy_avengersshield",
  },
  SHINING_LIGHT: {
    id: 327510 as SpellId,
    name: "Shining Light",
    icon: "ability_paladin_lightoftheprotector",
  },
  REDOUBT_BUFF: {
    id: 280375 as SpellId,
    name: "Redoubt",
    icon: "ability_warrior_shieldguard",
  },
  // the shining light buff does not have a proper tooltip. this one does. used in display
  SHINING_LIGHT_DESC: {
    id: 321136 as SpellId,
    name: "Shining Light",
    icon: "ability_paladin_toweroflight",
  },
  // Bonus set tiers
  PROTECTION_PALADIN_T19_2SET_BONUS_BUFF: {
    id: 211553 as SpellId,
    name: "T19 2 Set Bonus",
    icon: "trade_engineering",
  },
  PROTECTION_PALADIN_T19_4SET_BONUS_BUFF: {
    id: 211554 as SpellId,
    name: "T19 4 Set Bonus",
    icon: "trade_engineering",
  },
  PROTECTION_PALADIN_T20_2SET_BONUS_BUFF: {
    id: 242263 as SpellId,
    name: "T20 2 Set Bonus",
    icon: "ability_paladin_shieldofthetemplar",
  },
  PROTECTION_PALADIN_T20_4SET_BONUS_BUFF: {
    id: 242264 as SpellId,
    name: "T20 4 Set Bonus",
    icon: "ability_paladin_shieldofthetemplar",
  },
  //DEBUFFS
  AVENGERS_PROTECTION_DEBUFF: {
    id: 242265 as SpellId,
    name: "Avenger's Protection",
    icon: "ability_paladin_shieldofthetemplar",
  },
  BLESSED_HAMMER_DEBUFF: {
    id: 204301 as SpellId,
    name: "Blessed Hammer",
    icon: "paladin_retribution",
  },
  JUDGMENT_OF_LIGHT_DEBUFF: {
    id: 196941 as SpellId,
    name: "Judgement of Light",
    icon: "spell_holy_divineprovidence",
  },
  // Shared:
  CONSECRATION_CAST: {
    id: 26573 as SpellId,
    name: "Consecration",
    icon: "spell_holy_innerfire",
  },
  CONSECRATION_DAMAGE: {
    id: 81297 as SpellId,
    name: "Consecration",
    icon: "spell_holy_innerfire",
  },
  DIVINE_SHIELD: {
    id: 642 as SpellId,
    name: "Divine Shield",
    icon: "spell_holy_divineshield",
  },
};

export default spells;

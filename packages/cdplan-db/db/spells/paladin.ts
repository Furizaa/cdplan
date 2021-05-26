import { SpellId } from "../types";

const spells = {
  CRUSADER_STRIKE: {
    id: 35395 as SpellId,
    name: "Crusader Strike",
    icon: "spell_holy_crusaderstrike",
  },
  JUDGMENT_CAST: {
    id: 20271 as SpellId,
    name: "Judgment",
    icon: "spell_holy_righteousfury",
    manaCost: 300,
  },
  JUDGMENT_CAST_HOLY: {
    id: 275773 as SpellId,
    name: "Judgment",
    icon: "spell_holy_righteousfury",
    manaCost: 300,
  },
  JUDGMENT_CAST_PROTECTION: {
    id: 275779 as SpellId,
    name: "Judgment",
    icon: "spell_holy_righteousfury",
  },
  JUDGMENT_HP_ENERGIZE: {
    id: 220637 as SpellId,
    name: "Judgment",
    icon: "spell_holy_righteousfury",
    manaCost: 300,
  },
  DIVINE_STEED: {
    id: 190784 as SpellId,
    name: "Divine Steed",
    icon: "ability_paladin_divinesteed",
  },
  DIVINE_STEED_BUFF: {
    id: 221883 as SpellId,
    name: "Divine Steed",
    icon: "ability_paladin_divinesteed",
  },
  DIVINE_STEED_BUFF_ALT: {
    // probably class mount glyph
    id: 254471 as SpellId,
    name: "Divine Steed",
    icon: "ability_paladin_divinesteed",
  },
  DIVINE_STEED_BUFF_ALT_2: {
    // probably class mount glyph - https://www.warcraftlogs.com/reports/4DWRHk73Vvt1wmz2/#fight=22&type=auras&source=20
    id: 276112 as SpellId,
    name: "Divine Steed",
    icon: "ability_paladin_divinesteed",
  },
  DIVINE_STEED_BUFF_ALT_3: {
    // Silvermoon charger I think - https://www.warcraftlogs.com/reports/TrfWp1jHdRtQDqkx/#fight=2&source=37&type=auras
    id: 221886 as SpellId,
    name: "Divine Steed",
    icon: "ability_paladin_divinesteed",
  },
  HAND_OF_RECKONING: {
    id: 62124 as SpellId,
    name: "Hand of Reckoning",
    icon: "spell_holy_unyieldingfaith",
  },
  LAY_ON_HANDS: {
    id: 633 as SpellId,
    name: "Lay on Hands",
    icon: "spell_holy_layonhands",
  },
  BLESSING_OF_FREEDOM: {
    id: 1044 as SpellId,
    name: "Blessing of Freedom",
    icon: "spell_holy_sealofvalor",
  },
  BLESSING_OF_PROTECTION: {
    id: 1022 as SpellId,
    name: "Blessing of Protection",
    icon: "spell_holy_sealofprotection",
  },
  HAMMER_OF_JUSTICE: {
    id: 853 as SpellId,
    name: "Hammer of Justice",
    icon: "spell_holy_sealofmight",
  },
  HAMMER_OF_WRATH: {
    id: 24275 as SpellId,
    name: "Hammer of Wrath",
    icon: "spell_paladin_hammerofwrath",
  },
  WORD_OF_GLORY: {
    id: 85673 as SpellId,
    name: "Word of Glory",
    icon: "inv_helmet_96",
  },
  CRUSADER_AURA: {
    id: 32223 as SpellId,
    name: "Crusader Aura",
    icon: "spell_holy_crusaderaura",
  },
  RETRIBUTION_AURA: {
    id: 183435 as SpellId,
    name: "Retribution Aura",
    icon: "spell_holy_crusade",
  },
  CONCENTRATION_AURA: {
    id: 317920 as SpellId,
    name: "Concentration Aura",
    icon: "spell_holy_mindsooth",
  },
  DEVOTION_AURA: {
    id: 465 as SpellId,
    name: "Devotion Aura",
    icon: "spell_holy_devotionaura",
  },
  TURN_EVIL: {
    id: 10326 as SpellId,
    name: "Turn Evil",
    icon: "ability_paladin_turnevil",
  },
  SENSE_UNDEAD: {
    id: 5502 as SpellId,
    name: "Sense Undead",
    icon: "spell_holy_senseundead",
  },
  AVENGING_WRATH: {
    id: 31884 as SpellId,
    name: "Avenging Wrath",
    icon: "spell_holy_avenginewrath",
  },
  AVENGING_WRATH_GUARANTEED_CRIT_BUFF: {
    id: 294027 as SpellId,
    name: "Avenging Wrath",
    icon: "spell_holy_avenginewrath",
  },
};

export default spells;

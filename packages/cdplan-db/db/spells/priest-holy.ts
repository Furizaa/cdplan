import { Spell, SpellId } from "../types";

const spells: Record<string, Spell> = {
  GREATER_HEAL: {
    id: 2060 as SpellId,
    name: "Heal",
    icon: "spell_holy_greaterheal",
    manaCost: 1200,
  },
  CIRCLE_OF_HEALING_TALENT: {
    id: 204883 as SpellId,
    name: "Circle of Healing",
    icon: "spell_holy_circleofrenewal",
    manaCost: 1650,
  },
  FLASH_HEAL: {
    id: 2061 as SpellId,
    name: "Flash Heal",
    icon: "spell_holy_flashheal",
    manaCost: 1800,
  },
  PRAYER_OF_MENDING_CAST: {
    id: 33076 as SpellId,
    name: "Prayer of Mending",
    icon: "spell_holy_prayerofmendingtga",
    manaCost: 1000,
  },
  PRAYER_OF_MENDING_HEAL: {
    id: 33110 as SpellId,
    name: "Prayer of Mending",
    icon: "spell_holy_prayerofmendingtga",
  },
  PRAYER_OF_MENDING_BUFF: {
    id: 41635 as SpellId,
    name: "Prayer of Mending",
    icon: "spell_holy_prayerofmendingtga",
  },
  PRAYER_OF_HEALING: {
    id: 596 as SpellId,
    name: "Prayer of Healing",
    icon: "spell_holy_prayerofhealing02",
    manaCost: 2500,
  },
  ECHO_OF_LIGHT_MASTERY: {
    id: 77485 as SpellId,
    name: "Echo of Light",
    icon: "spell_holy_aspiration",
  },
  ECHO_OF_LIGHT_HEAL: {
    id: 77489 as SpellId,
    name: "Echo of Light",
    icon: "spell_holy_aspiration",
  },
  RENEW: {
    id: 139 as SpellId,
    name: "Renew",
    icon: "spell_holy_renew",
    manaCost: 900,
  },
  HOLY_WORD_SERENITY: {
    id: 2050 as SpellId,
    name: "Holy Word: Serenity",
    icon: "spell_holy_persuitofjustice",
    manaCost: 2000,
  },
  HOLY_WORD_SANCTIFY: {
    id: 34861 as SpellId,
    name: "Holy Word: Sanctify",
    icon: "spell_holy_divineprovidence",
    manaCost: 2500,
  },
  GUARDIAN_SPIRIT: {
    id: 47788 as SpellId,
    name: "Guardian Spirit",
    icon: "spell_holy_guardianspirit",
    manaCost: 450,
  },
  GUARDIAN_SPIRIT_HEAL: {
    id: 48153 as SpellId,
    name: "Guardian Spirit",
    icon: "spell_holy_guardianspirit",
  },
  DIVINE_HYMN_CAST: {
    id: 64843 as SpellId,
    name: "Divine Hymn",
    icon: "spell_holy_divinehymn",
    manaCost: 2200,
  },
  DIVINE_HYMN_HEAL: {
    id: 64844 as SpellId,
    name: "Divine Hymn",
    icon: "spell_holy_divinehymn",
  },
  HOLY_WORDS: {
    id: 63733 as SpellId,
    name: "Holy Words",
    icon: "spell_holy_serendipity",
  },
  HOLY_FIRE: {
    id: 14914 as SpellId,
    name: "Holy Fire",
    icon: "spell_holy_searinglight",
    manaCost: 500,
  },
  HOLY_WORD_CHASTISE: {
    id: 88625 as SpellId,
    name: "Holy Word: Chastise",
    icon: "spell_holy_chastise",
    manaCost: 1000,
  },
  HOLY_WORD_CHASTISE_CENSURE_INCAPACITATE: {
    id: 200196 as SpellId,
    name: "Holy Word: Chastise",
    icon: "spell_holy_chastise",
    manaCost: 1000,
  },
  HOLY_WORD_CHASTISE_CENSURE_STUN: {
    id: 200200 as SpellId,
    name: "Holy Word: Chastise",
    icon: "spell_holy_chastise",
    manaCost: 1000,
  },
  SYMBOL_OF_HOPE: {
    id: 64901 as SpellId,
    name: "Symbol of Hope",
    icon: "spell_holy_symbolofhope",
  },
  TRAIL_OF_LIGHT_HEAL: {
    id: 234946 as SpellId,
    name: "Trail of Light",
    icon: "ability_priest_wordsofmeaning",
  },
  SURGE_OF_LIGHT_BUFF: {
    id: 114255 as SpellId,
    name: "Surge of Light",
    icon: "spell_holy_surgeoflight",
  },
  COSMIC_RIPPLE_HEAL: {
    id: 243241 as SpellId,
    name: "Cosmic Ripple Heal",
    icon: "spell_holy_summonlightwell",
  },
  // Buffs
  SPIRIT_OF_REDEMPTION_BUFF: {
    id: 27827 as SpellId,
    name: "Spirit of Redemption",
    icon: "inv_enchant_essenceeternallarge",
  },
  // Items
  DIVINE_IMAGE: {
    id: 336401 as SpellId,
    name: "Divine Image",
    icon: "ability_priest_ascension",
  },
};

export default spells;

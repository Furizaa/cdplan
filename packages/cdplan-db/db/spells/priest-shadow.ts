import { SpellId } from "../types";

const spells = {
  MIND_BLAST: {
    id: 8092 as SpellId,
    name: "Mind Blast",
    icon: "spell_shadow_unholyfrenzy",
    manaCost: 1250,
  },
  MIND_FLAY: {
    id: 15407 as SpellId,
    name: "Mind Flay",
    icon: "spell_shadow_siphonmana",
  },
  VAMPIRIC_TOUCH: {
    id: 34914 as SpellId,
    name: "Vampiric Touch",
    icon: "spell_holy_stoicism",
  },
  DEVOURING_PLAGUE: {
    id: 335467 as SpellId,
    name: "Devouring Plague",
    icon: "spell_shadow_devouringplague",
  },
  VOID_ERUPTION: {
    id: 228260 as SpellId,
    name: "Void Eruption",
    icon: "spell_priest_void-blast",
  },
  MASTERY_SHADOW_WEAVING: {
    id: 343690 as SpellId,
    name: "Mastery: Shadow Weaving",
    icon: "spell_shadow_shadetruesight",
  },

  // From shadow word pain/vampiric touch:
  VOID_ERUPTION_DAMAGE_1: {
    id: 228360 as SpellId,
    name: "Void Eruption",
    icon: "spell_priest_void-blast",
  },

  // From shadow word pain/vampiric touch:
  VOID_ERUPTION_DAMAGE_2: {
    id: 228361 as SpellId,
    name: "Void Eruption",
    icon: "spell_priest_void-blast",
  },

  // Void torrent debuff applied on enemy
  VOID_TORRENT_BUFF: {
    id: 289577 as SpellId,
    name: "Void Torrent",
    icon: "spell_priest_voidsear",
  },

  VOID_BOLT: {
    id: 205448 as SpellId,
    name: "Void Bolt",
    icon: "ability_ironmaidens_convulsiveshadows",
  },

  VOID_BOLT_DISSONANT_ECHOES: {
    id: 343355 as SpellId,
    name: "Void Bolt",
    icon: "ability_ironmaidens_convulsiveshadows",
  },

  DISPERSION: {
    id: 47585 as SpellId,
    name: "Dispersion",
    icon: "spell_shadow_dispersion",
  },

  VAMPIRIC_EMBRACE: {
    id: 15286 as SpellId,
    name: "Vampiric Embrace",
    icon: "spell_shadow_unsummonbuilding",
  },

  VAMPIRIC_EMBRACE_HEAL: {
    id: 15290 as SpellId,
    name: "Vampiric Embrace",
    icon: "spell_shadow_unsummonbuilding",
  },

  SILENCE: {
    id: 15487 as SpellId,
    name: "Silence",
    icon: "ability_priest_silence",
  },

  PURIFY_DISEASE: {
    id: 213634 as SpellId,
    name: "Purify Disease",
    icon: "spell_holy_nullifydisease",
  },

  SHADOWFORM: {
    id: 232698 as SpellId,
    name: "Shadowform",
    icon: "spell_shadow_shadowform",
  },
  RESURRECTION: {
    id: 2006 as SpellId,
    name: "Resurrection",
    icon: "spell_holy_resurrection",
  },

  MIND_VISION: {
    id: 2096 as SpellId,
    name: "Mind Vision",
    icon: "spell_holy_mindvision",
    manaCost: 1000,
  },

  MIND_SEAR: {
    id: 48045 as SpellId,
    name: "Mind Sear",
    icon: "spell_shadow_mindshear",
    manaCost: 300,
  },

  SHADOWY_APPARITION: {
    id: 147193 as SpellId,
    name: "Shadowy Apparition",
    icon: "ability_priest_shadowyapparition",
  },

  SHADOWY_APPARITION_DAMAGE: {
    id: 148859 as SpellId,
    name: "Shadowy Apparition",
    icon: "ability_priest_shadowyapparition",
  },

  SHADOWY_APPARITION_CAST: {
    id: 341263 as SpellId,
    name: "Shadowy Apparition",
    icon: "ability_priest_shadowyapparition",
  },

  // Shadow Buffs

  VOIDFORM: {
    id: 228264 as SpellId,
    name: "Voidform",
    icon: "spell_priest_voidform",
  },

  VOIDFORM_BUFF: {
    id: 194249 as SpellId,
    name: "Voidform",
    icon: "spell_priest_voidform",
  },

  DARK_THOUGHTS: {
    id: 341205 as SpellId,
    name: "Dark Thoughts",
    icon: "ability_priest_thoughtsteal01",
  },

  DARK_THOUGHT_BUFF: {
    id: 341207 as SpellId,
    name: "Dark Thought",
    icon: "ability_priest_thoughtsteal01",
  },

  UNFURLING_DARKNESS_BUFF: {
    id: 341282 as SpellId,
    name: "Unfurling Darkness",
    icon: "spell_priest_shadow-mend",
  },

  DEATH_AND_MADNESS_BUFF: {
    id: 321973 as SpellId,
    name: "Death and Madness",
    icon: "spell_shadow_painandsuffering",
  },

  // Shadow items:

  SHADOW_CRASH_TALENT_DAMAGE: {
    id: 205386 as SpellId,
    name: "Shadow Crash",
    icon: "spell_shadow_shadowfury",
  },

  // Disc
  SPIRIT_SHELL_TALENT_BUFF: {
    id: 114908 as SpellId,
    name: "Spirit Shell",
    icon: "ability_shaman_astralshift.jpg",
  },
};

export default spells;

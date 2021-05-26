import { SpellId } from "../types";

const spells = {
  // Mastery
  MASTERY_HARMONY: {
    id: 77495 as SpellId,
    name: "Mastery: Harmony",
    icon: "spell_nature_healingway",
  },

  // Spells / Buffs
  TRANQUILITY_CAST: {
    id: 740 as SpellId,
    name: "Tranquility",
    icon: "spell_nature_tranquility",
    manaCost: 1840,
  },
  TRANQUILITY_HEAL: {
    id: 157982 as SpellId,
    name: "Tranquility",
    icon: "spell_nature_tranquility",
  },
  INNERVATE: {
    id: 29166 as SpellId,
    name: "Innervate",
    icon: "spell_nature_lightning",
  },
  IRONBARK: {
    id: 102342 as SpellId,
    name: "Ironbark",
    icon: "spell_druid_ironbark",
  },
  BARKSKIN: {
    id: 22812 as SpellId,
    name: "Barkskin",
    icon: "spell_nature_stoneclawtotem",
  },
  WILD_GROWTH: {
    id: 48438 as SpellId,
    name: "Wild Growth",
    icon: "ability_druid_flourish",
    manaCost: 2200,
  },
  REJUVENATION: {
    id: 774 as SpellId,
    name: "Rejuvenation",
    icon: "spell_nature_rejuvenation",
    manaCost: 1100,
  },
  REGROWTH: {
    id: 8936 as SpellId,
    name: "Regrowth",
    icon: "spell_nature_resistnature",
    manaCost: 1700,
  },
  LIFEBLOOM_HOT_HEAL: {
    id: 33763 as SpellId,
    name: "Lifebloom",
    icon: "inv_misc_herb_felblossom",
    manaCost: 800,
  },
  LIFEBLOOM_BLOOM_HEAL: {
    id: 33778 as SpellId,
    name: "Lifebloom",
    icon: "inv_misc_herb_felblossom",
  },
  CLEARCASTING_BUFF: {
    id: 16870 as SpellId,
    name: "Clearcasting",
    icon: "spell_shadow_manaburn",
  },
  EFFLORESCENCE_CAST: {
    id: 145205 as SpellId,
    name: "Efflorescence",
    icon: "inv_misc_herb_talandrasrose",
    manaCost: 1700,
  },
  EFFLORESCENCE_HEAL: {
    id: 81269 as SpellId,
    name: "Efflorescence",
    icon: "inv_misc_herb_talandrasrose",
  },
  //The heal that is trigger by the talent.
  CENARION_WARD_HEAL: {
    id: 102352 as SpellId,
    name: "Cenarion Ward",
    icon: "ability_druid_naturalperfection",
  },
  SWIFTMEND: {
    id: 18562 as SpellId,
    name: "Swiftmend",
    icon: "inv_relics_idolofrejuvenation",
    manaCost: 800,
  },
  ABUNDANCE_BUFF: {
    id: 207640 as SpellId,
    name: "Abundance",
    icon: "ability_druid_empoweredrejuvination",
  },
  BEAR_FORM: {
    id: 5487 as SpellId,
    name: "Bear Form",
    icon: "ability_racial_bearform",
  },
  CAT_FORM: {
    id: 768 as SpellId,
    name: "Cat Form",
    icon: "ability_druid_catform",
  },
  DASH: {
    id: 1850 as SpellId,
    name: "Dash",
    icon: "ability_druid_dash",
  },
  NATURES_CURE: {
    id: 88423 as SpellId,
    name: "Nature's Cure",
    icon: "ability_shaman_cleansespirit",
  },
  STAG_FORM: {
    id: 210053 as SpellId,
    name: "Stag Form",
    icon: "inv_stagform",
  },
  TRAVEL_FORM: {
    id: 783 as SpellId,
    name: "Travel Form",
    icon: "ability_druid_travelform",
  },
  SHRED: {
    id: 5221 as SpellId,
    name: "Shred",
    icon: "spell_shadow_vampiricaura",
  },
  WRATH: {
    id: 5176 as SpellId,
    name: "Wrath",
    icon: "spell_nature_wrathv2",
  },
  URSOLS_VORTEX: {
    id: 102793 as SpellId,
    name: "Ursol's Vortex",
    icon: "spell_druid_ursolsvortex",
  },
  MOONKIN_FORM: {
    id: 24858 as SpellId,
    name: "Moonkin Form",
    icon: "spell_nature_forceofnature",
  },
  REJUVENATION_GERMINATION: {
    id: 155777 as SpellId,
    name: "Germination",
    icon: "spell_druid_germination",
  },
  CULTIVATION: {
    id: 200389 as SpellId,
    name: "Cultivation",
    icon: "ability_druid_nourish",
  },
  // Ysera's Gift has two heal IDs, one when it heals other players and one when it heals yourself.
  YSERAS_GIFT_OTHERS: {
    id: 145110 as SpellId,
    name: "Ysera's gift",
    icon: "spell_nature_healingtouch",
  },
  YSERAS_GIFT_SELF: {
    id: 145109 as SpellId,
    name: "Ysera's gift",
    icon: "spell_nature_healingtouch",
  },
  MARK_OF_SHIFTING: {
    id: 224392 as SpellId,
    name: "Mark of Shifting",
    icon: "spell_druid_tirelesspursuit",
  },
  NATURES_ESSENCE_DRUID: {
    // there is also a Shaman spell by the name "Nature's Essence"
    id: 189800 as SpellId,
    name: "Nature's Essence",
    icon: "ability_druid_flourish",
  },
  SPRING_BLOSSOMS: {
    id: 207386 as SpellId,
    name: "Spring Blossoms",
    icon: "inv_misc_trailofflowers",
  },
  SOUL_OF_THE_FOREST_BUFF: {
    id: 114108 as SpellId,
    name: "Soul of the Forest",
    icon: "ability_druid_manatree",
  },
  // This buff indicates if the player is ABLE to assume Incarnation: Tree of Life form.
  // Actually BEING in the form is indicated by the INCARNATION_TREE_OF_LIFE_TALENT id.
  INCARNATION_TOL_ALLOWED: {
    id: 117679 as SpellId,
    name: "Incarnation",
    icon: "spell_druid_incarnation",
  },
  NATURES_SWIFTNESS: {
    id: 132158 as SpellId,
    name: "Nature's Swiftness",
    icon: "spell_nature_ravenform",
  },

  // Sets/Items:
  // Hidden buffs that indicate set is equipped:
  // Visible procs produced by set/item:
  ASTRAL_HARMONY: {
    // 2pc T19
    id: 232378 as SpellId,
    name: "Astral Harmony",
    icon: "talentspec_druid_restoration",
  },

  // Traits:
  NATURES_ESSENCE_TRAIT: {
    id: 189787 as SpellId,
    name: "Nature's Essence",
    icon: "ability_druid_flourish",
  },
};

export default spells;

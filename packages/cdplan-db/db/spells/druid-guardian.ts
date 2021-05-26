import { SpellId } from "../types";

const spells = {
  THICK_HIDE: {
    id: 16931 as SpellId,
    name: "Thick Hide",
    icon: "inv_misc_pelt_bear_03",
  },
  SWIPE_BEAR: {
    id: 213771 as SpellId,
    name: "Swipe",
    icon: "inv_misc_monsterclaw_03",
  },
  MANGLE_BEAR: {
    id: 33917 as SpellId,
    name: "Mangle",
    icon: "ability_druid_mangle2",
  },
  THRASH_BEAR: {
    id: 77758 as SpellId,
    name: "Thrash",
    icon: "spell_druid_thrash",
  },
  THRASH_BEAR_DOT: {
    id: 192090 as SpellId,
    name: "Thrash",
    icon: "spell_druid_thrash",
  },
  SURVIVAL_INSTINCTS: {
    id: 61336 as SpellId,
    name: "Survival Instincts",
    icon: "ability_druid_tigersroar",
  },
  IRONFUR: {
    id: 192081 as SpellId,
    name: "Ironfur",
    icon: "ability_druid_ironfur",
  },
  // when casting stampeding outside of cat or bear form, and puts caster into bear form
  STAMPEDING_ROAR_HUMANOID: {
    id: 106898 as SpellId,
    name: "Stampeding Roar",
    icon: "spell_druid_stamedingroar",
  },
  STAMPEDING_ROAR_CAT: {
    id: 77764 as SpellId,
    name: "Stampeding Roar",
    icon: "spell_druid_stampedingroar_cat",
  },
  STAMPEDING_ROAR_BEAR: {
    id: 77761 as SpellId,
    name: "Stampeding Roar",
    icon: "spell_druid_stamedingroar",
  },
  INCAPACITATING_ROAR: {
    id: 99 as SpellId,
    name: "Incapacitating Roar",
    icon: "ability_druid_demoralizingroar",
  },
  // "MOONFIRE_BEAR" is actually the debuff left by Moonfire for all forms, all specs
  MOONFIRE_BEAR: {
    id: 164812 as SpellId,
    name: "Moonfire",
    icon: "spell_nature_starfall",
  },
  MOONFIRE: {
    id: 8921 as SpellId,
    name: "Moonfire",
    icon: "spell_nature_starfall",
  },
  PERPETUAL_SPRING_TRAIT: {
    id: 200402 as SpellId,
    name: "Perpetual spring",
    icon: "spell_nature_stoneclawtotem",
  },
  EMBRACE_OF_THE_NIGHTMARE: {
    id: 200855 as SpellId,
    name: "Embrace of the nightmare",
    icon: "inv_misc_herb_nightmarevine",
  },
  SCINTILLATING_MOONLIGHT: {
    id: 238049 as SpellId,
    name: "Scintillating Moonlight",
    icon: "spell_nature_starfall",
  },
  WILDFLESH_TRAIT: {
    id: 200400 as SpellId,
    name: "Wildflesh",
    icon: "ability_bullrush",
  },
  FLESHKNITTING_TRAIT: {
    id: 238085 as SpellId,
    name: "Fleshknitting",
    icon: "ability_bullrush",
  },
  BEAR_HUG_TRAIT: {
    id: 215799 as SpellId,
    name: "Bear Hug",
    icon: "spell_druid_bearhug",
  },
  GORE_BEAR: {
    id: 93622 as SpellId,
    name: "Gore",
    icon: "ability_druid_mangle2",
  },
  // passive spell with this ID granted to any druid with Restoration Affinity
  YSERAS_GIFT_BEAR: {
    id: 145108 as SpellId,
    name: "Ysera's gift",
    icon: "inv_misc_head_dragon_green",
  },
  MAUL: {
    id: 6807 as SpellId,
    name: "Maul",
    icon: "ability_druid_maul",
  },
  GROWL: {
    id: 6795 as SpellId,
    name: "Growl",
    icon: "ability_physical_taunt",
  },
  SKULL_BASH: {
    id: 106839 as SpellId,
    name: "Skull Bash",
    icon: "inv_bone_skull_04",
  },
  REBIRTH: {
    id: 20484 as SpellId,
    name: "Rebirth",
    icon: "spell_nature_reincarnation",
  },
  ENTANGLING_ROOTS: {
    id: 339 as SpellId,
    name: "Entangling Roots",
    icon: "spell_nature_stranglevines",
  },
  REMOVE_CORRUPTION: {
    id: 2782 as SpellId,
    name: "Remove Corruption",
    icon: "spell_holy_removecurse",
  },
  GALACTIC_GUARDIAN: {
    id: 213708 as SpellId,
    name: "Galactic Guardian",
    icon: "spell_frost_iceclaw",
  },
  GUARDIAN_OF_ELUNE: {
    id: 213680 as SpellId,
    name: "Guardian Of Elune",
    icon: "spell_druid_guardianofelune",
  },
  URSOCS_ENDURANCE: {
    id: 200399 as SpellId,
    name: "Ursoc's Endurance",
    icon: "ability_hunter_pet_bear",
  },
  PULVERIZE_BUFF: {
    id: 158792 as SpellId,
    name: "Pulverize",
    icon: "spell_druid_malfurionstenacity",
  },
  SKYSECS_HOLD_HEAL: {
    id: 208218 as SpellId,
    name: "Skysec's Hold",
    icon: "spell_druid_bearhug",
  },
  BLOOD_FRENZY_TICK: {
    id: 203961 as SpellId,
    name: "Blood Frenzy",
    icon: "ability_druid_primaltenacity",
  },
  BRISTLING_FUR: {
    id: 204031 as SpellId,
    name: "Bristling Fur",
    icon: "spell_druid_bristlingfur",
  },
  OAKHEARTS_PUNY_QUODS_BUFF: {
    id: 236479 as SpellId,
    name: "Oakheart's Puny Quods",
    icon: "spell_druid_bearhug",
  },
  EARTHWARDEN_BUFF: {
    id: 203975 as SpellId,
    name: "Earthwarden",
    icon: "spell_shaman_blessingofeternals",
  },
  FURY_OF_NATURE_HEAL: {
    id: 248522 as SpellId,
    name: "Fury of Nature",
    icon: "ability_creature_cursed_04",
  },
  GUARDIAN_TIER_21_2P_SET_BONUS: {
    id: 251791 as SpellId,
    name: "Tier 21 2P Bonus",
    icon: "ability_druid_cower",
  },
  GUARDIAN_TIER_21_4P_SET_BONUS: {
    id: 251792 as SpellId,
    name: "Tier 21 4P Bonus",
    icon: "ability_druid_cower",
  },
  GUARDIAN_TIER_21_4P_SET_BONUS_BUFF: {
    id: 253575 as SpellId,
    name: "Regenerative Fur",
    icon: "ability_druid_kingofthejungle",
  },
  MASTERY_NATURES_GUARDIAN_HEAL: {
    id: 227034 as SpellId,
    name: "Mastery: Nature's Guardian",
    icon: "spell_druid_primaltenacity",
  },
};

export default spells;

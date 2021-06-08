import { SpellId } from "../types";

const talents = {
  PREDATOR_TALENT: { id: 202021 as SpellId, name: "Predator", icon: "ability_hunter_catlikereflexes" },
  SABERTOOTH_TALENT: { id: 202031 as SpellId, name: "Sabertooth", icon: "inv_misc_monsterfang_01" },
  LUNAR_INSPIRATION_TALENT: { id: 155580 as SpellId, name: "Lunar Inspiration", icon: "spell_druid_lunarinspiration" },
  SAVAGE_ROAR_TALENT: {
    id: 52610 as SpellId,
    name: "Savage Roar",
    icon: "ability_druid_skinteeth",
    energyCost: 25,
    comboPointsCost: 1,
  },
  INCARNATION_KING_OF_THE_JUNGLE_TALENT: {
    id: 102543 as SpellId,
    name: "Incarnation: King of the Jungle",
    icon: "spell_druid_incarnation",
  },
  SCENT_OF_BLOOD_TALENT: { id: 285564 as SpellId, name: "Scent of Blood", icon: "spell_druid_thrash" },
  BRUTAL_SLASH_TALENT: { id: 202028 as SpellId, name: "Brutal Slash", icon: "ability_druid_ravage", energyCost: 25 },
  PRIMAL_WRATH_TALENT: {
    id: 285381 as SpellId,
    name: "Primal Wrath",
    icon: "artifactability_feraldruid_ashamanesbite",
    energyCost: 20,
    comboPointsCost: 1,
  },
  MOMENT_OF_CLARITY_TALENT: { id: 236068 as SpellId, name: "Moment of Clarity", icon: "spell_druid_momentofclarity" },
  BLOODTALONS_TALENT: { id: 319439 as SpellId, name: "Bloodtalons", icon: "spell_druid_bloodythrash" },
  FERAL_FRENZY_TALENT: { id: 274837 as SpellId, name: "Feral Frenzy", icon: "ability_druid_rake", energyCost: 25 },
  GUARDIAN_AFFINITY_TALENT_FERAL: {
    id: 217615 as SpellId,
    name: "Guardian Affinity",
    icon: "talentspec_druid_feral_bear",
  },
  SOUL_OF_THE_FOREST_TALENT_FERAL: {
    id: 158476 as SpellId,
    name: "Soul of the Forest",
    icon: "ability_druid_manatree",
  },
};
export default talents;

import { Spell, SpellId } from "../types";

const talents = {
  ABUNDANCE_TALENT: { id: 207383 as SpellId, name: "Abundance", icon: "ability_druid_empoweredrejuvination" },
  NOURISH_TALENT: { id: 50464 as SpellId, name: "Nourish", icon: "ability_druid_nourish", manaCost: 1800 },
  CENARION_WARD_TALENT: {
    id: 102351 as SpellId,
    name: "Cenarion Ward",
    icon: "ability_druid_naturalperfection",
    manaCost: 920,
  },
  CULTIVATION_TALENT: { id: 200390 as SpellId, name: "Cultivation", icon: "spell_nature_healingtouch" },
  INCARNATION_TREE_OF_LIFE_TALENT: {
    id: 33891 as SpellId,
    name: "Incarnation: Tree of Life",
    icon: "ability_druid_improvedtreeform",
  },
  INNER_PEACE_TALENT: { id: 197073 as SpellId, name: "Inner Peace", icon: "ability_druid_dreamstate" },
  SPRING_BLOSSOMS_TALENT: { id: 207385 as SpellId, name: "Spring Blossoms", icon: "inv_misc_trailofflowers" },
  OVERGROWTH_TALENT: { id: 203651 as SpellId, name: "Overgrowth", icon: "ability_druid_overgrowth", manaCost: 3000 },
  PHOTOSYNTHESIS_TALENT: { id: 274902 as SpellId, name: "Photosynthesis", icon: "spell_lifegivingseed" },
  GERMINATION_TALENT: { id: 155675 as SpellId, name: "Germination", icon: "spell_druid_germination" },
  FLOURISH_TALENT: { id: 197721 as SpellId, name: "Flourish", icon: "spell_druid_wildburst" },
  BALANCE_AFFINITY_TALENT_RESTORATION: {
    id: 197632 as SpellId,
    name: "Balance Affinity",
    icon: "ability_druid_improvedmoonkinform",
  },
  FERAL_AFFINITY_TALENT_RESTORATION: {
    id: 197490 as SpellId,
    name: "Feral Affinity",
    icon: "talentspec_druid_feral_cat",
  },
  SOUL_OF_THE_FOREST_TALENT_RESTORATION: {
    id: 158478 as SpellId,
    name: "Soul of the Forest",
    icon: "ability_druid_manatree",
  },
};
export default talents;

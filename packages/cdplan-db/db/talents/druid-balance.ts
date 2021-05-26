import { Spell, SpellId } from "../types";

const talents = {
  NATURES_BALANCE_TALENT: { id: 202430 as SpellId, name: "Nature's Balance", icon: "ability_druid_balanceofpower" },
  WARRIOR_OF_ELUNE_TALENT: { id: 202425 as SpellId, name: "Warrior of Elune", icon: "spell_holy_elunesgrace" },
  FORCE_OF_NATURE_TALENT: { id: 205636 as SpellId, name: "Force of Nature", icon: "ability_druid_forceofnature" },
  STARLORD_TALENT: { id: 202345 as SpellId, name: "Starlord", icon: "spell_shaman_measuredinsight" },
  STELLAR_DRIFT_TALENT: { id: 202354 as SpellId, name: "Stellar Drift", icon: "ability_druid_starfall" },
  TWIN_MOONS_TALENT: { id: 279620 as SpellId, name: "Twin Moons", icon: "spell_nature_starfall" },
  STELLAR_FLARE_TALENT: { id: 202347 as SpellId, name: "Stellar Flare", icon: "ability_druid_stellarflare" },
  SOLSTICE_TALENT: { id: 343647 as SpellId, name: "Solstice", icon: "artifactability_balancedruid_moonandstars" },
  FURY_OF_ELUNE_TALENT: { id: 202770 as SpellId, name: "Fury of Elune", icon: "ability_druid_dreamstate" },
  NEW_MOON_TALENT: { id: 274281 as SpellId, name: "New Moon", icon: "artifactability_balancedruid_newmoon" },
  FERAL_AFFINITY_TALENT_BALANCE: { id: 202157 as SpellId, name: "Feral Affinity", icon: "talentspec_druid_feral_cat" },
  SOUL_OF_THE_FOREST_TALENT_BALANCE: {
    id: 114107 as SpellId,
    name: "Soul of the Forest",
    icon: "ability_druid_manatree",
  },
};
export default talents;

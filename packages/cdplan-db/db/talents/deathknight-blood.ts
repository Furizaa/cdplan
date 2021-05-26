import { SpellId, Spell } from "../types";

const talents = {
  HEARTBREAKER_TALENT: { id: 221536 as SpellId, name: "Heartbreaker", icon: "spell_deathknight_deathstrike" },
  BLOODDRINKER_TALENT: {
    id: 206931 as SpellId,
    name: "Blooddrinker",
    icon: "ability_animusdraw",
    runesCost: 1,
    runicPowerCost: -10,
  },
  TOMBSTONE_TALENT: { id: 219809 as SpellId, name: "Tombstone", icon: "ability_fiegndead" },
  RAPID_DECOMPOSITION_TALENT: {
    id: 194662 as SpellId,
    name: "Rapid Decomposition",
    icon: "ability_deathknight_deathsiphon2",
  },
  HEMOSTASIS_TALENT: { id: 273946 as SpellId, name: "Hemostasis", icon: "ability_deathwing_bloodcorruption_earth" },
  CONSUMPTION_TALENT: { id: 274156 as SpellId, name: "Consumption", icon: "inv_axe_2h_artifactmaw_d_01" },
  FOUL_BULWARK_TALENT: { id: 206974 as SpellId, name: "Foul Bulwark", icon: "inv_armor_shield_naxxramas_d_02" },
  RELISH_IN_BLOOD_TALENT: { id: 317610 as SpellId, name: "Relish in Blood", icon: "ability_deathknight_roilingblood" },
  BLOOD_TAP_TALENT: { id: 221699 as SpellId, name: "Blood Tap", icon: "spell_deathknight_bloodtap" },
  WILL_OF_THE_NECROPOLIS_TALENT: {
    id: 206967 as SpellId,
    name: "Will of the Necropolis",
    icon: "achievement_boss_kelthuzad_01",
  },
  ANTI_MAGIC_BARRIER_TALENT: { id: 205727 as SpellId, name: "Anti-Magic Barrier", icon: "spell_shadow_antimagicshell" },
  MARK_OF_BLOOD_TALENT: { id: 206940 as SpellId, name: "Mark of Blood", icon: "ability_hunter_rapidkilling" },
  TIGHTENING_GRASP_TALENT: {
    id: 206970 as SpellId,
    name: "Tightening Grasp",
    icon: "ability_deathknight_aoedeathgrip",
  },
  VORACIOUS_TALENT: { id: 273953 as SpellId, name: "Voracious", icon: "ability_ironmaidens_whirlofblood" },
  BLOODWORMS_TALENT: { id: 195679 as SpellId, name: "Bloodworms", icon: "spell_shadow_soulleech" },
  PURGATORY_TALENT: { id: 114556 as SpellId, name: "Purgatory", icon: "inv_misc_shadowegg" },
  RED_THIRST_TALENT: { id: 205723 as SpellId, name: "Red Thirst", icon: "spell_deathknight_bloodpresence" },
  BONESTORM_TALENT: {
    id: 194844 as SpellId,
    name: "Bonestorm",
    icon: "achievement_boss_lordmarrowgar",
    runicPowerCost: 10,
  },
};
export default talents;

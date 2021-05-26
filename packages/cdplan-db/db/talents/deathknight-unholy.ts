import { Spell, SpellId } from "../types";

const talents = {
  INFECTED_CLAWS_TALENT: { id: 207272 as SpellId, name: "Infected Claws", icon: "spell_deathknight_thrash_ghoul" },
  ALL_WILL_SERVE_TALENT: { id: 194916 as SpellId, name: "All Will Serve", icon: "ability_fiegndead" },
  CLAWING_SHADOWS_TALENT: {
    id: 207311 as SpellId,
    name: "Clawing Shadows",
    icon: "warlock_curse_shadow",
    runesCost: 1,
    runicPowerCost: -10,
  },
  BURSTING_SORES_TALENT: { id: 207264 as SpellId, name: "Bursting Sores", icon: "ability_druid_infectedwound" },
  EBON_FEVER_TALENT: { id: 207269 as SpellId, name: "Ebon Fever", icon: "spell_shadow_creepingplague" },
  UNHOLY_BLIGHT_TALENT: {
    id: 115989 as SpellId,
    name: "Unholy Blight",
    icon: "spell_shadow_contagion",
    runesCost: 1,
    runicPowerCost: -10,
  },
  PESTILENT_PUSTULES_TALENT: {
    id: 194917 as SpellId,
    name: "Pestilent Pustules",
    icon: "spell_yorsahj_bloodboil_purpleoil",
  },
  HARBINGER_OF_DOOM_TALENT: { id: 276023 as SpellId, name: "Harbinger of Doom", icon: "spell_shadow_painspike" },
  SOUL_REAPER_TALENT: {
    id: 343294 as SpellId,
    name: "Soul Reaper",
    icon: "ability_deathknight_soulreaper",
    runesCost: 1,
    runicPowerCost: -10,
  },
  SPELL_EATER_TALENT: { id: 207321 as SpellId, name: "Spell Eater", icon: "ability_creature_cursed_03" },
  PESTILENCE_TALENT: { id: 277234 as SpellId, name: "Pestilence", icon: "spell_deathknight_necroticplague" },
  UNHOLY_PACT_TALENT: { id: 319230 as SpellId, name: "Unholy Pact", icon: "spell_shadow_deathsembrace" },
  DEFILE_TALENT: {
    id: 152280 as SpellId,
    name: "Defile",
    icon: "spell_deathknight_defile",
    runesCost: 1,
    runicPowerCost: -10,
  },
  ARMY_OF_THE_DAMNED_TALENT: {
    id: 276837 as SpellId,
    name: "Army of the Damned",
    icon: "artifactability_unholydeathknight_deathsembrace",
  },
  SUMMON_GARGOYLE_TALENT: { id: 49206 as SpellId, name: "Summon Gargoyle", icon: "ability_deathknight_summongargoyle" },
  UNHOLY_ASSAULT_TALENT: { id: 207289 as SpellId, name: "Unholy Assault", icon: "spell_shadow_unholyfrenzy" },
};
export default talents;

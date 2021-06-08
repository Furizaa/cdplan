import { SpellId } from "../types";

const talents = {
  INEXORABLE_ASSAULT_TALENT: {
    id: 253593 as SpellId,
    name: "Inexorable Assault",
    icon: "achievement_dungeon_icecrown_frostmourne",
  },
  ICY_TALONS_TALENT: { id: 194878 as SpellId, name: "Icy Talons", icon: "spell_deathknight_icytalons" },
  COLD_HEART_TALENT: { id: 281208 as SpellId, name: "Cold Heart", icon: "spell_frost_frozencore" },
  RUNIC_ATTENUATION_TALENT: { id: 207104 as SpellId, name: "Runic Attenuation", icon: "boss_odunrunes_blue" },
  MURDEROUS_EFFICIENCY_TALENT: { id: 207061 as SpellId, name: "Murderous Efficiency", icon: "spell_frost_frostarmor" },
  HORN_OF_WINTER_TALENT: { id: 57330 as SpellId, name: "Horn of Winter", icon: "inv_misc_horn_02" },
  BLINDING_SLEET_TALENT: { id: 207167 as SpellId, name: "Blinding Sleet", icon: "spell_frost_chillingblast" },
  AVALANCHE_TALENT: { id: 207142 as SpellId, name: "Avalanche", icon: "spell_frost_icestorm" },
  FROZEN_PULSE_TALENT: { id: 194909 as SpellId, name: "Frozen Pulse", icon: "inv_misc_permafrostshard" },
  FROSTSCYTHE_TALENT: { id: 207230 as SpellId, name: "Frostscythe", icon: "inv_misc_2h_farmscythe_a_01", runesCost: 1 },
  PERMAFROST_TALENT: { id: 207200 as SpellId, name: "Permafrost", icon: "achievement_zone_frostfire" },
  GATHERING_STORM_TALENT: { id: 194912 as SpellId, name: "Gathering Storm", icon: "spell_frost_ice_shards" },
  HYPOTHERMIC_PRESENCE_TALENT: {
    id: 321995 as SpellId,
    name: "Hypothermic Presence",
    icon: "ability_mage_shattershield",
  },
  GLACIAL_ADVANCE_TALENT: {
    id: 194913 as SpellId,
    name: "Glacial Advance",
    icon: "ability_hunter_glacialtrap",
    runicPowerCost: 30,
  },
  ICECAP_TALENT: { id: 207126 as SpellId, name: "Icecap", icon: "inv_misc_herb_icecap" },
  OBLITERATION_TALENT: { id: 281238 as SpellId, name: "Obliteration", icon: "inv_axe_114" },
  BREATH_OF_SINDRAGOSA_TALENT: {
    id: 152279 as SpellId,
    name: "Breath of Sindragosa",
    icon: "spell_deathknight_breathofsindragosa",
    runicPowerCost: 0,
  },
};
export default talents;

import { SpellId } from "../types";

const spells = {
  ELEMENTAL_MASTERY: {
    id: 168534 as SpellId,
    name: "Elemental Overload",
    icon: "spell_nature_lightningoverload",
  },
  RESONANCE_TOTEM_FULMINATION: {
    id: 202192 as SpellId,
    name: "Resonance Totem",
    icon: "spell_nature_stoneskintotem",
  },
  EARTH_SHOCK: {
    id: 8042 as SpellId,
    name: "Earth Shock",
    icon: "spell_nature_earthshock",
  },
  LAVA_BURST: {
    id: 51505 as SpellId,
    name: "Lava Burst",
    icon: "spell_shaman_lavaburst",
    manaCost: 250,
  },
  LAVA_BURST_DAMAGE: {
    id: 285452 as SpellId,
    name: "Lava Burst",
    icon: "spell_shaman_lavaburst",
  },
  LAVA_BURST_OVERLOAD: {
    id: 77451 as SpellId,
    name: "Lava Burst Overload",
    icon: "spell_shaman_lavaburst",
  },
  LAVA_BURST_OVERLOAD_DAMAGE: {
    id: 285466 as SpellId,
    name: "Lava Burst Overload",
    icon: "spell_shaman_lavaburst",
  },
  LIGHTNING_BOLT: {
    id: 188196 as SpellId,
    name: "Lightning Bolt",
    icon: "spell_nature_lightning",
    manaCost: 100,
  },
  LIGHTNING_BOLT_INSTANT: {
    id: 214815 as SpellId,
    name: "Lightning Bolt",
    icon: "spell_nature_lightning",
  },
  LIGHTNING_BOLT_OVERLOAD: {
    id: 214816 as SpellId,
    name: "Lightning Bolt Overload",
    icon: "spell_nature_lightning",
  },
  LIGHTNING_BOLT_OVERLOAD_HIT: {
    id: 45284 as SpellId,
    name: "Lightning Bolt Overload",
    icon: "spell_nature_lightning",
  },
  ELEMENTAL_BLAST_OVERLOAD: {
    id: 120588 as SpellId,
    name: "Elemental Blast",
    icon: "shaman_talent_elementalblast",
  },
  ELEMENTAL_BLAST_HASTE: {
    id: 173183 as SpellId,
    name: "Elemental Blast: Haste",
    icon: "shaman_talent_elementalblast",
  },
  ELEMENTAL_BLAST_CRIT: {
    id: 118522 as SpellId,
    name: "Elemental Blast: Critical Strike",
    icon: "shaman_talent_elementalblast",
  },
  ELEMENTAL_BLAST_MASTERY: {
    id: 173184 as SpellId,
    name: "Elemental Blast: Mastery",
    icon: "shaman_talent_elementalblast",
  },
  TAILWIND_TOTEM: {
    id: 210660 as SpellId,
    name: "Totem Mastery: Tailwind Totem",
    icon: "spell_nature_invisibilitytotem",
  },
  LIQUID_MAGMA_TOTEM_DAMAGE: {
    id: 192231 as SpellId,
    name: "Liquid Magma Totem Damage",
    icon: "spell_shaman_spewlava",
  },
  EARTHEN_RAGE_DAMAGE: {
    id: 170379 as SpellId,
    name: "Earthen Rage Damage",
    icon: "ability_earthen_pillar",
  },
  CHAIN_LIGHTNING: {
    id: 188443 as SpellId,
    name: "Chain Lightning",
    icon: "spell_nature_chainlightning",
    manaCost: 100,
  },
  CHAIN_LIGHTNING_INSTANT: {
    id: 195897 as SpellId,
    name: "Chain Lightning",
    icon: "spell_nature_chainlightning",
  },
  CHAIN_LIGHTNING_OVERLOAD: {
    id: 45297 as SpellId,
    name: "Chain Lightning Overload",
    icon: "spell_nature_chainlightning",
  },
  CHAIN_LIGHTNING_OVERLOAD_UNLIMITED_RANGE: {
    id: 218558 as SpellId,
    name: "Chain Lightning Overload",
    icon: "spell_nature_chainlightning",
  },
  LAVA_BEAM: {
    id: 114074 as SpellId,
    name: "Lava Beam",
    icon: "ability_mage_firestarter",
  },
  LAVA_BEAM_OVERLOAD: {
    id: 114738 as SpellId,
    name: "Lava Beam Overload",
    icon: "spell_fire_soulburn",
  },
  LAVA_BEAM_INSTANT: {
    id: 217891 as SpellId,
    name: "Lava Beam",
    icon: "ability_mage_firestarter",
  },
  LAVA_BEAM_OVERLOAD_INSTANT: {
    id: 218559 as SpellId,
    name: "Lava Beam Overload",
    icon: "spell_fire_soulburn",
  },
  EARTHQUAKE: {
    id: 61882 as SpellId,
    name: "Earthquake",
    icon: "spell_shaman_earthquake",
  },
  EARTHQUAKE_DAMAGE: {
    id: 77478 as SpellId,
    name: "Earthquake",
    icon: "spell_shaman_earthquake",
  },
  EARTHQUAKE_SEISMIC_LIGHTNING: {
    id: 243073 as SpellId,
    name: "Seismic Lightning",
    icon: "inv_misc_stormlordsfavor",
  },
  EARTHQUAKE_CAST_TARGET: {
    id: 182387 as SpellId,
    name: "Earthquake",
    icon: "spell_shaman_earthquake",
  },
  EARTHQUAKE_STUNS: {
    id: 77505 as SpellId,
    name: "Earthquake",
    icon: "spell_shaman_earthquake",
  },
  FIRE_ELEMENTAL: {
    id: 198067 as SpellId,
    name: "Fire Elemental",
    icon: "spell_fire_elemental_totem",
  },
  SUMMON_FIRE_ELEMENTAL: {
    id: 263819 as SpellId,
    name: "Fire Elemental",
    icon: "spell_fire_elemental_totem",
  },
  FLAME_SHOCK: {
    id: 188389 as SpellId,
    name: "Flame Shock",
    icon: "spell_fire_flameshock",
  },
  FROST_SHOCK_ENERGIZE: {
    icon: "spell_frost_frostshock",
    id: 289439 as SpellId,
    name: "Frost Shock",
  },
  ICEFURY_OVERLOAD: {
    id: 219271 as SpellId,
    name: "Icefury Overload",
    icon: "spell_frost_iceshard",
  },
  LAVA_SURGE: {
    id: 77762 as SpellId,
    name: "Lava Surge",
    icon: "spell_shaman_lavasurge",
  },
  AFTERSHOCK: {
    id: 210712 as SpellId,
    name: "Aftershock",
    icon: "spell_nature_stormreach",
  },
  MASTER_OF_THE_ELEMENTS_BUFF: {
    id: 260734 as SpellId,
    name: "Master Of The Elements Buff",
    icon: "spell_nature_elementalabsorption",
  },
  SURGE_OF_POWER_BUFF: {
    id: 285514 as SpellId,
    name: "Surge of Power",
    icon: "spell_nature_shamanrage",
  },
  UNLIMITED_POWER_BUFF: {
    id: 272737 as SpellId,
    name: "Unlimited Power Buff",
    icon: "ability_shaman_ascendance",
  },
  THUNDERSTORM: {
    icon: "spell_shaman_thunderstorm",
    id: 51490 as SpellId,
    name: "Thunderstorm",
  },
  // Elemental Pet Spells
  WIND_GUST: {
    id: 157331 as SpellId,
    name: "Wind Gust",
    icon: "spell_nature_cyclone",
  },
  WIND_GUST_BUFF: {
    id: 263806 as SpellId,
    name: "Wind Gust Buff",
    icon: "spell_nature_cyclone",
  },
  EYE_OF_THE_STORM: {
    id: 157375 as SpellId,
    name: "Eye Of The Storm",
    icon: "inv_elemental_primal_air",
  },
  CALL_LIGHTNING: {
    id: 157348 as SpellId,
    name: "Call Lightning",
    icon: "ability_vehicle_electrocharge",
  },
  FIRE_ELEMENTAL_METEOR: {
    id: 117588 as SpellId,
    name: "Meteor",
    icon: "spell_mage_meteor",
  },
  FIRE_ELEMENTAL_FIRE_BLAST: {
    id: 57984 as SpellId,
    name: "Fire Elemental Fire Blast",
    icon: "spell_fire_fireball",
  },
  FIRE_ELEMENTAL_IMMOLATE: {
    id: 118297 as SpellId,
    name: "Fire Elemental Immolate",
    icon: "spell_fire_immolation",
  },
};

export default spells;

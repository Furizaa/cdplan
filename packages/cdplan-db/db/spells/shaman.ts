import { SpellId } from "../types";

const spells = {
  ASTRAL_SHIFT: {
    id: 108271 as SpellId,
    name: "Astral Shift",
    icon: "ability_shaman_astralshift",
  },
  PURIFY_SPIRIT: {
    id: 77130 as SpellId,
    name: "Purify Spirit",
    icon: "ability_shaman_cleansespirit",
    manaCost: 650,
  },
  WIND_SHEAR: {
    id: 57994 as SpellId,
    name: "Wind Shear",
    icon: "spell_nature_cyclone",
  },
  EARTHBIND_TOTEM: {
    id: 2484 as SpellId,
    name: "Earthbind Totem",
    icon: "spell_nature_strengthofearthtotem02",
    manaCost: 250,
  },
  RESONANCE_TOTEM_HASTE: {
    id: 262417 as SpellId,
    name: "Resonance Totem",
    icon: "spell_nature_stoneskintotem",
  },
  PURGE: {
    id: 370 as SpellId,
    name: "Purge",
    icon: "spell_nature_purge",
    manaCost: 800, // enh/ele cost is higher
  },
  FAR_SIGHT: {
    id: 6196 as SpellId,
    name: "Far Sight",
    icon: "spell_nature_farsight",
  },
  WATER_WALKING: {
    id: 546 as SpellId,
    name: "Water Walking",
    icon: "spell_frost_windwalkon",
  },
  ASTRAL_RECALL: {
    id: 556 as SpellId,
    name: "Astral Recall",
    icon: "spell_nature_astralrecal",
  },
  STATIC_CHARGE_DEBUFF: {
    id: 118905 as SpellId,
    name: "Static Charge",
    icon: "spell_nature_brilliance",
  },
  NATURES_GUARDIAN_HEAL: {
    id: 31616 as SpellId,
    name: "Nature's Guardian",
    icon: "spell_nature_natureguardian",
  },
  TREMOR_TOTEM: {
    id: 8143 as SpellId,
    name: "Tremor Totem",
    icon: "spell_nature_tremortotem",
    manaCost: 230,
  },
  SPIRIT_WOLF_BUFF: {
    id: 260881 as SpellId,
    name: "Spirit Wolf",
    icon: "spell_hunter_lonewolf",
  },
  EARTH_SHIELD_HEAL: {
    id: 379 as SpellId,
    name: "Earth Shield",
    icon: "spell_nature_skinofearth",
  },
  CAPACITOR_TOTEM: {
    id: 192058 as SpellId,
    name: "Capacitor Totem",
    icon: "spell_nature_brilliance",
    manaCost: 1000,
  },
  EARTH_ELEMENTAL: {
    id: 198103 as SpellId,
    name: "Earth Elemental",
    icon: "spell_nature_earthelemental_totem",
  },
  CLEANSE_SPIRIT: {
    id: 51886 as SpellId,
    name: "Cleanse Spirit",
    icon: "ability_shaman_cleansespirit",
    manaCost: 650,
  },
  LIGHTNING_SHIELD: {
    id: 192106 as SpellId,
    name: "Lightning Shield",
    icon: "spell_nature_lightningshield",
    manaCost: 150,
  },
  FROST_SHOCK: {
    id: 196840 as SpellId,
    name: "Frost Shock",
    icon: "spell_frost_frostshock",
    manaCost: 100,
  },
  PRIMAL_STRIKE: {
    id: 73899 as SpellId,
    name: "Primal Strike",
    icon: "spell_shaman_primalstrike",
    manaCost: 940,
  },
  ANCESTRAL_PROTECTION_BUFF: {
    id: 207495 as SpellId,
    name: "Ancestral Protection",
    icon: "spell_nature_reincarnation",
  },
  // Hex and its variations
  HEX: {
    id: 51514 as SpellId,
    name: "Hex",
    icon: "spell_shaman_hex",
  },
  HEX_RAPTOR: {
    id: 210873 as SpellId,
    name: "Hex",
    icon: "ability_hunter_pet_raptor",
  },
  HEX_SPIDER: {
    id: 211004 as SpellId,
    name: "Hex",
    icon: "ability_hunter_pet_spider",
  },
  HEX_SNAKE: {
    id: 211010 as SpellId,
    name: "Hex",
    icon: "inv_pet_pythonblack",
  },
  HEX_COCKROACH: {
    id: 211015 as SpellId,
    name: "Hex",
    icon: "inv_pet_cockroach",
  },
  HEX_SKELETAL: {
    id: 269352 as SpellId,
    name: "Hex",
    icon: "ability_mount_fossilizedraptor",
  },
  SHOCK_OF_THE_TWISTING_NETHER: {
    id: 207999 as SpellId,
    name: "Shock of the Twisting Nether",
    icon: "spell_nature_rune",
  },
  FIRE_OF_THE_TWISTING_NETHER: {
    id: 207995 as SpellId,
    name: "Fire of the Twisting Nether",
    icon: "spell_fire_rune",
  },
  CHILL_OF_THE_TWISTING_NETHER: {
    id: 207998 as SpellId,
    name: "Chill of the Twisting Nether",
    icon: "spell_ice_rune",
  },
  BLOODLUST: {
    id: 2825 as SpellId,
    name: "Bloodlust / Heroism",
    icon: "spell_nature_bloodlust",
  },
};

export default spells;

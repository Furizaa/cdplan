import { SpellId } from "../types";

const spells = {
  CHAIN_HEAL: {
    id: 1064 as SpellId,
    name: "Chain Heal",
    icon: "spell_nature_healingwavegreater",
    manaCost: 3000,
  },
  HEALING_WAVE: {
    id: 77472 as SpellId,
    name: "Healing Wave",
    icon: "spell_nature_healingwavelesser",
    manaCost: 1500,
  },
  HEALING_SURGE: {
    id: 8004 as SpellId,
    name: "Healing Surge",
    icon: "spell_nature_healingway",
    manaCost: 2400, // enh/ele cost is higher
  },
  RIPTIDE: {
    id: 61295 as SpellId,
    name: "Riptide",
    icon: "spell_nature_riptide",
    manaCost: 800,
  },
  TIDAL_WAVES_BUFF: {
    id: 53390 as SpellId,
    name: "Tidal Waves",
    icon: "spell_shaman_tidalwaves",
  },
  HEALING_RAIN_CAST: {
    id: 73920 as SpellId,
    name: "Healing Rain",
    icon: "spell_nature_giftofthewaterspirit",
    manaCost: 2160,
  },
  HEALING_RAIN_HEAL: {
    id: 73921 as SpellId,
    name: "Healing Rain",
    icon: "spell_nature_giftofthewaterspirit",
  },
  HEALING_STREAM_TOTEM_CAST: {
    id: 5394 as SpellId,
    name: "Healing Stream Totem",
    icon: "inv_spear_04",
    manaCost: 900,
  },
  HEALING_STREAM_TOTEM_HEAL: {
    id: 52042 as SpellId,
    name: "Healing Stream Totem",
    icon: "inv_spear_04",
  },
  HEALING_TIDE_TOTEM_CAST: {
    id: 108280 as SpellId,
    name: "Healing Tide Totem",
    icon: "ability_shaman_healingtide",
    manaCost: 560,
  },
  HEALING_TIDE_TOTEM_HEAL: {
    id: 114942 as SpellId,
    name: "Healing Tide Totem",
    icon: "ability_shaman_healingtide",
  },
  ASCENDANCE_HEAL: {
    id: 114083 as SpellId,
    name: "Ascendance",
    icon: "spell_fire_elementaldevastation",
  },
  ASCENDANCE_INITIAL_HEAL: {
    id: 294020 as SpellId,
    name: "Ascendance",
    icon: "spell_fire_elementaldevastation",
  },
  SPIRIT_LINK_TOTEM: {
    id: 98008 as SpellId,
    name: "Spirit Link Totem",
    icon: "spell_shaman_spiritlink",
    manaCost: 1100,
  },
  SPIRIT_LINK_TOTEM_REDISTRIBUTE: {
    id: 98021 as SpellId,
    name: "Spirit Link Totem",
    icon: "spell_shaman_spiritlink",
  },
  SPIRIT_LINK_TOTEM_BUFF: {
    // casted by totem
    id: 325174 as SpellId,
    name: "Spirit Link Totem",
    icon: "spell_shaman_spiritlink",
  },
  CLOUDBURST_TOTEM_HEAL: {
    id: 157503 as SpellId,
    name: "Cloudburst",
    icon: "ability_shaman_condensationtotem",
  },
  CLOUDBURST_TOTEM_RECALL: {
    id: 201764 as SpellId,
    name: "Recall Cloudburst Totem",
    icon: "ability_shaman_condensationtotem",
  },
  EARTHEN_WALL_TOTEM_ABSORB: {
    id: 201633 as SpellId,
    name: "Earthen Wall Totem",
    icon: "spell_nature_stoneskintotem",
  },
  EARTHEN_WALL_TOTEM_SELF_DAMAGE: {
    id: 201657 as SpellId,
    name: "Earthen Wall Totem",
    icon: "spell_nature_stoneskintotem",
  },
  DEEP_HEALING: {
    id: 77226 as SpellId,
    name: "Mastery: Deep Healing",
    icon: "spell_nature_healingtouch",
  },
  ANCESTRAL_VIGOR: {
    id: 207400 as SpellId,
    name: "Ancestral Vigor",
    icon: "spell_shaman_blessingoftheeternals",
  },
  SPIRITWALKERS_GRACE: {
    id: 79206 as SpellId,
    name: "Spiritwalker's Grace",
    icon: "spell_shaman_spiritwalkersgrace",
    manaCost: 1410,
  },
  WELLSPRING_HEAL: {
    id: 197997 as SpellId,
    name: "Wellspring",
    icon: "ability_shawaterelemental_split",
  },
  RESURGENCE: {
    id: 101033 as SpellId,
    name: "Resurgence",
    icon: "ability_shaman_watershield",
  },
  UNDULATION_BUFF: {
    id: 216251 as SpellId,
    name: "Undulation",
    icon: "spell_nature_healingwavelesser",
  },
  FLASH_FLOOD_BUFF: {
    id: 280615 as SpellId,
    name: "Flash Flood",
    icon: "spell_frost_summonwaterelemental",
  },
  TOTEMIC_REVIVAL_DEBUFF: {
    id: 255234 as SpellId,
    name: "Totemic Revival",
    icon: "spell_nature_reincarnation",
  },
  TOTEMIC_REVIVAL_CAST: {
    id: 207553 as SpellId,
    name: "Totemic Revival",
    icon: "spell_shaman_improvedreincarnation",
  },
  HIGH_TIDE_BUFF: {
    id: 288675 as SpellId,
    name: "High Tide",
    icon: "spell_shaman_hightide",
  },
  MANA_TIDE_TOTEM_CAST: {
    id: 16191 as SpellId,
    name: "Mana Tide Totem",
    icon: "spell_frost_summonwaterelemental",
  },
  MANA_TIDE_TOTEM_BUFF: {
    id: 320763 as SpellId,
    name: "Mana Tide Totem",
    icon: "spell_frost_summonwaterelemental",
  },
  WATER_SHIELD: {
    id: 52127 as SpellId,
    name: "Water Shield",
    icon: "ability_shaman_watershield",
  },
  WATER_SHIELD_ENERGIZE: {
    id: 52128 as SpellId,
    name: "Water Shield",
    icon: "ability_shaman_watershield",
  },
  SURGE_OF_EARTH_HEAL: {
    id: 320747 as SpellId,
    name: "Surge of Earth",
    icon: "inv_elementalearth2",
  },
};

export default spells;

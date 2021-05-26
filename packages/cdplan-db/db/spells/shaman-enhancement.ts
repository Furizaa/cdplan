import { SpellId } from "../types";

const spells = {
  CRASH_LIGHTNING: {
    id: 187874 as SpellId,
    name: "Crash Lightning",
    icon: "spell_shaman_crashlightning",
    manaCost: 550,
  },
  FERAL_SPIRIT: {
    id: 51533 as SpellId,
    name: "Feral Spirit",
    icon: "spell_shaman_feralspirit",
  },
  FERAL_SPIRIT_MAELSTROM_BUFF: {
    id: 333957 as SpellId,
    name: "Feral Spirit",
    icon: "spell_shaman_feralspirit",
  },
  ELEMENTAL_SPIRITS_BUFF_MOLTEN_WEAPON: {
    id: 224125 as SpellId,
    name: "Molten Weapon",
    icon: "item_summon_cinderwolf",
  },
  ELEMENTAL_SPIRITS_BUFF_ICY_EDGE: {
    id: 224126 as SpellId,
    name: "Icy Edge",
    icon: "inv_mount_spectralwolf",
  },
  ELEMENTAL_SPIRITS_BUFF_CRACKLING_SURGE: {
    id: 224127 as SpellId,
    name: "Crackling Surge",
    icon: "spell_beastmaster_wolf",
  },
  STORMSTRIKE_CAST: {
    id: 17364 as SpellId,
    name: "Stormstrike",
    icon: "ability_shaman_stormstrike",
    manaCost: 200,
  },
  STORMSTRIKE_DAMAGE: {
    id: 32175 as SpellId,
    name: "Stormstrike",
    icon: "ability_shaman_stormstrike",
  },
  STORMSTRIKE_DAMAGE_OFFHAND: {
    id: 32176 as SpellId,
    name: "Stormstrike Off-Hand",
    icon: "ability_shaman_stormstrike",
  },
  ASCENDANCE_INITIAL_DAMAGE: {
    id: 344548 as SpellId,
    name: "Ascendance",
    icon: "spell_fire_elementaldevastation",
  },
  WINDSTRIKE_CAST: {
    id: 115356 as SpellId,
    name: "Windstrike",
    icon: "ability_skyreach_four_wind",
  },
  WINDSTRIKE_DAMAGE: {
    id: 115357 as SpellId,
    name: "Windstrike",
    icon: "ability_skyreach_four_wind",
  },
  WINDSTRIKE_DAMAGE_OFFHAND: {
    id: 115360 as SpellId,
    name: "Windstrike Off-Hand",
    icon: "ability_skyreach_four_wind",
  },
  LAVA_LASH: {
    id: 60103 as SpellId,
    name: "Lava Lash",
    icon: "ability_shaman_lavalash",
    manaCost: 400,
  },
  FIRE_NOVA_DAMAGE: {
    id: 333977 as SpellId,
    name: "Fire Nova",
    icon: "spell_shaman_improvedfirenova",
  },
  DOOM_WINDS: {
    id: 204945 as SpellId,
    name: "Doom Winds",
    icon: "inv_mace_1h_artifactdoomhammer_d_01",
  },
  STORMBRINGER: {
    id: 201845 as SpellId,
    name: "Stormbringer",
    icon: "spell_nature_stormreach",
  },
  STORMBRINGER_BUFF: {
    id: 201846 as SpellId,
    name: "Stormbringer Buff",
    icon: "spell_nature_stormreach",
  },
  MAELSTROM_WEAPON: {
    id: 187890 as SpellId,
    name: "Maelstrom Weapon",
    icon: "spell_shaman_maelstromweapon",
  },
  MAELSTROM_WEAPON_BUFF: {
    id: 344179 as SpellId,
    name: "Maelstrom Weapon",
    icon: "spell_shaman_maelstromweapon",
  },
  DOOM_VORTEX: {
    id: 199116 as SpellId,
    name: "Doom Vortex",
    icon: "ability_shaman_stormstrike",
  },
  GHOST_WOLF: {
    id: 2645 as SpellId,
    name: "Ghost Wolf",
    icon: "spell_nature_spiritwolf",
  },
  FERAL_LUNGE: {
    id: 196881 as SpellId,
    name: "Feral Lunge",
    icon: "spell_beastmaster_wolf",
  },
  FERAL_LUNGE_DAMAGE: {
    id: 215802 as SpellId,
    name: "Feral Lunge",
    icon: "spell_beastmaster_wolf",
  },
  BLOODLUST: {
    id: 2825 as SpellId,
    name: "Bloodlust",
    icon: "spell_nature_bloodlust",
    manaCost: 2150,
  },
  HEROISM: {
    id: 32182 as SpellId,
    name: "Heroism",
    icon: "ability_shaman_heroism",
    manaCost: 2150,
  },
  REINCARNATION: {
    id: 21169 as SpellId,
    name: "Reincarnation",
    icon: "spell_shaman_improvedreincarnation",
  },
  SPIRIT_WALK: {
    id: 58875 as SpellId,
    name: "Spirit Walk",
    icon: "ability_tracking",
  },
  WINDLASH: {
    id: 114089 as SpellId,
    name: "Windlash",
    icon: "spell_nature_cyclone",
  },
  STORMLASH: {
    id: 195256 as SpellId,
    name: "Stormlash",
    icon: "spell_lightning_lightningbolt01",
  },
  WINDLASH_OFFHAND: {
    id: 114093 as SpellId,
    name: "Windlash Off-Hand",
    icon: "spell_nature_cyclone",
  },
  WINDFURY_ATTACK: {
    id: 25504 as SpellId,
    name: "Windfury Attack",
    icon: "spell_shaman_unleashweapon_wind",
  },
  WINDFURY_TOTEM: {
    id: 8512 as SpellId,
    name: "Windfury Totem",
    icon: "spell_nature_windfury",
    manaCost: 1200,
  },
  WINDFURY_TOTEM_BUFF: {
    id: 327942 as SpellId,
    name: "Windfury Totem",
    icon: "spell_nature_windfury",
  },
  ELEMENTAL_HEALING: {
    id: 198249 as SpellId,
    name: "Elemental Healing",
    icon: "spell_shaman_improvedreincarnation",
  },
  UNLEASH_LAVA: {
    id: 199053 as SpellId,
    name: "Unleash Lava",
    icon: "ability_shaman_stormstrike",
  },
  UNLEASH_LIGHTNING: {
    id: 199054 as SpellId,
    name: "Unleash Lightning",
    icon: "ability_shaman_stormstrike",
  },
  FLAMETONGUE_ATTACK: {
    id: 10444 as SpellId,
    name: "Flametongue Attack",
    icon: "spell_shaman_unleashweapon_flame",
  },
  CRASH_LIGHTNING_BUFF: {
    id: 195592 as SpellId,
    name: "Crash Lightning",
    icon: "spell_shaman_crashlightning",
  },
  SPIRIT_OF_THE_MAELSTROM: {
    id: 204880 as SpellId,
    name: "Spirit of the Maelstrom",
    icon: "ability_shaman_freedomwolf",
  },
  WINDFURY_ATTACK_BUFF: {
    id: 204608 as SpellId,
    name: "Windfury Attack",
    icon: "spell_shaman_unleashweapon_wind",
  },
  CRASHING_STORM_DAMAGE: {
    id: 210801 as SpellId,
    name: "Crashing Storm",
    icon: "spell_nature_unrelentingstorm",
  },
  HAILSTORM_BUFF: {
    id: 334196 as SpellId,
    name: "Hailstorm",
    icon: "spell_frost_icestorm",
  },
  LASHING_FLAMES_DEBUFF: {
    id: 334168 as SpellId,
    name: "Lashing Flames",
    icon: "spell_shaman_improvelavalash",
  },
  FORCEFUL_WINDS_BUFF: {
    id: 262652 as SpellId,
    name: "Forceful Winds Buff",
    icon: "spell_shaman_unleashweapon_wind",
  },
  HOT_HAND_BUFF: {
    id: 215785 as SpellId,
    name: "Hot Hand Buff",
    icon: "spell_fire_playingwithfire",
  },
};

export default spells;

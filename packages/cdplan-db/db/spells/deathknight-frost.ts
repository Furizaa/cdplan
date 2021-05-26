import { Spell, SpellId } from "../types";

const spells: Record<string, Spell> = {
  FROST_FEVER: {
    id: 55095 as SpellId,
    name: "Frost Fever",
    icon: "spell_deathknight_frostfever",
  },
  FROST_STRIKE_CAST: {
    id: 49143 as SpellId,
    name: "Frost Strike",
    icon: "spell_deathknight_empowerruneblade2",
  },
  FROST_STRIKE_MAIN_HAND_DAMAGE: {
    id: 222026 as SpellId,
    name: "Frost Strike",
    icon: "spell_deathknight_empowerruneblade2",
  },
  FROST_STRIKE_OFF_HAND_DAMAGE: {
    id: 66196 as SpellId,
    name: "Frost Strike",
    icon: "spell_deathknight_empowerruneblade2",
  },
  OBLITERATE_CAST: {
    id: 49020 as SpellId,
    name: "Obliterate",
    icon: "spell_deathknight_classicon",
  },
  OBLITERATE_MAIN_HAND_DAMAGE: {
    id: 222024 as SpellId,
    name: "Obliterate",
    icon: "spell_deathknight_classicon",
  },
  OBLITERATE_OFF_HAND_DAMAGE: {
    id: 66198 as SpellId,
    name: "Obliterate",
    icon: "spell_deathknight_classicon",
  },
  HOWLING_BLAST: {
    id: 49184 as SpellId,
    name: "Howling Blast",
    icon: "spell_frost_arcticwinds",
  },
  REMORSELESS_WINTER_ENV_CAST: {
    // not actually sure what this does
    id: 211793 as SpellId,
    name: "Remorseless Winter",
    icon: "ability_deathknight_remorselesswinters2",
  },
  REMORSELESS_WINTER_DAMAGE: {
    // every tick puts a cast event on the environment and also the id of the damage event
    id: 196771 as SpellId,
    name: "Remorseless Winter",
    icon: "ability_deathknight_remorselesswinters2",
  },
  REMORSELESS_WINTER: {
    // This the spell the player casts, triggers energize event, also exists as buff on player
    id: 196770 as SpellId,
    name: "Remorseless Winter",
    icon: "ability_deathknight_remorselesswinters2",
  },
  GATHERING_STORM_TALENT_BUFF: {
    id: 211805 as SpellId,
    name: "Gathering Storm",
    icon: "spell_frost_ice-shards",
  },
  BREATH_OF_SINDRAGOSA_TALENT_DAMAGE_TICK: {
    id: 155166 as SpellId,
    name: "Breath of Sindragosa",
    icon: "spell_deathknight_breathofsindragosa",
  },
  CHILL_STREAK_TALENT: {
    id: 305392 as SpellId,
    name: "Chill Streak",
    icon: "spell_frost_piercing-chill",
  },
  FROSTWYRMS_FURY: {
    id: 279302 as SpellId,
    name: "Frostwyrm's Fury",
    icon: "achievement_boss_sindragosa",
  },
  // Buffs
  EMPOWER_RUNE_WEAPON: {
    id: 47568 as SpellId,
    name: "Empower Rune Weapon",
    icon: "inv_sword_62",
  },
  PILLAR_OF_FROST: {
    id: 51271 as SpellId,
    name: "Pillar of Frost",
    icon: "ability_deathknight_pillaroffrost",
  },
  // Procs
  RIME: {
    id: 59052 as SpellId,
    name: "Rime",
    icon: "spell_frost_arcticwinds",
  },

  KILLING_MACHINE: {
    id: 51124 as SpellId,
    name: "Killing Machine",
    icon: "inv_sword_122",
  },

  RAZORICE: {
    id: 50401 as SpellId,
    name: "Razorice",
    icon: "spell_deathknight_frozenruneweapon",
  },

  RUNIC_EMPOWERMENT: {
    id: 193486 as SpellId,
    name: "Runic Empowerment",
    icon: "inv_misc_rune_10",
  },

  MURDEROUS_EFFICIENCY: {
    id: 207062 as SpellId,
    name: "Murderous Efficiency",
    icon: "spell_frost_frostarmor",
  },

  FROST_FEVER_RP_GAIN: {
    id: 195617 as SpellId,
    name: "Frost Fever",
    icon: "spell_deathknight_frostfever",
  },

  RUNIC_ATTENUATION_RP_GAIN: {
    id: 221322 as SpellId,
    name: "Runic Attenuation",
    icon: "boss_odunrunes_blue",
  },

  BREATH_OF_SINDRAGOSA_TALENT_RUNE_GAIN: {
    id: 303753 as SpellId,
    name: "Breath of Sindragosa",
    icon: "inv_misc_rune_10",
  },

  OBLITERATION_RUNE_GAIN: {
    id: 281327 as SpellId,
    name: "Obliteration",
    icon: "inv_axe_114",
  },
};

export default spells;

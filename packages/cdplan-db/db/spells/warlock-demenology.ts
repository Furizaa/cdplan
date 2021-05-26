import { SpellId } from "../types";

const spells = {
  CALL_DREADSTALKERS: {
    id: 104316 as SpellId,
    name: "Call Dreadstalkers",
    icon: "spell_warlock_calldreadstalkers",
  },
  DEMONBOLT: {
    id: 264178 as SpellId,
    name: "Demonbolt",
    icon: "inv__demonbolt",
  },
  DEMONIC_CORE_BUFF: {
    id: 264173 as SpellId,
    name: "Demonic Core",
    icon: "warlock_spelldrain",
  },
  HAND_OF_GULDAN_CAST: {
    id: 105174 as SpellId,
    name: "Hand of Gul'dan",
    icon: "ability_warlock_handofguldan",
  },
  HAND_OF_GULDAN_DAMAGE: {
    id: 86040 as SpellId,
    name: "Hand of Gul'dan",
    icon: "ability_warlock_handofguldan",
  },
  IMPLOSION_CAST: {
    id: 196277 as SpellId,
    name: "Implosion",
    icon: "inv_implosion",
  },
  IMPLOSION_DAMAGE: {
    id: 196278 as SpellId,
    name: "Implosion",
    icon: "inv_implosion",
  },
  SHADOW_BOLT_DEMO: {
    id: 686 as SpellId,
    name: "Shadow Bolt",
    icon: "spell_shadow_shadowbolt",
  },
  SUMMON_FELGUARD: {
    id: 30146 as SpellId,
    name: "Summon Felguard",
    icon: "spell_shadow_summonfelguard",
  },
  SUMMON_DEMONIC_TYRANT: {
    id: 265187 as SpellId,
    name: "Summon Demonic Tyrant",
    icon: "inv_summondemonictyrant",
  },
  // Demonic Tyrant buff on player
  DEMONIC_POWER: {
    id: 265273 as SpellId,
    name: "Demonic Power",
    icon: "achievement_boss_argus_maleeredar",
  },

  // Pet abilities
  // Following 2 abilities are the same for Grimoire: Felguard
  FELSTORM_BUFF: {
    id: 89751 as SpellId,
    name: "Felstorm",
    icon: "ability_warrior_bladestorm",
  },
  FELSTORM_DAMAGE: {
    id: 89753 as SpellId,
    name: "Felstorm",
    icon: "ability_warrior_bladestorm",
  },
  // also important for Dreadlash talent
  DREADBITE: {
    id: 271971 as SpellId,
    name: "Dreadbite",
    icon: "spell_warlock_calldreadstalkers",
  },
  SHARPENED_DREADFANGS: {
    id: 215111 as SpellId,
    name: "Sharpened Dreadfangs",
    icon: "inv_feldreadravenmount",
  },
  FEL_FIREBOLT: {
    id: 104318 as SpellId,
    name: "Fel Firebolt",
    icon: "spell_fel_firebolt",
  },
  DEMONIC_TYRANT_DAMAGE: {
    id: 270481 as SpellId,
    name: "Demonfire",
    icon: "ability_vehicle_demolisherflamecatapult",
  },

  VILEFIEND_BILE_SPIT: {
    id: 267997 as SpellId,
    name: "Bile Spit",
    icon: "spell_fel_firebolt",
  },
  VILEFIEND_HEADBUTT: {
    id: 267999 as SpellId,
    name: "Headbutt",
    icon: "inv_argusfelstalkermountgrey",
  },
  // Inner Demons pet abilities
  INNER_DEMONS_EYE_OF_GULDAN: {
    id: 272131 as SpellId,
    name: "Eye of Gul'dan",
    icon: "inv_misc_eye_01",
  },
  INNER_DEMONS_TOXIC_BILE: {
    id: 272167 as SpellId,
    name: "Toxic Bile",
    icon: "ability_creature_poison_02",
  },
  INNER_DEMONS_SHADOW_SLASH: {
    id: 272012 as SpellId,
    name: "Shadow Slash",
    icon: "spell_deathknight_scourgestrike",
  },
  INNER_DEMONS_MULTI_SLASH: {
    id: 272172 as SpellId,
    name: "Multi-Slash",
    icon: "ability_rogue_murderspree",
  },
  NETHER_PORTAL_BUFF: {
    id: 267218 as SpellId,
    name: "Nether Portal",
    icon: "inv_netherportal",
  },
  // TODO: possibly even more
  // Nether Portal pet abilities
  // also can be summoned via Inner Demons
  NETHER_PORTAL_FEL_BITE: {
    id: 272435 as SpellId,
    name: "Fel Bite",
    icon: "artifactability_feraldruid_openwounds",
  },
  NETHER_PORTAL_DOUBLE_BREATH: {
    id: 272156 as SpellId,
    name: "Double Breath",
    icon: "ability_warlock_shadowflame",
  },
  // also can be summoned via Inner Demons
  NETHER_PORTAL_MANY_FACED_BITE: {
    id: 272439 as SpellId,
    name: "Many Faced Bite",
    icon: "inv_soulhoundmount_green",
  },
  // also can be summoned via Inner Demons
  NETHER_PORTAL_OVERHEAD_ASSAULT: {
    id: 272432 as SpellId,
    name: "Overhead Assault",
    icon: "warrior_talent_icon_mastercleaver",
  },

  // Demonology talents
  BILESCOURGE_BOMBERS_DAMAGE: {
    id: 267213 as SpellId,
    name: "Bilescourge Bombers",
    icon: "ability_hunter_pet_bat",
  },
  DEMONIC_CALLING_BUFF: {
    id: 205146 as SpellId,
    name: "Demonic Calling",
    icon: "ability_warlock_impoweredimp",
  },
  FROM_THE_SHADOWS_DEBUFF: {
    id: 270569 as SpellId,
    name: "From the Shadows",
    icon: "spell_warlock_calldreadstalkers",
  },
  SOUL_STRIKE_DAMAGE: {
    id: 267964 as SpellId,
    name: "Soul Strike",
    icon: "inv_polearm_2h_fellord_04",
  },
  DEMONIC_CONSUMPTION_BUFF: {
    id: 267972 as SpellId,
    name: "Demonic Consumption",
    icon: "spell_warlock_soulburn",
  },
  DEMONIC_CONSUMPTION_CAST: {
    id: 267971 as SpellId,
    name: "Demonic Consumption(cast)",
    icon: "spell_warlock_soulburn",
  },

  // Demonology shard generating effects
  SHADOW_BOLT_SHARD_GEN: {
    id: 194192 as SpellId,
    name: "Shadow Bolt",
    icon: "spell_shadow_shadowbolt",
  },
  DEMONBOLT_SHARD_GEN: {
    id: 280127 as SpellId,
    name: "Demonbolt",
    icon: "inv__demonbolt",
  },
  DOOM_SHARD_GEN: {
    id: 272728 as SpellId,
    name: "Doom",
    icon: "spell_shadow_auraofdarkness",
  },
  SOUL_STRIKE_SHARD_GEN: {
    id: 270557 as SpellId,
    name: "Soul Strike",
    icon: "inv_polearm_2h_fellord_04",
  },
  DEMONIC_METEOR_SHARD_GEN: {
    id: 281592 as SpellId,
    name: "Demonic Meteor", // Wowhead shows a spell Soul Shard with SS icon, that doesn't explain anything
    icon: "ability_warlock_handofguldan", // this at least fixes the SpellLink, if not the tooltip
  },

  // Demonology pet summons (ability IDs from 'summon' events)
  WILD_IMP_HOG_SUMMON: {
    id: 104317 as SpellId,
    name: "Wild Imp",
    icon: "ability_warlock_impoweredimp",
  },
  DREADSTALKER_SUMMON_1: {
    id: 193331 as SpellId,
    name: "Call Dreadstalkers",
    icon: "spell_warlock_calldreadstalkers",
  },
  DREADSTALKER_SUMMON_2: {
    id: 193332 as SpellId,
    name: "Call Dreadstalkers",
    icon: "spell_warlock_calldreadstalkers",
  },
  WILD_IMP_ID_SUMMON: {
    id: 279910 as SpellId,
    name: "Wild Imp",
    icon: "ability_warlock_impoweredimp",
  },
  BILESCOURGE_SUMMON: {
    id: 267992 as SpellId,
    name: "Summon Bilescourge",
    icon: "ability_hunter_pet_bat",
  },
  VICIOUS_HELLHOUND_SUMMON: {
    id: 267988 as SpellId,
    name: "Summon Vicious Hellhound",
    icon: "inv_felhound3_shadow_fire",
  },
  SHIVARRA_SUMMON: {
    id: 267994 as SpellId,
    name: "Summon Shivarra",
    icon: "achievement_shivan",
  },
  DARKHOUND_SUMMON: {
    id: 267996 as SpellId,
    name: "Summon Darkhound",
    icon: "inv_felhound3_shadow_mount",
  },
  ILLIDARI_SATYR_SUMMON: {
    id: 267987 as SpellId,
    name: "Summon Illidari Satyr",
    icon: "classicon_warlock",
  },
  VOID_TERROR_SUMMON: {
    id: 267991 as SpellId,
    name: "Summon Void Terror",
    icon: "inv_pet_voidhound",
  },
  URZUL_SUMMON: {
    id: 268001 as SpellId,
    name: "Summon Ur'zul",
    icon: "inv_soulhoundmount_blue",
  },
  WRATHGUARD_SUMMON: {
    id: 267995 as SpellId,
    name: "Summon Wrathguard",
    icon: "spell_warlock_summonwrathguard",
  },
  EYE_OF_GULDAN_SUMMON: {
    id: 267989 as SpellId,
    name: "Summon Eyes of Gul'dan",
    icon: "inv_pet_inquisitoreye",
  },
  PRINCE_MALCHEZAAR_SUMMON: {
    id: 267986 as SpellId,
    name: "Summon Prince Malchezaar",
    icon: "achievement_boss_princemalchezaar_02",
  },
  // Glyphed permanent pet summons
  FEL_IMP_SUMMON: {
    id: 112866 as SpellId,
    name: "Summon Fel Imp",
    icon: "spell_warlock_summonimpoutland",
  },
  VOIDLORD_SUMMON: {
    id: 112867 as SpellId,
    name: "Summon Voidlord",
    icon: "warlock_summon_-voidlord",
  },
  OBSERVER_SUMMON: {
    id: 112869 as SpellId,
    name: "Summon Observer",
    icon: "warlock_summon_-beholder",
  },
  SHADOW_SUCCUBUS_SUMMON: {
    id: 240266 as SpellId,
    name: "Summon Shadow Succubus",
    icon: "spell_shadow_summonsuccubus",
  },
  SHIVARRA_PERMANENT_SUMMON: {
    id: 112868 as SpellId,
    name: "Summon Shivarra",
    icon: "warlock_summon_-shivan",
  },
  WRATHGUARD_PERMANENT_SUMMON: {
    id: 112870 as SpellId,
    name: "Summon Wrathguard",
    icon: "spell_warlock_summonwrathguard",
  },
};

export default spells;

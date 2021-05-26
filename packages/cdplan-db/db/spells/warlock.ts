import { SpellId } from "../types";

const spells = {
  SOUL_SHARDS: {
    id: 246985 as SpellId,
    name: "Soul Shards",
    icon: "inv_misc_gem_amethyst_02",
  },
  BANISH: {
    id: 710 as SpellId,
    name: "Banish",
    icon: "spell_shadow_cripple",
  },
  CREATE_HEALTHSTONE: {
    id: 6201 as SpellId,
    name: "Create Healthstone",
    icon: "warlock_healthstone",
  },
  CREATE_SOULWELL: {
    id: 29893 as SpellId,
    name: "Create Soulwell",
    icon: "spell_shadow_shadesofdarkness",
  },
  DEMONIC_GATEWAY_CAST: {
    id: 111771 as SpellId,
    name: "Demonic Gateway",
    icon: "spell_warlock_demonicportal_green",
  },
  DRAIN_LIFE: {
    id: 234153 as SpellId,
    name: "Drain Life",
    icon: "spell_shadow_lifedrain02",
  },
  SUBJUGATE_DEMON: {
    id: 1098 as SpellId,
    name: "Enslave Demon",
    icon: "spell_shadow_enslavedemon",
  },
  EYE_OF_KILROGG: {
    id: 126 as SpellId,
    name: "Eye of Kilrogg",
    icon: "spell_shadow_evileye",
  },
  FEAR_CAST: {
    id: 5782 as SpellId,
    name: "Fear",
    icon: "spell_shadow_possession",
  },
  FEAR_DEBUFF: {
    id: 118699 as SpellId,
    name: "Fear",
    icon: "spell_shadow_possession",
  },
  HEALTH_FUNNEL_CAST: {
    id: 755 as SpellId,
    name: "Health Funnel",
    icon: "spell_shadow_lifedrain",
  },
  SHADOWFURY: {
    id: 30283 as SpellId,
    name: "Shadowfury",
    icon: "ability_warlock_shadowfurytga",
  },
  SOUL_LEECH_SPELL: {
    id: 108370 as SpellId,
    name: "Soul Leech",
    icon: "warlock_siphonlife",
  },
  SOUL_LEECH_BUFF: {
    id: 108366 as SpellId,
    name: "Soul Leech",
    icon: "warlock_siphonlife",
  },
  SOULSTONE: {
    id: 20707 as SpellId,
    name: "Soulstone",
    icon: "spell_shadow_soulgem",
  },
  SUMMON_IMP: {
    id: 688 as SpellId,
    name: "Summon Imp",
    icon: "spell_shadow_summonimp",
  },
  SUMMON_VOIDWALKER: {
    id: 697 as SpellId,
    name: "Summon Voidwalker",
    icon: "spell_shadow_summonvoidwalker",
  },
  SUMMON_FELHUNTER: {
    id: 691 as SpellId,
    name: "Summon Felhunter",
    icon: "spell_shadow_summonfelhunter",
  },
  SUMMON_SUCCUBUS: {
    id: 712 as SpellId,
    name: "Summon Succubus",
    icon: "spell_shadow_summonsuccubus",
  },
  UNENDING_BREATH: {
    id: 5697 as SpellId,
    name: "Unending Breath",
    icon: "spell_shadow_demonbreath",
  },
  UNENDING_RESOLVE: {
    id: 104773 as SpellId,
    name: "Unending Resolve",
    icon: "spell_shadow_demonictactics",
  },
  CURSE_OF_TONGUES: {
    id: 1714 as SpellId,
    name: "Curse of Tongues",
    icon: "spell_shadow_curseoftounges",
  },
  CURSE_OF_WEAKNESS: {
    id: 702 as SpellId,
    name: "Curse of Weakness",
    icon: "spell_shadow_curseofmannoroth",
  },
  CURSE_OF_EXHAUSTION: {
    id: 334275 as SpellId,
    name: "Curse of Exhaustion",
    icon: "spell_shadow_grimward",
  },
  FEL_DOMINATION: {
    id: 333889 as SpellId,
    name: "Fel Domination",
    icon: "spell_shadow_felmending",
  },
  DEMONIC_CIRCLE: {
    id: 268358 as SpellId,
    name: "Demonic Circle",
    icon: "spell_shadow_demoniccirclesummon",
    manaCost: 2000,
  },
  DEMONIC_CIRCLE_SUMMON: {
    id: 48018 as SpellId,
    name: "Demonic Circle Summon",
    icon: "spell_shadow_demoniccirclesummon",
  },
  DEMONIC_CIRCLE_TELEPORT: {
    id: 48020 as SpellId,
    name: "Demonic Circle Teleport",
    icon: "spell_shadow_demoniccircleteleport",
  },

  // Permanent pet damage abilities
  IMP_FIREBOLT: {
    id: 3110 as SpellId,
    name: "Firebolt",
    icon: "spell_fire_firebolt",
  },
  VOIDWALKER_CONSUMING_SHADOWS: {
    id: 3716 as SpellId,
    name: "Consuming Shadows",
    icon: "spell_shadow_gathershadows",
  },
  FELHUNTER_SHADOW_BITE: {
    id: 54049 as SpellId,
    name: "Shadow Bite",
    icon: "spell_shadow_soulleech_3",
  },
  SUCCUBUS_LASH_OF_PAIN: {
    id: 7814 as SpellId,
    name: "Lash of Pain",
    icon: "spell_shadow_curse",
  },
  FELGUARD_LEGION_STRIKE: {
    id: 30213 as SpellId,
    name: "Legion Strike",
    icon: "inv_axe_09",
  },
  FELGUARD_PURSUIT: {
    id: 30153 as SpellId,
    name: "Pursuit",
    icon: "ability_rogue_sprint",
  },

  // --------------
  // Shared talents
  // --------------

  MORTAL_COIL_HEAL: {
    id: 108396 as SpellId,
    name: "Mortal Coil",
    icon: "ability_warlock_mortalcoil",
  },
  GRIMOIRE_OF_SACRIFICE_BUFF: {
    id: 196099 as SpellId,
    name: "Demonic Power",
    icon: "warlock_grimoireofsacrifice",
  },
  GRIMOIRE_OF_SACRIFICE_DAMAGE: {
    id: 196100 as SpellId,
    name: "Demonic Power",
    icon: "warlock_grimoireofsacrifice",
  },
};

export default spells;

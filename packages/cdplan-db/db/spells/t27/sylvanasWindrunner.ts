import { SpellId, SpellList } from "../../types";

const spells: SpellList = {
  VEIL_OF_DARKNESS_STAGE_1: {
    id: 347704 as SpellId,
    name: "Veil of Darkness",
    icon: "ability_argus_deathfog",
    timelineInformation: {
      castTimeMs: 0,
      blockDurationMs: 6800,
    },
  },
  VEIL_OF_DARKNESS_STAGE_2_3: {
    id: 347704 as SpellId,
    name: "Veil of Darkness",
    icon: "ability_argus_deathfog",
    timelineInformation: {
      castTimeMs: 0,
      blockDurationMs: 4800,
    },
  },
  HAUNTING_WAVE: {
    id: 352271 as SpellId,
    name: "Haunting Wave",
    icon: "ui_darkshore_warfront_horde_banshee",
    timelineInformation: {
      castTimeMs: 0,
      blockDurationMs: 3000,
    },
  },
  DOMINATION_CHAINS: {
    id: 349458 as SpellId,
    name: "Domination Chains",
    icon: "inv_belt_44",
    timelineInformation: {
      castTimeMs: 7200,
      blockDurationMs: 0,
    },
  },
  WAILING_ARROW: {
    id: 347609 as SpellId,
    name: "Wailing Arrow",
    icon: "ability_theblackarrow",
    timelineInformation: {
      castTimeMs: 0,
      blockDurationMs: 15000,
    },
  },
  RAZE: {
    id: 354147 as SpellId,
    name: "Raze",
    icon: "spell_animamaw_groundstate",
    timelineInformation: {
      castTimeMs: 3000,
      blockDurationMs: 5000,
    },
  },
  BANSHEE_SCREAM: {
    id: 353952 as SpellId,
    name: "Banshee Scream",
    icon: "ability_warlock_improvedsoulleech",
    timelineInformation: {
      castTimeMs: 0,
      blockDurationMs: 3000,
    },
  },
  BANE_ARROWS: {
    id: 354011 as SpellId,
    name: "Bane Arrows",
    icon: "spell_shadow_painspike",
  },
  DEATH_KNIVES: {
    id: 358434 as SpellId,
    name: "Death Knives",
    icon: "ability_rogue_nightblade",
    timelineInformation: {
      castTimeMs: 0,
      blockDurationMs: 4000,
    },
  },
};

export default spells;

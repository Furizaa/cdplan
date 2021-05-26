import { SpellId } from "../types";

const spells = {
  // Shared
  HIBERNATE: {
    id: 2637 as SpellId,
    name: "Hibernate",
    icon: "spell_nature_sleep",
  },
  SOOTHE: {
    id: 2908 as SpellId,
    name: "Soothe",
    icon: "ability_hunter_beastsoothe",
  },
  REVIVE: {
    id: 50769 as SpellId,
    name: "Revive",
    icon: "ability_druid_lunarguidance",
  },
  TYPHOON: {
    id: 61391 as SpellId,
    name: "Typhoon",
    icon: "ability_druid_typhoon",
  },
  // learnt from a tome, treant form is (mostly?) functionally identical to caster form
  TREANT_FORM: {
    id: 114282 as SpellId,
    name: "Treant Form",
    icon: "ability_druid_treeoflife",
  },
  // learnt from a tome
  CHARM_WOODLAND_CREATURE: {
    id: 127757 as SpellId,
    name: "Charm Woodland Creature",
    icon: "inv_misc_rabbit",
  },
  TELEPORT_MOONGLADE: {
    id: 18960 as SpellId,
    name: "Teleport: Moonglade",
    icon: "spell_arcane_teleportmoonglade",
  },
  TELEPORT_DREAMWALK: {
    id: 193753 as SpellId,
    name: "Dreamwalk",
    icon: "spell_arcane_teleportstormwind",
  },
  // passive for all Feral druids and any druid with Feral Affinity
  FELINE_SWIFTNESS: {
    id: 131768 as SpellId,
    name: "Feline Swiftness",
    icon: "spell_druid_tirelesspursuit",
  },
  // learnt from a tome, requires moonkin form to use
  FLAP: {
    id: 164862 as SpellId,
    name: "Flap",
    icon: "inv_feather_12",
  },
  // the action of wild charging
  WILD_CHARGE_TALENT: {
    id: 102401 as SpellId,
    name: "Wild Charge",
    icon: "spell_druid_wildcharge",
  },

  // shared talent spells

  WILD_CHARGE_MOONKIN: {
    id: 102383 as SpellId,
    name: "Wild Charge",
    icon: "ability_druid_owlkinfrenzy",
  },
  WILD_CHARGE_CAT: {
    id: 49376 as SpellId,
    name: "Wild Charge",
    icon: "spell_druid_feralchargecat",
  },
  WILD_CHARGE_BEAR: {
    id: 16979 as SpellId,
    name: "Wild Charge",
    icon: "ability_hunter_pet_bear",
  },
  WILD_CHARGE_TRAVEL: {
    id: 102417 as SpellId,
    name: "Wild Charge",
    icon: "trade_archaeology_antleredcloakclasp",
  },

  // Affinity Spells
  // Moonkin-Balance
  // The moonkin form granted by Balance Affinity
  MOONKIN_FORM_AFFINITY: {
    id: 197625 as SpellId,
    name: "Moonkin Form",
    icon: "spell_nature_forceofnature",
  },
  // granted by Balance Affinity to non-Balance druids
  STARSURGE_AFFINITY: {
    id: 197626 as SpellId,
    name: "Starsurge",
    icon: "spell_arcane_arcane03",
  },
  // granted by Balance Affinity to non-Balance druids
  STARFIRE_AFFINITY: {
    id: 197628 as SpellId,
    name: "Starfire",
    icon: "spell_arcane_starfire",
  },
  // granted by Balance Affinity to Guardian and Feral druids
  SUNFIRE_AFFINITY: {
    id: 197630 as SpellId,
    name: "Sunfire",
    icon: "ability_mage_firestarter",
  },
  // Guardian Affinity Spells
  // Ironfur gained from affinity has same spell ID as the Guardian spell
  // Thick Hide gained from affinity has same spell ID as the Guardian spell
  // Thrash gained from affinity has same spell ID as the Guardian spell
  // Granted by Guardian affinity
  FRENZIED_REGENERATION: {
    id: 22842 as SpellId,
    name: "Frenzied Regeneration",
    icon: "ability_bullrush",
  },
  STAMPEDING_ROAR: {
    id: 77761 as SpellId,
    name: "Stampeding Roar",
    icon: "spell_druid_stamedingroar",
  },
};

export default spells;

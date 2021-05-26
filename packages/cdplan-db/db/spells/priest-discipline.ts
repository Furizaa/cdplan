import { SpellId } from "../types";

const spells = {
  GRACE: {
    id: 271534 as SpellId,
    name: "Mastery: Grace",
    icon: "spell_holy_hopeandgrace",
  },
  PENANCE: {
    id: 47666 as SpellId,
    name: "Penance",
    icon: "spell_holy_penance",
    manaCost: 800,
  },
  PENANCE_HEAL: {
    // Penance on a friendly player
    id: 47750 as SpellId,
    name: "Penance",
    icon: "spell_holy_penance",
    manaCost: 800,
  },
  PENANCE_CAST: {
    id: 47540 as SpellId,
    name: "Penance",
    icon: "spell_holy_penance",
    manaCost: 800,
  },
  POWER_WORD_SHIELD: {
    id: 17 as SpellId,
    name: "Power Word: Shield",
    icon: "spell_holy_powerwordshield",
    manaCost: 1550,
  },
  SMITE: {
    id: 585 as SpellId,
    name: "Smite",
    icon: "spell_holy_holysmite",
    manaCost: 200,
  },
  POWER_WORD_RADIANCE: {
    id: 194509 as SpellId,
    name: "Power Word: Radiance",
    icon: "spell_priest_power-word",
    manaCost: 3250,
  },
  SHADOW_MEND: {
    id: 186263 as SpellId,
    name: "Shadow Mend",
    icon: "spell_shadow_shadowmend",
    manaCost: 1750,
  },
  RAPTURE: {
    id: 47536 as SpellId,
    name: "Rapture",
    icon: "spell_holy_rapture",
    manaCost: 1550,
  },
  PAIN_SUPPRESSION: {
    id: 33206 as SpellId,
    name: "Pain Suppression",
    icon: "spell_holy_painsupression",
    manaCost: 800,
  },
  MASS_DISPEL: {
    id: 32375 as SpellId,
    name: "Mass Dispel",
    icon: "spell_arcane_massdispel",
    manaCost: 4000,
  },
  DISPEL_MAGIC: {
    id: 528 as SpellId,
    name: "Dispel Magic",
    icon: "spell_nature_nullifydisease",
    manaCost: 800,
  },
  LEAP_OF_FAITH: {
    id: 73325 as SpellId,
    name: "Leap of Faith",
    icon: "priest_spell_leapoffaith_a",
    manaCost: 1300,
  },
  LEVITATE: {
    id: 1706 as SpellId,
    name: "Levitate",
    icon: "spell_holy_layonhands",
    manaCost: 450,
  },
  LIGHTS_WRATH: {
    id: 207946 as SpellId,
    name: "Light's Wrath",
    icon: "inv_staff_2h_artifacttome_d_01",
  },
  MIND_CONTROL: {
    id: 605 as SpellId,
    name: "Mind Control",
    icon: "spell_shadow_shadowworddominate",
    manaCost: 1000,
  },
  POWER_WORD_BARRIER_CAST: {
    id: 62618 as SpellId,
    name: "Power Word: Barrier",
    icon: "spell_holy_powerwordbarrier",
    manaCost: 2000,
  },
  POWER_WORD_BARRIER_BUFF: {
    id: 81782 as SpellId,
    name: "Power Word: Barrier",
    icon: "spell_holy_powerwordbarrier",
  },
  PURIFY: {
    id: 527 as SpellId,
    name: "Purify",
    icon: "spell_holy_dispelmagic",
    manaCost: 650,
  },
  SHACKLE_UNDEAD: {
    id: 9484 as SpellId,
    name: "Shackle Undead",
    icon: "spell_nature_slow",
    manaCost: 600,
  },
  SHADOWFIEND: {
    id: 34433 as SpellId,
    name: "Shadowfiend",
    icon: "spell_shadow_shadowfiend",
  },
  VOIDLING: {
    id: 254232 as SpellId,
    name: "Voidling",
    icon: "spell_shadow_shadowfiend",
  },
  LIGHTSPAWN: {
    id: 254224 as SpellId,
    name: "Shadowfiend",
    icon: "spell_shadow_shadowfiend",
  },
  LIGHTSPAWN_MELEE: {
    id: -2 as SpellId,
    name: "Shadowfiend",
    icon: "spell_shadow_shadowfiend",
  },
  SHADOWFIEND_WITH_GLYPH_OF_THE_SHA: {
    id: 132603 as SpellId,
    name: "Shadowfiend",
    icon: "spell_shadow_shadowfiend",
  },
  SHADOW_WORD_PAIN: {
    id: 589 as SpellId,
    name: "Shadow Word: Pain",
    icon: "spell_shadow_shadowwordpain",
  },
  FADE: {
    id: 586 as SpellId,
    name: "Fade",
    icon: "spell_magic_lesserinvisibilty",
  },
  PSYCHIC_SCREAM: {
    id: 8122 as SpellId,
    name: "Psychic Scream",
    icon: "spell_shadow_psychicscream",
    manaCost: 600,
  },
  ATONEMENT_HEAL_NON_CRIT: {
    id: 81751 as SpellId,
    name: "Atonement",
    icon: "spell_holy_circleofrenewal",
  },
  ATONEMENT_HEAL_CRIT: {
    id: 94472 as SpellId,
    name: "Atonement",
    icon: "spell_holy_circleofrenewal",
  },
  ATONEMENT_BUFF: {
    id: 194384 as SpellId,
    name: "Atonement",
    icon: "ability_priest_atonement",
  },
  HALO_HEAL: {
    id: 120692 as SpellId,
    name: "Halo",
    icon: "ability_priest_halo",
  },
  HALO_DAMAGE: {
    id: 120696 as SpellId,
    name: "Halo",
    icon: "ability_priest_halo",
  },
  DIVINE_STAR_HEAL: {
    id: 110745 as SpellId,
    name: "Halo",
    icon: "spell_priest_divinestar",
  },
  DIVINE_STAR_DAMAGE: {
    id: 122128 as SpellId,
    name: "Halo",
    icon: "spell_priest_divinestar",
  },
  CONTRITION_HEAL: {
    id: 270501 as SpellId,
    name: "Contrition",
    icon: "ability_priest_savinggrace",
  },
  CONTRITION_HEAL_CRIT: {
    id: 281469 as SpellId,
    name: "Contrition",
    icon: "ability_priest_savinggrace",
  },
  DISC_PRIEST_T19_2SET_BONUS_BUFF: {
    id: 211556 as SpellId,
    name: "T19 2 Set Bonus",
    icon: "spell_holy_powerwordshield",
  },
  DISC_PRIEST_T19_4SET_BONUS_BUFF: {
    id: 211563 as SpellId,
    name: "T19 4 Set Bonus",
    icon: "spell_holy_powerwordshield",
  },
  DISC_PRIEST_T20_2SET_BONUS_PASSIVE: {
    id: 242268 as SpellId,
    name: "T20 2 Set Bonus",
    icon: "spell_holy_penance",
  },
  DISC_PRIEST_T20_4SET_BONUS_PASSIVE: {
    id: 242269 as SpellId,
    name: "T20 4 Set Bonus",
    icon: "spell_holy_penance",
  },
  DISC_PRIEST_T20_4SET_BONUS_BUFF: {
    id: 246519 as SpellId,
    name: "T20 4 Set Bonus",
    icon: "spell_holy_penance",
  },
  DISC_PRIEST_T21_2SET_BONUS_PASSIVE: {
    id: 251843 as SpellId,
    name: "T21 2 Set Bonus",
    icon: "ability_priest_ascension",
  },
  DISC_PRIEST_T21_4SET_BONUS_PASSIVE: {
    id: 251844 as SpellId,
    name: "T21 4 Set Bonus",
    icon: "spell_holy_searinglightpriest",
  },
  DISC_PRIEST_T21_4SET_BONUS_BUFF: {
    id: 252848 as SpellId,
    name: "T21 4 Set Buff",
    icon: "spell_holy_searinglightpriest",
  },
  KAM_XIRAFF_BUFF: {
    id: 233997 as SpellId,
    name: "Kam Xi'raff",
    icon: "ability_priest_savinggrace",
  },
  TWIST_OF_FATE_BUFF: {
    id: 123254 as SpellId,
    name: "Twist of Fate",
    icon: "spell_shadow_mindtwisting",
  },
  TWIST_OF_FATE_BUFF_DISCIPLINE: {
    id: 265258 as SpellId,
    name: "Twist of Fate",
    icon: "spell_shadow_mindtwisting",
  },
  ESTEL_DEJAHNAS_INSPIRATION_BUFF: {
    id: 214637 as SpellId,
    name: "Dejahna's Inspiration",
    icon: "spell_holy_heal",
  },
  PRAYER_CIRCLE_BUFF: {
    id: 321379 as SpellId,
    name: "Prayer Circle",
    icon: "spell_paladin_divinecircle",
  },

  // Talents:
  // lv90
  PURGE_THE_WICKED_TALENT: {
    id: 204197 as SpellId,
    name: "Purge the Wicked",
    icon: "ability_mage_firestarter",
    manaCost: 900,
  },
  PURGE_THE_WICKED_BUFF: {
    id: 204213 as SpellId,
    name: "Purge the Wicked",
    icon: "ability_mage_firestarter",
  },
  HALO_TALENT: {
    id: 120517 as SpellId,
    name: "Halo",
    icon: "ability_priest_halo",
    manaCost: 1350,
  },
};

export default spells;

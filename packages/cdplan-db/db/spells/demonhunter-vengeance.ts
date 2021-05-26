import { SpellId } from "../types";

const spells = {
  // Passive:
  DEMONIC_WARDS: {
    id: 207014 as SpellId,
    name: "Demonic Wards",
    icon: "inv_belt_leather_demonhunter_a_01",
  },
  SEVER: {
    id: 235964 as SpellId,
    name: "Sever",
    icon: "ability_demonhunter_manabreak",
  },
  CHAOS_BRAND: {
    id: 281242 as SpellId,
    name: "Chaos Brand",
    icon: "ability_demonhunter_empowerwards",
  },

  // Abilities:
  FEL_DEVASTATION: {
    id: 212084 as SpellId,
    name: "Fel Devastation",
    icon: "ability_demonhunter_feldevastation",
  },
  FRACTURE_MAIN_HAND: {
    id: 225919 as SpellId,
    name: "Fracture(Main Hand)",
    icon: "ability_creature_felsunder",
  },
  FRACTURE_OFF_HAND: {
    id: 225921 as SpellId,
    name: "Fracture(Off Hand)",
    icon: "ability_creature_felsunder",
  },
  SHEAR: {
    id: 203782 as SpellId,
    name: "Shear",
    icon: "ability_demonhunter_hatefulstrike",
  },
  SOUL_FRAGMENT: {
    id: 204255 as SpellId,
    name: "Soul Fragment",
    icon: "spell_shadow_soulgem",
  },
  SOUL_FRAGMENT_KILLING_BLOW: {
    id: 204062 as SpellId,
    name: "Soul Fragment(from killing blow)",
    icon: "spell_shadow_soulgem",
  },
  SOUL_FRAGMENT_STACK: {
    id: 203981 as SpellId,
    name: "Soul Fragment",
    icon: "spell_shadow_soulgem",
  },
  VOID_REAVER_DEBUFF: {
    id: 268178 as SpellId,
    name: "Void Reaver Debuff",
    icon: "spell_shadow_demonicempathy",
  },
  //Sigil of Flame, Misery, and Silence have different spell ids depending on
  //if you take the [Concentrated Sigils] or [Quickened Sigils] talents
  SIGIL_OF_FLAME_CONCENTRATED: {
    id: 204513 as SpellId,
    name: "Sigil of Flame",
    icon: "ability_demonhunter_sigilofinquisition",
  },
  SIGIL_OF_MISERY_CONCENTRATED: {
    id: 202140 as SpellId,
    name: "Sigil of Misery",
    icon: "ability_demonhunter_sigilofmisery",
  },
  SIGIL_OF_SILENCE_CONCENTRATED: {
    id: 207682 as SpellId,
    name: "Sigil of Silence",
    icon: "ability_demonhunter_sigilofsilence",
  },
  SIGIL_OF_FLAME_QUICKENED: {
    id: 204596 as SpellId,
    name: "Sigil of Flame",
    icon: "ability_demonhunter_sigilofinquisition",
  },
  SIGIL_OF_MISERY_QUICKENED: {
    id: 207684 as SpellId,
    name: "Sigil of Misery",
    icon: "ability_demonhunter_sigilofmisery",
  },
  SIGIL_OF_SILENCE_QUICKENED: {
    id: 202137 as SpellId,
    name: "Sigil of Silence",
    icon: "ability_demonhunter_sigilofsilence",
  },
  SIGIL_OF_FLAME_DEBUFF: {
    id: 204598 as SpellId,
    name: "Sigil of Flame",
    icon: "ability_demonhunter_sigilofinquisition",
  },
  DEMON_SPIKES: {
    id: 203720 as SpellId,
    name: "Demon Spikes",
    icon: "ability_demonhunter_demonspikes",
  },
  DEMON_SPIKES_BUFF: {
    id: 203819 as SpellId,
    name: "Demon Spikes",
    icon: "ability_demonhunter_demonspikes",
  },
  FIERY_BRAND: {
    id: 204021 as SpellId,
    name: "Fiery Brand",
    icon: "ability_demonhunter_fierybrand",
  },
  FIERY_BRAND_DEBUFF: {
    id: 207744 as SpellId,
    name: "Fiery Brand",
    icon: "ability_demonhunter_fierybrand",
  },
  METAMORPHOSIS_TANK: {
    id: 187827 as SpellId,
    name: "Metamorphosis",
    icon: "ability_demonhunter_metamorphasistank",
  },
  SOUL_CLEAVE: {
    id: 228477 as SpellId,
    name: "Soul Cleave",
    icon: "ability_demonhunter_soulcleave",
  },
  IMMOLATION_AURA: {
    id: 258920 as SpellId,
    name: "Immolation Aura",
    icon: "ability_demonhunter_immolation",
  },
  IMMOLATION_AURA_INITIAL_HIT_DAMAGE: {
    id: 258921 as SpellId,
    name: "Immolation Aura First Strike",
    icon: "ability_demonhunter_immolation",
  },
  IMMOLATION_AURA_BUFF_DAMAGE: {
    id: 258922 as SpellId,
    name: "Immolation Aura Second Strike",
    icon: "ability_demonhunter_immolation",
  },
  INFERNAL_STRIKE: {
    id: 189110 as SpellId,
    name: "Infernal Strike",
    icon: "ability_demonhunter_infernalstrike1",
  },
  THROW_GLAIVE: {
    id: 204157 as SpellId,
    name: "Throw Glaive",
    icon: "ability_demonhunter_throwglaive",
  },
  TORMENT: {
    id: 185245 as SpellId,
    name: "Torment",
    icon: "ability_demonhunter_torment",
  },
  IMPRISON: {
    id: 217832 as SpellId,
    name: "Imprison",
    icon: "ability_demonhunter_imprison",
  },
  SPECTRAL_SIGHT: {
    id: 188501 as SpellId,
    name: "Spectral Sight",
    icon: "ability_demonhunter_spectralsight",
  },
  // Ticks that Fiery Brand does due to the Burning Alive talent
  FIERY_BRAND_DOT: {
    id: 207771 as SpellId,
    name: "FIERY_BRAND_DOT",
    icon: "ability_demonhunter_fierybrand",
  },
  FEAST_OF_SOULS_HEAL: {
    id: 207693 as SpellId,
    name: "Feast of Souls Heal",
    icon: "spell_shadow_soulleech",
  },
  CONSUME_SOUL_VDH: {
    id: 203794 as SpellId,
    name: "Consume Soul",
    icon: "ability_warlock_improvedsoulleech",
  },
  FRAILTY_SPIRIT_BOMB_DEBUFF: {
    id: 247456 as SpellId,
    name: "Frailty",
    icon: "inv_icon_shadowcouncilorb_purple",
  },
  SPIRIT_BOMB_DAMAGE: {
    id: 247455 as SpellId,
    name: "Spirit Bomb",
    icon: "inv_icon_shadowcouncilorb_purple",
  },
};

export default spells;

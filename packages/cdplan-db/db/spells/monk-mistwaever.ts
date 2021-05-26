import { SpellId } from "../types";

const spells = {
  RISING_MIST_HEAL: {
    id: 274912 as SpellId,
    name: "Rising Mist",
    icon: "ability_monk_effuse",
  },
  ENVELOPING_MIST: {
    id: 124682 as SpellId,
    name: "Enveloping Mist",
    icon: "spell_monk_envelopingmist",
    manaCost: 3000,
  },
  ENVELOPING_MIST_TFT: {
    id: 274062 as SpellId,
    name: "Enveloping Mist",
    icon: "spell_monk_envelopingmist",
  },
  ESSENCE_FONT: {
    id: 191837 as SpellId,
    name: "Essence Font",
    icon: "ability_monk_essencefont",
    manaCost: 3600,
  },
  ESSENCE_FONT_BUFF: {
    id: 191840 as SpellId,
    name: "Essence Font Buff",
    icon: "ability_monk_essencefont",
  },
  LIFE_COCOON: {
    id: 116849 as SpellId,
    name: "Life Cocoon",
    icon: "ability_monk_chicocoon",
    manaCost: 1200,
  },
  RENEWING_MIST: {
    id: 115151 as SpellId,
    name: "Renewing Mist",
    icon: "ability_monk_renewingmists",
    manaCost: 900,
  },
  RENEWING_MIST_HEAL: {
    id: 119611 as SpellId,
    name: "Renewing Mist",
    icon: "ability_monk_renewingmists",
  },
  REVIVAL: {
    id: 115310 as SpellId,
    name: "Revival",
    icon: "spell_monk_revival",
    manaCost: 2187,
  },
  THUNDER_FOCUS_TEA: {
    id: 116680 as SpellId,
    name: "Thunder Focus Tea",
    icon: "ability_monk_thunderfocustea",
  },
  VIVIFY: {
    id: 116670 as SpellId,
    name: "Vivify",
    icon: "ability_monk_vivify",
    manaCost: 1900,
  },
  SOOTHING_MIST: {
    id: 115175 as SpellId,
    name: "Soothing Mist",
    icon: "ability_monk_soothingmists",
    manaCost: 200,
  },
  SOOTHING_MIST_STATUE: {
    id: 198533 as SpellId,
    name: "Soothing Mist",
    icon: "ability_monk_soothingmists",
  },
  INVOKE_YULON_THE_JADE_SERPENT: {
    id: 322118 as SpellId,
    name: "Invoke Yu'lon, the Jade Serpent",
    icon: "ability_monk_dragonkick",
    manaCost: 2500,
  },
  ENVELOPING_BREATH: {
    id: 325209 as SpellId,
    name: "Enveloping Breath",
    icon: "ability_monk_chiexplosion",
  },
  SOOTHING_BREATH: {
    id: 343737 as SpellId,
    name: "Soothing Breath",
    icon: "ability_monk_soothingmists",
  },
  SPIRIT_OF_THE_CRANE_BUFF: {
    id: 210803 as SpellId,
    name: "Spirit of the Crane",
    icon: "monk_stance_redcrane",
  },
  CHI_BURST_HEAL: {
    id: 130654 as SpellId,
    name: "Chi Burst",
    icon: "spell_arcane_arcanetorrent",
  },
  REFRESHING_JADE_WIND_HEAL: {
    id: 162530 as SpellId,
    name: "Refreshing Jade Wind",
    icon: "ability_monk_rushingjadewind",
  },
  GUST_OF_MISTS_CHIJI: {
    id: 343819 as SpellId,
    name: "Gust of Mists",
    icon: "monk_stance_redcrane",
  },
  EXPEL_HARM_TARGET_HEAL: {
    id: 344939 as SpellId,
    name: "Expel Harm",
    icon: "ability_monk_expelharm",
  },
  // Lifecycles buffs
  LIFECYCLES_VIVIFY_BUFF: {
    id: 197916 as SpellId,
    name: "Lifecycles (Vivify)",
    icon: "ability_monk_uplift",
  },
  LIFECYCLES_ENVELOPING_MIST_BUFF: {
    id: 197919 as SpellId,
    name: "Lifecycles (Enveloping Mist)",
    icon: "spell_monk_envelopingmist",
  },
  INVOKE_CHIJI_THE_RED_CRANE_BUFF: {
    id: 343820 as SpellId,
    name: "Invoke Chi-Ji, the Red Crane",
    icon: "monk_stance_redcrane",
  },
  // Mastery
  GUSTS_OF_MISTS: {
    id: 191894 as SpellId,
    name: "Mastery: Gust of Mists",
    icon: "ability_monk_souldance",
  },
  // Damage Abilities
  TEACHINGS_OF_THE_MONASTERY: {
    id: 202090 as SpellId,
    name: "Teachings of the Monastery",
    icon: "passive_monk_teachingsofmonastery",
  },
  BLACKOUT_KICK_TOTM: {
    id: 228649 as SpellId,
    name: "Blackout Kick",
    icon: "ability_monk_roundhousekick",
  },

  // Utility / Other
  DETOX: {
    id: 115450 as SpellId,
    name: "Detox",
    icon: "ability_rogue_imrovedrecuperate",
    manaCost: 650,
  },
};
export default spells;

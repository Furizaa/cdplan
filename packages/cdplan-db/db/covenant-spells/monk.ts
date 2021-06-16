import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    WEAPONS_OF_ORDER_CAST: {
      id: 311123 as SpellId,
      name: "Weapons of Order",
      icon: "ability_bastion_monk",
    },
    WEAPONS_OF_ORDER_BUFF_AND_HEAL: {
      id: 310454 as SpellId,
      name: "Weapons of Order",
      icon: "ability_bastion_monk",
    },
    WEAPONS_OF_ORDER_CHI_DISCOUNT: {
      id: 311054 as SpellId,
      name: "Weapons of Order",
      icon: "ability_monk_risingsunkick",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    BONEDUST_BREW_CAST: {
      id: 325216 as SpellId,
      name: "Bonedust Brew",
      icon: "ability_maldraxxus_monk",
    },
    BONEDUST_BREW_DAMAGE: {
      id: 325217 as SpellId,
      name: "Bonedust Brew",
      icon: "ability_maldraxxus_monk",
    },
    BONEDUST_BREW_HEAL: {
      id: 325218 as SpellId,
      name: "Bonedust Brew",
      icon: "ability_maldraxxus_monk",
    },
    BONEDUST_BREW_GUST_OF_MIST: {
      id: 328748 as SpellId,
      name: "Bonedust Brew",
      icon: "ability_maldraxxus_monk",
    },
    BONEDUST_BREW_CHI: {
      id: 328296 as SpellId,
      name: "Bonedust Brew",
      icon: "ability_maldraxxus_monk",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    FAELINE_STOMP_CAST: {
      id: 327104 as SpellId,
      name: "Faeline Stomp",
      icon: "ability_ardenweald_monk",
    },
    FAELINE_STOMP_DAMAGE_AND_HEAL: {
      id: 345727 as SpellId,
      name: "Faeline Stomp",
      icon: "ability_ardenweald_monk",
    },
    FAELINE_STOMP_ESSENCE_FONT: {
      id: 344006 as SpellId,
      name: "Faeline Stomp",
      icon: "ability_ardenweald_monk",
    },
    FAELINE_STOMP_PULSE_DAMAGE: {
      id: 327264 as SpellId,
      name: "Faeline Stomp",
      icon: "ability_ardenweald_monk",
    },
    FAELINE_STOMP_RESET: {
      id: 327276 as SpellId,
      name: "Faeline Stomp",
      icon: "ability_ardenweald_monk",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    FALLEN_ORDER_CAST: {
      id: 326860 as SpellId,
      name: "Fallen Order",
      icon: "ability_revendreth_monk",
    },
    FALLEN_ORDER_ENVELOPING_MIST: {
      id: 344008 as SpellId,
      name: "Enveloping Mist",
      icon: "spell_monk_envelopingmist",
    },
    FALLEN_ORDER_SOOTHING_MIST: {
      id: 328283 as SpellId,
      name: "Soothing Mist",
      icon: "ability_monk_soothingmists",
    },
    FALLEN_ORDER_KEG_SMASH: {
      id: 330911 as SpellId,
      name: "Keg Smash",
      icon: "achievement_brewery_2",
    },
    FALLEN_ORDER_BREATH_OF_FIRE: {
      id: 330907 as SpellId,
      name: "Breath of Fire",
      icon: "ability_monk_breathoffire",
    },
    FALLEN_ORDER_SPINNING_CRANE_KICK: {
      id: 330903 as SpellId,
      name: "Spinning Crane Kick",
      icon: "ability_monk_cranekick_new",
    },
    FALLEN_ORDER_OX_CLONE: {
      id: 327005 as SpellId,
      name: "Fallen Order",
      icon: "ability_revendreth_monk",
    },
    FALLEN_ORDER_TIGER_CLONE: {
      id: 327004 as SpellId,
      name: "Fallen Order",
      icon: "ability_revendreth_monk",
    },
    FALLEN_ORDER_CRANE_CLONE: {
      id: 327006 as SpellId,
      name: "Fallen Order",
      icon: "ability_revendreth_monk",
    },
    ...GENERAL.VENTHYR,
  },
  UNKNOWN: {},
};

export default covenants;

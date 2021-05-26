import { LiteralUnion } from "type-fest";
import GENERAL from "./general";
import { CovenenatUnion, Spell, SpellId } from "../types";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    ELYSIAN_DECREE: {
      id: 327839 as SpellId,
      name: "Elysian Decree",
      icon: "ability_bastion_demonhunter",
    },
    ELYSIAN_DECREE_REPEAT_DECREE: {
      id: 306830 as SpellId,
      name: "Elysian Decree",
      icon: "ability_bastion_demonhunter",
    },
    ELYSIAN_DECREE_REPEAT_DECREE_DAMAGE: {
      id: 339894 as SpellId,
      name: "Elysian Decree",
      icon: "ability_bastion_demonhunter",
    },
    ELYSIAN_DECREE_DAMAGE: {
      id: 307046 as SpellId,
      name: "Elysian Decree",
      icon: "ability_bastion_demonhunter",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    FODDER_TO_THE_FLAME: {
      id: 329554 as SpellId,
      name: "Fodder to the Flame",
      icon: "ability_maldraxxus_demonhunter",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    THE_HUNT: {
      id: 323639 as SpellId,
      name: "The Hunt",
      icon: "ability_ardenweald_demonhunter",
    },
    THE_HUNT_CHARGE: {
      id: 323802 as SpellId,
      name: "The Hunt",
      icon: "ability_ardenweald_demonhunter",
    },
    THE_HUNT_DOT: {
      id: 345335 as SpellId,
      name: "The Hunt",
      icon: "ability_ardenweald_demonhunter",
    },
    THE_HUNT_HEAL: {
      id: 345423 as SpellId,
      name: "The Hunt",
      icon: "ability_ardenweald_demonhunter",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    SINFUL_BRAND: {
      id: 317009 as SpellId,
      name: "Sinful Brand",
      icon: "ability_revendreth_demonhunter",
    },
    ...GENERAL.VENTHYR,
  },
};

export default covenants;

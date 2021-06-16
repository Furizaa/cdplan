import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    SPEAR_OF_BASTION: {
      id: 307865 as SpellId,
      name: "Spear of Bastion",
      icon: "ability_bastion_warrior",
    },
    SPEAR_OF_BASTION_ENERGIZE: {
      id: 307871 as SpellId,
      name: "Spear of Bastion",
      icon: "ability_bastion_warrior",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    CONQUERORS_BANNER: {
      id: 324143 as SpellId,
      name: "Conqueror's Banner",
      icon: "ability_maldraxxus_warriorplantbanner",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    ANCIENT_AFTERSHOCK: {
      id: 325886 as SpellId,
      name: "Ancient Aftershock",
      icon: "ability_ardenweald_warrior",
    },
    ANCIENT_AFTERSHOCK_ENERGIZE: {
      id: 326076 as SpellId,
      name: "Ancient Aftershock",
      icon: "ability_ardenweald_warrior",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    CONDEMN: {
      id: 317349 as SpellId,
      name: "Condemn",
      icon: "ability_revendreth_warrior",
    },
    CONDEMNED: {
      id: 317491 as SpellId,
      name: "Condemned",
      icon: "ability_revendreth_warrior",
    },
    // Arms/Prot and Massacre talent
    CONDEMN_MASSACRE: {
      id: 330334 as SpellId,
      name: "Condemn",
      icon: "ability_revendreth_warrior",
    },

    // Fury
    CONDEMN_FURY: {
      id: 317485 as SpellId,
      name: "Condemn",
      icon: "ability_revendreth_warrior",
    },
    // Fury and Massacre talent
    CONDEMN_FURY_MASSACRE: {
      id: 330325 as SpellId,
      name: "Condemn",
      icon: "ability_revendreth_warrior",
    },
    ...GENERAL.VENTHYR,
  },
  UNKNOWN: {},
};

export default covenants;

import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    ECHOING_REPRIMAND: {
      id: 323547 as SpellId,
      name: "Echoing Reprimand",
      icon: "ability_bastion_rogue",
    },
    ECHOING_REPRIMAND_ENERGIZE: {
      id: 307016 as SpellId,
      name: "Echoing Reprimand",
      icon: "inv_knife_1h_artifactskulloferedar_d_06",
    },
    ECHOING_REPRIMAND_BUFF: {
      id: 323560 as SpellId,
      name: "Echoing Reprimand",
      icon: "inv_knife_1h_artifactskulloferedar_d_06",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    SERRATED_BONE_SPIKE: {
      id: 328547 as SpellId,
      name: "Serrated Bone Spike",
      icon: "ability_maldraxxus_rogue",
    },
    SERRATED_BONE_SPIKE_ENERGIZE: {
      id: 328548 as SpellId,
      name: "Serrated Bone Spike",
      icon: "ability_maldraxxus_rogue",
    },
    SERRATED_BONE_SPIKE_DEBUFF: {
      id: 324073 as SpellId,
      name: "Serrated Bone Spike",
      icon: "ability_maldraxxus_rogue",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    SEPSIS: {
      id: 328305 as SpellId,
      name: "Sepsis",
      icon: "ability_ardenweald_rogue",
    },
    SEPSIS_POISON: {
      id: 328306 as SpellId,
      name: "Sepsis",
      icon: "ability_ardenweald_rogue",
    },
    SEPSIS_BUFF: {
      id: 347037 as SpellId,
      name: "Sepsis",
      icon: "ability_ardenweald_rogue",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    FLAGELLATION: {
      id: 345285 as SpellId,
      name: "Flagellation",
      icon: "ability_revendreth_rogue",
    },
    FLAGELLATION_LASH: {
      id: 345390 as SpellId,
      name: "Flagellation",
      icon: "ability_revendreth_rogue",
    },
    ...GENERAL.VENTHYR,
  },
  UNKNOWN: {},
};

export default covenants;

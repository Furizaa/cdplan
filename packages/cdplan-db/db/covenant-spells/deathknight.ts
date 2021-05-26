import { LiteralUnion } from "type-fest";
import { SpellId, CovenenatUnion, Spell } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    SHACKLE_THE_UNWORTHY: {
      id: 312202 as SpellId,
      name: "Shackle the Unworthy",
      icon: "ability_bastion_deathknight",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    ABOMINATION_LIMB: {
      id: 315443 as SpellId,
      name: "Abomination Limb",
      icon: "ability_maldraxxus_deathknight",
    },
    ABOMINATION_LIMB_HIDDEN_CAST: {
      id: 323798 as SpellId,
      name: "Abomination Limb",
      icon: "ability_maldraxxus_deathknight",
    },
    ABOMINATION_LIMB_GRIP: {
      id: 323710 as SpellId,
      name: "Abomination Limb",
      icon: "ability_maldraxxus_deathknight",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    DEATHS_DUE: {
      id: 324128 as SpellId,
      name: "Death's Due",
      icon: "ability_ardenweald_deathknight",
    },
    DEATHS_DUE_DAMAGE_TICK: {
      id: 341340 as SpellId,
      name: "Death's Due",
      icon: "ability_ardenweald_deathknight",
    },
    DEATHS_DUE_BUFF: {
      id: 324165 as SpellId,
      name: "Death's Due",
      icon: "ability_ardenweald_deathknight",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    SWARMING_MIST: {
      id: 311648 as SpellId,
      name: "Swarming Mist",
      icon: "ability_revendreth_deathknight",
    },
    SWARMING_MIST_TICK: {
      id: 311730 as SpellId,
      name: "Swarming Mist",
      icon: "ability_revendreth_deathknight",
    },
    SWARMING_MIST_RUNIC_POWER_GAIN: {
      id: 312546 as SpellId,
      name: "Swarming Mist",
      icon: "ability_revendreth_deathknight",
    },
    ...GENERAL.VENTHYR,
  },
};

export default covenants;

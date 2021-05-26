import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    SCOURING_TITHE: {
      id: 312321 as SpellId,
      name: "Scouring Tithe",
      icon: "ability_bastion_warlock",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    DECIMATING_BOLT: {
      id: 325289 as SpellId,
      name: "Decimating Bolt",
      icon: "ability_maldraxxus_warlock",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    SOUL_ROT: {
      id: 325640 as SpellId,
      name: "Soul Rot",
      icon: "ability_ardenweald_warlock",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    IMPENDING_CATASTROPHE_CAST: {
      id: 321792 as SpellId,
      name: "Impending Catastrophe",
      icon: "ability_revendreth_warlock",
    },
    IMPENDING_CATASTROPHE_HIT: {
      id: 322167 as SpellId,
      name: "Impending Catastrophe",
      icon: "ability_revendreth_warlock",
    },
    IMPENDING_CATASTROPHE_DEBUFF: {
      id: 322170 as SpellId,
      name: "Impending Catastrophe",
      icon: "ability_revendreth_warlock",
    },
    ...GENERAL.VENTHYR,
  },
};

export default covenants;

import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    RADIANT_SPARK: {
      id: 307443 as SpellId,
      name: "Radiant Spark",
      icon: "ability_bastion_mage",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    DEATHBORNE: {
      id: 324220 as SpellId,
      name: "Deathborne",
      icon: "ability_maldraxxus_mage",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    SHIFTING_POWER: {
      id: 314791 as SpellId,
      name: "Shifting Power",
      icon: "ability_ardenweald_mage",
    },
    SHIFTING_POWER_TICK: {
      id: 325130 as SpellId,
      name: "Shifting Power",
      icon: "ability_ardenweald_mage",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    MIRRORS_OF_TORMENT: {
      id: 314793 as SpellId,
      name: "Mirrors of Torment",
      icon: "ability_revendreth_mage",
    },
    ...GENERAL.VENTHYR,
  },
};

export default covenants;

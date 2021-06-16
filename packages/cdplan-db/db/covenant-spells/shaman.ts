import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: { ...GENERAL.KYRIAN },
  NECROLORD: {
    PRIMORDIAL_WAVE_CAST: {
      id: 326059 as SpellId,
      name: "Primordial Wave",
      icon: "ability_maldraxxus_shaman",
    },
    PRIMORDIAL_WAVE_BUFF: {
      id: 327164 as SpellId,
      name: "Primordial Wave",
      icon: "ability_maldraxxus_shaman",
    },
    PRIMORDIAL_WAVE_HEAL: {
      id: 327163 as SpellId,
      name: "Primordial Wave",
      icon: "ability_maldraxxus_shaman",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    CHAIN_HARVEST: {
      id: 320674 as SpellId,
      name: "Chain Harvest",
      icon: "ability_revendreth_shaman",
    },
    CHAIN_HARVEST_HEAL: {
      id: 320751 as SpellId,
      name: "Chain Harvest",
      icon: "ability_revendreth_shaman",
    },
    CHAIN_HARVEST_DAMAGE: {
      id: 320752 as SpellId,
      name: "Chain Harvest",
      icon: "ability_revendreth_shaman",
    },
    ...GENERAL.VENTHYR,
  },
  UNKNOWN: {},
};
export default covenants;

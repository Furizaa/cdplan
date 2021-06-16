import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    RESONATING_ARROW: {
      id: 308491 as SpellId,
      name: "Resonating Arrow",
      icon: "ability_bastion_hunter",
    },
    RESONATING_ARROW_DEBUFF: {
      id: 308498 as SpellId,
      name: "Resonating Arrow",
      icon: "ability_bastion_hunter",
    },
    RESONATING_ARROW_DAMAGE: {
      id: 308495 as SpellId,
      name: "Resonating Arrow",
      icon: "ability_bastion_hunter",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    DEATH_CHAKRAM_INITIAL_AND_AOE: {
      id: 325028 as SpellId,
      name: "Death Chakram",
      icon: "ability_maldraxxus_hunter",
    },
    DEATH_CHAKRAM_SINGLE_TARGET: {
      id: 325037 as SpellId,
      name: "Death Chakram",
      icon: "ability_maldraxxus_hunter",
    },
    DEATH_CHAKRAM_ENERGIZE: {
      id: 325553 as SpellId,
      name: "Death Chakram",
      icon: "ability_maldraxxus_hunter",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    WILD_SPIRITS: {
      id: 328231 as SpellId,
      name: "Wild Spirits",
      icon: "ability_ardenweald_hunter",
    },
    WILD_SPIRITS_DAMAGE: {
      id: 328523 as SpellId,
      name: "Wild Spirits",
      icon: "ability_druid_rake",
    },
    WILD_SPIRITS_DAMAGE_AOE: {
      id: 328757 as SpellId,
      name: "Wild Spirits",
      icon: "ability_druid_rake",
    },
    WILD_MARK: {
      id: 328275 as SpellId,
      name: "Wild Mark",
      icon: "ability_ardenweald_hunter",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    FLAYED_SHOT: {
      id: 324149 as SpellId,
      name: "Flayed Shot",
      icon: "ability_revendreth_hunter",
    },
    FLAYERS_MARK: {
      id: 324156 as SpellId,
      name: "Flayer's Mark",
      icon: "ability_hunter_assassinate2",
    },
    ...GENERAL.VENTHYR,
  },
  UNKNOWN: {},
};

export default covenants;

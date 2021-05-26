import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    DIVINE_TOLL: {
      id: 304971 as SpellId,
      name: "Divine Toll",
      icon: "ability_bastion_paladin",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    VANQUISHERS_HAMMER: {
      id: 328204 as SpellId,
      name: "Vanquisher's Hammer",
      icon: "ability_maldraxxus_paladin",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    BLESSING_OF_SPRING: {
      id: 328282 as SpellId,
      name: "Blessing of Spring",
      icon: "ability_ardenweald_paladin_spring",
    },
    BLESSING_OF_SUMMER: {
      id: 328620 as SpellId,
      name: "Blessing of Summer",
      icon: "ability_ardenweald_paladin_summer",
    },
    BLESSING_OF_AUTUMN: {
      id: 328622 as SpellId,
      name: "Blessing of Autumn",
      icon: "ability_ardenweald_paladin_autumn",
    },
    BLESSING_OF_WINTER: {
      id: 328281 as SpellId,
      name: "Blessing of Winter",
      icon: "ability_ardenweald_paladin_winter",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    ASHEN_HALLOW: {
      id: 316958 as SpellId,
      name: "Ashen Hallow",
      icon: "ability_revendreth_paladin",
    },
    ASHEN_HALLOW_HEAL: {
      id: 317223 as SpellId,
      name: "Ashen Hallow",
      icon: "ability_revendreth_paladin",
    },
    ASHEN_HALLOW_DAMAGE: {
      id: 317221 as SpellId,
      name: "Ashen Hallow",
      icon: "ability_revendreth_paladin",
    },
    ...GENERAL.VENTHYR,
  },
};
export default covenants;

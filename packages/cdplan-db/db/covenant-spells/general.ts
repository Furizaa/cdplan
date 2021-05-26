import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    SUMMON_STEWARD: {
      id: 324739 as SpellId,
      name: "Summon Steward",
      icon: "ability_kyrian_summonsteward",
    },
    PURIFY_SOUL: {
      id: 323436 as SpellId,
      name: "Purify Soul",
      icon: "inv_misc_flaskofvolatility",
    },
  },
  NECROLORD: {
    FLESHCRAFT: {
      id: 331180 as SpellId,
      name: "Fleshcraft",
      icon: "ability_necrolord_fleshcraft",
    },
  },
  NIGHT_FAE: {
    SOULSHAPE: {
      id: 310143 as SpellId,
      name: "Soulshape",
      icon: "ability_nightfae_flicker",
    },
  },
  VENTHYR: {
    DOOR_OF_SHADOWS: {
      id: 300728 as SpellId,
      name: "Door of Shadows",
      icon: "ability_venthyr_doorofshadows",
    },
  },
};

export default covenants;

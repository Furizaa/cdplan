import { LiteralUnion } from "type-fest";
import { Covenant, CovenantId, CovenenatUnion, SpellId } from "./types";

const covenants: Record<LiteralUnion<CovenenatUnion, string>, Covenant> = {
  KYRIAN: {
    name: "Kyrian",
    key: "KYRIAN" as CovenenatUnion,
    id: 1 as CovenantId,
    spellId: 321076 as SpellId,
    icon: "ui_sigil_kyrian",
  },
  VENTHYR: {
    name: "Venthyr",
    key: "VENTHYR" as CovenenatUnion,
    id: 2 as CovenantId,
    spellId: 321079 as SpellId,
    icon: "ui_sigil_venthyr",
  },
  NIGHT_FAE: {
    name: "Night Fae",
    key: "NIGHT_FAE" as CovenenatUnion,
    id: 3 as CovenantId,
    spellId: 321077 as SpellId,
    icon: "ui_sigil_nightfae",
  },
  NECROLORD: {
    name: "Necrolord",
    key: "NECROLORD" as CovenenatUnion,
    id: 4 as CovenantId,
    spellId: 321078 as SpellId,
    icon: "ui_sigil_necrolord",
  },
};

export default covenants;

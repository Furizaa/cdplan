import { LiteralUnion } from "type-fest";
import { Boss, BossUnionT26 } from "../../types";
import SIRE_DENATHRIUS from "./sireDenathrius";

const bosses: Record<LiteralUnion<BossUnionT26, string>, Boss> = {
  SIRE_DENATHRIUS,
};

export default bosses;

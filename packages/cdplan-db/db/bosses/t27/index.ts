import { LiteralUnion } from "type-fest";
import { Boss, BossUnionT27 } from "../../types";
import EYE_OF_THE_JAILER from "./eyeOfTheJailer";

const bosses: Record<LiteralUnion<BossUnionT27, string>, Boss> = {
  EYE_OF_THE_JAILER,
};

export default bosses;

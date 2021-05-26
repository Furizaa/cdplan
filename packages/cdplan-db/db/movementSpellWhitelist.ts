import { SpellId } from "./types";
import SPELLS from "./spells";
import TALENTS from "./talents";

const spells: ReadonlyArray<SpellId | SpellId> = [
  SPELLS.WARLOCK.DEMONIC_GATEWAY_CAST.id,
  SPELLS.DRUID.STAMPEDING_ROAR.id,
  TALENTS.SHAMAN.WIND_RUSH_TOTEM_TALENT.id,
  SPELLS.HUNTER.ASPECT_OF_THE_CHEETAH.id,
];
export default spells;

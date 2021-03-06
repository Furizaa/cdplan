import { SpellId } from "./types";
import SPELLS from "./spells";
import TALENTS from "./talents";
import COVENANT_SPELLS from "./covenant-spells";

const spells: ReadonlyArray<SpellId | SpellId> = [
  SPELLS.DEATHKNIGHT_UNHOLY.ARMY_OF_THE_DEAD.id,

  TALENTS.WARRIOR_ARMS.AVATAR_TALENT.id,

  SPELLS.MAGE_FIRE.COMBUSTION.id,

  SPELLS.WARLOCK_AFFLICTION.SUMMON_DARKGLARE.id,
  TALENTS.WARLOCK_AFFLICTION.DARK_SOUL_MISERY_TALENT.id,

  SPELLS.PRIEST_SHADOW.VOIDFORM.id,
  SPELLS.PRIEST.POWER_INFUSION.id,

  SPELLS.DRUID_BALANCE.CELESTIAL_ALIGNMENT.id,
  COVENANT_SPELLS.DRUID.NIGHT_FAE.CONVOKE_SPIRITS.id,

  SPELLS.HUNTER_MARKSMAN.TRUESHOT.id,
  COVENANT_SPELLS.HUNTER.NIGHT_FAE.WILD_SPIRITS.id,

  COVENANT_SPELLS.PALADIN.VENTHYR.ASHEN_HALLOW.id,

  COVENANT_SPELLS.MONK.KYRIAN.WEAPONS_OF_ORDER_CAST.id,
  SPELLS.MONK_WINDWALKER.STORM_EARTH_AND_FIRE.id,

  SPELLS.SHARED.POTIONS.id,
];
export default spells;

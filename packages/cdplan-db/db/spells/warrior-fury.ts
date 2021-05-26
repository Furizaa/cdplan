import { SpellId } from "../types";

const spells = {
  BLOODTHIRST: {
    id: 23881 as SpellId,
    name: "Bloodthirst",
    icon: "spell_nature_bloodlust",
  },
  ENRAGED_REGENERATION: {
    id: 184364 as SpellId,
    name: "Enraged Regeneration",
    icon: "ability_warrior_focusedrage",
  },
  RAGING_BLOW: {
    id: 85288 as SpellId,
    name: "Raging Blow",
    icon: "warrior_wild_strike",
  },
  RAMPAGE: {
    id: 184367 as SpellId,
    name: "Rampage",
    icon: "ability_warrior_rampage",
  },
  RAMPAGE_1: {
    id: 184707 as SpellId,
    name: "Rampage",
    icon: "ability_ironmaidens_bladerush",
  },
  RAMPAGE_2: {
    id: 184709 as SpellId,
    name: "Rampage",
    icon: "ability_ironmaidens_bladerush",
  },
  RAMPAGE_3: {
    id: 201364 as SpellId,
    name: "Rampage",
    icon: "ability_ironmaidens_bladerush",
  },
  RAMPAGE_4: {
    id: 201363 as SpellId,
    name: "Rampage",
    icon: "ability_ironmaidens_bladerush",
  },
  RECKLESSNESS: {
    id: 1719 as SpellId,
    name: "Recklessness",
    icon: "warrior_talent_icon_innerrage",
  },
  ENRAGE: {
    id: 184362 as SpellId,
    name: "Enrage",
    icon: "spell_shadow_unholyfrenzy",
  },

  // Talents
  WAR_MACHINE_FURY_TALENT_BUFF: {
    id: 280776 as SpellId,
    name: "Sudden Death",
    icon: "abilty_warrior_improveddisciplines",
  },
  BLADESTORM_OH_DAMAGE: {
    id: 95738 as SpellId,
    name: "Bladestorm",
    icon: "ability_warrior_bladestorm",
  },
  SIEGEBREAKER_DEBUFF: {
    id: 280773 as SpellId,
    name: "Siegebreaker",
    icon: "inv_make_101",
  },
  FROTHING_BERSERKER_REFUND: {
    id: 215572 as SpellId,
    name: "Frothing Berserker",
    icon: "warrior_talent_icon_furyintheblood",
  },
  // spell replacement for raging blow when using reckless abondon
  CRUSHING_BLOW: {
    id: 335097 as SpellId,
    name: "Crushing Blow",
    icon: "ability_hunter_swiftstrike",
  },
  // spell replacement for bloodthirst when using reckless abondon
  BLOODBATH: {
    id: 335096 as SpellId,
    name: "Bloodbath",
    icon: "ability_warrior_bloodbath",
  },
};

export default spells;

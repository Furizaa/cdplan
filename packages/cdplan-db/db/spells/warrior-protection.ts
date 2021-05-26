import { SpellId } from "../types";

const spells = {
  DEVASTATE: {
    id: 20243 as SpellId,
    name: "Devastate",
    icon: "inv_sword_11",
  },
  REVENGE: {
    id: 6572 as SpellId,
    name: "Revenge",
    icon: "ability_warrior_revenge",
  },
  REVENGE_FREE_CAST: {
    id: 5302 as SpellId,
    name: "Revenge!",
    icon: "ability_warrior_revenge",
  },
  THUNDER_CLAP: {
    id: 6343 as SpellId,
    name: "Thunder Clap",
    icon: "spell_nature_thunderclap",
  },
  RAGE_DAMAGE_TAKEN: {
    id: 195707 as SpellId,
    name: "Rage from melee hits taken",
    icon: "ability_racial_avatar",
  },
  RAGE_AUTO_ATTACKS: {
    id: 198395 as SpellId, //could use a proper spellID for the tooltip
    name: "Rage from auto attacks",
    icon: "ability_racial_avatar",
  },
  //Mitigation Spells
  RENEWED_FURY_TALENT_BUFF: {
    id: 202289 as SpellId,
    name: "Renewed Fury",
    icon: "ability_warrior_intensifyrage",
  },
  INTO_THE_FRAY_BUFF: {
    id: 202602 as SpellId,
    name: "Into the Fray",
    icon: "ability_warrior_bloodfrenzy",
  },
  PUNISH_DEBUFF: {
    id: 275335 as SpellId,
    name: "Punish",
    icon: "ability_deathknight_sanguinfortitude",
  },
  DEVASTATOR_DAMAGE: {
    id: 236282 as SpellId,
    name: "Devastator",
    icon: "inv_sword_11",
  },
  //Cooldown Spells
  DEMORALIZING_SHOUT: {
    id: 1160 as SpellId,
    name: "Demoralizing Shout",
    icon: "ability_warrior_warcry",
  },
  LAST_STAND: {
    id: 12975 as SpellId,
    name: "Last Stand",
    icon: "spell_holy_ashestoashes",
  },
  SHIELD_WALL: {
    id: 871 as SpellId,
    name: "Shield Wall",
    icon: "ability_warrior_shieldwall",
  },

  //Passives
  DEEP_WOUNDS: {
    id: 115767 as SpellId,
    name: "Deep Wounds",
    icon: "ability_backstab",
  },
};

export default spells;

import { SpellId } from "../types";

const spells = {
  ASPECT_OF_THE_EAGLE: {
    id: 186289 as SpellId,
    name: "Aspect of the Eagle",
    icon: "spell_hunter_aspectoftheironhawk",
  },
  CARVE: {
    id: 187708 as SpellId,
    name: "Carve",
    icon: "ability_hunter_carve",
  },
  COORDINATED_ASSAULT: {
    id: 266779 as SpellId,
    name: "Coordinated Assault",
    icon: "inv_coordinatedassault",
  },
  HARPOON: {
    id: 190925 as SpellId,
    name: "Harpoon",
    icon: "ability_hunter_harpoon",
  },
  TERMS_OF_ENGAGEMENT_BUFF: {
    id: 265898 as SpellId,
    name: "Terms of Engagement",
    icon: "ability_hunter_harpoon",
  },
  KILL_COMMAND_CAST_SV: {
    id: 259489 as SpellId,
    name: "Kill Command",
    icon: "ability_hunter_killcommand",
  },
  KILL_COMMAND_DAMAGE_SV: {
    id: 259277 as SpellId,
    name: "Kill Command",
    icon: "ability_hunter_killcommand",
  },
  FLANKERS_ADVANTAGE: {
    id: 259285 as SpellId,
    name: "Flanker's Advantage",
    icon: "ability_hunter_resistanceisfutile",
  },
  MUZZLE: {
    id: 187707 as SpellId,
    name: "Muzzle",
    icon: "ability_hunter_negate",
  },
  WILDFIRE_BOMB: {
    id: 259495 as SpellId,
    name: "Wildfire Bomb",
    icon: "inv_wildfirebomb",
  },
  RAPTOR_STRIKE: {
    id: 186270 as SpellId,
    name: "Raptor Strike",
    icon: "ability_hunter_raptorstrike",
  },
  RAPTOR_STRIKE_AOTE: {
    id: 265189 as SpellId,
    name: "Raptor Strike",
    icon: "ability_hunter_raptorstrike",
  },
  SERPENT_STING_SV: {
    id: 259491 as SpellId,
    name: "Serpent Sting",
    icon: "spell_hunter_exoticmunitions_poisoned",
  },
  MONGOOSE_FURY: {
    id: 259388 as SpellId,
    name: "Mongoose Fury",
    icon: "ability_hunter_mongoosebite",
  },
  HARPOON_DAMAGE: {
    //doesn't actually do damage, but it's categorized as that
    id: 190927 as SpellId,
    name: "Harpoon",
    icon: "ability_hunter_harpoon",
  },
  WING_CLIP: {
    id: 195645 as SpellId,
    name: "Wing Clip",
    icon: "ability_rogue_trip",
  },
  MONGOOSE_BITE_TALENT_AOTE: {
    id: 265888 as SpellId,
    name: "Mongoose Bite",
    icon: "ability_hunter_mongoosebite",
  },
  STEEL_TRAP_DAMAGE: {
    //the event is a damage event, but it merely applies the debuff
    id: 162480 as SpellId,
    name: "Steel Trap",
    icon: "inv_pet_pettrap02",
  },
  STEEL_TRAP_DEBUFF: {
    id: 162487 as SpellId,
    name: "Steel Trap",
    icon: "inv_pet_pettrap02",
  },
  TIP_OF_THE_SPEAR_CAST: {
    id: 260286 as SpellId,
    name: "Tip of the Spear",
    icon: "ability_bossmannoroth_glaivethrust",
  },
  VIPERS_VENOM_BUFF: {
    id: 268552 as SpellId,
    name: "Viper's Venom",
    icon: "ability_hunter_potentvenom",
  },
  WILDFIRE_BOMB_DOT: {
    id: 269747 as SpellId,
    name: "Wildfire Bomb",
    icon: "inv_wildfirebomb",
  },
  WILDFIRE_BOMB_IMPACT: {
    id: 265157 as SpellId,
    name: "Wildfire Bomb",
    icon: "inv_wildfirebomb",
  },
  SHRAPNEL_BOMB_WFI: {
    id: 270335 as SpellId,
    name: "Shrapnel Bomb",
    icon: "inv_wildfirebomb_shrapnel",
  },
  SHRAPNEL_BOMB_WFI_IMPACT: {
    id: 270338 as SpellId,
    name: "Shrapnel Bomb",
    icon: "inv_wildfirebomb_shrapnel",
  },
  SHRAPNEL_BOMB_WFI_DOT: {
    id: 270339 as SpellId,
    name: "Shrapnel Bomb",
    icon: "inv_wildfirebomb_shrapnel",
  },
  INTERNAL_BLEEDING_SV: {
    id: 270343 as SpellId,
    name: "Internal Bleeding",
    icon: "ability_gouge",
  },
  VOLATILE_BOMB_WFI: {
    id: 271045 as SpellId,
    name: "Volatile Bomb",
    icon: "inv_wildfirebomb_poison",
  },
  VOLATILE_BOMB_WFI_IMPACT: {
    id: 271048 as SpellId,
    name: "Volatile Bomb",
    icon: "inv_wildfirebomb_poison",
  },
  VOLATILE_BOMB_WFI_DOT: {
    id: 271049 as SpellId,
    name: "Volatile Bomb",
    icon: "inv_wildfirebomb_poison",
  },
  PHEROMONE_BOMB_WFI: {
    id: 270323 as SpellId,
    name: "Pheromone Bomb",
    icon: "inv_wildfirebomb_blood",
  },
  PHEROMONE_BOMB_WFI_IMPACT: {
    id: 270329 as SpellId,
    name: "Pheromone Bomb",
    icon: "inv_wildfirebomb_blood",
  },
  PHEROMONE_BOMB_WFI_DOT: {
    id: 270332 as SpellId,
    name: "Pheromone Bomb",
    icon: "inv_wildfirebomb_blood",
  },
  CHAKRAMS_TO_MAINTARGET: {
    id: 259398 as SpellId,
    name: "Chakrams",
    icon: "ability_glaivetoss",
  },
  CHAKRAMS_BACK_FROM_MAINTARGET: {
    id: 267666 as SpellId,
    name: "Chakrams",
    icon: "ability_glaivetoss",
  },
  CHAKRAMS_NOT_MAINTARGET: {
    id: 259396 as SpellId,
    name: "Chakrams",
    icon: "ability_glaivetoss",
  },
  BLOODSEEKER_BUFF: {
    id: 260249 as SpellId,
    name: "Predator",
    icon: "ability_druid_primaltenacity",
  },
  FLANKING_STRIKE_PET: {
    id: 259516 as SpellId,
    name: "Flanking Strike",
    icon: "ability_hunter_invigeration",
  },
  FLANKING_STRIKE_PLAYER: {
    id: 269752 as SpellId,
    name: "Flanking Strike",
    icon: "ability_hunter_invigeration",
  },
};

export default spells;

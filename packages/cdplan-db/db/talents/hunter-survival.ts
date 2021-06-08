import { SpellId } from "../types";

const talents = {
  VIPERS_VENOM_TALENT: { id: 268501 as SpellId, name: "Viper's Venom", icon: "ability_hunter_potentvenom" },
  TERMS_OF_ENGAGEMENT_TALENT: { id: 265895 as SpellId, name: "Terms of Engagement", icon: "ability_hunter_harpoon" },
  ALPHA_PREDATOR_TALENT: { id: 269737 as SpellId, name: "Alpha Predator", icon: "spell_druid_savagery" },
  GUERRILLA_TACTICS_TALENT: { id: 264332 as SpellId, name: "Guerrilla Tactics", icon: "spell_mage_flameorb" },
  HYDRAS_BITE_TALENT: { id: 260241 as SpellId, name: "Hydra's Bite", icon: "inv_hydrasbite" },
  BUTCHERY_TALENT: { id: 212436 as SpellId, name: "Butchery", icon: "ability_butcher_cleave", focusCost: 30 },
  BLOODSEEKER_TALENT: { id: 260248 as SpellId, name: "Bloodseeker", icon: "ability_druid_primaltenacity" },
  STEEL_TRAP_TALENT: { id: 162488 as SpellId, name: "Steel Trap", icon: "ability_hunter_steeltrap" },
  TIP_OF_THE_SPEAR_TALENT: {
    id: 260285 as SpellId,
    name: "Tip of the Spear",
    icon: "ability_bossmannoroth_glaivethrust",
  },
  MONGOOSE_BITE_TALENT: {
    id: 259387 as SpellId,
    name: "Mongoose Bite",
    icon: "ability_hunter_mongoosebite",
    focusCost: 30,
  },
  FLANKING_STRIKE_TALENT: { id: 269751 as SpellId, name: "Flanking Strike", icon: "ability_hunter_invigeration" },
  BIRDS_OF_PREY_TALENT: { id: 260331 as SpellId, name: "Birds of Prey", icon: "spell_hunter_aspectofthehawk" },
  WILDFIRE_INFUSION_TALENT: { id: 271014 as SpellId, name: "Wildfire Infusion", icon: "inv_misc_5potionbag_special" },
  CHAKRAMS_TALENT: { id: 259391 as SpellId, name: "Chakrams", icon: "ability_glaivetoss", focusCost: 15 },
};
export default talents;

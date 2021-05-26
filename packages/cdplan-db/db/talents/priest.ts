import { SpellId } from "../types";

const talents = {
  CASTIGATION_TALENT: { id: 193134 as SpellId, name: "Castigation", icon: "spell_holy_searinglightpriest" },
  BODY_AND_SOUL_TALENT: { id: 64129 as SpellId, name: "Body and Soul", icon: "spell_holy_symbolofhope" },
  ANGELIC_FEATHER_TALENT: { id: 121536 as SpellId, name: "Angelic Feather", icon: "ability_priest_angelicfeather" },
  SHIELD_DISCIPLINE_TALENT: { id: 197045 as SpellId, name: "Shield Discipline", icon: "spell_holy_divineprotection" },
  POWER_WORD_SOLACE_TALENT: { id: 129250 as SpellId, name: "Power Word: Solace", icon: "ability_priest_flashoflight" },
  PSYCHIC_VOICE_TALENT: { id: 196704 as SpellId, name: "Psychic Voice", icon: "ability_warrior_commandingshout" },
  SHINING_FORCE_TALENT: {
    id: 204263 as SpellId,
    name: "Shining Force",
    icon: "ability_paladin_blindinglight2",
    manaCost: 1250,
  },
  CONTRITION_TALENT: { id: 197419 as SpellId, name: "Contrition", icon: "ability_priest_savinggrace" },
  SHADOW_COVENANT_TALENT: {
    id: 314867 as SpellId,
    name: "Shadow Covenant",
    icon: "spell_shadow_summonvoidwalker",
    manaCost: 2500,
  },
  BENEDICTION_TALENT: { id: 193157 as SpellId, name: "Benediction", icon: "spell_monk_diffusemagic" },
  DIVINE_STAR_TALENT: { id: 110744 as SpellId, name: "Divine Star", icon: "spell_priest_divinestar", manaCost: 1000 },
  HALO_TALENT: { id: 120517 as SpellId, name: "Halo", icon: "ability_priest_halo", manaCost: 1350 },

  MINDBENDER_TALENT_SHARED: { id: 123040 as SpellId, name: "Mindbender", icon: "spell_shadow_soulleech_3" },
};
export default talents;

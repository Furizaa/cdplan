import { Spell, SpellId } from "../types";

const talents = {
  TIGER_DASH_TALENT: { id: 252216 as SpellId, name: "Tiger Dash", icon: "ability_druid_dash_orange" },
  RENEWAL_TALENT: { id: 108238 as SpellId, name: "Renewal", icon: "spell_nature_natureblessing" },
  WILD_CHARGE_TALENT: { id: 102401 as SpellId, name: "Wild Charge", icon: "spell_druid_wildcharge" },
  RESTORATION_AFFINITY_TALENT: {
    id: 197492 as SpellId,
    name: "Restoration Affinity",
    icon: "ability_druid_improvedtreeform",
  },
  MIGHTY_BASH_TALENT: { id: 5211 as SpellId, name: "Mighty Bash", icon: "ability_druid_bash" },
  MASS_ENTANGLEMENT_TALENT: { id: 102359 as SpellId, name: "Mass Entanglement", icon: "spell_druid_massentanglement" },
  HEART_OF_THE_WILD_TALENT: { id: 319454 as SpellId, name: "Heart of the Wild", icon: "spell_holy_blessingofagility" },
  INCARNATION_CHOSEN_OF_ELUNE_TALENT: {
    id: 102560 as SpellId,
    name: "Incarnation: Chosen of Elune",
    icon: "spell_druid_incarnation",
  },
  BALANCE_AFFINITY_TALENT_SHARED: {
    id: 197488 as SpellId,
    name: "Balance Affinity",
    icon: "ability_druid_improvedmoonkinform",
  },
  GUARDIAN_AFFINITY_TALENT_SHARED: {
    id: 197491 as SpellId,
    name: "Guardian Affinity",
    icon: "talentspec_druid_feral_bear",
  },
};
export default talents;

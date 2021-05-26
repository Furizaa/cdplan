import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    KINDRED_SPIRITS: {
      id: 326434 as SpellId,
      name: "Kindred Spirits",
      icon: "ability_bastion_druid",
    },
    LONE_MEDITATION: {
      // healer solo cast + buff
      id: 338035 as SpellId,
      name: "Lone Meditation",
      icon: "spell_animabastion_beam",
    },
    EMPOWER_BOND_TANK: {
      // bond activation cast targetting a Tank
      id: 326462 as SpellId,
      name: "Empower Bond",
      icon: "spell_animabastion_beam",
    },
    EMPOWER_BOND_DAMAGE: {
      // bond activation cast targetting a DPS
      id: 326446 as SpellId,
      name: "Empower Bond",
      icon: "spell_animabastion_beam",
    },
    EMPOWER_BOND_HEALER: {
      // bond activation cast targetting a healer
      id: 326647 as SpellId,
      name: "Empower Bond",
      icon: "spell_animabastion_beam",
    },
    KINDRED_FOCUS_BUFF_OUTGOING: {
      // healer buff from you to target
      id: 327071 as SpellId,
      name: "Kindred Focus",
      icon: "spell_animabastion_buff",
    },
    KINDRED_FOCUS_BUFF_INCOMING: {
      // healer buff from target to you
      id: 327148 as SpellId,
      name: "Kindred Focus",
      icon: "spell_animabastion_beam",
    },
    KINDRED_EMPOWERMENT_BUFF_OUTGOING: {
      // DPS buff from you to target
      id: 327139 as SpellId,
      name: "Kindred Empowerment",
      icon: "spell_animabastion_beam",
    },
    KINDRED_EMPOWERMENT_BUFF_ABSORB_INCOMING: {
      // DPS buff from target to you (and also absorb ID)
      id: 327022 as SpellId,
      name: "Kindred Empowerment",
      icon: "spell_animabastion_buff",
    },
    KINDRED_PROTECTION_BUFF: {
      // Tank buff from target to you (and also damage from you to target)
      id: 327037 as SpellId,
      name: "Kindred Protection",
      icon: "spell_animabastion_buff",
    },
    KINDRED_FOCUS_HEAL: {
      // Heal ID when you heal others
      id: 327149 as SpellId,
      name: "Kindred Focus",
      icon: "spell_animabastion_beam",
    },
    KINDRED_EMPOWERMENT_DPS_HEAL: {
      // Heal ID from you when targeted DPS does damage
      id: 338525 as SpellId,
      name: "Kindred Empowerment",
      icon: "spell_animabastion_beam",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    ADAPTIVE_SWARM: {
      // cast
      id: 325727 as SpellId,
      name: "Adaptive Swarm",
      icon: "ability_maldraxxus_druid",
    },
    ADAPTIVE_SWARM_HEAL: {
      // buff, heal
      id: 325748 as SpellId,
      name: "Adaptive Swarm",
      icon: "ability_maldraxxus_druid",
    },
    ADAPTIVE_SWARM_DAMAGE: {
      // debuff, damage
      id: 325733 as SpellId,
      name: "Adaptive Swarm",
      icon: "ability_maldraxxus_druid",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    CONVOKE_SPIRITS: {
      id: 323764 as SpellId,
      name: "Convoke the Spirits",
      icon: "ability_ardenweald_druid",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    RAVENOUS_FRENZY: {
      id: 323546 as SpellId,
      name: "Ravenous Frenzy",
      icon: "ability_revendreth_druid",
    },
    ...GENERAL.VENTHYR,
  },
};

export default covenants;

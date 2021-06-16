import { LiteralUnion } from "type-fest";
import { CovenenatUnion, Spell, SpellId } from "../types";
import GENERAL from "./general";

const covenants: Readonly<Record<LiteralUnion<CovenenatUnion, string>, Record<string, Spell>>> = {
  KYRIAN: {
    BOON_OF_THE_ASCENDED: {
      id: 325013 as SpellId,
      name: "Boon of the Ascended",
      icon: "ability_bastion_priest",
    },
    ASCENDED_BLAST: {
      id: 325283 as SpellId,
      name: "Ascended Blast",
      icon: "spell_animabastion_missile",
    },
    ASCENDED_BLAST_HEAL: {
      id: 325315 as SpellId,
      name: "Ascended Blast",
      icon: "spell_animabastion_missile",
    },
    ASCENDED_NOVA: {
      id: 325020 as SpellId,
      name: "Ascended Nova",
      icon: "spell_animabastion_nova",
    },
    ASCENDED_NOVA_HEAL: {
      id: 325041 as SpellId,
      name: "Ascended Nova",
      icon: "spell_animabastion_nova",
    },
    ASCENDED_ERUPTION: {
      id: 325326 as SpellId,
      name: "Ascended Eruption",
      icon: "ability_bastion_priest",
    },
    ASCENDED_ERUPTION_HEAL: {
      id: 347625 as SpellId,
      name: "Ascended Eruption",
      icon: "ability_bastion_priest",
    },
    ...GENERAL.KYRIAN,
  },
  NECROLORD: {
    UNHOLY_NOVA: {
      id: 324724 as SpellId,
      name: "Unholy Nova",
      icon: "ability_maldraxxus_priest",
    },
    UNHOLY_NOVA_BUFF: {
      id: 347788 as SpellId,
      name: "Unholy Nova",
      icon: "ability_maldraxxus_priest",
    },
    UNHOLY_TRANSFUSION: {
      id: 325118 as SpellId,
      name: "Unholy Transfusion",
      icon: "spell_animamaldraxxus_debuff",
    },
    UNHOLY_TRANSFUSION_DAMAGE: {
      id: 325203 as SpellId,
      name: "Unholy Transfusion",
      icon: "spell_animamaldraxxus_debuff",
    },
    ...GENERAL.NECROLORD,
  },
  NIGHT_FAE: {
    FAE_GUARDIANS: {
      id: 327661 as SpellId,
      name: "Fae Guardians",
      icon: "ability_ardenweald_priest",
    },
    WRATHFUL_FAERIE: {
      id: 342132 as SpellId,
      name: "Wrathful Faerie",
      icon: "spell_animaardenweald_orb",
    },
    WRATHFUL_FAERIE_ENERGIZE: {
      id: 327703 as SpellId,
      name: "Wrathful Faerie",
      icon: "spell_animaardenweald_orb",
    },
    GUARDIAN_FAERIE: {
      id: 327694 as SpellId,
      name: "Guardian Faerie",
      icon: "spell_animaardenweald_orb",
    },
    BENEVOLENT_FAERIE: {
      id: 327710 as SpellId,
      name: "Benevolent Faerie",
      icon: "spell_animaardenweald_orb",
    },
    ...GENERAL.NIGHT_FAE,
  },
  VENTHYR: {
    MINDGAMES: {
      id: 323673 as SpellId,
      name: "Mind Games",
      icon: "ability_revendreth_priest",
    },
    MINDGAMES_HEAL: {
      id: 323706 as SpellId,
      name: "Mind Games",
      icon: "ability_revendreth_priest",
    },
    MINDGAMES_ABSORB: {
      id: 323701 as SpellId,
      name: "Mind Games",
      icon: "ability_revendreth_priest",
    },
    MINDGAMES_REVERSAL: {
      id: 323707 as SpellId,
      name: "Mind Games",
      icon: "ability_revendreth_priest",
    },
    ...GENERAL.VENTHYR,
  },
  UNKNOWN: {},
};

export default covenants;

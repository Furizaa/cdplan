import { SpellId } from "../types";

const spells = {
  HOLY_NOVA: {
    id: 132157 as SpellId,
    name: "Holy Nova",
    icon: "spell_holy_holynova",
    manaCost: 800,
  },
  HOLY_NOVA_HEAL: {
    id: 281265 as SpellId,
    name: "Holy Nova",
    icon: "spell_holy_holynova",
    manaCost: 800,
  },
  POWER_WORD_FORTITUDE: {
    id: 21562 as SpellId,
    name: "Power Word: Fortitude",
    icon: "spell_holy_wordfortitude",
    manaCost: 2000,
  },
  SHADOW_WORD_DEATH: {
    id: 32379 as SpellId,
    name: "Shadow Word: Death",
    icon: "spell_shadow_demonicfortitude",
    manaCost: 250,
  },
  POWER_INFUSION: {
    id: 10060 as SpellId,
    name: "Power Infusion",
    icon: "spell_holy_powerinfusion",
  },
  DESPERATE_PRAYER: {
    id: 19236 as SpellId,
    name: "Desperate Prayer",
    icon: "spell_holy_testoffaith",
  },
  MIND_SOOTHE: {
    id: 453 as SpellId,
    name: "Mind Soothe",
    icon: "spell_holy_mindsooth",
    manaCost: 500,
  },
};

export default spells;

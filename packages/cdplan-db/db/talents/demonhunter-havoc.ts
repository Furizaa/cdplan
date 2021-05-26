import { Spell, SpellId } from "../types";

const talents = {
  BLIND_FURY_TALENT: { id: 203550 as SpellId, name: "Blind Fury", icon: "ability_bosskilrogg_deadeye" },
  DEMONIC_APPETITE_TALENT: {
    id: 206478 as SpellId,
    name: "Demonic Appetite",
    icon: "ability_creature_poison_01_purple",
  },
  INSATIABLE_HUNGER_TALENT: { id: 258876 as SpellId, name: "Insatiable Hunger", icon: "ability_rogue_hungerforblood" },
  BURNING_HATRED_TALENT: { id: 320374 as SpellId, name: "Burning Hatred", icon: "ability_demonhunter_immolation" },
  DEMON_BLADES_TALENT: { id: 203555 as SpellId, name: "Demon Blades", icon: "inv_weapon_shortblade_92" },
  TRAIL_OF_RUIN_TALENT: { id: 258881 as SpellId, name: "Trail of Ruin", icon: "ability_demonhunter_bladedance" },
  UNBOUND_CHAOS_TALENT: {
    id: 347461 as SpellId,
    name: "Unbound Chaos",
    icon: "artifactability_vengeancedemonhunter_painbringer",
  },
  GLAIVE_TEMPEST_TALENT: {
    id: 342817 as SpellId,
    name: "Glaive Tempest",
    icon: "inv_glaive_1h_artifactazgalor_d_06dual",
    furyCost: 30,
  },
  DESPERATE_INSTINCTS_TALENT: { id: 205411 as SpellId, name: "Desperate Instincts", icon: "spell_shadow_manafeed" },
  NETHERWALK_TALENT: { id: 196555 as SpellId, name: "Netherwalk", icon: "spell_warlock_demonsoul" },
  CYCLE_OF_HATRED_TALENT: { id: 258887 as SpellId, name: "Cycle of Hatred", icon: "ability_ironmaidens_whirlofblood" },
  FIRST_BLOOD_TALENT: { id: 206416 as SpellId, name: "First Blood", icon: "ability_deathwing_bloodcorruption_death" },
  ESSENCE_BREAK_TALENT: { id: 258860 as SpellId, name: "Essence Break", icon: "spell_shadow_ritualofsacrifice" },
  UNLEASHED_POWER_TALENT: { id: 206477 as SpellId, name: "Unleashed Power", icon: "ability_demonhunter_chaosnova" },
  MASTER_OF_THE_GLAIVE_TALENT: {
    id: 203556 as SpellId,
    name: "Master of the Glaive",
    icon: "inv_glaive_1h_demonhunter_a_01",
  },
  FEL_ERUPTION_TALENT: {
    id: 211881 as SpellId,
    name: "Fel Eruption",
    icon: "ability_bossfellord_felspike",
    furyCost: 10,
    painCost: 10,
  },
  MOMENTUM_TALENT: { id: 206476 as SpellId, name: "Momentum", icon: "ability_foundryraid_demolition" },
  FEL_BARRAGE_TALENT: { id: 258925 as SpellId, name: "Fel Barrage", icon: "inv_felbarrage" },
  SOUL_RENDING_TALENT_HAVOC: { id: 204909 as SpellId, name: "Soul Rending", icon: "ability_demonhunter_soulcleave2" },
  DEMONIC_TALENT_HAVOC: { id: 213410 as SpellId, name: "Demonic", icon: "spell_shadow_demonform" },
};
export default talents;

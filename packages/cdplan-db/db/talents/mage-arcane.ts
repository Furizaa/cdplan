import { SpellId } from "../types";

const talents = {
  AMPLIFICATION_TALENT: { id: 236628 as SpellId, name: "Amplification", icon: "spell_arcane_invocation" },
  RULE_OF_THREES_TALENT: { id: 264354 as SpellId, name: "Rule of Threes", icon: "spell_arcane_starfire" },
  ARCANE_FAMILIAR_TALENT: { id: 205022 as SpellId, name: "Arcane Familiar", icon: "ability_socererking_arcanemines" },
  MASTER_OF_TIME_TALENT: { id: 342249 as SpellId, name: "Master of Time", icon: "inv_belt_armor_waistoftime_d_01" },
  SLIPSTREAM_TALENT: { id: 236457 as SpellId, name: "Slipstream", icon: "spell_holy_mindsooth" },
  RESONANCE_TALENT: { id: 205028 as SpellId, name: "Resonance", icon: "spell_arcane_arcane01" },
  ARCANE_ECHO_TALENT: { id: 342231 as SpellId, name: "Arcane Echo", icon: "ability_socererking_arcanewrath" },
  NETHER_TEMPEST_TALENT: {
    id: 114923 as SpellId,
    name: "Nether Tempest",
    icon: "spell_mage_nethertempest",
    manaCost: 750,
  },
  CHRONO_SHIFT_TALENT: { id: 235711 as SpellId, name: "Chrono Shift", icon: "ability_monk_deadlyreach" },
  REVERBERATE_TALENT: { id: 281482 as SpellId, name: "Reverberate", icon: "spell_arcane_arcane04" },
  ARCANE_ORB_TALENT: { id: 153626 as SpellId, name: "Arcane Orb", icon: "spell_mage_arcaneorb", manaCost: 500 },
  SUPERNOVA_TALENT: { id: 157980 as SpellId, name: "Supernova", icon: "spell_mage_supernova" },
  TIME_ANOMALY_TALENT: { id: 210805 as SpellId, name: "Time Anomaly", icon: "ability_mage_timewarp" },
  ENLIGHTENED_TALENT: { id: 321387 as SpellId, name: "Enlightened", icon: "ability_socererking_arcanefortification" },
};
export default talents;

import { Spell, SpellId } from "../types";

const spells: Record<string, Spell> = {
  // Blood:

  // Summons
  // Bloodworm summon spell by the Bloodworms talent
  BLOODWORM: {
    id: 196361 as SpellId,
    name: "Bloodworm",
    icon: "spell_shadow_soulleech",
  },
  // Bloodworm death/heal spell
  BLOODWORM_DEATH: {
    id: 197509 as SpellId,
    name: "Bloodworm Death/Heal",
    icon: "spell_shadow_soulleech",
  },

  // Damage Dealing
  BLOOD_BOIL: {
    id: 50842 as SpellId,
    name: "Blood Boil",
    icon: "spell_deathknight_bloodboil",
  },

  HEART_STRIKE: {
    id: 206930 as SpellId,
    name: "Heart Strike",
    icon: "inv_weapon_shortblade_40",
  },

  BONESTORM_HIT: {
    id: 196528 as SpellId,
    name: "Bonestorm",
    icon: "achievement_boss_lordmarrowgar",
  },

  // Only used during Dancing Rune Weapon. Its the Heart Strike of the copied weapons. Generates 5 RP.
  BLOOD_STRIKE: {
    id: 220890 as SpellId,
    name: "Blood Strike",
    icon: "spell_deathknight_deathstrike",
  },
  MARROWREND: {
    id: 195182 as SpellId,
    name: "Marrowrend",
    icon: "ability_deathknight_marrowrend",
  },
  BLOOD_PLAGUE: {
    id: 55078 as SpellId,
    name: "Blood Plague",
    icon: "spell_deathknight_bloodplague",
  },
  DEATHS_CARESS: {
    id: 195292 as SpellId,
    name: "Death's Caress",
    icon: "ability_deathknight_deathscaress",
  },

  // Cooldowns
  DANCING_RUNE_WEAPON: {
    id: 49028 as SpellId,
    name: "Dancing Rune Weapon",
    icon: "inv_sword_07",
  },

  DANCING_RUNE_WEAPON_BUFF: {
    id: 81256 as SpellId,
    name: "Dancing Rune Weapon",
    icon: "inv_sword_07",
  },

  VAMPIRIC_BLOOD: {
    id: 55233 as SpellId,
    name: "Vampiric Blood",
    icon: "spell_shadow_lifedrain",
  },

  SHROUD_OF_PURGATORY: {
    id: 116888 as SpellId,
    name: "Shroud of Purgatory",
    icon: "inv_misc_shadowegg",
  },

  BONE_SHIELD: {
    id: 195181 as SpellId,
    name: "Bone Shield",
    icon: "ability_deathknight_boneshield",
  },

  BLOOD_SHIELD: {
    id: 77535 as SpellId,
    name: "Blood Shield",
    icon: "spell_deathknight_butcher2",
  },

  HEARTBREAKER: {
    id: 210738 as SpellId,
    name: "Heartbreaker",
    icon: "spell_deathknight_deathstrike",
  },

  RUNE_TAP: {
    id: 194679 as SpellId,
    name: "Rune Tap",
    icon: "spell_deathknight_runetap",
  },

  CONSUMPTION_HEAL: {
    id: 205224 as SpellId,
    name: "Consumption Heal",
    icon: "inv_axe_2h_artifactmaw_d_02",
  },

  // Buffs
  OSSUARY: {
    id: 219788 as SpellId,
    name: "Ossuary",
    icon: "ability_deathknight_brittlebones",
  },
  CRIMSON_SCOURGE: {
    id: 81141 as SpellId,
    name: "Crimson Scourge",
    icon: "ability_warrior_bloodnova",
  },
  VORACIOUS: {
    id: 274009 as SpellId,
    name: "Voracious",
    icon: "ability_ironmaidens_whirlofblood",
  },
  RELISH_IN_BLOOD: {
    id: 317614 as SpellId,
    name: "Relish in Blood",
    icon: "ability_deathknight_roilingblood",
  },

  // CC
  GOREFIENDS_GRASP: {
    id: 108199 as SpellId,
    name: "Gorefiend's Grasp",
    icon: "ability_deathknight_aoedeathgrip",
  },

  // Blood DK Version
  ASPHYXIATE: {
    id: 221562 as SpellId,
    name: "Asphyxiate",
    icon: "ability_deathknight_asphixiate",
  },
};

export default spells;

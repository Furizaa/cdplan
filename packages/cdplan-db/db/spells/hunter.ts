import { SpellId } from "../types";

const spells = {
  ARCANE_SHOT: {
    id: 185358 as SpellId,
    name: "Arcane Shot",
    icon: "ability_impalingbolt",
  },
  STEADY_SHOT: {
    id: 56641 as SpellId,
    name: "Steady Shot",
    icon: "ability_hunter_steadyshot",
  },
  KILL_SHOT_MM_BM: {
    id: 53351 as SpellId,
    name: "Kill Shot",
    icon: "ability_hunter_assassinate2",
  },
  KILL_SHOT_SV: {
    id: 320976 as SpellId,
    name: "Kill Shot",
    icon: "ability_hunter_assassinate2",
  },
  HUNTERS_MARK: {
    id: 257284 as SpellId,
    name: "Hunter's Mark",
    icon: "ability_hunter_markedfordeath",
  },
  POSTHASTE_BUFF: {
    id: 118922 as SpellId,
    name: "Posthaste",
    icon: "ability_hunter_posthaste",
  },
  A_MURDER_OF_CROWS_DEBUFF: {
    id: 131900 as SpellId,
    name: "A Murder of Crows",
    icon: "ability_hunter_murderofcrows",
  },
  BINDING_SHOT_ROOT: {
    id: 117526 as SpellId,
    name: "Binding Shot Stun",
    icon: "spell_shaman_bindelemental",
  },
  BINDING_SHOT_TETHER: {
    id: 117405 as SpellId,
    name: "Binding Shot Tether",
    icon: "spell_shaman_bindelemental",
  },
  BARRAGE_DAMAGE: {
    id: 120361 as SpellId,
    name: "Barrage",
    icon: "ability_hunter_rapidregeneration",
  },
  ASPECT_OF_THE_CHEETAH: {
    id: 186257 as SpellId,
    name: "Aspect of the Cheetah",
    icon: "ability_mount_jungletiger",
  },
  ASPECT_OF_THE_TURTLE: {
    id: 186265 as SpellId,
    name: "Aspect of the Turtle",
    icon: "ability_hunter_pet_turtle",
  },
  CONCUSSIVE_SHOT: {
    id: 5116 as SpellId,
    name: "Concussive Shot",
    icon: "spell_frost_stun",
  },
  DISENGAGE: {
    id: 781 as SpellId,
    name: "Disengage",
    icon: "ability_rogue_feint",
  },
  EXHILARATION: {
    id: 109304 as SpellId,
    name: "Exhilaration",
    icon: "ability_hunter_onewithnature",
  },
  FLARE: {
    id: 1543 as SpellId,
    name: "Flare",
    icon: "spell_fire_flare",
  },
  FREEZING_TRAP: {
    id: 187650 as SpellId,
    name: "Freezing Trap",
    icon: "spell_frost_chainsofice",
  },
  MISDIRECTION: {
    id: 34477 as SpellId,
    name: "Misdrection",
    icon: "ability_hunter_misdirection",
  },
  TAR_TRAP: {
    id: 187698 as SpellId,
    name: "Tar Trap",
    icon: "spell_yorsahj_bloodboil_black",
  },
  COUNTER_SHOT: {
    id: 147362 as SpellId,
    name: "Counter Shot",
    icon: "inv_ammo_arrow_03",
  },
  AUTO_SHOT: {
    id: 75 as SpellId,
    name: "Auto Shot",
    icon: "ability_whirlwind",
  },
  INTIMIDATION: {
    id: 19577 as SpellId,
    name: "Intimidation",
    icon: "ability_devour",
  },
  CHIMAERA_SHOT_FOCUS: {
    id: 204304 as SpellId,
    name: "Chimaera Shot",
    icon: "ability_hunter_chimerashot2",
  },
  TRANQUILIZING_SHOT: {
    id: 19801 as SpellId,
    name: "Tranquilizing Shot",
    icon: "spell_nature_drowsy",
  },
  DISMISS_PET: {
    id: 2641 as SpellId,
    name: "Dismiss Pet",
    icon: "spell_nature_spiritwolf",
  },
  PLAY_DEAD: {
    id: 209997 as SpellId,
    name: "Play Dead",
    icon: "inv_misc_pelt_bear_03",
  },
  WAKE_UP: {
    id: 210000 as SpellId,
    name: "Wake Up",
    icon: "warrior_disruptingshout",
  },
  FETCH: {
    id: 125050 as SpellId,
    name: "Fetch",
    icon: "inv_misc_bone_01",
  },
  REVIVE_PET: {
    id: 982 as SpellId,
    name: "Revive Pet",
    icon: "ability_hunter_beastsoothe",
  },
  MEND_PET: {
    id: 136 as SpellId,
    name: "Mend Pet",
    icon: "ability_hunter_mendpet",
  },
  FEIGN_DEATH: {
    id: 5384 as SpellId,
    name: "Feign Death",
    icon: "ability_rogue_feigndeath",
  },
  CALL_PET_1: {
    id: 883 as SpellId,
    name: "Call Pet 1",
    icon: "ability_hunter_beastcall",
  },
  CALL_PET_2: {
    id: 83242 as SpellId,
    name: "Call Pet 2",
    icon: "ability_hunter_beastcall",
  },
  CALL_PET_3: {
    id: 83243 as SpellId,
    name: "Call Pet 3",
    icon: "ability_hunter_beastcall",
  },
  CALL_PET_4: {
    id: 83244 as SpellId,
    name: "Call Pet 4",
    icon: "ability_hunter_beastcall",
  },
  CALL_PET_5: {
    id: 83245 as SpellId,
    name: "Call Pet 5",
    icon: "ability_hunter_beastcall",
  },
  PRIMAL_RAGE_1: {
    id: 264667 as SpellId,
    name: "Primal Rage",
    icon: "spell_shadow_unholyfrenzy",
  },
  PRIMAL_RAGE_2: {
    id: 272678 as SpellId,
    name: "Primal Rage",
    icon: "spell_shadow_unholyfrenzy",
  },
  MASTERS_CALL: {
    id: 272682 as SpellId,
    name: "Master's Call",
    icon: "ability_hunter_masterscall",
  },
  SURVIVAL_OF_THE_FITTEST: {
    id: 272679 as SpellId,
    name: "Survival of the Fittest",
    icon: "spell_nature_spiritarmor",
  },
  CLAW_BASIC_ATTACK: {
    id: 16827 as SpellId,
    name: "Claw",
    icon: "ability_druid_rake",
  },
  SMACK_BASIC_ATTACK: {
    id: 49966 as SpellId,
    name: "Smack",
    icon: "ability_druid_bash",
  },
  BITE_BASIC_ATTACK: {
    id: 17253 as SpellId,
    name: "Bite",
    icon: "ability_druid_ferociousbite",
  },
  EAGLE_EYE: {
    id: 6197 as SpellId,
    name: "Eagle Eye",
    icon: "ability_hunter_eagleeye",
  },
  EYES_OF_THE_BEAST: {
    id: 321297 as SpellId,
    name: "Eyes of the Beast",
    icon: "ability_eyeoftheowl",
  },
  SCARE_BEAST: {
    id: 1513 as SpellId,
    name: "Scare Beast",
    icon: "ability_druid_cower",
  },
};

export default spells;

import { Boss, BossId, BossKey } from "../../types";
import SPELLS from "../../spells";
import { generateCastsFromBigwigs } from "../utils";

const BOSS_KEY = "T27/B10";

const boss: Boss = {
  id: 175732 as BossId,
  encounterId: 2435,
  key: BOSS_KEY as BossKey,
  name: "Sylvanas Windrunner",
  slug: "t27/sylvanas-windrunner",
  icon: "achievement_raid_torghast_sylvanaswindrunner",
  stages: {
    [`${BOSS_KEY}/S1`]: {
      key: `${BOSS_KEY}/S1`,
      name: "Stage 1: A Cycle of Hatred",
      slug: "stage-1-a-cycle-of-hatred",
      timelineSettings: {
        durationMs: 227300,
        additionalEvents: [
          {
            id: `${BOSS_KEY}/S1/INTERMISSION_ANNOUNCE`,
            name: "Intermission",
            icon: "spell_holy_borrowedtime",
            atMs: 199000,
          },
        ],
      },
      mechanics: {
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S1/VEIL${index}`,
          (index) => `Veil (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          [49.5, 43.0, 45.2, 53.9, 35.7]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S1/CHAINS${index}`,
          (index) => `Chains (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
          [29.0, 54.9, 62.6, 53.9]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S1/ARROW${index}`,
          (index) => `Arrow (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          [40.0, 64.0, 62.0, 64.0]
        ),
      },
    },
    [`${BOSS_KEY}/S1INT`]: {
      key: `${BOSS_KEY}/S1INT`,
      name: "Intermission: A Monument to our Suffering",
      slug: "stage-1-intermission",
      mechanics: {},
    },
    [`${BOSS_KEY}/S2`]: {
      key: `${BOSS_KEY}/S2`,
      name: "Stage 2: The Banshee Queen",
      slug: "stage-2-the-banshee-queen",
      timelineSettings: {
        durationMs: 205000,
        additionalEvents: [
          {
            id: `${BOSS_KEY}/S2/STAGE_ANNOUNCE`,
            name: "Stage 2",
            icon: "spell_holy_borrowedtime",
            atMs: 0,
          },
          {
            id: `${BOSS_KEY}/S2/SHROUD_REMOVED_1`,
            name: "Banshee Shroud Removed",
            icon: "ability_racial_shadowmeld",
            atMs: 59000,
          },
          {
            id: `${BOSS_KEY}/S2/SHROUD_REMOVED_2`,
            name: "Banshee Shroud Removed",
            icon: "ability_racial_shadowmeld",
            atMs: 162000,
          },
          {
            id: `${BOSS_KEY}/S2/BRIDGES_1`,
            name: "Bridges (1)",
            icon: "achievement_zone_icecrown_02",
            atMs: 10000,
          },
          {
            id: `${BOSS_KEY}/S2/BRIDGES_2`,
            name: "Bridges (2)",
            icon: "achievement_zone_icecrown_02",
            atMs: 51000,
          },
          {
            id: `${BOSS_KEY}/S2/BRIDGES_3`,
            name: "Bridges (3)",
            icon: "achievement_zone_icecrown_02",
            atMs: 109000,
          },
          {
            id: `${BOSS_KEY}/S2/BRIDGES_4`,
            name: "Bridges (4)",
            icon: "achievement_zone_icecrown_02",
            atMs: 157000,
          },
        ],
      },
      mechanics: {
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S2/WAVE${index}`,
          (index) => `Wave (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          [11, 36, 26, 22, 19, 32, 30, 26]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S2/VEIL${index}`,
          (index) => `Veil (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          [29, 56, 43, 53]
        ),
      },
    },
    [`${BOSS_KEY}/S3`]: {
      key: `${BOSS_KEY}/S3`,
      name: "Stage 3: The Freedom of Choice",
      slug: "stage-3-the-freedom-of-choice",
      timelineSettings: {
        durationMs: 360000,
      },
      mechanics: {
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S3/VEIL${index}`,
          (index) => `Veil (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          [23.5, 60, 55, 55, 57, 57, 64]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S3/ARROW${index}`,
          (index) => `Arrow (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          [59.5, 70, 70, 68.5, 68.5]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S3/RAZE${index}`,
          (index) => `Raze (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          [45, 105, 105, 105]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S3/SCREAM${index}`,
          (index) => `Scream (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.BANSHEE_SCREAM,
          [71.5, 110, 112]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S3/POOLS${index}`,
          (index) => `Pools (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
          [15, 93, 100, 92.5]
        ),
        ...generateCastsFromBigwigs(
          (index) => `${BOSS_KEY}/S3/KNIVES${index}`,
          (index) => `Death Knives (${index})`,
          SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          [65.5, 54.7, 54.7, 54.7, 54.7, 54.7]
        ),
      },
    },
  },
};

export default boss;

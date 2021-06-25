import { Boss, BossId, BossKey } from "../../types";
import SPELLS from "../../spells";

const BOSS_KEY = "T27/B02";

const boss: Boss = {
  id: 180018 as BossId,
  key: BOSS_KEY as BossKey,
  name: "Eye of the Jailer",
  slug: "t27/eye-of-the-jailer",
  icon: "achievement_raid_torghast_theeyeofthejailer",
  stages: {
    [`${BOSS_KEY}/S2`]: {
      key: `${BOSS_KEY}/S2`,
      name: "Stage 2: double Vision",
      slug: "stage-2-double-vision",
      mechanics: {
        [`${BOSS_KEY}/INT75`]: {
          title: "Intermission 75%",
          trigger: {
            timeMs: 0,
          },
        },
        [`${BOSS_KEY}/TDG1`]: {
          key: `${BOSS_KEY}/TDG1`,
          description: "Titanic Death Gaze 1",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.TITANIC_DEATH_GAZE,
          trigger: {
            timeMs: 36000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/TDG2`]: {
          key: `${BOSS_KEY}/TDG2`,
          description: "Titanic Death Gaze 2",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.TITANIC_DEATH_GAZE,
          trigger: {
            timeMs: 70000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SAI1`]: {
          key: `${BOSS_KEY}/SAI1`,
          description: "Scorn and Ire 1",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.SCORN_AND_IRE,
          trigger: {
            timeMs: 40000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },

        [`${BOSS_KEY}/INT50`]: {
          title: "Intermission 50%",
          trigger: {
            timeMs: 120000,
          },
        },
        [`${BOSS_KEY}/TDG3`]: {
          key: `${BOSS_KEY}/TDG3`,
          description: "Titanic Death Gaze 3",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.TITANIC_DEATH_GAZE,
          trigger: {
            timeMs: 141000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/TDG4`]: {
          key: `${BOSS_KEY}/TDG4`,
          description: "Titanic Death Gaze 4",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.TITANIC_DEATH_GAZE,
          trigger: {
            timeMs: 175000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SAI2`]: {
          key: `${BOSS_KEY}/SAI2`,
          description: "Scorn and Ire 2",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.SCORN_AND_IRE,
          trigger: {
            timeMs: 145_000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },

        [`${BOSS_KEY}/INT25`]: {
          title: "Intermission 25%",
          trigger: {
            timeMs: 240000,
          },
        },
        [`${BOSS_KEY}/TDG5`]: {
          key: `${BOSS_KEY}/TDG5`,
          description: "Titanic Death Gaze 5",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.TITANIC_DEATH_GAZE,
          trigger: {
            timeMs: 261000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/TDG6`]: {
          key: `${BOSS_KEY}/TDG6`,
          description: "Titanic Death Gaze 6",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.TITANIC_DEATH_GAZE,
          trigger: {
            timeMs: 295000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SAI3`]: {
          key: `${BOSS_KEY}/SAI3`,
          description: "Scorn and Ire 3",
          spell: SPELLS.T27.EYE_OF_THE_JAILER.SCORN_AND_IRE,
          trigger: {
            timeMs: 265000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
      },
    },
  },
};

export default boss;

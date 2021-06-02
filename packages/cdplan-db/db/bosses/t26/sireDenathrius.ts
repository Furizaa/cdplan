import { Boss, BossId, BossKey } from "../../types";
import SPELLS from "../../spells";

const BOSS_KEY = "T26/B10";

const boss: Boss = {
  id: 2407 as BossId,
  key: BOSS_KEY as BossKey,
  name: "Sire Denathrius",
  icon: "achievement_raid_revendrethraid_siredenathrius",
  stages: {
    [`${BOSS_KEY}/S1`]: {
      key: `${BOSS_KEY}/S1`,
      name: "Stage 1: Sinners Be Cleansed",
      mechanics: {
        [`${BOSS_KEY}/CP1`]: {
          key: `${BOSS_KEY}/CP1`,
          description: "Cleansing Pain 1",
          image: "t26-b10-p1.png",
          spell: SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN,
          trigger: {
            timeMs: 8000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak"],
          mitigationOptions: {
            soakGroups: 4,
          },
        },
        [`${BOSS_KEY}/CP2`]: {
          key: `${BOSS_KEY}/CP2`,
          description: "Cleansing Pain 2",
          spell: SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN,
          trigger: {
            timeMs: 35000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak"],
          mitigationOptions: {
            soakGroups: 4,
          },
        },
        [`${BOSS_KEY}/CP3`]: {
          key: `${BOSS_KEY}/CP3`,
          description: "Cleansing Pain 3",
          spell: SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN,
          trigger: {
            timeMs: 60000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak"],
          mitigationOptions: {
            soakGroups: 4,
          },
        },
        [`${BOSS_KEY}/CP4`]: {
          key: `${BOSS_KEY}/CP4`,
          description: "Cleansing Pain 4",
          spell: SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN,
          trigger: {
            timeMs: 90000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak"],
          mitigationOptions: {
            soakGroups: 4,
          },
        },
        [`${BOSS_KEY}/CP5`]: {
          key: `${BOSS_KEY}/CP5`,
          description: "Cleansing Pain 5",
          spell: SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN,
          trigger: {
            timeMs: 130000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak"],
          mitigationOptions: {
            soakGroups: 4,
          },
        },
        [`${BOSS_KEY}/CP6`]: {
          key: `${BOSS_KEY}/CP6`,
          description: "Cleansing Pain 6",
          spell: SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN,
          trigger: {
            timeMs: 150000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak"],
          mitigationOptions: {
            soakGroups: 4,
          },
        },
        [`${BOSS_KEY}/RV1`]: {
          key: `${BOSS_KEY}/RV1`,
          description: "Ravage 1",
          spell: SPELLS.T26.SIRE_DENATHRIUS.RAVAGE,
          trigger: {
            timeMs: 50000,
          },
          mitigationFlavors: ["Mobility"],
        },
        [`${BOSS_KEY}/RV2`]: {
          key: `${BOSS_KEY}/RV2`,
          description: "Ravage 2",
          spell: SPELLS.T26.SIRE_DENATHRIUS.RAVAGE,
          trigger: {
            timeMs: 110000,
          },
          mitigationFlavors: ["Mobility"],
        },
        [`${BOSS_KEY}/MOTP`]: {
          key: `${BOSS_KEY}/MOTP`,
          description: "March of the Penitent",
          spell: SPELLS.T26.SIRE_DENATHRIUS.MARCH_OF_THE_PENITENT,
          trigger: {
            timeMs: 170000,
          },
          mitigationFlavors: ["Mobility"],
        },
      },
    },
  },
};

export default boss;

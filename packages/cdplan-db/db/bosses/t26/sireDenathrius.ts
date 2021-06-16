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
            soakGroups: [
              { name: "1", id: 1 },
              { name: "2", id: 2 },
              { name: "3", id: 3 },
              { name: "4", id: 4 },
              { name: "Singles", id: 5 },
            ],
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
            soakGroups: [
              { name: "1", id: 1 },
              { name: "2", id: 2 },
              { name: "3", id: 3 },
              { name: "4", id: 4 },
              { name: "Singles", id: 5 },
            ],
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
            soakGroups: [
              { name: "1", id: 1 },
              { name: "2", id: 2 },
              { name: "3", id: 3 },
              { name: "4", id: 4 },
              { name: "Singles", id: 5 },
            ],
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
            soakGroups: [
              { name: "1", id: 1 },
              { name: "2", id: 2 },
              { name: "3", id: 3 },
              { name: "4", id: 4 },
              { name: "Singles", id: 5 },
            ],
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
            soakGroups: [
              { name: "1", id: 1 },
              { name: "2", id: 2 },
              { name: "3", id: 3 },
              { name: "4", id: 4 },
              { name: "Singles", id: 5 },
            ],
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
            soakGroups: [
              { name: "1", id: 1 },
              { name: "2", id: 2 },
              { name: "3", id: 3 },
              { name: "4", id: 4 },
              { name: "Singles", id: 5 },
            ],
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
    [`${BOSS_KEY}/S2`]: {
      key: `${BOSS_KEY}/S2`,
      name: "Stage 2: March of the Pentient",
      mechanics: {},
    },
    [`${BOSS_KEY}/S3`]: {
      key: `${BOSS_KEY}/S3`,
      name: "Stage 3: Indignation",
      mechanics: {
        [`${BOSS_KEY}/SP1`]: {
          key: `${BOSS_KEY}/SP1`,
          description: "Shattering Pain 1",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (7 * 60 + 6) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP2`]: {
          key: `${BOSS_KEY}/SP2`,
          description: "Shattering Pain 2",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (7 * 60 + 32) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP3`]: {
          key: `${BOSS_KEY}/SP3`,
          description: "Shattering Pain 3",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (7 * 60 + 54) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP4`]: {
          key: `${BOSS_KEY}/SP4`,
          description: "Shattering Pain 4",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (8 * 60 + 18) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP5`]: {
          key: `${BOSS_KEY}/SP5`,
          description: "Shattering Pain 5",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (8 * 60 + 42) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP6`]: {
          key: `${BOSS_KEY}/SP6`,
          description: "Shattering Pain 6",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (9 * 60 + 8) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP7`]: {
          key: `${BOSS_KEY}/SP7`,
          description: "Shattering Pain 7",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (9 * 60 + 30) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/SP8`]: {
          key: `${BOSS_KEY}/SP8`,
          description: "Shattering Pain 8",
          spell: SPELLS.T26.SIRE_DENATHRIUS.SHATTERING_PAIN,
          trigger: {
            timeMs: (9 * 60 + 54) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/BP1`]: {
          key: `${BOSS_KEY}/BP1`,
          description: "Blood Price 1",
          spell: SPELLS.T26.SIRE_DENATHRIUS.BLOOD_PRICE,
          trigger: {
            timeMs: (7 * 60 + 16) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/BP2`]: {
          key: `${BOSS_KEY}/BP2`,
          description: "Blood Price 2",
          spell: SPELLS.T26.SIRE_DENATHRIUS.BLOOD_PRICE,
          trigger: {
            timeMs: (8 * 60 + 28) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
        [`${BOSS_KEY}/BP3`]: {
          key: `${BOSS_KEY}/BP3`,
          description: "Blood Price 3",
          spell: SPELLS.T26.SIRE_DENATHRIUS.BLOOD_PRICE,
          trigger: {
            timeMs: (9 * 60 + 40) * 1000,
          },
          mitigationFlavors: ["HealingCooldowns"],
        },
      },
    },
  },
};

export default boss;

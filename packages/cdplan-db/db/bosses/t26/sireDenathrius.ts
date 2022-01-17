import { Boss, BossId, BossKey } from "../../types";
import SPELLS from "../../spells";

const BOSS_KEY = "T26/B10";

const boss: Boss = {
  id: 2407 as BossId,
  encounterId: 2407,
  key: BOSS_KEY as BossKey,
  name: "Sire Denathrius",
  slug: "t26/sire-denathrius",
  icon: "achievement_raid_revendrethraid_siredenathrius",
  stages: {
    [`${BOSS_KEY}/S1`]: {
      key: `${BOSS_KEY}/S1`,
      name: "Stage 1: Sinners Be Cleansed",
      slug: "stage-1-sinners-be-cleansed",
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
      name: "Stage 2: The Crimson Chorus",
      slug: "stage-2-the-crimson-chorus",
      mechanics: {
        [`${BOSS_KEY}/GRPA`]: {
          key: `${BOSS_KEY}/GRPA`,
          description: "Group Sinsear/Gloomveil",
          spell: SPELLS.SHARED.GROUPUP,
          trigger: {
            weight: 1000,
          },
          mitigationFlavors: ["PlayerSoak"],
          mitigationOptions: {
            soakGroups: [{ name: "Players", id: 1, isRaidSplit: true }],
          },
        },
        [`${BOSS_KEY}/GRPB`]: {
          key: `${BOSS_KEY}/GRPB`,
          description: "Group Evershade/Duskhollow",
          spell: SPELLS.SHARED.GROUPUP,
          trigger: {
            weight: 1000,
          },
          mitigationFlavors: ["PlayerSoak"],
          mitigationOptions: {
            soakGroups: [{ name: "Players", id: 1, isRaidSplit: true }],
          },
        },
        [`${BOSS_KEY}/SINSEAR`]: {
          key: `${BOSS_KEY}/SINSEAR`,
          description: "Lady Sinsear",
          spell: SPELLS.T26.SIRE_DENATHRIUS.NATHRIAN_HYMN_SINSEAR,
          trigger: {
            timeMs: 195000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst"],
        },
        [`${BOSS_KEY}/EVERSHADE`]: {
          key: `${BOSS_KEY}/EVERSHADE`,
          description: "Lord Evershade",
          spell: SPELLS.T26.SIRE_DENATHRIUS.NATHRIAN_HYMN_EVERSHADE,
          trigger: {
            timeMs: 195000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "PlayerSoak", "Mobility"],
          mitigationOptions: {
            soakGroups: [
              { name: "Skull", id: 1, marker: "SKULL" },
              { name: "Cross", id: 2, marker: "CROSS" },
            ],
          },
        },
        [`${BOSS_KEY}/GLOOMVEIL`]: {
          key: `${BOSS_KEY}/GLOOMVEIL`,
          description: "Countess Gloomveil",
          spell: SPELLS.T26.SIRE_DENATHRIUS.NATHRIAN_HYMN_GLOOMVEIL,
          trigger: {
            timeMs: 240000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst", "Mobility"],
          mitigationOptions: {
            soakGroups: [{ name: "Group", id: 1, isRaidSplit: true }],
          },
        },
        [`${BOSS_KEY}/DUSKHOLLOW`]: {
          key: `${BOSS_KEY}/DUSKHOLLOW`,
          description: "Baron Duskhollow",
          spell: SPELLS.T26.SIRE_DENATHRIUS.NATHRIAN_HYMN_DUSKHOLLOW,
          trigger: {
            timeMs: 240000,
          },
          mitigationFlavors: ["HealingCooldowns", "OffensiveBurst"],
          mitigationOptions: {
            soakGroups: [{ name: "Group", id: 1, isRaidSplit: true }],
          },
        },
        [`${BOSS_KEY}/HOD1`]: {
          key: `${BOSS_KEY}/HOD1`,
          description: "Hand of Destruction",
          spell: SPELLS.T26.SIRE_DENATHRIUS.HAND_OF_DESTRUCTION,
          trigger: {
            timeMs: 230000,
          },
          mitigationFlavors: [],
        },
        [`${BOSS_KEY}/HOD2`]: {
          key: `${BOSS_KEY}/HOD2`,
          description: "Hand of Destruction",
          spell: SPELLS.T26.SIRE_DENATHRIUS.HAND_OF_DESTRUCTION,
          trigger: {
            timeMs: 260000,
          },
          mitigationFlavors: [],
        },
        [`${BOSS_KEY}/HOD3`]: {
          key: `${BOSS_KEY}/HOD3`,
          description: "Hand of Destruction",
          spell: SPELLS.T26.SIRE_DENATHRIUS.HAND_OF_DESTRUCTION,
          trigger: {
            timeMs: 302000,
          },
          mitigationFlavors: [],
        },
        [`${BOSS_KEY}/HOD4`]: {
          key: `${BOSS_KEY}/HOD4`,
          description: "Hand of Destruction",
          spell: SPELLS.T26.SIRE_DENATHRIUS.HAND_OF_DESTRUCTION,
          trigger: {
            timeMs: 345000,
          },
          mitigationFlavors: [],
        },
      },
    },
    [`${BOSS_KEY}/S3`]: {
      key: `${BOSS_KEY}/S3`,
      name: "Stage 3: Indignation",
      slug: "stage-3-indignitation",
      mechanics: {
        [`${BOSS_KEY}/GRPRANGED`]: {
          key: `${BOSS_KEY}/GRPRANGED`,
          description: "Ranged Group",
          spell: SPELLS.SHARED.GROUPUP,
          trigger: {
            weight: 1000,
          },
          mitigationFlavors: ["PlayerSoak"],
          mitigationOptions: {
            soakGroups: [{ name: "Players", id: 1, isRaidSplit: true }],
          },
        },
        [`${BOSS_KEY}/GRPMIRROR`]: {
          key: `${BOSS_KEY}/GRPMIRROR`,
          description: "Mirror Group",
          spell: SPELLS.SHARED.GROUPUP,
          trigger: {
            weight: 1000,
          },
          mitigationFlavors: ["PlayerSoak"],
          mitigationOptions: {
            soakGroups: [{ name: "Players", id: 1, isRaidSplit: true }],
          },
        },
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

const LOGIC_TABLESUB: LogicTable = [
  {
    stageKey: "T27/B10/S1",
    triggers: [{ type: "bossstage", stage: 1 }],
    entries: [
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            comparator: "<",
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            comparator: "<",
            offsetSeconds: 20,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            comparator: "<",
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DOMINATION_CHAINS,
          },
        ],
      },
      {
        // After Chains 2 Activate on Chains
        enable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            comparator: "<",
            offsetSeconds: 14,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["vanish"],
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            comparator: "<",
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        enable: ["vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 10,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },

      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 2,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 14,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["vanish"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            comparator: "<",
            offsetSeconds: 2,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },

      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 4,
            comparator: "<",
            offsetSeconds: 5,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_1,
          },
        ],
      },
      {
        disable: ["dagger"],
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_message",
            message: "Intermission",
          },
        ],
      },
    ],
  },
  {
    stageKey: "T27/B10/S2",
    triggers: [{ type: "bossstage", stage: 2 }],
    entries: [
      {
        enable: ["ALL"],
        triggers: [{ type: "bw_message", message: "Stage 2" }],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 2,
            offsetSeconds: 6,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [{ type: "bw_message", message: "Bridges (2)" }],
      },
      {
        disable: ["cov"],
        onFinish: true,
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 2,
            offsetSeconds: 4,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 4,
            offsetSeconds: 3,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [{ type: "bw_message", message: "Bridges (3)" }],
      },
      {
        disable: ["symbols", "cov", "t"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 6,
            offsetSeconds: 2,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        disable: ["symbols", "cov", "vanish", "t"],
        triggers: [{ type: "bw_message", message: "Bridges (4)" }],
      },
      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 8,
            offsetSeconds: 15,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
      {
        disable: ["ALL"],
        onFinish: true,
        triggers: [
          {
            type: "bw_timer",
            comparator: "<",
            occurence: 8,
            offsetSeconds: 10,
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.HAUNTING_WAVE,
          },
        ],
      },
    ],
  },
  // Phase 3
  {
    stageKey: "T27/B10/S3",
    triggers: [{ type: "bossstage", stage: 3 }],
    entries: [
      {
        enable: ["ALL"],
        disable: ["dagger"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            offsetSeconds: 15,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 15,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 7,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        enable: ["ALL"],
        onFinish: true,
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 10,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["symbols", "dagger", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 20,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
          },
        ],
      },
      {
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 7,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.BANE_ARROWS,
          },
        ],
      },
      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 5,
            offsetSeconds: 45,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 10,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 4,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.VEIL_OF_DARKNESS_STAGE_2_3,
          },
        ],
      },
      {
        enable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 30,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      {
        disable: ["dance"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 25,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      {
        enable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 6,
            offsetSeconds: 19,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      // ---
      {
        disable: ["dance", "symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            offsetSeconds: 2,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          },
        ],
      },
      {
        enable: ["dance", "symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 1,
            offsetSeconds: 8,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
      {
        disable: ["dance", "symbols", "cov", "dagger", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 2,
            offsetSeconds: 2,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          },
        ],
      },
      {
        enable: ["dance", "symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 17,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.DEATH_KNIVES,
          },
        ],
      },
      {
        disable: ["ALL"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 3,
            offsetSeconds: 2,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.RAZE,
          },
        ],
      },
      {
        enable: ["dance", "symbols", "cov", "vanish", "t"],
        triggers: [
          {
            type: "bw_timer",
            occurence: 4,
            offsetSeconds: 9,
            comparator: "<",
            spell: SPELLS.T27.SYLVANAS_WINDRUNNER.WAILING_ARROW,
          },
        ],
      },
    ],
  },
];

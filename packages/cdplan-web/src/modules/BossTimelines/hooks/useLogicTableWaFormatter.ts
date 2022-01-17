import {
  LogicEntry,
  LogicTrigger,
  LogicTriggerBossStage,
  LogicTriggerBwMessage,
  LogicTriggerBwTimer,
  LogicTriggerHealthPct,
  triggerIsBossStage,
  triggerIsBwMessage,
  triggerIsBwTimer,
  triggerIsHealthPct,
  WaTemplateOpts,
} from "@BossTimelines/types";
import getBossMechanicForBwTimerTrigger from "@BossTimelines/utils/getBossMechanicForBwTimerTrigger";
import { Boss } from "@dbc/types";

const waBwTimerTriggerTemplate = (boss: Boss, stageKey: string, trigger: LogicTriggerBwTimer) => {
  const mechanic = getBossMechanicForBwTimerTrigger(boss, stageKey, trigger);
  return `
    {
      ["trigger"] = {
        ["event"] = "BigWigs Timer",
        ["subeventSuffix"] = "_CAST_START",
        ["text"] = "${mechanic?.description ?? "UNKNOWN"}",
        ["use_text"] = true,
        ["unit"] = "player",
        ["type"] = "addons",
        ["use_remaining"] = true,
        ["remaining"] = "${trigger.offsetSeconds}",
        ["remaining_operator"] = "${trigger.comparator}",
        ["spellIds"] = {},
        ["names"] = {},
        ["subeventPrefix"] = "SPELL",
        ["text_operator"] = "find('%s')",
        ["debuffType"] = "HELPFUL",
      },
      ["untrigger"] = {
      },
    }
  `;
};

const waBwMessageTriggerTemplate = (trigger: LogicTriggerBwMessage) => {
  return `
    {
      ["trigger"] = {
        ["type"] = "addons",
        ["subeventSuffix"] = "_CAST_START",
        ["text"] = "${trigger.message}",
        ["event"] = "BigWigs Message",
        ["subeventPrefix"] = "SPELL",
        ["duration"] = "3",
        ["use_addon"] = false,
        ["spellIds"] = {},
        ["unit"] = "player",
        ["use_text"] = true,
        ["names"] = {},
        ["text_operator"] = "find('%s')",
        ["debuffType"] = "HELPFUL",
      },
      ["untrigger"] = {},
    }
  `;
};

const waHealthPctTriggerTemplate = (trigger: LogicTriggerHealthPct) => {
  return `
    {
      ["trigger"] = {
          ["type"] = "unit",
          ["use_health"] = false,
          ["health_operator"] = ">",
          ["use_absorbMode"] = true,
          ["event"] = "Health",
          ["unit"] = "boss1",
          ["use_specific_unit"] = true,
          ["percenthealth"] = "${trigger.healthPct}",
          ["use_absorbHealMode"] = true,
          ["use_unit"] = true,
          ["use_percenthealth"] = true,
          ["percenthealth_operator"] = "${trigger.comparator}",
          ["debuffType"] = "HELPFUL",
      },
      ["untrigger"] = {},
    }
  `;
};

const waBossStageTriggerTemplate = (trigger: LogicTriggerBossStage) => {
  return `
    {
      ["trigger"] = {
        ["duration"] = "3",
        ["unit"] = "player",
        ["use_stage"] = true,
        ["text_operator"] = "find('%s')",
        ["debuffType"] = "HELPFUL",
        ["use_addon"] = false,
        ["subeventSuffix"] = "_CAST_START",
        ["text"] = "",
        ["use_text"] = false,
        ["event"] = "BigWigs Stage",
        ["use_spellId"] = false,
        ["spellIds"] = {},
        ["stage_operator"] = "==",
        ["type"] = "addons",
        ["names"] = {},
        ["stage"] = "${trigger.stage}",
        ["subeventPrefix"] = "SPELL",
      },
      ["untrigger"] = {},
    }
  `;
};

const waTriggerTemplate = (boss: Boss, stageKey: string, trigger: LogicTrigger) => {
  if (triggerIsBossStage(trigger)) {
    return waBossStageTriggerTemplate(trigger);
  }
  if (triggerIsHealthPct(trigger)) {
    return waHealthPctTriggerTemplate(trigger);
  }
  if (triggerIsBwMessage(trigger)) {
    return waBwMessageTriggerTemplate(trigger);
  }
  if (triggerIsBwTimer(trigger)) {
    return waBwTimerTriggerTemplate(boss, stageKey, trigger);
  }
  return undefined;
};

const waActionsTemplate = (stageEvent: LogicEntry) => {
  const actions = [];
  if (stageEvent.enable) {
    actions.push(`HeroRotation:SetFlags('${stageEvent.enable.join(",")}')`);
  }
  if (stageEvent.disable) {
    actions.push(`HeroRotation:UnsetFlags('${stageEvent.disable.join(",")}')`);
  }

  if (stageEvent.onFinish === true) {
    return `
      ["start"] = {},
      ["finish"] = {
        ["do_custom"] = true,
        ["custom"] = "${actions.join(";")}",
      }
    `;
  }
  return `
    ["start"] = {
      ["do_custom"] = true,
      ["custom"] = "${actions.join(";")}",
    },
    ["finish"] = {}
  `;
};

const waTemplate = (opts: WaTemplateOpts) => `
["${opts.name}"] = {
    ["iconSource"] = 0,
    ["xOffset"] = 160.0003662109375,
    ["yOffset"] = -171.9998779296875,
    ["anchorPoint"] = "CENTER",
    ["cooldownSwipe"] = true,
    ["cooldownEdge"] = false,
    ["icon"] = true,
    ["triggers"] = {
        ${opts.stageEvent.triggers
          .map((trigger) => waTriggerTemplate(opts.boss, opts.stageKey, trigger))
          .filter(Boolean)
          .join(",")},
        ["disjunctive"] = "all",
        ["activeTriggerMode"] = -10,
    },
    ["internalVersion"] = 45,
    ["keepAspectRatio"] = false,
    ["selfPoint"] = "CENTER",
    ["desaturate"] = false,
    ["subRegions"] = {
        {
            ["text_shadowXOffset"] = 0,
            ["text_text_format_s_format"] = "none",
            ["text_text"] = "%s",
            ["text_shadowColor"] = {
                0, -- [1]
                0, -- [2]
                0, -- [3]
                1, -- [4]
            },
            ["text_selfPoint"] = "AUTO",
            ["text_automaticWidth"] = "Auto",
            ["text_fixedWidth"] = 64,
            ["anchorYOffset"] = 0,
            ["text_justify"] = "CENTER",
            ["rotateText"] = "NONE",
            ["type"] = "subtext",
            ["text_color"] = {
                1, -- [1]
                1, -- [2]
                1, -- [3]
                1, -- [4]
            },
            ["text_font"] = "Friz Quadrata TT",
            ["text_shadowYOffset"] = 0,
            ["text_wordWrap"] = "WordWrap",
            ["text_visible"] = false,
            ["text_anchorPoint"] = "INNER_BOTTOMRIGHT",
            ["text_fontSize"] = 11,
            ["anchorXOffset"] = 0,
            ["text_fontType"] = "OUTLINE",
        }, -- [1]
        {
            ["glowFrequency"] = 0.25,
            ["type"] = "subglow",
            ["glowXOffset"] = 0,
            ["glowType"] = "buttonOverlay",
            ["glowLength"] = 10,
            ["glowYOffset"] = 0,
            ["glowColor"] = {
                1, -- [1]
                1, -- [2]
                1, -- [3]
                1, -- [4]
            },
            ["useGlowColor"] = false,
            ["glow"] = false,
            ["glowThickness"] = 1,
            ["glowScale"] = 1,
            ["glowLines"] = 8,
            ["glowBorder"] = false,
        }, -- [2]
    },
    ["height"] = 28,
    ["load"] = {
        ["difficulty"] = {
            ["single"] = "mythic",
        },
        ["size"] = {
            ["multi"] = {
            },
        },
        ["spec"] = {
            ["multi"] = {
            },
        },
        ["talent"] = {
            ["multi"] = {
            },
        },
        ["class"] = {
            ["multi"] = {
            },
        },
        ["encounterid"] = "${opts.boss.encounterId}",
        ["use_difficulty"] = true,
        ["use_encounterid"] = true,
    },
    ["regionType"] = "icon",
    ["information"] = {
    },
    ["cooldownTextDisabled"] = false,
    ["actions"] = {
        ${waActionsTemplate(opts.stageEvent)},
        ["init"] = {
        },
    },
    ["conditions"] = {
    },
    ["alpha"] = 1,
    ["zoom"] = 0.3,
    ["animation"] = {
        ["start"] = {
            ["easeStrength"] = 3,
            ["type"] = "none",
            ["duration_type"] = "seconds",
            ["easeType"] = "none",
        },
        ["main"] = {
            ["type"] = "none",
            ["easeType"] = "none",
            ["duration_type"] = "seconds",
            ["easeStrength"] = 3,
            ["preset"] = "alphaPulse",
        },
        ["finish"] = {
            ["easeStrength"] = 3,
            ["type"] = "none",
            ["duration_type"] = "seconds",
            ["easeType"] = "none",
        },
    },
    ["uid"] = "${opts.uid}",
    ["id"] = "${opts.name}",
    ["width"] = 28,
    ["frameStrata"] = 1,
    ["anchorFrameType"] = "SCREEN",
    ["color"] = {
        1, -- [1]
        1, -- [2]
        1, -- [3]
        1, -- [4]
    },
    ["config"] = {
    },
    ["inverse"] = false,
    ["authorOptions"] = {
    },
    ["displayIcon"] = 136125,
    ["cooldown"] = false,
    ["parent"] = "${opts.parentName}",
}
`;

const mainTemplate = (parentName: string, childrenNames: string[]) => `
["${parentName}"] = {
    ["backdropColor"] = {
        1, -- [1]
        1, -- [2]
        1, -- [3]
        0.5, -- [4]
    },
    ["controlledChildren"] = { ${childrenNames.map((name) => `"${name}"`).join(", ")}
    },
    ["borderBackdrop"] = "Blizzard Tooltip",
    ["authorOptions"] = {
    },
    ["xOffset"] = 0,
    ["borderInset"] = 1,
    ["border"] = false,
    ["yOffset"] = 0,
    ["anchorPoint"] = "CENTER",
    ["borderSize"] = 2,
    ["borderColor"] = {
        0, -- [1]
        0, -- [2]
        0, -- [3]
        1, -- [4]
    },
    ["information"] = {
    },
    ["actions"] = {
        ["start"] = {
        },
        ["finish"] = {
        },
        ["init"] = {
        },
    },
    ["triggers"] = {
        {
            ["trigger"] = {
                ["debuffType"] = "HELPFUL",
                ["type"] = "aura2",
                ["spellIds"] = {
                },
                ["subeventSuffix"] = "_CAST_START",
                ["unit"] = "player",
                ["names"] = {
                },
                ["event"] = "Health",
                ["subeventPrefix"] = "SPELL",
            },
            ["untrigger"] = {
            },
        }, -- [1]
    },
    ["animation"] = {
        ["start"] = {
            ["easeStrength"] = 3,
            ["type"] = "none",
            ["duration_type"] = "seconds",
            ["easeType"] = "none",
        },
        ["main"] = {
            ["easeStrength"] = 3,
            ["type"] = "none",
            ["duration_type"] = "seconds",
            ["easeType"] = "none",
        },
        ["finish"] = {
            ["easeStrength"] = 3,
            ["type"] = "none",
            ["duration_type"] = "seconds",
            ["easeType"] = "none",
        },
    },
    ["borderOffset"] = 4,
    ["borderEdge"] = "Square Full White",
    ["selfPoint"] = "CENTER",
    ["id"] = "${parentName}",
    ["regionType"] = "group",
    ["frameStrata"] = 1,
    ["anchorFrameType"] = "SCREEN",
    ["scale"] = 1,
    ["uid"] = "ZUftiqDacP1",
    ["internalVersion"] = 45,
    ["subRegions"] = {
    },
    ["conditions"] = {
    },
    ["load"] = {
        ["talent"] = {
            ["multi"] = {
            },
        },
        ["spec"] = {
            ["multi"] = {
            },
        },
        ["class"] = {
            ["multi"] = {
            },
        },
        ["size"] = {
            ["multi"] = {
            },
        },
    },
    ["config"] = {
    },
}
`;

export default function useLogictTableWaFormatter(waName: string, templateOpts: WaTemplateOpts[]): string {
  const childNames = templateOpts.map((opts) => opts.name);
  const templates = templateOpts.map(waTemplate);

  return [mainTemplate(waName, childNames), ...templates].join(",");
}

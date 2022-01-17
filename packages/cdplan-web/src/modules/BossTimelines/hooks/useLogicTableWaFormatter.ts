import { WaMessageTemplateOpts, WaTemplateOpts, WaTimerTemplateOpts } from "@BossTimelines/types";

const waMessageTemplate = (opts: WaMessageTemplateOpts) => `
["${opts.name}"] = {
    ["iconSource"] = 0,
    ["xOffset"] = 160.0003662109375,
    ["yOffset"] = -171.9998779296875,
    ["anchorPoint"] = "CENTER",
    ["cooldownSwipe"] = true,
    ["cooldownEdge"] = false,
    ["icon"] = true,
    ["triggers"] = {
        {
            ["trigger"] = {
              ["use_remaining"] = true,
              ["event"] = "BigWigs Message",
              ["subeventSuffix"] = "_CAST_START",
              ["text"] = "${opts.messageContains}",
              ["use_text"] = true,
              ["type"] = "addons",
              ["duration"] = "1",
              ["unit"] = "player",
              ["remaining_operator"] = "<",
              ["remaining"] = "1",
              ["spellIds"] = {
              },
              ["subeventPrefix"] = "SPELL",
              ["names"] = {
              },
              ["text_operator"] = "find('%s')",
              ["debuffType"] = "HELPFUL",
            },
            ["untrigger"] = {
            },
        }, -- [1]
        {
            ["trigger"] = {
                ["type"] = "unit",
                ["use_health"] = false,
                ["health_operator"] = ">",
                ["use_absorbMode"] = true,
                ["event"] = "Health",
                ["unit"] = "boss1",
                ["use_specific_unit"] = true,
                ["percenthealth"] = "${opts.health}",
                ["use_absorbHealMode"] = true,
                ["use_unit"] = true,
                ["use_percenthealth"] = true,
                ["percenthealth_operator"] = "${opts.healthOperator}",
                ["debuffType"] = "HELPFUL",
            },
            ["untrigger"] = {
            },
        }, -- [2]
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
        ["encounterid"] = "${opts.encounterId}",
        ["use_difficulty"] = true,
        ["use_encounterid"] = true,
    },
    ["regionType"] = "icon",
    ["information"] = {
    },
    ["cooldownTextDisabled"] = false,
    ["actions"] = {
        ["start"] = {
            ["do_custom"] = true,
            ["custom"] = "${opts.action}",
        },
        ["finish"] = {
        },
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

const waTimerTemplate = (opts: WaTimerTemplateOpts) => `
["${opts.name}"] = {
    ["iconSource"] = 0,
    ["xOffset"] = 160.0003662109375,
    ["yOffset"] = -171.9998779296875,
    ["anchorPoint"] = "CENTER",
    ["cooldownSwipe"] = true,
    ["cooldownEdge"] = false,
    ["icon"] = true,
    ["triggers"] = {
        {
            ["trigger"] = {
              ["use_remaining"] = true,
              ["event"] = "BigWigs Timer",
              ["subeventSuffix"] = "_CAST_START",
              ["text"] = "${opts.messageContains}",
              ["use_text"] = true,
              ["unit"] = "player",
              ["type"] = "addons",
              ["remaining"] = "${opts.triggerRemaining}",
              ["spellIds"] = {
              },
              ["remaining_operator"] = "<",
              ["names"] = {
              },
              ["subeventPrefix"] = "SPELL",
              ["text_operator"] = "find('%s')",
              ["debuffType"] = "HELPFUL",
            },
            ["untrigger"] = {
            },
        }, -- [1]
        {
            ["trigger"] = {
                ["type"] = "unit",
                ["use_health"] = false,
                ["health_operator"] = ">",
                ["use_absorbMode"] = true,
                ["event"] = "Health",
                ["unit"] = "boss1",
                ["use_specific_unit"] = true,
                ["percenthealth"] = "${opts.health}",
                ["use_absorbHealMode"] = true,
                ["use_unit"] = true,
                ["use_percenthealth"] = true,
                ["percenthealth_operator"] = "${opts.healthOperator}",
                ["debuffType"] = "HELPFUL",
            },
            ["untrigger"] = {
            },
        }, -- [2]
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
        ["encounterid"] = "${opts.encounterId}",
        ["use_difficulty"] = true,
        ["use_encounterid"] = true,
    },
    ["regionType"] = "icon",
    ["information"] = {
    },
    ["cooldownTextDisabled"] = false,
    ["actions"] = {
        ["start"] = {${opts.startAction ? `["do_custom"] = true, ["custom"] = "${opts.startAction}",` : ""}},
        ["finish"] = {${opts.finishAction ? `["do_custom"] = true, ["custom"] = "${opts.finishAction}",` : ""}},
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
    ["controlledChildren"] = { ${childrenNames.join(", ")}
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
  const templates = templateOpts.map((opts) => {
    if (opts.type === "message") {
      return waMessageTemplate(opts);
    }
    return waTimerTemplate(opts);
  });

  return [mainTemplate(waName, childNames), ...templates].join(",");
}

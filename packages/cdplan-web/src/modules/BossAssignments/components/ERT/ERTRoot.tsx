import React from "react";
import sortMechanics from "@cdplan/db/db/utils/sortMechanics";
import { DBC, MitigationDB, RaidCooldown, RaidCooldownId, RosterCharacter, SoakDB } from "types";
import ERTMechanic from "./ERTMechanic";
import ERTNewline from "./ERTNewline";
import ERTSpell from "./ERTSpell";

interface ERTRootProps {
  boss: DBC.Boss;
  raidCooldowns: RaidCooldown[];
  mitigations: MitigationDB<RaidCooldownId[]>;
  soaks: SoakDB;
  roster: RosterCharacter[];
}

export default function ERTRoot({ boss, raidCooldowns, mitigations, soaks, roster }: ERTRootProps) {
  return (
    <>
      {Object.values(boss.stages).map((stage) => (
        <>
          {sortMechanics(stage.mechanics).map((mechanic) => {
            if ("title" in mechanic) {
              return (
                <>
                  {mechanic.title}
                  <ERTNewline />
                </>
              );
            }
            return (
              <>
                <ERTSpell spellId={mechanic.spell.id} /> {mechanic.description}
                <ERTNewline />
                {mitigations[mechanic.key] || soaks[mechanic.key] ? (
                  <ERTMechanic
                    key={mechanic.key}
                    mechanic={mechanic}
                    raidCooldowns={raidCooldowns}
                    mitigations={mitigations[mechanic.key] || {}}
                    soaks={soaks[mechanic.key] || {}}
                    roster={roster}
                  />
                ) : null}
                <ERTNewline />
              </>
            );
          })}
        </>
      ))}
    </>
  );
}

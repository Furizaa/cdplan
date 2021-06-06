import React from "react";
import { DBC, RaidCooldown, RaidCooldownId, RosterCharacter, RosterCharacterId } from "types";
import ERTCooldown from "./ERTCooldown";
import ERTMechanicTrigger from "./ERTMechanicTrigger";
import ERTNewline from "./ERTNewline";
import ERTPlayer from "./ERTPlayer";

interface ERTMechanicProps {
  mechanic: DBC.BossMechanic;
  raidCooldowns: RaidCooldown[];
  mitigations: Partial<Record<DBC.MechanicMitigationFlavor, RaidCooldownId[]>>;
  soaks: Record<number, RosterCharacterId[]>;
  roster: RosterCharacter[];
}

const getMitigationCooldowns = (
  mitigations: Partial<Record<DBC.MechanicMitigationFlavor, RaidCooldownId[]>>,
  raidCooldowns: RaidCooldown[],
  flavor: DBC.MechanicMitigationFlavor
) => {
  return mitigations[flavor]?.map((cdId) => raidCooldowns.find((cd) => cd.id === cdId)).filter(Boolean);
};

export default function ERTMechanic({ mechanic, raidCooldowns, mitigations, soaks, roster }: ERTMechanicProps) {
  const healingCooldowns = getMitigationCooldowns(mitigations, raidCooldowns, "HealingCooldowns") || [];
  const burstCooldowns = getMitigationCooldowns(mitigations, raidCooldowns, "OffensiveBurst") || [];
  const mobilityCooldowns = getMitigationCooldowns(mitigations, raidCooldowns, "Mobility");

  const combinedCooldowns = [...healingCooldowns, ...burstCooldowns];
  return (
    <>
      {combinedCooldowns.length ? (
        <>
          <ERTMechanicTrigger mechanic={mechanic} />{" "}
          {combinedCooldowns.map(
            (cooldown) =>
              cooldown && (
                <>
                  <ERTCooldown cooldown={cooldown} />{" "}
                </>
              )
          )}
          <ERTNewline />
        </>
      ) : null}
      {mobilityCooldowns && (
        <>
          <ERTMechanicTrigger mechanic={mechanic} />{" "}
          {mobilityCooldowns.map(
            (cooldown) =>
              cooldown && (
                <>
                  <ERTCooldown cooldown={cooldown} />{" "}
                </>
              )
          )}
          <ERTNewline />
        </>
      )}
      {Object.entries(soaks).map(([groupIndex, group]) => {
        const index = parseInt(groupIndex, 10);
        return (
          <>
            {`<${index + 1}>`}{" "}
            {roster
              .filter((char) => group.includes(char.id))
              .map((char) => (
                <>
                  <ERTPlayer name={char.name} pClass={char.pclass} key={char.id} />{" "}
                </>
              ))}
            <ERTNewline />
          </>
        );
      })}
    </>
  );
}

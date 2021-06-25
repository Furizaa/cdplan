import React, { useCallback, useState } from "react";
import useBossStore from "@BossAssignments/store/useBossStore";
import { DBC, RaidCooldown, RosterCharacter } from "types";
import AssignmentModalSelectCharacter from "@BossAssignments/components/AssignmentModalSelectCharacter";
import AssignmentModalSelectCooldown from "@BossAssignments/components/AssignmentModalSelectCooldown";
import BossTableStage from "./BossTableStage";

interface BossProps {
  boss: DBC.Boss;
  stageKey: string;
  renderMechanicValidation?: (mechanic: DBC.BossMechanic) => React.ReactNode;
}

interface StagedMitigation {
  mechanic: DBC.BossMechanic;
  flavor: DBC.MechanicMitigationFlavor;
}

interface StagedSoak {
  mechanic: DBC.BossMechanic;
  groupSoakIndex: number;
}

export default function Boss({ boss, stageKey, renderMechanicValidation }: BossProps) {
  const [stagedMechanicSlot, setStagedMechanicSlot] = useState<StagedMitigation | undefined>();
  const [stagedSoak, setStagedSoak] = useState<StagedSoak | undefined>();
  const [addMechanicMitigation, addSoak] = useBossStore(
    useCallback((store) => [store.addMitigation, store.addSoak], [])
  );

  const handleSelectMitigation = (cooldown: RaidCooldown) => {
    if (stagedMechanicSlot) {
      addMechanicMitigation(stagedMechanicSlot.mechanic.key, stagedMechanicSlot.flavor, cooldown.id);
      setStagedMechanicSlot(undefined);
    }
  };

  const handleSelectSoak = (character: RosterCharacter) => {
    if (stagedSoak) {
      addSoak(stagedSoak.mechanic.key, stagedSoak.groupSoakIndex, character.id);
      setStagedSoak(undefined);
    }
  };

  const handleQueryMechanicMitigation = (mechanic: DBC.BossMechanic, flavor: DBC.MechanicMitigationFlavor) => {
    setStagedMechanicSlot({
      mechanic,
      flavor,
    });
  };

  const handleQueryMechanicSoak = (mechanic: DBC.BossMechanic, groupSoakIndex: number) => {
    setStagedSoak({
      mechanic,
      groupSoakIndex,
    });
  };

  return (
    <>
      {stagedMechanicSlot && (
        <AssignmentModalSelectCooldown
          isOpen={Boolean(stagedMechanicSlot)}
          onClose={() => setStagedMechanicSlot(undefined)}
          flavor={stagedMechanicSlot?.flavor ?? "Other"}
          onSelect={handleSelectMitigation}
          mechanicKey={stagedMechanicSlot.mechanic.key}
        />
      )}
      <AssignmentModalSelectCharacter
        isOpen={Boolean(stagedSoak)}
        onClose={() => setStagedSoak(undefined)}
        onSelect={handleSelectSoak}
        mechanicKey={stagedSoak?.mechanic.key ?? "_unknown"}
        isSplitMechanic={
          stagedSoak?.mechanic?.mitigationOptions?.soakGroups?.find((grp) => grp.id === stagedSoak.groupSoakIndex)
            ?.isRaidSplit ?? false
        }
      />
      <BossTableStage
        stage={boss.stages[stageKey]}
        onQueryMechanicMitigation={handleQueryMechanicMitigation}
        onQueryMechanikSoak={handleQueryMechanicSoak}
        renderMechanicValidation={renderMechanicValidation}
      />
    </>
  );
}

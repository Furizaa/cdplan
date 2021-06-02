import Layout from "@BossAssignments/components/Layout";
import React, { useCallback, useState } from "react";
import { BOSSES, SPELLS } from "@cdplan/db";
import BossTable from "@BossAssignments/components/BossTable";
import AssignmentModalSelectSpell from "@BossAssignments/components/AssignmentModalSelectSpell";
import useBossStore from "@BossAssignments/store/useBossStore";
import { DBC, RaidCooldown, RosterCharacter } from "types";
import AssignmentModalSelectCharacter from "@BossAssignments/components/AssignmentModalSelectCharacter";
import T26B10CleansingPain from "@BossAssignments/components/MechanicValidation/T26B10CleansingPain";
import BossTableMenuActions from "@BossAssignments/components/BossTableMenuActions";

const BOSS = BOSSES.T26.SIRE_DENATHRIUS;

interface StagedMitigation {
  mechanic: DBC.BossMechanic;
  flavor: DBC.MechanicMitigationFlavor;
}

interface StagedSoak {
  mechanic: DBC.BossMechanic;
  groupSoakIndex: number;
}

export default function Home() {
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
    <Layout heading={BOSS.name} gameIcon={BOSS.icon} menu={<BossTableMenuActions boss={BOSS} />}>
      <AssignmentModalSelectSpell
        isOpen={Boolean(stagedMechanicSlot)}
        onClose={() => setStagedMechanicSlot(undefined)}
        flavor={stagedMechanicSlot?.flavor ?? "Other"}
        onSelect={handleSelectMitigation}
      />
      <AssignmentModalSelectCharacter
        isOpen={Boolean(stagedSoak)}
        onClose={() => setStagedSoak(undefined)}
        onSelect={handleSelectSoak}
        mechanicKey={stagedSoak?.mechanic.key ?? "_unknown"}
      />
      <BossTable
        boss={BOSS}
        onQueryMechanicMitigation={handleQueryMechanicMitigation}
        onQueryMechanikSoak={handleQueryMechanicSoak}
        renderMechanicValidation={(mechanic) => {
          if (mechanic.spell.id === SPELLS.T26.SIRE_DENATHRIUS.CLEANSING_PAIN.id) {
            return <T26B10CleansingPain mechanicKey={mechanic.key} />;
          }
          return null;
        }}
      />
    </Layout>
  );
}

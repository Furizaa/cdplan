import React from "react";
import { Box } from "@chakra-ui/layout";
import { DBC } from "types";
import BossTableStage from "./BossTableStage";

interface BossTableProps {
  boss: DBC.Boss;
  onQueryMechanicMitigation?: (mechanic: DBC.BossMechanic, flavor: DBC.MechanicMitigationFlavor) => void;
  onQueryMechanikSoak?: (mechanic: DBC.BossMechanic, groupSoakIndex: number) => void;
  renderMechanicValidation?: (mechanic: DBC.BossMechanic) => React.ReactNode;
}

export default function BossTable({
  boss,
  onQueryMechanicMitigation,
  onQueryMechanikSoak,
  renderMechanicValidation,
}: BossTableProps) {
  const handleQueryMechanicMitigation = (mechanic: DBC.BossMechanic, flavor: DBC.MechanicMitigationFlavor) => {
    if (onQueryMechanicMitigation) {
      onQueryMechanicMitigation(mechanic, flavor);
    }
  };

  const handleQueryMechanicSoak = (mechanic: DBC.BossMechanic, groupSoakIndex: number) => {
    if (onQueryMechanikSoak) {
      onQueryMechanikSoak(mechanic, groupSoakIndex);
    }
  };

  return (
    <Box>
      {Object.values(boss.stages).map((stage) => (
        <BossTableStage
          key={stage.key}
          stage={stage}
          onQueryMechanicMitigation={handleQueryMechanicMitigation}
          onQueryMechanikSoak={handleQueryMechanicSoak}
          renderMechanicValidation={renderMechanicValidation}
        />
      ))}
    </Box>
  );
}

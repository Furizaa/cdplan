import React from "react";
import { Box } from "@chakra-ui/layout";
import { DBC } from "types";
import { BossMechanic, MechanicMitigationFlavor } from "@dbc/types";
import BossTableStage from "./BossTableStage";

interface BossTableProps {
  boss: DBC.Boss;
  onQueryMechanicMitigation?: (mechanic: BossMechanic, flavor: MechanicMitigationFlavor) => void;
  onQueryMechanikSoak?: (mechanic: BossMechanic, groupSoakIndex: number) => void;
}

export default function BossTable({ boss, onQueryMechanicMitigation, onQueryMechanikSoak }: BossTableProps) {
  const handleQueryMechanicMitigation = (mechanic: BossMechanic, flavor: MechanicMitigationFlavor) => {
    if (onQueryMechanicMitigation) {
      onQueryMechanicMitigation(mechanic, flavor);
    }
  };

  const handleQueryMechanicSoak = (mechanic: BossMechanic, groupSoakIndex: number) => {
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
        />
      ))}
    </Box>
  );
}

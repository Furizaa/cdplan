import React, { PropsWithChildren, useCallback } from "react";
import { DBC } from "types";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import useBossStore from "@BossAssignments/store/useBossStore";
import { BossMechanic, MechanicMitigationFlavor } from "@dbc/types";
import { Box, HStack } from "@chakra-ui/layout";
import AssignmentMitigationCard from "./AssignmentMitigationSpellCard";
import AssignmentMitigationCardEmpty from "./AssignmentMitigationCardEmpty";

interface AssignmentSlotsSkillProps {
  mechanic: DBC.BossMechanic;
  flavor: MechanicMitigationFlavor;
  onQueryMechanicMitigation?: (mechanic: BossMechanic) => void;
}

export default function AssignmentSlotsSkill({
  mechanic,
  flavor,
  onQueryMechanicMitigation,
  children,
}: PropsWithChildren<AssignmentSlotsSkillProps>) {
  const cooldowns = useRosterStore(useCallback((store) => store.getCooldowns(flavor), [flavor]));
  const mitigations = useBossStore(useCallback((store) => store.combineMitigationsToCooldowns(cooldowns), [cooldowns]));

  const handleQueryMechanicMitigation = () => {
    if (onQueryMechanicMitigation) {
      onQueryMechanicMitigation(mechanic);
    }
  };

  return (
    <HStack justify="start" width="100%">
      <Box minWidth="28px" d="flex" justifyContent="center" alignItems="center" height="100%">
        <Box>{children}</Box>
      </Box>
      {mitigations[mechanic.key]?.map((mt, index) => (
        <>
          <AssignmentMitigationCard mitigation={mt} />
          {index === mitigations[mechanic.key].length - 1 && (
            <AssignmentMitigationCardEmpty flavor={flavor} onClick={handleQueryMechanicMitigation} condensed />
          )}
        </>
      ))}
      {!mitigations[mechanic.key] || !mitigations[mechanic.key].length ? (
        <AssignmentMitigationCardEmpty flavor={flavor} onClick={handleQueryMechanicMitigation} />
      ) : null}
    </HStack>
  );
}

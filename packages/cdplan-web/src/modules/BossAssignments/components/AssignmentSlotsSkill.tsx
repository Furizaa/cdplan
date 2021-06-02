import React, { PropsWithChildren, useCallback } from "react";
import { DBC } from "types";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import useBossStore from "@BossAssignments/store/useBossStore";
import { Box, Grid, HStack } from "@chakra-ui/layout";
import AssignmentMitigationCard from "./AssignmentMitigationSpellCard";
import AssignmentMitigationCardEmpty from "./AssignmentMitigationCardEmpty";

interface AssignmentSlotsSkillProps {
  mechanic: DBC.BossMechanic;
  flavor: DBC.MechanicMitigationFlavor;
  onQueryMechanicMitigation?: (mechanic: DBC.BossMechanic) => void;
}

export default function AssignmentSlotsSkill({
  mechanic,
  flavor,
  onQueryMechanicMitigation,
  children,
}: PropsWithChildren<AssignmentSlotsSkillProps>) {
  const availableRaidCooldowns = useRosterStore(useCallback((store) => store.getCooldowns(flavor), [flavor]));
  const [cooldowns, removeMitigation] = useBossStore(
    useCallback((store) => [store.getCooldowns(availableRaidCooldowns, mechanic.key, flavor), store.removeMitigation], [
      availableRaidCooldowns,
      mechanic,
      flavor,
    ])
  );

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
      <Grid templateColumns="repeat(4, 120px)" columnGap={2} rowGap={1}>
        {cooldowns.map((mt, index) => (
          <>
            <AssignmentMitigationCard
              key={mt.id}
              mitigation={mt}
              onClick={() => removeMitigation(mechanic.key, flavor, mt.id)}
            />
            {index === cooldowns.length - 1 && (
              <AssignmentMitigationCardEmpty
                key="_empty"
                flavor={flavor}
                onClick={handleQueryMechanicMitigation}
                condensed
              />
            )}
          </>
        ))}
        {!cooldowns || !cooldowns.length ? (
          <AssignmentMitigationCardEmpty flavor={flavor} onClick={handleQueryMechanicMitigation} />
        ) : null}
      </Grid>
    </HStack>
  );
}

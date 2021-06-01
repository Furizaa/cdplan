import React, { PropsWithChildren, useCallback } from "react";
import { DBC } from "types";
import useBossStore from "@BossAssignments/store/useBossStore";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import { Box, HStack } from "@chakra-ui/layout";
import AssignmentMitigationCardEmpty from "./AssignmentMitigationCardEmpty";
import AssignmentMitigationSoakCard from "./AssignmentMitigationSoakCard";

interface AssignmentSlotsCharacterProps {
  mechanic: DBC.BossMechanic;
  groupSoakIndex: number;
  onQueryMechanicSoak?: (mechanic: DBC.BossMechanic, soakGroupIndex: number) => void;
}

export default function AssignmentSlotsCharacter({
  mechanic,
  groupSoakIndex,
  onQueryMechanicSoak,
  children,
}: PropsWithChildren<AssignmentSlotsCharacterProps>) {
  const characters = useRosterStore(useCallback((store) => store.getAllGroupCharacters(), []));
  const [soaks, removeSoak] = useBossStore(useCallback((store) => [store.getSoaks(), store.removeSoak], []));

  const handleQueryMechanicSoak = () => {
    if (onQueryMechanicSoak) {
      onQueryMechanicSoak(mechanic, groupSoakIndex);
    }
  };

  const soaksForMechanicAndGroup = soaks?.[mechanic.key]?.[groupSoakIndex] ?? [];
  const soakers = characters.filter((char) => soaksForMechanicAndGroup.includes(char.id));

  return (
    <HStack justify="start" width="100%">
      <Box minWidth="28px" d="flex" justifyContent="center" alignItems="center" height="100%">
        <Box>{children}</Box>
      </Box>
      {soakers.map((soak, index) => (
        <>
          <AssignmentMitigationSoakCard
            character={soak}
            onClick={() => removeSoak(mechanic.key, groupSoakIndex, soak.id)}
            key={soak.id}
          />
          {index === soakers.length - 1 && (
            <AssignmentMitigationCardEmpty
              key="_empty"
              flavor="PlayerSoak"
              onClick={handleQueryMechanicSoak}
              condensed
            />
          )}
        </>
      ))}
      {!soakers.length ? <AssignmentMitigationCardEmpty flavor="PlayerSoak" onClick={handleQueryMechanicSoak} /> : null}
    </HStack>
  );
}

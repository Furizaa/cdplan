import useRosterStore from "@BossAssignments/store/useRosterStore";
import { Grid } from "@chakra-ui/layout";
import React, { useCallback } from "react";
import { RosterCharacterId } from "types";
import RosterGroupTable from "./RosterGroupTable";

interface RosterGroupGridProps {
  onBench: (characterId: RosterCharacterId) => void;
}

export default function RosterGroupGrid({ onBench }: RosterGroupGridProps) {
  const [getGroupCharacters] = useRosterStore(useCallback((store) => [store.getGroupCharacters], []));

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      <RosterGroupTable groupNumber={0} characterList={getGroupCharacters(0)} maxSlots={5} onBench={onBench} />
      <RosterGroupTable groupNumber={1} characterList={getGroupCharacters(1)} maxSlots={5} onBench={onBench} />
      <RosterGroupTable groupNumber={2} characterList={getGroupCharacters(2)} maxSlots={5} onBench={onBench} />
      <RosterGroupTable groupNumber={3} characterList={getGroupCharacters(3)} maxSlots={5} onBench={onBench} />
    </Grid>
  );
}

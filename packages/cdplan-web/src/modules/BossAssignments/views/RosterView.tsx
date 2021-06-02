import Layout from "@BossAssignments/components/Layout";
import RosterCharacterBench from "@BossAssignments/components/RosterCharacterBench";
import RosterGroupGrid from "@BossAssignments/components/RosterGroupGrid";
import RosterMenuActions from "@BossAssignments/components/RosterMenuActions";
import RosterModalAddCharacter from "@BossAssignments/components/RosterModalAddCharacter";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import { Grid, HStack, VStack } from "@chakra-ui/layout";
import React, { useCallback } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { RosterCharacterId } from "types";
import randomRoster from "../util/randomRoster";

export default function RosterView() {
  const [getBenchCharacters, addCharacterToGroup, addCharacterToRoster, addCharacterToBench] = useRosterStore(
    useCallback(
      (store) => [
        store.getBenchCharacters,
        store.addCharacterToGroup,
        store.addCharacterToRoster,
        store.addCharacterToBench,
      ],
      []
    )
  );

  const handleDragEnd = (result: DropResult) => {
    const destinationGroup = parseInt(result.destination?.droppableId ?? "0", 10);
    if (result.destination && destinationGroup !== undefined && destinationGroup >= 0) {
      addCharacterToGroup(destinationGroup, result.destination.index, result.draggableId as RosterCharacterId);
    }
    if (result.destination && destinationGroup === -1) {
      addCharacterToBench(result.destination.index, result.draggableId as RosterCharacterId);
    }
  };

  const handleCreateRandomRoster = () => {
    randomRoster.map((char) => addCharacterToRoster(char.name, char.pclass.id, char.spec.id, char.covenant.id));
  };

  return (
    <Layout heading="Guild Roster">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid templateColumns="30% 1fr" rowGap={0} columnGap={8}>
          <VStack width="100%" pr={2}>
            <RosterCharacterBench characterList={getBenchCharacters()} />
            <HStack width="100%" justifyContent="space-between">
              <RosterModalAddCharacter onCreateRandomRoster={handleCreateRandomRoster} />
              <RosterMenuActions />
            </HStack>
          </VStack>
          <RosterGroupGrid />
        </Grid>
      </DragDropContext>
    </Layout>
  );
}

import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import { DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";
import { RosterCharacter, RosterCharacterId } from "types";
import RosterCharacterCard from "./RosterCharacterCard";
import RosterGroupDropzone from "./RosterGroupDropzone";
import RosterGroupLayout from "./RosterGroupLayout";

export interface RosterGroupTableProps {
  groupNumber: number;
  characterList: RosterCharacter[];
  maxSlots: number;
  onBench: (characterId: RosterCharacterId) => void;
}

export default function RosterGroupTable({ groupNumber, characterList, maxSlots, onBench }: RosterGroupTableProps) {
  return (
    <RosterGroupLayout
      droppableId={`${groupNumber}`}
      title={`Group ${groupNumber + 1}`}
      isDropDisabled={characterList.length >= maxSlots}
    >
      {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
        <Box position="relative" width="100%" height="330px">
          <VStack w="100%" position="absolute" top="0" left="0">
            {Array(maxSlots)
              .fill(null)
              .map((_, index) => (
                <RosterGroupDropzone
                  isHover={droppableSnapshot.isDraggingOver}
                  placeholder={`Member ${index + 1}`}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                />
              ))}
          </VStack>
          <VStack
            w="100%"
            h="100%"
            position="absolute"
            top="0"
            left="0"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {characterList.map((char, index) => (
              <RosterCharacterCard character={char} index={index} key={char.id} onBench={() => onBench(char.id)} />
            ))}
            {droppableProvided.placeholder}
          </VStack>
        </Box>
      )}
    </RosterGroupLayout>
  );
}

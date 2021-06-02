import { VStack } from "@chakra-ui/layout";
import React from "react";
import { DroppableProvided } from "react-beautiful-dnd";
import { RosterCharacter } from "types";
import RosterCharacterCard from "./RosterCharacterCard";
import RosterGroupDropzone from "./RosterGroupDropzone";
import RosterGroupLayout from "./RosterGroupLayout";

export interface RosterCharacterBenchProps {
  characterList: RosterCharacter[];
}

export default function RosterCharacterBench({ characterList }: RosterCharacterBenchProps) {
  return (
    <RosterGroupLayout title="Bench" droppableId="-1">
      {(droppableProvided: DroppableProvided) => (
        <VStack
          width="100%"
          overflowY="auto"
          maxHeight="614px"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          {characterList.map((char, index) => (
            <RosterCharacterCard key={char.id} character={char} index={index} />
          ))}
          {characterList.length === 0 ? <RosterGroupDropzone key="_ph" placeholder="Bench" /> : null}
          {droppableProvided.placeholder}
        </VStack>
      )}
    </RosterGroupLayout>
  );
}

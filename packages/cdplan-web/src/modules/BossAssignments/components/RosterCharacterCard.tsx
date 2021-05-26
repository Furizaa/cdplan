import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { RosterCharacter } from "types";
import GameIcon from "./GameIcon";

export interface RosterCharacterCardProps extends BoxProps {
  character: RosterCharacter;
  index: number;
}

export default function RosterCharacterCard({ character, index, ...boxProps }: RosterCharacterCardProps) {
  return (
    <Draggable draggableId={character.id} key={character.id} index={index}>
      {(provided: DraggableProvided) => (
        <Box
          bgColor="gray.700"
          borderRadius="md"
          px={2}
          py={1}
          w="100%"
          h="52px"
          borderWidth="1px"
          borderColor="gray.500"
          {...boxProps}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <HStack>
            <GameIcon name={character.spec.icon} borderRadius="md" />
            <Box alignItems="flex-start">
              <Text
                lineHeight="0"
                as="strong"
                fontSize="md"
                casing="capitalize"
                color={`${character.pclass.color}.200`}
              >
                {character.name}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {character.covenant.name} {character.spec.name} {character.pclass.name}
              </Text>
            </Box>
          </HStack>
        </Box>
      )}
    </Draggable>
  );
}

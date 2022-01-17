import { IconButton } from "@chakra-ui/button";
import { Box, BoxProps, HStack, Spacer, Text } from "@chakra-ui/layout";
import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { RiDeleteBackFill, RiDeleteBin2Fill, RiSettings4Fill } from "react-icons/ri";
import { RosterCharacter } from "types";
import GameIcon from "@Core/components/GameIcon";

export interface RosterCharacterCardProps extends BoxProps {
  character: RosterCharacter;
  index: number;
  onDelete?: () => void;
  onEdit?: () => void;
  onBench?: () => void;
}

export default function RosterCharacterCard({
  character,
  index,
  onEdit,
  onDelete,
  onBench,
  ...boxProps
}: RosterCharacterCardProps) {
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
          <HStack role="group">
            <GameIcon name={character.spec.icon} borderRadius="md" />
            <Box alignItems="flex-start">
              <Text
                lineHeight="0"
                as="strong"
                fontSize="md"
                casing="capitalize"
                isTruncated
                color={`${character.pclass.color}.200`}
              >
                {character.name}
              </Text>
              <Box maxWidth="180px" _groupHover={{ visibility: "hidden", maxW: "10px" }} visibility="visible">
                <Text fontSize="xs" fontWeight="light" color="gray.500" isTruncated>
                  {character.covenant.name} {character.spec.name} {character.pclass.name}
                </Text>
              </Box>
            </Box>
            <Spacer />
            {onEdit && (
              <IconButton
                size="xs"
                icon={<RiSettings4Fill />}
                aria-label="edit"
                _groupHover={{ display: "flex" }}
                d="none"
                onClick={onEdit}
              />
            )}
            {onDelete && (
              <IconButton
                size="xs"
                icon={<RiDeleteBin2Fill />}
                aria-label="delete"
                _groupHover={{ display: "flex" }}
                d="none"
                onClick={onDelete}
              />
            )}
            {onBench && (
              <IconButton
                size="xs"
                icon={<RiDeleteBackFill />}
                aria-label="bench"
                _groupHover={{ display: "flex" }}
                d="none"
                onClick={onBench}
              />
            )}
          </HStack>
        </Box>
      )}
    </Draggable>
  );
}

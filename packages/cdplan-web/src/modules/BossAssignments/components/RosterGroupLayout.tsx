import { Box, BoxProps, Heading, VStack } from "@chakra-ui/layout";
import React from "react";
import { Droppable, DroppableProvided, DroppableStateSnapshot } from "react-beautiful-dnd";

export interface RosterGroupLayoutProps extends Omit<BoxProps, "children"> {
  title: string;
  droppableId: string;
  isDropDisabled?: boolean;
  children: (droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => React.ReactNode;
}

export default function RosterGroupLayout({
  title,
  droppableId,
  isDropDisabled = false,
  children,
  ...boxProps
}: RosterGroupLayoutProps) {
  return (
    <Box w="100%" {...boxProps}>
      <Droppable droppableId={droppableId} isDropDisabled={isDropDisabled}>
        {(droppableProvided: DroppableProvided, droppableSnapshot: DroppableStateSnapshot) => (
          <VStack w="100%">
            <Heading size="md">{title}</Heading>
            {children(droppableProvided, droppableSnapshot)}
          </VStack>
        )}
      </Droppable>
    </Box>
  );
}

import React, { useCallback } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Grid,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { RosterCharacter } from "types";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import useBossStore from "@BossAssignments/store/useBossStore";
import AssignmentCharacterCard from "./AssignmentCharacterCard";

export interface AssignmentModalSelectCharacterProps {
  isOpen: boolean;
  onSelect?: (character: RosterCharacter) => void;
  onClose: () => void;
  mechanicKey: string;
  groupSoakIndex: number;
}

export default function AssignmentModalSelectCharacter({
  isOpen,
  onClose,
  onSelect,
  mechanicKey,
  groupSoakIndex,
}: AssignmentModalSelectCharacterProps) {
  const list = useRosterStore(useCallback((store) => store.getAllGroupCharacters(), []));
  const soaks = useBossStore(useCallback((store) => store.getSoaks(), []));

  const handleSelect = (character: RosterCharacter) => {
    if (onSelect) {
      onSelect(character);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const soaksForMechanicAndGroup = soaks?.[mechanicKey]?.[groupSoakIndex] ?? [];
  const soakers = list.filter((char) => !soaksForMechanicAndGroup.includes(char.id));

  return (
    <Modal size="3xl" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Player Character</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {soakers.length === 0 && (
            <Alert status="warning">
              <AlertIcon />
              <AlertTitle>No players available.</AlertTitle>
              <AlertDescription>
                Your roster doesnt have the players available to mitigate this mechanic.
              </AlertDescription>
            </Alert>
          )}
          <Grid templateColumns="repeat(3, 1fr)" gap={2} m={4}>
            {soakers.map((char) => (
              <AssignmentCharacterCard character={char} onClick={handleSelect} />
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

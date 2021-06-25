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
  Box,
} from "@chakra-ui/react";
import { RosterCharacter } from "types";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import useBossStore from "@BossAssignments/store/useBossStore";
import AssignmentCharacterCard from "./AssignmentCharacterCard";
import AssignmentDummyCard from "./AssignmentDummyCard";

export interface AssignmentModalSelectCharacterProps {
  isOpen: boolean;
  onSelect?: (character: RosterCharacter) => void;
  onClose: () => void;
  mechanicKey: string;
  isSplitMechanic: boolean;
}

export default function AssignmentModalSelectCharacter({
  isOpen,
  onClose,
  onSelect,
  mechanicKey,
  isSplitMechanic,
}: AssignmentModalSelectCharacterProps) {
  const [list, getGroupCharacters] = useRosterStore(
    useCallback((store) => [store.getAllGroupCharacters(), store.getGroupCharacters], [])
  );
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

  const handleAddMelee = () => {
    if (!onSelect) {
      return;
    }
    list.filter((char) => char.spec.position === "MELEE").forEach(onSelect);
    handleClose();
  };

  const handleAddRanged = () => {
    if (!onSelect) {
      return;
    }
    list.filter((char) => char.spec.position === "RANGED").forEach(onSelect);
    handleClose();
  };

  const handleAddGroup = (groupIndex: number) => {
    if (!onSelect) {
      return;
    }
    getGroupCharacters(groupIndex).forEach(onSelect);
    handleClose();
  };

  const soaksForMechanicAndGroup = Object.values(soaks?.[mechanicKey] ?? {}).flat();
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
          {isSplitMechanic && (
            <Grid templateColumns="repeat(3, 1fr)" gap={2} m={4}>
              <AssignmentDummyCard title="Melee" icon="inv_sword_2h_newplayer_a_02" onClick={handleAddMelee} />
              <AssignmentDummyCard title="Ranged" icon="inv_weapon_bow_08" onClick={handleAddRanged} />
              <AssignmentDummyCard
                title="Raid Group 1"
                icon="70_inscription_vantus_rune_odyn"
                onClick={() => handleAddGroup(0)}
              />
              <AssignmentDummyCard
                title="Raid Group 2"
                icon="70_inscription_vantus_rune_azure"
                onClick={() => handleAddGroup(1)}
              />
              <AssignmentDummyCard
                title="Raid Group 3"
                icon="inv_inscription_81_vantusrune_zuldazar"
                onClick={() => handleAddGroup(2)}
              />
              <AssignmentDummyCard
                title="Raid Group 4"
                icon="70_inscription_vantus_rune_light"
                onClick={() => handleAddGroup(3)}
              />
            </Grid>
          )}
          {isSplitMechanic && <Box borderBottom="1px solid" borderBottomColor="gray.600" />}
          <Grid templateColumns="repeat(3, 1fr)" gap={2} m={4}>
            {soakers.map((char) => (
              <AssignmentCharacterCard key={char.id} character={char} onClick={handleSelect} />
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

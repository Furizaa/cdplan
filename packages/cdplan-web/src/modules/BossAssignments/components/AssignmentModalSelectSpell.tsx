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
import { DBC, RaidCooldown } from "types";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import AssignmentCooldownCard from "./AssignmentCooldownCard";

export interface AssignmentModalSelectSpellProps {
  flavor: DBC.MechanicMitigationFlavor;
  isOpen: boolean;
  onSelect?: (cooldown: RaidCooldown) => void;
  onClose: () => void;
}

export default function AssignmentModalSelectSpell({
  flavor,
  isOpen,
  onClose,
  onSelect,
}: AssignmentModalSelectSpellProps) {
  const cooldowns = useRosterStore(useCallback((store) => store.getCooldowns(flavor), [flavor]));

  const handleSelect = (cooldown: RaidCooldown) => {
    if (onSelect) {
      onSelect(cooldown);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Modal size="3xl" isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Mechanic Mitigation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {cooldowns.length === 0 && (
            <Alert status="warning">
              <AlertIcon />
              <AlertTitle>No cooldowns available</AlertTitle>
              <AlertDescription>
                Your current roster doesn&apos;t have any cooldowns available to mitigate this mechanic.
              </AlertDescription>
            </Alert>
          )}
          <Grid templateColumns="repeat(3, 1fr)" gap={2} m={4}>
            {cooldowns.map((cd) => (
              <AssignmentCooldownCard cooldown={cd} onClick={handleSelect} />
            ))}
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

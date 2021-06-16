import React from "react";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { RosterCharacterId } from "types";
import RosterFormEditCharacter from "./RosterFormEditCharacter";

export interface RosterModalEditCharacterProps {
  characterId: RosterCharacterId;
  onClose: () => void;
}

export default function RosterModalEditCharacter({ characterId, onClose }: RosterModalEditCharacterProps) {
  return (
    <Modal size="xl" isOpen onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Character</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={4}>
          <RosterFormEditCharacter onCancel={onClose} characterId={characterId} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
  Grid,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import RosterFormAddCharacter from "./RosterFormAddCharacter";
import RosterFormImportArmory from "./RosterFormImportArmory";
import RosterFormImportAddon from "./RosterFormImportAddon";
import RosterFormImportPremade from "./RosterFormImportPremade";

export interface RosterModalAddCharacterProps {
  onCreateRandomRoster: () => void;
}

export default function RosterModalAddCharacter({ onCreateRandomRoster }: RosterModalAddCharacterProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleCreateRandomRoster = () => {
    onClose();
    if (onCreateRandomRoster) {
      onCreateRandomRoster();
    }
  };

  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>
        Add Character
      </Button>

      <Modal size="3xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Characters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid height="100%" templateColumns="240px auto">
              <Box bgColor="gray.900" h="100%" pb={1}>
                <Tabs size="md" variant="vertical" orientation="vertical" onChange={setTabIndex}>
                  <TabList>
                    <Tab>Single Character</Tab>
                    <Tab disabled>Import from Armory</Tab>
                    <Tab disabled>Import from Addon</Tab>
                    <Tab disabled>Random Premade Group</Tab>
                  </TabList>
                </Tabs>
              </Box>
              <Box px={8} py={4}>
                {tabIndex === 0 && <RosterFormAddCharacter onCancel={onClose} />}
                {tabIndex === 1 && <RosterFormImportArmory onCancel={onClose} />}
                {tabIndex === 2 && <RosterFormImportAddon />}
                {tabIndex === 3 && <RosterFormImportPremade onCancel={onClose} onCreate={handleCreateRandomRoster} />}
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

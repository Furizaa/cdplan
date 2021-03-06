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

export interface RosterModalAddCharacterProps {
  onCreateRandomRoster: () => void;
}

export default function RosterModalAddCharacter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = React.useState(0);

  return (
    <>
      <Button colorScheme="purple" onClick={onOpen}>
        Add Character
      </Button>

      <Modal size="3xl" isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Characters</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid height="100%" templateColumns="240px auto">
              <Box bgColor="gray.900" h="100%" pb={1}>
                <Tabs size="md" variant="vertical" orientation="vertical" onChange={setTabIndex}>
                  <TabList>
                    <Tab disabled>Import from WoW</Tab>
                    <Tab>Single Character</Tab>
                  </TabList>
                </Tabs>
              </Box>
              <Box px={8} py={4}>
                {tabIndex === 1 && <RosterFormAddCharacter onCancel={onClose} />}
                {tabIndex === 0 && <RosterFormImportArmory onCancel={onClose} />}
              </Box>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

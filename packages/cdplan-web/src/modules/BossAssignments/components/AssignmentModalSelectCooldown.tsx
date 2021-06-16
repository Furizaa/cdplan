import useRosterStore from "@BossAssignments/store/useRosterStore";
import useBossStore from "@BossAssignments/store/useBossStore";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal";
import mergeRefs from "react-merge-refs";
import { useCombobox } from "downshift";
import Fuse from "fuse.js";
import React, { useCallback, useRef, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import { DBC, RaidCooldown } from "types";
import AssignmentCooldownCard from "./AssignmentCooldownCard";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@chakra-ui/alert";

interface AssignmentModalSelectCooldownProps {
  flavor: DBC.MechanicMitigationFlavor;
  mechanicKey: string;
  onSelect?: (cooldown: RaidCooldown) => void;
  isOpen: boolean;
  onClose?: () => void;
}

const fuseOptions = {
  keys: ["caster.name", "spell.name"],
};

export default function AssignmentModalSelectCooldown({
  flavor,
  onSelect,
  mechanicKey,
  isOpen,
  onClose,
}: AssignmentModalSelectCooldownProps) {
  const firstFieldRef = useRef(null);

  const cooldowns = useRosterStore(useCallback((store) => store.getCooldowns(flavor), [flavor]));
  const usedCooldownIds = useBossStore(
    useCallback(
      (store) => store.mitigations?.[mechanicKey]?.[flavor] ?? [],

      [mechanicKey, flavor]
    )
  );
  const [inputItems, setInputItems] = useState(cooldowns.filter((item) => !usedCooldownIds.includes(item.id)));

  const { getInputProps, getItemProps, getMenuProps, getComboboxProps, highlightedIndex, reset } = useCombobox({
    items: inputItems,
    itemToString: () => "",

    onSelectedItemChange: (changes) => {
      if (onSelect && changes.selectedItem) {
        onSelect(changes.selectedItem);
      }
      reset();
      if (onClose) {
        onClose();
      }
    },

    onInputValueChange: ({ inputValue }) => {
      const isFiltered = Boolean(inputValue && inputValue.trim().length);
      const fuse = new Fuse(inputItems, fuseOptions);
      setInputItems(
        isFiltered
          ? fuse
              .search(inputValue as string)
              .map((item) => item.item)
              .filter((item) => !usedCooldownIds.includes(item.id))
          : cooldowns.filter((item) => !usedCooldownIds.includes(item.id))
      );
    },
  });

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
    reset();
  };

  const { ref: dsInputRef, ...dsInputProps } = getInputProps();

  return (
    <Modal isOpen={isOpen} initialFocusRef={firstFieldRef} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Cooldown</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {cooldowns.length === 0 ? (
            <Alert status="warning">
              <AlertIcon />
              <AlertDescription>
                Your roster doesnt have the players available to mitigate this mechanic.
              </AlertDescription>
            </Alert>
          ) : (
            <ReactFocusLock returnFocus persistentFocus={false}>
              <Box p={2} {...getComboboxProps()}>
                <Input
                  placeholder="Search Player, Talent or Skill"
                  variant="filled"
                  ref={mergeRefs([dsInputRef, firstFieldRef])}
                  {...dsInputProps}
                />
              </Box>
              <Box maxHeight="300px" overflowY="auto" mr={2}>
                <VStack p={1} {...getMenuProps()}>
                  {inputItems.map((cd, index) => (
                    <AssignmentCooldownCard
                      key={cd.id}
                      cooldown={cd}
                      isActive={highlightedIndex === index}
                      {...getItemProps({ item: cd, index })}
                    />
                  ))}
                </VStack>
              </Box>
            </ReactFocusLock>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

import useBossStore from "@BossAssignments/store/useBossStore";
import { IconButton } from "@chakra-ui/button";
import { useClipboard } from "@chakra-ui/hooks";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useToast } from "@chakra-ui/toast";
import React, { useCallback } from "react";
import { RiDeleteBin2Fill, RiMoreFill, RiStickyNoteFill } from "react-icons/ri";
import { DBC } from "types";

interface BossTableMenuActionsProps {
  boss: DBC.Boss;
  ertNote: string;
}

export default function BossTableMenuActions({ boss, ertNote }: BossTableMenuActionsProps) {
  const clearAllForBoss = useBossStore(useCallback((store) => store.clearAllForBoss, []));
  const { onCopy } = useClipboard(ertNote);
  const toast = useToast();

  const handleClipboardCopy = () => {
    console.log(ertNote);
    onCopy();
    toast({
      title: "Copied to Clipboard",
      description: "ERT note for this boss and your assignments has been copied to your clipboard.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="actions" variant="outline" icon={<RiMoreFill />} />
      <MenuList>
        <MenuItem icon={<RiStickyNoteFill />} onClick={handleClipboardCopy}>
          Export to ERT Note
        </MenuItem>
        <MenuItem color="orange.200" icon={<RiDeleteBin2Fill />} onClick={() => clearAllForBoss(boss.key)}>
          Clear All Assignments
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

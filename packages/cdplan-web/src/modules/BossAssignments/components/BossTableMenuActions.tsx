import useBossStore from "@BossAssignments/store/useBossStore";
import copy from "copy-to-clipboard";
import { IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useToast } from "@chakra-ui/toast";
import React, { useCallback } from "react";
import { RiDeleteBin2Fill, RiMoreFill, RiStickyNoteFill } from "react-icons/ri";
import { DBC } from "types";

interface BossTableMenuActionsProps {
  boss: DBC.Boss;
  createErtNote: () => string;
}

export default function BossTableMenuActions({ boss, createErtNote }: BossTableMenuActionsProps) {
  const clearAllForBoss = useBossStore(useCallback((store) => store.clearAllForBoss, []));
  const toast = useToast();

  const handleClipboardCopy = () => {
    copy(createErtNote());
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

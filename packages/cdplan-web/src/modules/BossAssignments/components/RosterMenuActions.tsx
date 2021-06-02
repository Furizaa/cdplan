import useRosterStore from "@BossAssignments/store/useRosterStore";
import { IconButton } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React, { useCallback } from "react";
import { RiDeleteBin2Fill, RiMoreFill, RiRecycleFill } from "react-icons/ri";

export default function RosterMenuActions() {
  const [removeAllCharactersFromGroups, clear] = useRosterStore(
    useCallback((store) => [store.removeAllCharactersFromGroups, store.clear], [])
  );

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="actions" variant="outline" icon={<RiMoreFill />} />
      <MenuList>
        <MenuItem icon={<RiRecycleFill />} onClick={removeAllCharactersFromGroups}>
          Clear Groups
        </MenuItem>
        <MenuItem color="orange.200" icon={<RiDeleteBin2Fill />} onClick={clear}>
          Clear Groups and Roster
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

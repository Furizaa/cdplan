import useRosterStore from "@BossAssignments/store/useRosterStore";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, VStack } from "@chakra-ui/layout";
import Fuse from "fuse.js";
import { Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import React, { useCallback, useRef, useState } from "react";
import ReactFocusLock from "react-focus-lock";
import { DBC, RaidCooldown } from "types";
import AssignmentCooldownCard from "./AssignmentCooldownCard";
import AssignmentMitigationCardEmpty from "./AssignmentMitigationCardEmpty";

interface AssignmentPopoverSelectCooldownProps {
  flavor: DBC.MechanicMitigationFlavor;
  condensed?: boolean;
}

const fuseOptions = {
  keys: ["caster.name", "spell.name"],
};

export default function AssignmentPopoverSelectCooldown({
  flavor,
  condensed = false,
}: AssignmentPopoverSelectCooldownProps) {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [filterValue, setFilterValue] = useState("");
  const firstFieldRef = useRef(null);

  const cooldowns = useRosterStore(useCallback((store) => store.getCooldowns(flavor), [flavor]));
  const fuse = useCallback(() => new Fuse(cooldowns, fuseOptions), [cooldowns]);
  const filteredCooldowns = useCallback(() => fuse().search(filterValue), [fuse, filterValue]);

  const isFiltered = Boolean(filterValue.trim().length);

  const handleSelect = (cooldown: RaidCooldown) => {};

  return (
    <Popover
      size="2xl"
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="bottom"
      closeOnBlur={false}
      initialFocusRef={firstFieldRef}
    >
      <PopoverTrigger>
        <AssignmentMitigationCardEmpty flavor={flavor} condensed={condensed} />
      </PopoverTrigger>
      <PopoverContent p={5} mt={4}>
        <ReactFocusLock returnFocus persistentFocus={false}>
          <PopoverArrow />
          <PopoverCloseButton />
          <Box pr={2}>
            <Input
              placeholder="Search Player, Talent or Skill"
              variant="filled"
              onChange={(event) => setFilterValue(event.target.value)}
              value={filterValue}
              ref={firstFieldRef}
            />
          </Box>
          <Box maxHeight="300px" overflowY="auto" mt={2}>
            <VStack pr={2}>
              {isFiltered &&
                filteredCooldowns().map((cd) => (
                  <AssignmentCooldownCard key={cd.item.id} cooldown={cd.item} onClick={handleSelect} />
                ))}
              {!isFiltered &&
                cooldowns.map((cd) => <AssignmentCooldownCard key={cd.id} cooldown={cd} onClick={handleSelect} />)}
            </VStack>
          </Box>
        </ReactFocusLock>
      </PopoverContent>
    </Popover>
  );
}

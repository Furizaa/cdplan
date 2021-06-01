import React, { useCallback } from "react";
import useBossStore from "@BossAssignments/store/useBossStore";
import { HStack, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { RiInformationFill } from "react-icons/ri";

export interface T26B10CleansingPainProps {
  mechanicKey: string;
}

export default function T26B10CleansingPain({ mechanicKey }: T26B10CleansingPainProps) {
  const [soaks] = useBossStore(useCallback((store) => [store.getSoaks()], []));

  const groups = Object.values(Object.values(soaks?.[mechanicKey] ?? {}));
  const addCount = groups.reduce((prev, group) => prev + group.length ** 2, 0);

  return (
    <HStack width="100%" alignItems="start">
      <Icon fontSize="2xl" as={RiInformationFill} color="blue.300" />
      <Text>This Cleansing Pain cast will spawn</Text>
      <Text as="strong" color="blue.300">
        {addCount}
      </Text>
      <Text>adds.</Text>
    </HStack>
  );
}

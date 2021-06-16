import React, { useCallback } from "react";
import useBossStore from "@BossAssignments/store/useBossStore";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { RosterCharacterId } from "types";
import { RiInformationFill } from "react-icons/ri";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import InlineCharacter from "../InlineCharacter";

export interface T26B10CleansingPainProps {
  mechanicKey: string;
  summaryMechanicKeys: string[];
}

export default function T26B10CleansingPain({ mechanicKey, summaryMechanicKeys }: T26B10CleansingPainProps) {
  const allCharacters = useRosterStore((store) => store.getAllGroupCharacters());
  const [soaks] = useBossStore(useCallback((store) => [store.getSoaks()], []));

  const stacks: { [id: string]: number } = allCharacters.reduce((prev, char) => ({ ...prev, [char.id]: 6 }), {});
  const allCharacterIds = allCharacters.map((char) => char.id);

  const groups = soaks?.[mechanicKey] ?? {};
  const addCount = Object.entries(groups).reduce((prev, [groupId, group]) => {
    if (groupId === "5") {
      return prev + group.filter((id) => allCharacterIds.includes(id)).length;
    }
    return prev + group.filter((id) => allCharacterIds.includes(id)).length ** 2;
  }, 0);

  summaryMechanicKeys.forEach((summaryMechanicKey) => {
    const sumGroups = soaks?.[summaryMechanicKey] ?? {};
    Object.entries(sumGroups).forEach(([groupId, group]) => {
      if (groupId === "5") {
        group
          .filter((id) => allCharacterIds.includes(id))
          .forEach((charId) => {
            stacks[charId] = Math.max(0, (stacks[charId] ?? 6) - 1);
          });
      } else {
        const minusStacks = group.length;
        group
          .filter((id) => allCharacterIds.includes(id))
          .forEach((charId) => {
            stacks[charId] = Math.max(0, (stacks[charId] ?? 6) - minusStacks);
          });
      }
    });
  });

  const organizedStacks: { [id: string]: string[] } = { "6": [], "5": [], "4": [], "3": [], "2": [], "1": [], "0": [] };
  Object.keys(organizedStacks).forEach((stackCount) => {
    // @ts-ignore
    organizedStacks[stackCount] = Object.entries(stacks).reduce((prev, [characterId, st]) => {
      if (st === parseInt(stackCount, 10)) {
        return [...prev, characterId];
      }
      return prev;
    }, []) as string[];
  });

  return (
    <HStack width="100%" alignItems="start">
      <Icon fontSize="2xl" as={RiInformationFill} color="blue.300" />
      <Box>
        <Text as="span">This Cleansing Pain cast will spawn </Text>
        <Text as="strong" color="blue.300">
          {addCount}
        </Text>
        <Text as="span"> adds.</Text>
        {Object.entries(organizedStacks)
          .filter(([, v]) => Boolean(v.length))
          .map(([k, v]) => (
            <Box key={k}>
              <Text as="strong" color="blue.300">
                {k} Stacks:
              </Text>{" "}
              {v.map((charId) => (
                <span key={charId}>
                  <InlineCharacter as="span" characterId={charId as RosterCharacterId} />{" "}
                </span>
              ))}
            </Box>
          ))}
      </Box>
    </HStack>
  );
}

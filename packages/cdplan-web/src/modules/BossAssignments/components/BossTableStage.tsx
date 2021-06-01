import React from "react";
import { addSeconds, format } from "date-fns";
import sortMechanics from "@cdplan/db/db/utils/sortMechanics";
import { DBC } from "types";
import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Tag } from "@chakra-ui/tag";
import { RiShieldFill, RiSwordFill, RiFlashlightFill } from "react-icons/ri";
import GameIcon from "./GameIcon";
import AssignmentSlotsSkill from "./AssignmentSlotsSkill";
import AssignmentSlotsCharacter from "./AssignmentSlotsCharacter";

interface BossTableStageProps {
  stage: DBC.BossStage;
  onQueryMechanicMitigation?: (mechanic: DBC.BossMechanic, flavor: DBC.MechanicMitigationFlavor) => void;
  onQueryMechanikSoak?: (mechanic: DBC.BossMechanic, groupSoakIndex: number) => void;

  renderMechanicValidation?: (mechanic: DBC.BossMechanic) => React.ReactNode;
}

export default function BossTableStage({
  stage,
  onQueryMechanicMitigation,
  onQueryMechanikSoak,
  renderMechanicValidation,
}: BossTableStageProps) {
  const handleQueryMechanicMitigation = (mechanic: DBC.BossMechanic, flavor: DBC.MechanicMitigationFlavor) => {
    if (onQueryMechanicMitigation) {
      onQueryMechanicMitigation(mechanic, flavor);
    }
  };

  const handleQueryMechanicSoak = (mechanic: DBC.BossMechanic, groupSoakIndex: number) => {
    if (onQueryMechanikSoak) {
      onQueryMechanikSoak(mechanic, groupSoakIndex);
    }
  };

  const isMultipleGroupSoak = (mechanic: DBC.BossMechanic) =>
    mechanic.mitigationFlavors.includes("PlayerSoak") && mechanic.mitigationOptions?.soakGroups;

  return (
    <Box>
      {sortMechanics(stage.mechanics).map((mechanic) => {
        const validation = renderMechanicValidation && renderMechanicValidation(mechanic);

        return (
          <Box borderWidth="1px" borderColor="gray.700" mb={4} p={2} bgColor="gray.800" key={mechanic.key}>
            <Grid templateColumns="40% 1fr" rowGap={4}>
              <Box>
                <HStack spacing={4} align="center">
                  <GameIcon borderRadius="md" name={mechanic.spell.icon} />
                  <Box width="60px">
                    <Text color="gray.400">
                      {"timeMs" in mechanic.trigger
                        ? format(addSeconds(new Date(0), mechanic.trigger.timeMs / 1000), "mm:ss")
                        : mechanic.trigger.healthPercentage}
                    </Text>
                  </Box>

                  <Text fontSize="xl" fontWeight="bold" color="gray.200">
                    {mechanic.description}
                  </Text>
                </HStack>
              </Box>
              <VStack spacing={2}>
                {mechanic.mitigationFlavors.includes("HealingCooldowns") && (
                  <AssignmentSlotsSkill
                    mechanic={mechanic}
                    flavor="HealingCooldowns"
                    onQueryMechanicMitigation={() => handleQueryMechanicMitigation(mechanic, "HealingCooldowns")}
                  >
                    <Icon as={RiShieldFill} color="green.500" />
                  </AssignmentSlotsSkill>
                )}
                {mechanic.mitigationFlavors.includes("OffensiveBurst") && (
                  <AssignmentSlotsSkill
                    mechanic={mechanic}
                    flavor="OffensiveBurst"
                    onQueryMechanicMitigation={() => handleQueryMechanicMitigation(mechanic, "OffensiveBurst")}
                  >
                    <Icon as={RiSwordFill} color="red.500" />
                  </AssignmentSlotsSkill>
                )}
                {mechanic.mitigationFlavors.includes("Mobility") && (
                  <AssignmentSlotsSkill
                    mechanic={mechanic}
                    flavor="Mobility"
                    onQueryMechanicMitigation={() => handleQueryMechanicMitigation(mechanic, "Mobility")}
                  >
                    <Icon as={RiFlashlightFill} color="blue.500" />
                  </AssignmentSlotsSkill>
                )}
              </VStack>

              {isMultipleGroupSoak(mechanic) && (
                <>
                  <Box
                    gridColumnStart={1}
                    gridColumnEnd={3}
                    borderBottomColor="gray.700"
                    height="1px"
                    borderBottomWidth="1px"
                  />
                  <Box pr={8} pl={4}>
                    {mechanic.image && <Image src={`/mechanic-images/${mechanic.image}`} opacity="0.6" />}
                  </Box>
                  <VStack spacing={2}>
                    {Array(mechanic.mitigationOptions?.soakGroups ?? 0)
                      .fill(0)
                      .map((_, index) => (
                        <AssignmentSlotsCharacter
                          mechanic={mechanic}
                          groupSoakIndex={index}
                          onQueryMechanicSoak={() => handleQueryMechanicSoak(mechanic, index)}
                          // eslint-disable-next-line react/no-array-index-key
                          key={index}
                        >
                          <Tag size="sm" borderRadius="full" variant="solid" colorScheme="yellow">
                            {index + 1}
                          </Tag>
                        </AssignmentSlotsCharacter>
                      ))}
                  </VStack>
                </>
              )}

              {validation && (
                <>
                  <Box
                    gridColumnStart={1}
                    gridColumnEnd={3}
                    borderBottomColor="gray.700"
                    height="1px"
                    borderBottomWidth="1px"
                  />
                  <Box m={2} gridColumnStart={1} gridColumnEnd={3}>
                    {validation}
                  </Box>
                </>
              )}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

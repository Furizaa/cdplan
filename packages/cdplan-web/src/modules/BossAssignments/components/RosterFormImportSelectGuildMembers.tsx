import React, { useCallback, useMemo, useState } from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { Box, Checkbox, CheckboxGroup, Divider, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import { Button } from "@chakra-ui/button";
import { DBC } from "types";
import { CLASSES, selectById } from "@cdplan/db";
import { fetchMultiQueue } from "@BossAssignments/util/fetchQueue";
import RosterFormImportQueueProgress from "./RosterFormImportQueueProgress";

interface RosterFormImportSelectGuildMembersProps {
  memberList: DBC.API.GuildMember[];
  region: string;
  onCancel?: () => void;
}

interface FormValues {
  memberIds: string[];
}

interface QueueProgress {
  total: number;
  loaded: number;
}

export default function RosterFormImportSelectGuildMembers({
  onCancel,
  region,
  memberList,
}: RosterFormImportSelectGuildMembersProps) {
  const [queueProgress, setQueueProgress] = useState<QueueProgress>({ total: 0, loaded: 0 });
  const [addCharacterToRoster] = useRosterStore(useCallback((store) => [store.addCharacterToRoster], []));
  const memberPerRank = useMemo(
    () =>
      memberList.reduce<{
        [rank: number]: DBC.API.GuildMember[];
      }>((prev, member) => ({ ...prev, [member.rank]: [...(prev[member.rank] ?? []), member] }), {}),
    [memberList]
  );

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleSubmit = (formValues: FormValues) => {
    const filteredMembers = memberList.filter((member) => formValues.memberIds.includes(`${member.character.id}`));
    const fetchPayloads = filteredMembers.map((member) => ({
      body: {
        type: "character",
        params: {
          region,
          realm: member.character.realm.slug,
          name: member.character.name.toLowerCase(),
        },
      },
      onUpdate: (result: DBC.API.AsyncStore<DBC.API.CharacterRequestResponse>) => {
        if (result.data) {
          addCharacterToRoster(
            result.data.character.name,
            result.data.character.character_class.id as DBC.ClassId,
            result.data.character.active_spec.id as DBC.SpecId,
            result.data.character.covenant_progress.chosen_covenant.id as DBC.CovenantId
          );
        }
      },
    }));

    setQueueProgress({ total: fetchPayloads.length, loaded: 0 });
    fetchMultiQueue({
      payload: fetchPayloads,
      onDone: handleCancel,
      onProgress: (total, loaded) => setQueueProgress({ total, loaded }),
    });
  };

  if (queueProgress.total > 0) {
    return <RosterFormImportQueueProgress total={queueProgress.total} loaded={queueProgress.loaded} />;
  }

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ memberIds: [] }}>
      {(props: FormikProps<FormValues>) => (
        <Form>
          <VStack spacing={6}>
            <Field name="memberIds">
              {({ field }: FieldProps<FormValues["memberIds"], FormValues>) => (
                <FormControl mt={6} isInvalid={Boolean(props.errors.memberIds) && Boolean(props.touched.memberIds)}>
                  <FormLabel variant="large">Select Guild Mebers to Import</FormLabel>
                  <CheckboxGroup
                    colorScheme="blue"
                    onChange={(value) => {
                      props.setFieldValue("memberIds", value);
                    }}
                    value={field.value}
                  >
                    {Object.entries(memberPerRank).map(([rank, members]) => {
                      return (
                        <Box key={rank}>
                          <Text>Guild Rank {parseInt(rank, 10) + 1}</Text>
                          <Grid templateColumns="repeat(3, 1fr)" spacing={5} mt={2} mb={4}>
                            {members.map((member) => {
                              const pclass = selectById(CLASSES, member.character.playable_class.id);
                              return (
                                <Checkbox
                                  key={member.character.id}
                                  value={`${member.character.id}`}
                                  color={pclass ? `${pclass.color}.200` : undefined}
                                >
                                  {member.character.name}
                                </Checkbox>
                              );
                            })}
                          </Grid>
                        </Box>
                      );
                    })}
                  </CheckboxGroup>
                  <FormErrorMessage>{props.errors.memberIds}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Divider />
            <HStack width="100%" spacing={6} justifyContent="flex-end">
              <Button variant="ghost" flexShrink={0} colorScheme="blue" onClick={handleCancel}>
                Cancel
              </Button>
              <Button flexShrink={0} colorScheme="blue" type="submit">
                Import
              </Button>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}

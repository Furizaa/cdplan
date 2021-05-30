import React, { useState } from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { Checkbox, CheckboxGroup, Divider, Grid, HStack, VStack } from "@chakra-ui/react";
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
  memberIds: number[];
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

  const handleSubmit = (formValues: FormValues) => {
    const filteredMembers = memberList.filter((member) => formValues.memberIds.includes(member.id));
    const fetchPayloads = filteredMembers.map((member) => ({
      body: {
        type: "character",
        params: {
          region,
          realm: member.realm.slug,
          name: member.name.toLowerCase(),
        },
      },
      onUpdate: (result: DBC.API.AsyncStore<DBC.API.CharacterRequestResponse>) => console.log(result),
    }));

    setQueueProgress({ total: fetchPayloads.length, loaded: 0 });
    fetchMultiQueue({ payload: fetchPayloads, onProgress: (total, loaded) => setQueueProgress({ total, loaded }) });
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
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
                      props.setFieldValue(
                        "memberIds",
                        value.map((v) => parseInt(v as string, 10))
                      );
                    }}
                    value={field.value}
                  >
                    <Grid templateColumns="repeat(3, 1fr)" spacing={5} maxH="300px" overflowY="auto">
                      {memberList.map((member) => {
                        const pclass = selectById(CLASSES, member.playable_class.id);
                        return (
                          <Checkbox
                            key={member.id}
                            value={member.id}
                            color={pclass ? `${pclass.color}.200` : undefined}
                          >
                            {member.name}
                          </Checkbox>
                        );
                      })}
                    </Grid>
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

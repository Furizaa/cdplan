import React from "react";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { Checkbox, CheckboxGroup, Divider, Grid, HStack, VStack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { DBC } from "types";
import { CLASSES, selectById } from "@cdplan/db";

interface RosterFormImportSelectGuildMembersProps {
  memberList: DBC.API.GuildMember[];
  onCancel?: () => void;
}

interface FormValues {
  memberIds: number[];
}

export default function RosterFormImportSelectGuildMembers({
  onCancel,
  memberList,
}: RosterFormImportSelectGuildMembersProps) {
  const handleSubmit = (formValues: FormValues) => {
    if (onCancel) {
      onCancel();
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

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
                      console.log(value);
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

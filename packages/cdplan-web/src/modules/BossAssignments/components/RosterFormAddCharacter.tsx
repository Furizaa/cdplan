import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import React, { useCallback } from "react";
import * as Yup from "yup";
import { SPECS, COVENANTS, CLASSES } from "@cdplan/db";
import { ClassSpec, Covenant, CovenantId, PClass, SpecId } from "@dbc/types";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Box, Divider, Flex, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import RadioButton from "./RadioButton";
import GameIcon from "./GameIcon";

interface RosterFormAddCharacterProps {
  onCancel?: () => void;
}

interface FormValues {
  characterName: string;
  characterSpec: SpecId | undefined;
  characterCovenant: CovenantId | undefined;
}

const formSchema = Yup.object().shape({
  characterName: Yup.string()
    .min(2, "Character name is to short")
    .max(12, "Character name is to long")
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/g, "Charatcer name may not contain spaces, digits or symbols")
    .required("Character name is required"),
  characterSpec: Yup.number().required("Specialization is required"),
  characterCovenant: Yup.number().required("Covenant is required"),
});

const SPEC_LIST = Object.values(SPECS) as ClassSpec[];

const COVENANT_LIST = Object.values(COVENANTS) as Covenant[];

export default function RosterFormAddCharacter({ onCancel }: RosterFormAddCharacterProps) {
  const addCharacterToRoster = useRosterStore(useCallback((store) => store.addCharacterToRoster, []));

  const handleSubmit = (formValues: FormValues) => {
    const characterClass = (Object.values(CLASSES) as PClass[]).find(
      (pClass) =>
        formValues.characterSpec &&
        (Object.values(pClass.specs) as ClassSpec[]).find((spec) => spec.id === formValues.characterSpec)
    );

    if (characterClass && formValues.characterSpec && formValues.characterCovenant) {
      addCharacterToRoster(
        formValues.characterName,
        characterClass.id,
        formValues.characterSpec,
        formValues.characterCovenant
      );
    }
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
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ characterName: "", characterSpec: undefined, characterCovenant: undefined }}
      validationSchema={formSchema}
    >
      {(props: FormikProps<FormValues>) => (
        <Form>
          <VStack spacing={6}>
            <Field name="characterName">
              {({ field }: FieldProps<FormValues["characterName"], FormValues>) => (
                <FormControl
                  mt={6}
                  isInvalid={Boolean(props.errors.characterName) && Boolean(props.touched.characterName)}
                >
                  <FormLabel variant="large">Character Name</FormLabel>
                  <Input
                    variant="filled"
                    onChange={(event) => props.setFieldValue("characterName", event.target.value)}
                    value={field.value}
                  />
                  <FormErrorMessage>{props.errors.characterName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="characterSpec">
              {({ field }: FieldProps<FormValues["characterSpec"], FormValues>) => (
                <FormControl isInvalid={Boolean(props.errors.characterSpec) && Boolean(props.touched.characterSpec)}>
                  <FormLabel variant="large">Specialization</FormLabel>

                  <Flex wrap="wrap">
                    {SPEC_LIST.map((spec) => (
                      <Box key={spec.id}>
                        <RadioButton
                          value={spec.id}
                          isChecked={spec.id === field.value}
                          onChange={(value) => {
                            props.setFieldValue("characterSpec", parseInt(value.target.value, 10));
                          }}
                        >
                          <GameIcon name={spec.icon} />
                        </RadioButton>
                      </Box>
                    ))}
                  </Flex>

                  <FormErrorMessage>{props.errors.characterSpec}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="characterCovenant">
              {({ field }: FieldProps<FormValues["characterCovenant"], FormValues>) => (
                <FormControl
                  isInvalid={Boolean(props.errors.characterCovenant) && Boolean(props.touched.characterCovenant)}
                >
                  <FormLabel variant="large">Covenant</FormLabel>
                  <RadioGroup
                    name="characterCovenant"
                    colorScheme="purple"
                    onChange={(value) => {
                      props.setFieldValue("characterCovenant", parseInt(value, 10));
                    }}
                    value={field.value}
                  >
                    <HStack spacing={8}>
                      {COVENANT_LIST.map((cov) => (
                        <Radio key={cov.id} value={cov.id}>
                          {cov.name}
                        </Radio>
                      ))}
                    </HStack>
                  </RadioGroup>
                  <FormErrorMessage>{props.errors.characterCovenant}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Divider />
            <HStack width="100%" spacing={6} justifyContent="flex-end">
              <Button variant="ghost" flexShrink={0} colorScheme="blue" onClick={handleCancel}>
                Cancel
              </Button>
              <Button flexShrink={0} colorScheme="blue" type="submit">
                Create
              </Button>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}

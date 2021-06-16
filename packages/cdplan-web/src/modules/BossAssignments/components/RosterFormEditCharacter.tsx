import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import React, { useCallback } from "react";
import * as Yup from "yup";
import { DBC, RosterCharacterId } from "types";
import { CLASSES, COVENANTS, selectById } from "@cdplan/db";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Box, Divider, Flex, HStack, VStack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import RadioButton from "./RadioButton";
import GameIcon from "./GameIcon";
import InlineCharacter from "./InlineCharacter";

interface RosterFormEditCharacterProps {
  characterId: RosterCharacterId;
  onCancel?: () => void;
}

interface FormValues {
  characterSpec: DBC.SpecId | undefined;
  characterCovenant: DBC.CovenantId | undefined;
}

const formSchema = Yup.object().shape({
  characterSpec: Yup.number().required("Specialization is required"),
  characterCovenant: Yup.number().required("Covenant is required"),
});

const COVENANT_LIST = Object.values(COVENANTS) as DBC.Covenant[];

export default function RosterFormEditCharacter({ onCancel, characterId }: RosterFormEditCharacterProps) {
  const [character, editCharacter] = useRosterStore(
    useCallback((store) => [store.roster[characterId], store.editCharacter], [characterId])
  );

  const handleSubmit = (formValues: FormValues) => {
    if (formValues.characterSpec && formValues.characterCovenant) {
      editCharacter(
        character.id,
        character.name,
        character.pclass.id,
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

  const pclass = selectById(CLASSES, character.pclass.id);

  if (!pclass) {
    return null;
  }

  const SPEC_LIST: DBC.ClassSpec[] = Object.values(pclass.specs).filter(Boolean) as DBC.ClassSpec[];

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ characterSpec: character.spec.id, characterCovenant: character.covenant.id }}
      validationSchema={formSchema}
    >
      {(props: FormikProps<FormValues>) => (
        <Form>
          <VStack spacing={6} align="start">
            <Box>
              <InlineCharacter fontSize="2xl" fontWeight="bold" characterId={character.id} />
            </Box>
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
                Save
              </Button>
            </HStack>
          </VStack>
        </Form>
      )}
    </Formik>
  );
}

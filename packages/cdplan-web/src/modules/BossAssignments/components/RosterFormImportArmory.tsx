import React from "react";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import dbRealmList from "@dbc/dbRealmList.json";
import supportedRegions from "../../../data/supportedRegions";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { API } from "types";

export interface RosterFormImportArmoryProps {
  onLoadedCharacter?: () => void;
}

interface FormValues {
  region: API.Region;
  realmId: API.RealmReference["id"] | undefined;
  characterName: string;
}

const validRealmIdsForRegionBuffer: Record<string, number[]> = supportedRegions.reduce(
  (prev, region) => ({ ...prev, [region]: dbRealmList[region].map((item) => item.id) }),
  {}
);

export default function RosterFormImportArmory({ onLoadedCharacter }: RosterFormImportArmoryProps) {
  const validationSchema = Yup.lazy((values) => {
    const currentRegion = (values as FormValues).region;
    const validRealmIds = validRealmIdsForRegionBuffer[currentRegion as string] as number[];
    return Yup.object().shape({
      region: Yup.string().oneOf(supportedRegions, "This region is not supported"),
      realmId: Yup.number().required("Realm selection is required").oneOf(validRealmIds, "This realm is not supported"),
      characterName: Yup.string()
        .min(2, "Character name is to short")
        .max(12, "Character name is to long")
        .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/g, "Charatcer name cannot contain spaces, digits or symbols")
        .required("Character name is required"),
    });
  });

  const handleSubmit = async (formValues: FormValues) => {};

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ region: "us", realmId: undefined, characterName: "" }}
      validationSchema={validationSchema}
    >
      {(props: FormikProps<FormValues>) => {
        return (
          <Form>
            <Field name="region">
              {({ field }: FieldProps<FormValues["region"], FormValues>) => (
                <FormControl isInvalid={Boolean(props.errors.region) && Boolean(props.touched.region)}>
                  <FormLabel>Region</FormLabel>
                  <RadioGroup
                    name="region"
                    colorScheme="purple"
                    onChange={(value) => {
                      props.setFieldValue("region", value);
                      props.setFieldValue("realm", undefined);
                    }}
                    value={field.value}
                    disabled={isLoadingGuild}
                  >
                    <HStack spacing={5}>
                      {supportedRegions.map((region) => (
                        <Radio key={region} value={region}>
                          {region.toUpperCase()}
                        </Radio>
                      ))}
                    </HStack>
                  </RadioGroup>
                  <FormErrorMessage>{props.errors.region}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="realm">
              {({ field }: FieldProps<FormValues["realmId"], FormValues>) => (
                <FormControl mt={6} isInvalid={Boolean(props.errors.realmId) && Boolean(props.touched.realmId)}>
                  <FormLabel variant="large">Realm</FormLabel>
                  <Select
                    placeholder="Select Realm"
                    onChange={(event) => props.setFieldValue("realmId", parseInt(event.target.value, 10))}
                    value={field.value}
                    variant="filled"
                    disabled={isLoadingGuild}
                  >
                    {dbRealmList[props.values.region].map((realm: WOW.RealmReference) => (
                      <option key={realm.id} value={realm.id}>
                        {realm.name.en_US}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{props.errors.realmId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

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
                    disabled={isLoadingGuild}
                  />
                  <FormErrorMessage>{props.errors.characterName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <HStack mt={6} spacing={6}>
              <Button flexShrink={0} isLoading={isLoadingGuild} colorScheme="blue" type="submit">
                Import
              </Button>
              {!isLoadingGuild && loadError ? (
                <HStack color="red.400">
                  <WarningIcon fontSize="xl" mr={4} />
                  {loadError && loadError.code === 404 ? (
                    <Box>
                      <Text fontWeight="bold">Character Not Found</Text>
                      <Text fontSize="xs">
                        Make sure you values are correct and that this character has been logged in recently.
                      </Text>
                    </Box>
                  ) : (
                    <Box>
                      <Text fontWeight="bold">Unexpected Result</Text>
                      <Text fontSize="xs">The BNet api returned an unexpected result. Please try again later.</Text>
                    </Box>
                  )}
                </HStack>
              ) : null}
              {isLoadingGuild && queueWaitTimeSeconds > 0 ? (
                <HStack color="blue.400">
                  <RepeatClockIcon fontSize="xl" mr={4} />
                  <Text fontSize="sm" fontWeight="bold">{`Queued. Estimated wait time: ${Math.ceil(
                    queueWaitTimeSeconds / 1000
                  )} seconds.`}</Text>
                </HStack>
              ) : null}
            </HStack>
          </Form>
        );
      }}
    </Formik>
  );
}

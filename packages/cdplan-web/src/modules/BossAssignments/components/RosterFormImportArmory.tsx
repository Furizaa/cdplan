import React from "react";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { REALMS, REGIONS } from "@cdplan/db";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { API } from "@dbc/types";
import useGuildImport from "@BossAssignments/hooks/useGuildImport";
import { RiErrorWarningFill, RiTimeFill } from "react-icons/ri";

export interface RosterFormImportArmoryProps {
  onLoadedCharacter?: () => void;
}

interface FormValues {
  region: API.Region;
  realmId: API.RealmReference["id"] | undefined;
  guildName: string;
}

const validRealmIdsForRegionBuffer: Record<string, number[]> = REGIONS.reduce(
  (prev, region) => ({
    ...prev,
    [region]: REALMS[region].filter(Boolean).map((item) => item.id),
  }),
  {}
);

export default function RosterFormImportArmory({ onLoadedCharacter }: RosterFormImportArmoryProps) {
  const [loadError, loadGuild, isLoadingGuild, queueWaitTimeSeconds] = useGuildImport();

  const validationSchema = Yup.lazy((values) => {
    const currentRegion = (values as FormValues).region;
    const validRealmIds = validRealmIdsForRegionBuffer[currentRegion as string] as number[];
    return Yup.object().shape({
      region: Yup.string().oneOf(REGIONS, "This region is not supported"),
      realmId: Yup.number().required("Realm selection is required").oneOf(validRealmIds, "This realm is not supported"),
      guildName: Yup.string()
        .min(2, "Guild name is to short")
        .max(38, "Guild name is to long")
        .required("Guild name is required"),
    });
  });

  const handleSubmit = async (formValues: FormValues) => {
    const realm = REALMS[formValues.region].find((item) => item.id === formValues.realmId);
    if (realm) {
      await loadGuild(
        {
          name: formValues.guildName.trim().toLowerCase(),
          region: formValues.region,
          realm: realm.slug,
        },
        () => {
          if (onLoadedCharacter) {
            onLoadedCharacter();
          }
        }
      );
    }
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ region: "us", realmId: undefined, guildName: "" }}
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
                      {REGIONS.map((region) => (
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
                    {REALMS[props.values.region].map((realm) => (
                      <option key={realm.id} value={realm.id}>
                        {realm.name.en_US}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage>{props.errors.realmId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="guildName">
              {({ field }: FieldProps<FormValues["guildName"], FormValues>) => (
                <FormControl mt={6} isInvalid={Boolean(props.errors.guildName) && Boolean(props.touched.guildName)}>
                  <FormLabel variant="large">Guild Name</FormLabel>
                  <Input
                    variant="filled"
                    onChange={(event) => props.setFieldValue("guildName", event.target.value)}
                    value={field.value}
                    disabled={isLoadingGuild}
                  />
                  <FormErrorMessage>{props.errors.guildName}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <HStack mt={6} spacing={6}>
              <Button flexShrink={0} isLoading={isLoadingGuild} colorScheme="blue" type="submit">
                Import
              </Button>
              {!isLoadingGuild && loadError ? (
                <HStack color="red.400">
                  <Box mr={4}>
                    <RiErrorWarningFill fontSize="xl" />
                  </Box>
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
                  <Box mr={4}>
                    <RiTimeFill fontSize="xl" />
                  </Box>
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

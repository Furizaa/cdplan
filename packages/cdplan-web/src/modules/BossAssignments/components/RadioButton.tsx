import React, { PropsWithChildren } from "react";
import { Box } from "@chakra-ui/layout";
import { useRadio, UseRadioProps } from "@chakra-ui/radio";

interface RadioButtonProps extends PropsWithChildren<UseRadioProps> {}

export default function RadioButton({ children, ...useRadioProps }: RadioButtonProps) {
  const { getInputProps, getCheckboxProps } = useRadio(useRadioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="sm"
        borderColor="gray.700"
        boxShadow="sm"
        width="41px"
        height="41px"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "blue.200",
        }}
        _focus={{
          boxShadow: "outline",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

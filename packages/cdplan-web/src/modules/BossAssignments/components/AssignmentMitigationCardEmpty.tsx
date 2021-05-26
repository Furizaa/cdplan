import { Button, ButtonProps, IconButton } from "@chakra-ui/button";
import { MechanicMitigationFlavor } from "@dbc/types";
import { RiAddFill } from "react-icons/ri";
import React from "react";
import Icon from "@chakra-ui/icon";

export interface AssignmentMitigationCardEmptyProps extends Omit<ButtonProps, "onClick"> {
  flavor: MechanicMitigationFlavor;
  condensed?: boolean;
  onClick?: () => void;
}

const getFlavorText = (flavor: MechanicMitigationFlavor) => {
  switch (flavor) {
    case "HealingCooldowns":
      return "Defensive";
      break;
    case "OffensiveBurst":
      return "Offensive";
      break;
    case "Mobility":
      return "Mobility";
      break;
    case "PlayerSoak":
      return "Player";
      break;

    default:
      return "Other";
      break;
  }
};

export default function AssignmentMitigationCardEmpty({
  flavor,
  onClick,
  condensed = false,
  ...boxProps
}: AssignmentMitigationCardEmptyProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (condensed) {
    return (
      <IconButton
        borderRadius="md"
        size="sm"
        icon={<RiAddFill />}
        variant="outline"
        onClick={handleClick}
        aria-label="add"
      />
    );
  }

  return (
    <Button
      borderRadius="md"
      cursor="pointer"
      overflow="hidden"
      width="120px"
      size="sm"
      color="gray.400"
      justifyContent="start"
      leftIcon={<Icon as={RiAddFill} />}
      variant="outline"
      onClick={handleClick}
      {...boxProps}
    >
      {getFlavorText(flavor)}
    </Button>
  );
}

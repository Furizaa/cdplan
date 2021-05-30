import { Button, ButtonProps, IconButton } from "@chakra-ui/button";
import { RiAddFill } from "react-icons/ri";
import React from "react";
import Icon from "@chakra-ui/icon";
import { DBC } from "types";

export interface AssignmentMitigationCardEmptyProps extends Omit<ButtonProps, "onClick"> {
  flavor: DBC.MechanicMitigationFlavor;
  condensed?: boolean;
  onClick?: () => void;
}

const getFlavorText = (flavor: DBC.MechanicMitigationFlavor) => {
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

import { Button, ButtonProps, IconButton } from "@chakra-ui/button";
import { RiAddFill } from "react-icons/ri";
import React, { forwardRef } from "react";
import Icon from "@chakra-ui/icon";
import { DBC } from "types";

export interface AssignmentMitigationCardEmptyProps extends Omit<ButtonProps, "onClick" | "ref"> {
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

export default forwardRef<HTMLButtonElement, AssignmentMitigationCardEmptyProps>(function AssignmentMitigationCardEmpty(
  { flavor, onClick, condensed = false, ...boxProps }: AssignmentMitigationCardEmptyProps,
  ref
) {
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
        width="32px"
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
      ref={ref}
      {...boxProps}
    >
      {getFlavorText(flavor)}
    </Button>
  );
});

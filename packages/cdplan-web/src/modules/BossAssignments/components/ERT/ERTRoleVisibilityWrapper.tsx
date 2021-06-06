import React, { PropsWithChildren } from "react";
import { DBC } from "types";

interface ERTRoleVisibilityWrapperProps {
  flavor: DBC.MechanicMitigationFlavor;
}

export default function ERTRoleVisibilityWrapper({
  flavor,
  children,
}: PropsWithChildren<ERTRoleVisibilityWrapperProps>) {
  let roleToken;

  switch (flavor) {
    case "HealingCooldowns":
      roleToken = "H";
      break;
    case "OffensiveBurst":
      roleToken = "D";
      break;
    default:
      roleToken = undefined;
  }

  if (roleToken) {
    return (
      <>
        {`{${roleToken}}`}
        {children}
        {`{/${roleToken}}`}
      </>
    );
  }

  return <>{children}</>;
}

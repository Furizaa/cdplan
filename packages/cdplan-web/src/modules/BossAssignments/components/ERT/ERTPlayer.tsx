import React from "react";
import { DBC } from "types";

interface ERTPlayerProps {
  name: string;
  pClass: DBC.PClass;
}

export default function ERTPlayer({ name, pClass }: ERTPlayerProps) {
  return <>{`|cff${pClass.colorHex}${name}|r`}</>;
}

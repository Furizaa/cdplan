import { addSeconds, format } from "date-fns";
import React from "react";
import { DBC } from "types";

interface ERTMechanicTriggerProps {
  mechanic: DBC.BossMechanic;
}

export default function ERTMechanicTrigger({ mechanic }: ERTMechanicTriggerProps) {
  if ("timeMs" in mechanic.trigger) {
    const time = format(addSeconds(new Date(0), mechanic.trigger.timeMs / 1000), "mm:ss");
    return <>{`{time:${time}}`}</>;
  }

  return <></>;
}

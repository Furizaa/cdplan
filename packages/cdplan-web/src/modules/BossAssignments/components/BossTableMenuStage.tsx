import { Select } from "@chakra-ui/select";
import React from "react";
import { DBC } from "types";

interface BossTableMenuStageProps {
  boss: DBC.Boss;
  value: string;
  onChange?: (value: string) => void;
}

export default function BossTableMenuStage({ boss, value, onChange }: BossTableMenuStageProps) {
  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <Select variant="filled" onChange={handleChange} value={value}>
      {Object.values(boss.stages).map((stage) => (
        <option key={stage.key} value={stage.slug}>
          {stage.name}
        </option>
      ))}
    </Select>
  );
}

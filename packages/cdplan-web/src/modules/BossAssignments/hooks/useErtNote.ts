import useBossStore from "@BossAssignments/store/useBossStore";
import useRosterStore from "@BossAssignments/store/useRosterStore";
import ertRenderer from "@BossAssignments/util/ertRenderer";
import { useCallback } from "react";
import { DBC } from "types";

export default function useErtNote(boss: DBC.Boss) {
  const cooldowns = useRosterStore(useCallback((store) => store.getCooldowns(), []));
  const mitigations = useBossStore(useCallback((store) => store.mitigations, []));

  return ertRenderer(boss, cooldowns, mitigations);
}

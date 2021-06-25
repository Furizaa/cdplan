import useBossStage from "@BossAssignments/hooks/useBossStage";
import { BOSSES } from "@cdplan/db";

export default function Index() {
  useBossStage(BOSSES.T26.SIRE_DENATHRIUS);

  return null;
}

import useBossStage from "@BossAssignments/hooks/useBossStage";
import { BOSSES } from "@cdplan/db";

export default function Index() {
  useBossStage(BOSSES.T27.EYE_OF_THE_JAILER);

  return null;
}

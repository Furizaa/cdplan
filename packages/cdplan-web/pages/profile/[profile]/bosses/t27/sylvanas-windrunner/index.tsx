import useBossTimelineRedirect from "@BossTimelines/hooks/useBossTimelineRedirect";
import { BOSSES } from "@cdplan/db";

export default function Index() {
  useBossTimelineRedirect(BOSSES.T27.SYLVANAS_WINDRUNNER);

  return null;
}

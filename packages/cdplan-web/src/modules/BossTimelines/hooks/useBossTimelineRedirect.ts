import useProfileStore from "@Core/store/useProfileStore";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect } from "react";
import { DBC } from "types";

export default function useBossTimelineRedirect(boss: DBC.Boss) {
  const router = useRouter();
  const activeProfile = useProfileStore(useCallback((store) => store.activeProfile, []));
  const stageSlug = router.query?.phase;

  useEffect(() => {
    if (!stageSlug && activeProfile) {
      router.replace({
        pathname: `/profile/[profile]/bosses/${boss.slug}/timeline`,
        query: { profile: activeProfile },
      });
    }
  }, [stageSlug, activeProfile]);
}

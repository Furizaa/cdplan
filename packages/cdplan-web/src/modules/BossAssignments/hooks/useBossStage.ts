import useProfileStore from "@Core/store/useProfileStore";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect } from "react";
import { DBC } from "types";

export default function useBossStage(boss: DBC.Boss) {
  const router = useRouter();
  const activeProfile = useProfileStore(useCallback((store) => store.activeProfile, []));
  const stageSlug = router.query?.phase;

  useEffect(() => {
    if (!stageSlug && activeProfile) {
      const stageOneSlug = Object.values(boss.stages)[0].slug;
      router.replace({
        pathname: `/profile/[profile]/bosses/${boss.slug}/[phase]`,
        query: { phase: stageOneSlug, profile: activeProfile },
      });
    }
  }, [stageSlug, activeProfile]);

  const bossStage = Object.values(boss.stages).find((item) => item.slug === stageSlug);

  const setBossStage = (slug: string) => {
    if (activeProfile) {
      router.push({
        pathname: `/profile/[profile]/bosses/${boss.slug}/[phase]`,
        query: { phase: slug, profile: activeProfile },
      });
    }
  };

  return { bossStage, setBossStage };
}

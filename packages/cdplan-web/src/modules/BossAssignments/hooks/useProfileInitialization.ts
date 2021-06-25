import useProfileStore from "@BossAssignments/store/useProfileStore";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect } from "react";
import { ProfileId } from "types";

export default function useProfileInitialization() {
  const router = useRouter();
  const pathProfile = router.query.profile;
  const [profiles, activeProfile, createProfile, setActiveProfile] = useProfileStore(
    useCallback((store) => [store.profiles, store.activeProfile, store.createProfile, store.setActiveProfile], [])
  );

  // Handle initial setup if no profiles exist
  useEffect(() => {
    if (Object.values(profiles).length === 0) {
      createProfile("New Profile");
    }
  }, [profiles]);

  // Always activate one profile
  useEffect(() => {
    const firstProfile = Object.values(profiles)[0];
    if (!pathProfile && firstProfile) {
      router.push({
        pathname: `/profile/[profile]`,
        query: { profile: firstProfile.id },
      });
    }
  }, [profiles, pathProfile]);

  // Set active profile
  useEffect(() => {
    if (pathProfile && !activeProfile) {
      setActiveProfile(pathProfile as ProfileId);
    }
  }, [activeProfile, pathProfile]);
}

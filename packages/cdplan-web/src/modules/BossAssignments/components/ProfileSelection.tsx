import React, { useCallback } from "react";
import useProfileStore from "@BossAssignments/store/useProfileStore";
import { HStack, IconButton, Select } from "@chakra-ui/react";
import { RiSettings4Fill } from "react-icons/ri";
import useProfileInitialization from "@BossAssignments/hooks/useProfileInitialization";

export default function ProfileSelection() {
  useProfileInitialization();

  const [profiles, activeProfile] = useProfileStore(useCallback((store) => [store.profiles, store.activeProfile], []));

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <HStack w="100%">
      <Select size="sm" variant="filled" value={activeProfile}>
        {Object.values(profiles).map((profile) => (
          <option key={profile.id} value={profile.id}>
            {profile.name}
          </option>
        ))}
      </Select>
      <IconButton variant="ghost" size="sm" aria-label="Profile Options" icon={<RiSettings4Fill />} />
    </HStack>
  );
}

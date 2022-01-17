import React, { useCallback } from "react";
import useProfileStore from "@Core/store/useProfileStore";
import { HStack, IconButton, Select } from "@chakra-ui/react";
import { RiSettings4Fill } from "react-icons/ri";
import useProfileInitialization from "@Core/hooks/useProfileInitialization";

export default function ProfileSelection() {
  const [profiles, activeProfile] = useProfileStore(useCallback((store) => [store.profiles, store.activeProfile], []));

  useProfileInitialization();

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

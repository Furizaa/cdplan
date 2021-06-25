import { Image, ImageProps } from "@chakra-ui/image";
import { RaidMarkerUnion } from "@dbc/types";
import React from "react";

interface RaidMarkerProps extends ImageProps {
  marker: RaidMarkerUnion;
  size?: "xs" | "sm" | "md" | "xl" | "2xl";
}

export default function RaidMarker({ marker, size = "md", ...props }: RaidMarkerProps) {
  let width = "32px";
  if (size === "xs") {
    width = "18px";
  }
  if (size === "sm") {
    width = "24px";
  }
  if (size === "xl") {
    width = "42px";
  }
  if (size === "2xl") {
    width = "48px";
  }

  return <Image width={width} height={width} src={`/IconSmall_Raid${marker}.webp`} {...props} />;
}

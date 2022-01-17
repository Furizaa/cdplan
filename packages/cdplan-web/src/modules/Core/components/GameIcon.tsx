import { Image, ImageProps } from "@chakra-ui/image";
import React from "react";

interface GameIconProps extends ImageProps {
  name: string;
  size?: "xs" | "sm" | "md" | "xl" | "2xl";
}

const GameIcon = React.forwardRef<HTMLImageElement, GameIconProps>(
  ({ name, size = "md", ...props }: GameIconProps, ref) => {
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

    return (
      <Image
        ref={ref}
        width={width}
        height={width}
        src={`https://wow.zamimg.com/images/wow/icons/medium/${name}.jpg`}
        {...props}
      />
    );
  }
);

export default GameIcon;

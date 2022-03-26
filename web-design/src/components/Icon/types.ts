import * as React from "react";
import {
  BeakerIcon,
  EmojiHappyIcon,
  HeartIcon,
  SparklesIcon,
  ClockIcon,
  GlobeIcon,
  CubeIcon,
} from "@heroicons/react/outline";

const createIcons = <
  IconsType extends Record<
    string,
    // Just copying the return type for those Heroicons components
    (props: React.ComponentProps<"svg">) => JSX.Element
  >
>(
  icons: IconsType
) => icons;

export const icons = createIcons({
  beaker: BeakerIcon,
  "emoji-happy": EmojiHappyIcon,
  heart: HeartIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
  globe: GlobeIcon,
  cube: CubeIcon,
});

export type IconType = keyof typeof icons;

export interface IconWrapperProps {
  strokeWidth: number;
}

export interface IconProps extends React.ComponentPropsWithoutRef<"div"> {
  id: IconType;
  color: string;
  size: number;
  strokeWidth?: number;
}

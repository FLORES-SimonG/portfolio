import { useId, type CSSProperties } from "react";

import { iconPaths } from "./IconPaths";

export type IconName = keyof typeof iconPaths;

type Props = {
  icon: IconName;
  color?: string;
  gradient?: boolean;
  size?: string;
};

export default function Icon({
  color = "currentcolor",
  gradient,
  icon,
  size,
}: Props) {
  const iconPath = iconPaths[icon];
  const reactId = useId();
  // React useId includes colons; remove them to keep SVG ids safe for URL fragment refs in browser CSS/SVG parsing.
  const gradientId = `icon-gradient-${reactId.replace(/:/g, "")}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={gradient ? `url(#${gradientId})` : color}
      fill={gradient ? `url(#${gradientId})` : color}
      style={
        size ? ({ ["--size" as string]: size } as CSSProperties) : undefined
      }
    >
      <g dangerouslySetInnerHTML={{ __html: iconPath }} />
      {gradient ? (
        <linearGradient
          id={gradientId}
          x1="23"
          x2="235"
          y1="43"
          y2="202"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="var(--gradient-stop-1)" />
          <stop offset=".5" stopColor="var(--gradient-stop-2)" />
          <stop offset="1" stopColor="var(--gradient-stop-3)" />
        </linearGradient>
      ) : null}
    </svg>
  );
}

import type { ReactNode } from "react";
import type { FeatureIconKey, PlatformKey } from "../lib/constants";

type SvgProps = {
  size?: number;
  color?: string;
};

// components/icons/Icons.tsx
// ─── All reusable SVG icons in one place ───────────────────────────────────

export const PlayIcon = () => (
  <svg
    width={14} height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const DownloadIcon = ({
  size  = 18,
  color = "white",
}: {
  size?:  number;
  color?: string;
}) => (
  <svg
    width={size} height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1={12} y1={15} x2={12} y2={3} />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    width={13} height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1={5} y1={12} x2={19} y2={12} />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const GitHubIcon = () => (
  <svg
    width={14} height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const CheckIcon = () => (
  <svg
    width={14} height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ef4444"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const platformIcons: Record<PlatformKey, (props: SvgProps) => ReactNode> = {
  windows: ({ size = 34, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M3 4.6 10.7 3.5v7.4H3V4.6Zm8.7-1.3L21 2v8.9h-9.3V3.3ZM3 12h7.7v7.5L3 18.4V12Zm8.7 0H21v10l-9.3-1.3V12Z" />
    </svg>
  ),
  mac: ({ size = 34, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.7 13.1c0-2.1 1.7-3.1 1.8-3.2-1-1.5-2.6-1.7-3.1-1.7-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.6 2.2 2.7 2.1 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1 2.6-2.1.8-1.2 1.1-2.3 1.2-2.4 0-.1-2.6-1.1-2.6-3.3Z"
        fill={color}
      />
      <path
        d="M14.6 6.8c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.5 1.3-.6.7-1 1.6-.9 2.6.9.1 1.9-.5 2.5-1.2Z"
        fill={color}
      />
    </svg>
  ),
  linux: ({ size = 34, color = "currentColor" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8.2 19.2h7.6l1.9 2.3H6.3l1.9-2.3Z" fill={color} opacity=".95" />
      <path d="M7 14.2c0-3.8 2.1-6.7 5-6.7s5 2.9 5 6.7v2.2c0 1.6-1.3 2.9-2.9 2.9H9.9A2.9 2.9 0 0 1 7 16.4v-2.2Z" stroke={color} strokeWidth="1.7" />
      <path d="M9.4 7.9C9.4 4.8 10.5 3 12 3s2.6 1.8 2.6 4.9" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      <path d="M10.1 11.2h.1M13.8 11.2h.1" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M10.6 14.4c.8.5 2 .5 2.8 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function PlatformIcon({
  platform,
  size = 34,
  color = "currentColor",
}: SvgProps & {
  platform: PlatformKey;
}) {
  const Icon = platformIcons[platform];
  return <Icon size={size} color={color} />;
}

const featureIconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const featureIcons: Record<FeatureIconKey, ReactNode> = {
  "screen-webcam": (
    <>
      <rect x="3" y="5" width="13" height="10" rx="2" />
      <path d="M8 19h3M9.5 15v4" />
      <circle cx="18" cy="16" r="3" />
      <path d="M20.5 13.8 22 12.7v6.6l-1.5-1.1" />
    </>
  ),
  audio: (
    <>
      <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3Z" />
      <path d="M19 11a7 7 0 0 1-14 0M12 18v3M8.5 21h7" />
    </>
  ),
  overlay: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <rect x="7" y="13" width="10" height="5" rx="2" />
      <path d="M8 8h8M8 10.8h5" />
    </>
  ),
  convert: (
    <>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v5h5M9 15h6M12 12v6" />
      <path d="m15 15-3 3-3-3" />
    </>
  ),
  "file-size": (
    <>
      <path d="M5 20V7M10 20V4M15 20v-9M20 20v-5" />
      <path d="M3 20h18" />
    </>
  ),
  storage: (
    <>
      <path d="M3 7h7l2 2h9v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M3 7V6a2 2 0 0 1 2-2h4l2 3" />
    </>
  ),
  quality: (
    <>
      <path d="M4 7h16M7 12h10M10 17h4" />
      <circle cx="7" cy="7" r="2" />
      <circle cx="17" cy="12" r="2" />
      <circle cx="10" cy="17" r="2" />
    </>
  ),
  visualizer: (
    <>
      <path d="M4 13v-2M8 17V7M12 20V4M16 17V7M20 13v-2" />
    </>
  ),
  timer: (
    <>
      <circle cx="12" cy="13" r="7" />
      <path d="M12 13V9M12 13l3 2M9 3h6M12 3v3" />
    </>
  ),
};

export function FeatureIcon({
  icon,
  size = 26,
}: {
  icon: FeatureIconKey;
  size?: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...featureIconProps} aria-hidden="true">
      {featureIcons[icon]}
    </svg>
  );
}

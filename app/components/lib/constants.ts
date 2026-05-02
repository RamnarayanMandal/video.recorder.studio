export type PlatformKey = "windows" | "mac" | "linux";

export interface Platform {
  label: string;
  icon: PlatformKey;
  ext: string;
  color: string;
  hint: string;
  file: string;
  size: string;
  downloadUrl: string;
}

export interface Feature {
  icon: FeatureIconKey;
  title: string;
  desc: string;
}

export type FeatureIconKey =
  | "screen-webcam"
  | "audio"
  | "overlay"
  | "convert"
  | "file-size"
  | "storage"
  | "quality"
  | "visualizer"
  | "timer";

export interface ChangelogItem {
  e: string;
  t: string;
}

export interface Tech {
  name: string;
  color: string;
}

export interface ReleaseData {
  VERSION: string;
  RELEASE_DATE: string;
  RELEASE_DATE_ISO: string;
  REPO: string;
  RELEASES_URL: string;
  DL_BASE: string;
  PLATFORMS: Record<PlatformKey, Platform>;
  CHANGELOG: ChangelogItem[];
}

export const REPO = "https://github.com/RamnarayanMandal/video-recorder-studio";
export const REPO_API = "https://api.github.com/repos/RamnarayanMandal/video-recorder-studio";

export const FEATURES: Feature[] = [
  {
    icon: "screen-webcam",
    title: "Screen + Webcam",
    desc: "Record full screen, a specific window, or combine screen and webcam with a live floating preview overlay.",
  },
  {
    icon: "audio",
    title: "Mic + System Audio",
    desc: "Capture microphone and system sound simultaneously with independent live level meters.",
  },
  {
    icon: "overlay",
    title: "Floating Overlay UI",
    desc: "Draggable and resizable glassmorphism control bar, always-on-top and always out of the way.",
  },
  {
    icon: "convert",
    title: "Background MP4 Convert",
    desc: "FFmpeg encodes in background using veryfast preset. No waiting, UI never freezes.",
  },
  {
    icon: "file-size",
    title: "Live File Size Tracking",
    desc: "Watch your file grow in real time with the live size indicator during every recording.",
  },
  {
    icon: "storage",
    title: "Smart Storage",
    desc: "Persistent folder selection, auto-cleanup, and WebM to MP4 background compression.",
  },
  {
    icon: "quality",
    title: "Quality Controls",
    desc: "Choose resolution, bitrate, and encoding speed. Supports GPU acceleration on NVIDIA and Intel.",
  },
  {
    icon: "visualizer",
    title: "Audio Visualization",
    desc: "Real-time mic level bars so you always know your audio is live before and during recording.",
  },
  {
    icon: "timer",
    title: "Live Recording Timer",
    desc: "Prominent live timer in the floating overlay so you never lose track of recording length.",
  },
];

export const TECH: Tech[] = [
  { name: "Electron", color: "#47848F" },
  { name: "React", color: "#61DAFB" },
  { name: "Vite", color: "#818cf8" },
  { name: "Node.js", color: "#4ade80" },
  { name: "FFmpeg", color: "#22c55e" },
  { name: "JavaScript", color: "#fbbf24" },
];

const PLATFORM_META: Record<PlatformKey, Omit<Platform, "file" | "size" | "downloadUrl">> = {
  windows: {
    label: "Windows",
    icon: "windows",
    ext: ".exe",
    color: "#3b9eff",
    hint: "Windows 10 / 11, 64-bit",
  },
  mac: {
    label: "macOS",
    icon: "mac",
    ext: ".dmg",
    color: "#a8b8c8",
    hint: "macOS 12+, Apple Silicon",
  },
  linux: {
    label: "Linux",
    icon: "linux",
    ext: ".AppImage",
    color: "#f59e0b",
    hint: "Ubuntu 20.04+ / Debian 11+ / Fedora 35+",
  },
};

export const CHANGELOG_FALLBACK: ChangelogItem[] = [
  { e: "FIX", t: "Fixed multiple preview window issue with a singleton overlay." },
  { e: "FIX", t: "Fixed blank overlay window so live preview renders correctly." },
  { e: "NEW", t: "Added draggable and resizable floating overlay window." },
  { e: "NEW", t: "Added floating control bar with modern controls." },
  { e: "REC", t: "Added recording indicator and live timer to the overlay." },
  { e: "MP4", t: "Improved FFmpeg binary path resolution on all platforms." },
];

export const FALLBACK_RELEASE: ReleaseData = {
  VERSION: "v2.3.6",
  RELEASE_DATE: "May 2, 2026",
  RELEASE_DATE_ISO: "2026-05-02",
  REPO,
  RELEASES_URL: `${REPO}/releases/tag/v2.3.6`,
  DL_BASE: `${REPO}/releases/download/v2.3.6`,
  PLATFORMS: {
    windows: {
      ...PLATFORM_META.windows,
      file: "Video-Recorder-Studio-Setup-2.3.6.exe",
      size: "N/A",
      downloadUrl: `${REPO}/releases/download/v2.3.6/Video-Recorder-Studio-Setup-2.3.6.exe`,
    },
    mac: {
      ...PLATFORM_META.mac,
      file: "Video-Recorder-Studio-2.3.6-arm64.dmg",
      size: "~109 MB",
      downloadUrl: `${REPO}/releases/download/v2.3.6/Video-Recorder-Studio-2.3.6-arm64.dmg`,
    },
    linux: {
      ...PLATFORM_META.linux,
      file: "Video-Recorder-Studio-2.3.6.AppImage",
      size: "~130 MB",
      downloadUrl: `${REPO}/releases/download/v2.3.6/Video-Recorder-Studio-2.3.6.AppImage`,
    },
  },
  CHANGELOG: CHANGELOG_FALLBACK,
};

export const {
  VERSION,
  RELEASE_DATE,
  RELEASE_DATE_ISO,
  RELEASES_URL,
  DL_BASE,
  PLATFORMS,
  CHANGELOG,
} = FALLBACK_RELEASE;

// Bug fix: bytes === 0 bhi falsy tha, ab properly handle ho raha hai
export function formatBytes(bytes?: number): string {
  if (bytes === undefined || bytes === null || bytes === 0) return "N/A";
  return `~${Math.round(bytes / 1_048_576)} MB`;
}

export function getPlatformMeta() {
  return PLATFORM_META;
}

export function detectOS(): PlatformKey | "unknown" {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const pl = navigator.platform || "";
  if (/Win/i.test(pl) || /Windows/i.test(ua)) return "windows";
  if (/Mac/i.test(pl) || /Macintosh/i.test(ua)) return "mac";
  if (/Linux/i.test(pl) || /Linux/i.test(ua)) return "linux";
  return "unknown";
}

export function triggerDownload(
  key: PlatformKey,
  platforms: Record<PlatformKey, Platform> = PLATFORMS,
): string {
  const p = platforms[key];
  if (!p || p.downloadUrl === "#") return "";

  const a = document.createElement("a");
  a.href = p.downloadUrl;
  a.download = p.file;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  return `Downloading ${p.label} ${p.ext} - ${p.size}`;
}
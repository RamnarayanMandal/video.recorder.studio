// ─────────────────────────────────────────────
//  lib/constants.ts  — single source of truth
// ─────────────────────────────────────────────

export const VERSION      = "v2.3.1";
export const RELEASE_DATE = "April 21, 2026";
export const REPO         = "https://github.com/RamnarayanMandal/video-recorder-studio";
export const RELEASES_URL = `${REPO}/releases/tag/${VERSION}`;
export const DL_BASE      = `${REPO}/releases/download/${VERSION}`;

// ── Platforms ────────────────────────────────
export type PlatformKey = "windows" | "mac" | "linux";

export interface Platform {
  label: string;
  icon:  string;
  ext:   string;
  color: string;
  hint:  string;
  file:  string;
  size:  string;
}

export const PLATFORMS: Record<PlatformKey, Platform> = {
  windows: {
    label: "Windows",
    icon:  "🪟",
    ext:   ".exe",
    color: "#3b9eff",
    hint:  "Windows 10 / 11 · 64-bit",
    file:  "video-recorder-studio.Setup.1.0.0.exe",
    size:  "~85 MB",
  },
  mac: {
    label: "macOS",
    icon:  "",
    ext:   ".dmg",
    color: "#a8b8c8",
    hint:  "macOS 12+ · Apple Silicon (arm64)",
    file:  "video-recorder-studio-1.0.0-arm64.dmg",
    size:  "~92 MB",
  },
  linux: {
    label: "Linux",
    icon:  "🐧",
    ext:   ".AppImage",
    color: "#f59e0b",
    hint:  "Ubuntu 20.04+ / Debian 11+ / Fedora 35+",
    file:  "video-recorder-studio-1.0.0.AppImage",
    size:  "~88 MB",
  },
};

// ── Features ─────────────────────────────────
export interface Feature {
  icon:  string;
  title: string;
  desc:  string;
}

export const FEATURES: Feature[] = [
  { icon:"🎥", title:"Screen + Webcam",         desc:"Record full screen, a specific window, or combine screen+webcam with a live floating preview overlay." },
  { icon:"🎙️", title:"Mic + System Audio",      desc:"Capture microphone and system sound simultaneously with independent live level meters." },
  { icon:"🪟", title:"Floating Overlay UI",     desc:"Draggable & resizable glassmorphism control bar — always-on-top, always out of the way." },
  { icon:"⚡", title:"Background MP4 Convert",  desc:"FFmpeg encodes in background using veryfast preset. No waiting, UI never freezes." },
  { icon:"📊", title:"Live File Size Tracking", desc:"Watch your file grow in real-time with the live size indicator during every recording." },
  { icon:"🗂️", title:"Smart Storage",           desc:"Persistent folder selection, auto-cleanup, and WebM → MP4 background compression." },
  { icon:"🎚️", title:"Quality Controls",        desc:"Choose resolution, bitrate, and encoding speed. Supports GPU acceleration (NVIDIA/Intel)." },
  { icon:"🔊", title:"Audio Visualization",     desc:"Real-time mic level bars so you always know your audio is live before and during recording." },
  { icon:"⏱️", title:"Live Recording Timer",    desc:"Prominent live timer in the floating overlay so you never lose track of recording length." },
];

// ── Changelog ────────────────────────────────
export interface ChangelogItem {
  e: string;
  t: string;
}

export const CHANGELOG: ChangelogItem[] = [
  { e:"🪟", t:"Fixed multiple preview window issue (singleton overlay)" },
  { e:"🎥", t:"Fixed blank overlay window — live preview now works perfectly" },
  { e:"🎯", t:"Improved screen + webcam live rendering pipeline" },
  { e:"🧭", t:"Added draggable & resizable floating overlay window" },
  { e:"⏹",  t:"Stop recording now properly closes the preview window with full cleanup" },
  { e:"🎤", t:"Fixed microphone and camera selection issues" },
  { e:"▶️", t:"Fixed Start button not triggering the recording" },
  { e:"⚡", t:"Improved app stability and overall state management" },
  { e:"🎮", t:"Added floating control bar with modern design" },
  { e:"🔴", t:"REC indicator + live timer added to overlay" },
  { e:"🚀", t:"Significantly reduced preview lag" },
  { e:"🧹", t:"Better cleanup after recording stops — no ghost processes" },
];

// ── Tech Stack ───────────────────────────────
export interface Tech {
  name:  string;
  color: string;
}

export const TECH: Tech[] = [
  { name:"Electron",   color:"#47848F" },
  { name:"React",      color:"#61DAFB" },
  { name:"Vite",       color:"#818cf8" },
  { name:"Node.js",    color:"#4ade80" },
  { name:"FFmpeg",     color:"#22c55e" },
  { name:"JavaScript", color:"#fbbf24" },
];

// ── OS Detection ─────────────────────────────
export function detectOS(): PlatformKey | "unknown" {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const pl = navigator.platform || "";
  if (/Win/i.test(pl)   || /Windows/i.test(ua))   return "windows";
  if (/Mac/i.test(pl)   || /Macintosh/i.test(ua))  return "mac";
  if (/Linux/i.test(pl) || /Linux/i.test(ua))      return "linux";
  return "unknown";
}

// ── Download helper ──────────────────────────
export function triggerDownload(key: PlatformKey): string {
  const d = PLATFORMS[key];
  const url = `${DL_BASE}/${d.file}`;
  const a   = document.createElement("a");
  a.href     = url;
  a.download = d.file;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return `Downloading ${d.label} ${d.ext} · ${d.size}`;
}

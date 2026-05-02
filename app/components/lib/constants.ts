// ─────────────────────────────────────────────
//  lib/constants.ts  — live data from GitHub
// ─────────────────────────────────────────────

// ── Types ─────────────────────────────────────
export type PlatformKey = "windows" | "mac" | "linux";

export interface Platform {
  label: string;
  icon:  string;
  ext:   string;
  color: string;
  hint:  string;
  file:  string;
  size:  string;
  downloadUrl: string;
}

export interface Feature {
  icon:  string;
  title: string;
  desc:  string;
}

export interface ChangelogItem {
  e: string;
  t: string;
}

export interface Tech {
  name:  string;
  color: string;
}

export interface GHAsset {
  name:                 string;
  size:                 number;
  browser_download_url: string;
}

export interface GHRelease {
  tag_name:     string;
  published_at: string;
  html_url:     string;
  body:         string;
  assets:       GHAsset[];
}

export interface ResolvedConstants {
  VERSION:      string;
  RELEASE_DATE: string;
  REPO:         string;
  RELEASES_URL: string;
  DL_BASE:      string;
  PLATFORMS:    Record<PlatformKey, Platform>;
  FEATURES:     Feature[];
  CHANGELOG:    ChangelogItem[];
  TECH:         Tech[];
}

// ── Repo config ───────────────────────────────
const REPO      = "https://github.com/RamnarayanMandal/video-recorder-studio";
const REPO_API  = "https://api.github.com/repos/RamnarayanMandal/video-recorder-studio";

// ── Static platform metadata (non-release data) ─
const PLATFORM_META: Record<PlatformKey, Omit<Platform, "file" | "size" | "downloadUrl">> = {
  windows: {
    label: "Windows",
    icon:  "🪟",
    ext:   ".exe",
    color: "#3b9eff",
    hint:  "Windows 10 / 11 · 64-bit",
  },
  mac: {
    label: "macOS",
    icon:  "",
    ext:   ".dmg",
    color: "#a8b8c8",
    hint:  "macOS 12+ · Apple Silicon (arm64)",
  },
  linux: {
    label: "Linux",
    icon:  "🐧",
    ext:   ".AppImage",
    color: "#f59e0b",
    hint:  "Ubuntu 20.04+ / Debian 11+ / Fedora 35+",
  },
};

// ── Features — editorial, stays in code ───────
export const FEATURES: Feature[] = [
  { icon: "🎥", title: "Screen + Webcam",        desc: "Record full screen, a specific window, or combine screen+webcam with a live floating preview overlay." },
  { icon: "🎙️", title: "Mic + System Audio",     desc: "Capture microphone and system sound simultaneously with independent live level meters." },
  { icon: "🪟", title: "Floating Overlay UI",    desc: "Draggable & resizable glassmorphism control bar — always-on-top, always out of the way." },
  { icon: "⚡", title: "Background MP4 Convert", desc: "FFmpeg encodes in background using veryfast preset. No waiting, UI never freezes." },
  { icon: "📊", title: "Live File Size Tracking",desc: "Watch your file grow in real-time with the live size indicator during every recording." },
  { icon: "🗂️", title: "Smart Storage",          desc: "Persistent folder selection, auto-cleanup, and WebM → MP4 background compression." },
  { icon: "🎚️", title: "Quality Controls",       desc: "Choose resolution, bitrate, and encoding speed. Supports GPU acceleration (NVIDIA/Intel)." },
  { icon: "🔊", title: "Audio Visualization",    desc: "Real-time mic level bars so you always know your audio is live before and during recording." },
  { icon: "⏱️", title: "Live Recording Timer",   desc: "Prominent live timer in the floating overlay so you never lose track of recording length." },
];

// ── Tech stack — stays in code ────────────────
export const TECH: Tech[] = [
  { name: "Electron",   color: "#47848F" },
  { name: "React",      color: "#61DAFB" },
  { name: "Vite",       color: "#818cf8" },
  { name: "Node.js",    color: "#4ade80" },
  { name: "FFmpeg",     color: "#22c55e" },
  { name: "JavaScript", color: "#fbbf24" },
];

// ── Changelog fallback (used if GitHub body is empty / unparseable) ──
const CHANGELOG_FALLBACK: ChangelogItem[] = [
  { e: "🪟", t: "Fixed multiple preview window issue (singleton overlay)" },
  { e: "🎥", t: "Fixed blank overlay window — live preview now works perfectly" },
  { e: "🎯", t: "Improved screen + webcam live rendering pipeline" },
  { e: "🧭", t: "Added draggable & resizable floating overlay window" },
  { e: "⏹",  t: "Stop recording now properly closes the preview window with full cleanup" },
  { e: "🎤", t: "Fixed microphone and camera selection issues" },
  { e: "▶️", t: "Fixed Start button not triggering the recording" },
  { e: "⚡", t: "Improved app stability and overall state management" },
  { e: "🎮", t: "Added floating control bar with modern design" },
  { e: "🔴", t: "REC indicator + live timer added to overlay" },
  { e: "🚀", t: "Significantly reduced preview lag" },
  { e: "🧹", t: "Better cleanup after recording stops — no ghost processes" },
  { e: "🛠️", t: "Fixed ffmpeg.dll not found error on Windows (asar unpack fix)" },
  { e: "📦", t: "Improved ffmpeg binary path resolution on all platforms" },
];

// ── Helpers ───────────────────────────────────

/** Format raw bytes → "~94 MB" */
function formatBytes(bytes?: number): string {
  if (!bytes) return "?";
  return `~${Math.round(bytes / 1_048_576)} MB`;
}

/**
 * Parse GitHub release body markdown into ChangelogItem[].
 * Expects lines like:  "- 🎥 Fixed something"  or  "* 🎥 Fixed something"
 * Falls back to CHANGELOG_FALLBACK if parsing yields nothing.
 */
function parseChangelog(body: string): ChangelogItem[] {
  const items: ChangelogItem[] = [];

  // Match markdown list items that start with an emoji
  // Regex: optional bullet, whitespace, then captures (emoji)(rest of line)
  const emojiRe = /^[\-\*]\s*([\p{Emoji_Presentation}\p{Extended_Pictographic}]+)\s+(.+)/mu;

  for (const line of body.split("\n")) {
    const m = line.match(emojiRe);
    if (m) {
      items.push({ e: m[1].trim(), t: m[2].trim() });
    }
  }

  return items.length > 0 ? items : CHANGELOG_FALLBACK;
}

/**
 * Build the PLATFORMS record from raw GitHub assets.
 * Merges static metadata (icon, color, hint) with live data (file, size, downloadUrl).
 */
function buildPlatforms(
  assets: GHAsset[],
  version: string,
): Record<PlatformKey, Platform> {
  const find = (ext: string) => assets.find((a) => a.name.endsWith(ext));

  const resolve = (key: PlatformKey, ext: string): Platform => {
    const asset = find(ext);
    return {
      ...PLATFORM_META[key],
      file:        asset?.name ?? `not found in ${version}`,
      size:        formatBytes(asset?.size),
      downloadUrl: asset?.browser_download_url ?? "#",
    };
  };

  return {
    windows: resolve("windows", ".exe"),
    mac:     resolve("mac",     ".dmg"),
    linux:   resolve("linux",   ".AppImage"),
  };
}

// ── Cache ─────────────────────────────────────
interface CacheEntry {
  data: ResolvedConstants;
  ts:   number;
}

let _cache: CacheEntry | null = null;
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// ── Core fetch ────────────────────────────────

/**
 * Fetches the latest GitHub release and returns fully resolved constants.
 *
 * - Caches for 5 minutes (configurable via CACHE_TTL_MS).
 * - Optionally uses GH_TOKEN env var for 5 000 req/hr instead of 60.
 * - Throws on non-2xx response so the caller can decide how to fallback.
 *
 * @example
 * const { VERSION, PLATFORMS, CHANGELOG } = await fetchConstants();
 */
export async function fetchConstants(): Promise<ResolvedConstants> {
  // Return cached data if still fresh
  if (_cache && Date.now() - _cache.ts < CACHE_TTL_MS) {
    return _cache.data;
  }

  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  // Works in Node (process.env) and Vite (import.meta.env) — whichever is available
  const token =
    (typeof process !== "undefined" && process.env?.GH_TOKEN) ||
    (typeof import.meta !== "undefined" && (import.meta as any).env?.VITE_GH_TOKEN);

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${REPO_API}/releases/latest`, { headers });

  if (!res.ok) {
    throw new Error(
      `GitHub API error ${res.status}: ${res.statusText}. ` +
      `Remaining rate limit: ${res.headers.get("x-ratelimit-remaining") ?? "unknown"}`
    );
  }

  const rel: GHRelease = await res.json();

  const VERSION      = rel.tag_name;
  const RELEASES_URL = rel.html_url;
  const DL_BASE      = `${REPO}/releases/download/${VERSION}`;
  const RELEASE_DATE = new Date(rel.published_at).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });

  const resolved: ResolvedConstants = {
    VERSION,
    RELEASE_DATE,
    REPO,
    RELEASES_URL,
    DL_BASE,
    PLATFORMS: buildPlatforms(rel.assets, VERSION),
    CHANGELOG: parseChangelog(rel.body ?? ""),
    FEATURES,
    TECH,
  };

  _cache = { data: resolved, ts: Date.now() };
  return resolved;
}

/** Manually bust the cache (e.g. after a user-triggered refresh). */
export function bustCache(): void {
  _cache = null;
}

// ── OS Detection (unchanged) ──────────────────
export function detectOS(): PlatformKey | "unknown" {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const pl = navigator.platform || "";
  if (/Win/i.test(pl)   || /Windows/i.test(ua))  return "windows";
  if (/Mac/i.test(pl)   || /Macintosh/i.test(ua)) return "mac";
  if (/Linux/i.test(pl) || /Linux/i.test(ua))     return "linux";
  return "unknown";
}

// ── Download helper ───────────────────────────

/**
 * Triggers a file download for the given platform.
 * Uses the live browser_download_url from GitHub assets.
 *
 * @example
 * const constants = await fetchConstants();
 * triggerDownload("windows", constants.PLATFORMS);
 */
export function triggerDownload(
  key: PlatformKey,
  platforms: Record<PlatformKey, Platform>,
): string {
  const p   = platforms[key];
  const url = p.downloadUrl;
  const a   = document.createElement("a");
  a.href        = url;
  a.download    = p.file;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  return `Downloading ${p.label} ${p.ext} · ${p.size}`;
}

// ── React hook (optional) ─────────────────────
// Paste this into a separate hooks/useConstants.ts if you use React:
//
// import { useState, useEffect } from "react";
// import { fetchConstants, ResolvedConstants } from "@/lib/constants";
//
// export function useConstants() {
//   const [data, setData]     = useState<ResolvedConstants | null>(null);
//   const [error, setError]   = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     fetchConstants()
//       .then(setData)
//       .catch((e) => setError(e.message))
//       .finally(() => setLoading(false));
//   }, []);
//
//   return { data, error, loading };
// }

// ── Build-time usage (Node / Vite prebuild) ───
// In your vite.config.ts or a scripts/prebuild.ts:
//
// import { fetchConstants } from "./src/lib/constants";
// import { writeFileSync }  from "fs";
//
// const c = await fetchConstants();
// writeFileSync(
//   "src/lib/constants.gen.ts",
//   `export const VERSION = "${c.VERSION}";\n` +
//   `export const RELEASE_DATE = "${c.RELEASE_DATE}";\n` +
//   `export const PLATFORMS = ${JSON.stringify(c.PLATFORMS, null, 2)} as const;\n`
// );

import "server-only";

import { cache } from "react";
import {
  CHANGELOG_FALLBACK,
  FALLBACK_RELEASE,
  REPO,
  REPO_API,
  formatBytes,
  getPlatformMeta,
  type ChangelogItem,
  type Platform,
  type PlatformKey,
  type ReleaseData,
} from "./constants";

interface GitHubAsset {
  name: string;
  size: number;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  html_url: string;
  body: string | null;
  assets: GitHubAsset[];
}

function parseChangelog(body: string | null): ChangelogItem[] {
  if (!body) return CHANGELOG_FALLBACK;

  const items = body
    .split("\n")
    .map((line) => line.trim().replace(/^[-*]\s+/, ""))
    .filter(Boolean)
    .filter((line) => !line.startsWith("#"))
    .slice(0, 12)
    .map((line) => ({ e: "NEW", t: line }));

  return items.length > 0 ? items : CHANGELOG_FALLBACK;
}

function buildPlatforms(assets: GitHubAsset[], version: string): Record<PlatformKey, Platform> {
  const meta = getPlatformMeta();

  const findAsset = (key: PlatformKey): GitHubAsset | undefined => {
    if (key === "windows") {
      return (
        assets.find((a) =>
          a.name.toLowerCase().includes("setup") &&
          a.name.toLowerCase().endsWith(".exe")
        ) ??
        assets.find((a) =>
          a.name.toLowerCase().endsWith(".exe") &&
          !a.name.toLowerCase().includes("elevate") &&
          !a.name.toLowerCase().includes("ffmpeg")
        )
      );
    }
    if (key === "mac") return assets.find((a) => a.name.toLowerCase().endsWith(".dmg"));
    if (key === "linux") return assets.find((a) => a.name.toLowerCase().endsWith(".appimage"));
  };

  const resolve = (key: PlatformKey): Platform => {
    const asset = findAsset(key);
    return {
      ...meta[key],
      file: asset?.name ?? `No installer found for ${key} in ${version}`,
      size: formatBytes(asset?.size),
      downloadUrl: asset?.browser_download_url ?? "#",
    };
  };

  return {
    windows: resolve("windows"),
    mac: resolve("mac"),
    linux: resolve("linux"),
  };
}

export const getGitHubRelease = cache(async (): Promise<ReleaseData> => {
  try {
    const headers: HeadersInit = {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    };

    if (process.env.GH_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
    }

    const res = await fetch(`${REPO_API}/releases/latest`, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`GitHub release request failed: ${res.status} ${res.statusText}`);
    }

    const release = (await res.json()) as GitHubRelease;
    const version = release.tag_name;

    return {
      VERSION: version,
      RELEASE_DATE: new Date(release.published_at).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      RELEASE_DATE_ISO: release.published_at.slice(0, 10),
      REPO,
      RELEASES_URL: release.html_url,
      DL_BASE: `${REPO}/releases/download/${version}`,
      PLATFORMS: buildPlatforms(release.assets, version),
      CHANGELOG: parseChangelog(release.body),
    };
  } catch (error) {
    console.warn(error);
    return FALLBACK_RELEASE;
  }
});

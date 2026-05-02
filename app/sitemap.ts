import type { MetadataRoute } from "next";
import { SITE_URL } from "./components/SeoHead";
import { getGitHubRelease } from "./components/lib/github-release";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const release = await getGitHubRelease();

  return [
    {
      url: SITE_URL,
      lastModified: new Date(release.RELEASE_DATE_ISO),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
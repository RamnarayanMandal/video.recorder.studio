import type { Metadata, Viewport } from "next";
import type { ReleaseData } from "./lib/constants";

export const SITE_URL = "https://video-recorder-studio.vercel.app";
export const SITE_NAME = "Video Recorder Studio";
export const GITHUB_URL = "https://github.com/RamnarayanMandal/video-recorder-studio";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const APP_ICON_URL = `${SITE_URL}/android-chrome-512x512.png`;

export const SEO_TITLE = "Free Screen Recorder for Desktop | Video Recorder Studio";
export const SEO_DESCRIPTION =
  "Free open-source screen recorder for desktop. Capture screen, webcam, and audio, convert WebM to MP4, and export with no watermark.";

export const SEO_KEYWORDS = [
  "free screen recorder",
  "electron screen recorder",
  "screen + webcam recorder",
  "open source screen recorder desktop",
  "free OBS alternative",
  "webcam overlay recorder",
  "no watermark screen recorder",
  "desktop screen recorder",
  "MP4 screen recorder",
  "system audio screen recorder",
];

export const viewport: Viewport = {
  themeColor: "#0b0c10",
  colorScheme: "dark",
};

export function buildSeoMetadata(release: ReleaseData): Metadata {
  const description = SEO_DESCRIPTION;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: SEO_KEYWORDS,
    authors: [{ name: "Ramnarayan Mandal", url: "https://github.com/RamnarayanMandal" }],
    creator: "Ramnarayan Mandal",
    publisher: SITE_NAME,
    applicationName: SITE_NAME,
    category: "technology",
    manifest: "/site.webmanifest",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
    },
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: "Free Screen Recorder with Webcam Overlay | Video Recorder Studio",
      description,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Video Recorder Studio desktop screen and webcam recorder preview",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Free Screen Recorder with Webcam Overlay",
      description,
      images: [OG_IMAGE_URL],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    other: {
      author: "Ramnarayan Mandal",
      "software-version": release.VERSION,
      "release-date": release.RELEASE_DATE_ISO,
      "github-repository": GITHUB_URL,
    },
  };
}

export default function SeoHead() {
  return null;
}

import type { Metadata, Viewport } from "next";
import type { ReleaseData } from "./lib/constants";

export const SITE_URL = "https://video-recorder-studio.vercel.app";
export const SITE_NAME = "Video Recorder Studio";
export const GITHUB_URL = "https://github.com/RamnarayanMandal/video-recorder-studio";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const APP_ICON_URL = `${SITE_URL}/android-chrome-512x512.png`;

export const SEO_TITLE =
  "Video Recorder Studio - Free Screen Recorder, AI Captions & Short Video Creator";
export const SEO_DESCRIPTION =
  "Free AI screen recorder, webcam recorder and video editor for Windows, Mac and Linux. Auto captions, translation, Shorts/Reels, 4K MP4, no watermark.";

export const SEO_KEYWORDS = [
  "free screen recorder",
  "screen recording software",
  "video recorder",
  "webcam recorder",
  "video editor",
  "AI captions",
  "auto translate video",
  "YouTube Shorts recorder",
  "Instagram Reels recorder",
  "short video maker",
  "electron screen recorder",
  "screen + webcam recorder",
  "open source screen recorder desktop",
  "free OBS alternative",
  "webcam overlay recorder",
  "no watermark screen recorder",
  "4K screen recorder",
  "Windows screen recorder",
  "Mac screen recorder",
  "Linux screen recorder",
  "auto caption generator",
  "desktop screen recorder",
  "MP4 screen recorder",
  "system audio screen recorder",
];

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
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
      title: "Video Recorder Studio - Free AI Screen Recorder & Video Editor",
      description:
        "Record screen, webcam and system audio in 4K. Auto-generate captions, auto-translate, create YouTube Shorts and Instagram Reels from one free app.",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Video Recorder Studio screen recorder with AI captions and Shorts support",
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: "Video Recorder Studio - Free AI Screen Recorder",
      description:
        "Free screen recorder with AI captions, auto-translate, YouTube Shorts and Instagram Reels support. Windows, Mac and Linux. No watermarks.",
      images: [{ url: OG_IMAGE_URL, alt: "Video Recorder Studio app screenshot" }],
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
      "msapplication-TileColor": "#1a1a2e",
      "software-version": release.VERSION,
      "release-date": release.RELEASE_DATE_ISO,
      "github-repository": GITHUB_URL,
    },
  };
}

export default function SeoHead() {
  return null;
}

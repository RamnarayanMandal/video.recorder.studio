import type { Metadata, Viewport } from "next";
import type { ReleaseData } from "./lib/constants";

export const SITE_URL = "https://video-recorder-studio.vercel.app";
export const SITE_NAME = "Video Recorder Studio";
export const GITHUB_URL = "https://github.com/RamnarayanMandal/video-recorder-studio";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;
export const APP_ICON_URL = `${SITE_URL}/android-chrome-512x512.png`;

export const SEO_TITLE = "Free Screen Recorder for Desktop | Video Recorder Studio";
export const SEO_DESCRIPTION =
  "Download Video Recorder Studio, a free screen recorder for Windows, macOS and Linux. Capture screen and webcam in 4K 60fps with no watermarks. Get it now.";

export const SEO_KEYWORDS = [
  "free screen recorder",
  "open source screen recorder",
  "screen and webcam recorder",
  "no watermark screen recorder",
  "4K 60fps screen recording",
  "electron screen recorder",
  "desktop screen recorder",
  "webcam recorder",
  "screen recording software",
  "4K screen recorder",
  "Windows screen recorder",
  "Mac screen recorder",
  "Linux screen recorder",
  "MP4 screen recorder",
  "system audio screen recorder",
  "floating overlay recorder",
  "background MP4 converter",
  "free webcam recorder software",
];

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  colorScheme: "dark",
};

export function buildSeoMetadata(release: ReleaseData): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SEO_TITLE,
      template: `%s | ${SITE_NAME}`,
    },
    description: SEO_DESCRIPTION,
    keywords: SEO_KEYWORDS,
    authors: [{ name: "Ramnarayan Mandal", url: "https://github.com/RamnarayanMandal" }],
    creator: "Ramnarayan Mandal",
    publisher: SITE_NAME,
    applicationName: SITE_NAME,
    category: "technology",
    manifest: "/site.webmanifest",
    verification: {
      google: "u29tTL78RoIEw8rVx6DKagPpTxflPUxeeR0VZp5VnQk",
    },
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
      title: SEO_TITLE,
      description:
        "Free, open-source screen and webcam recorder for Windows, macOS and Linux. Record in 4K 60fps with no watermarks.",
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
      title: SEO_TITLE,
      description:
        "Record screen and webcam in 4K 60fps with Video Recorder Studio, a free open-source screen recorder with no watermarks.",
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
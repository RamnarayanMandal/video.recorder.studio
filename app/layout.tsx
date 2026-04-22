import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

/* ── Replace these with your real domain once deployed ─────────────────── */
const SITE_URL    = "https://video-recorder-studio.app"; // 👈 apna domain daalo
const OG_IMAGE    = `${SITE_URL}/og-image.jpg`;          // 1200×630 px recommended
const GITHUB_URL  = "https://github.com/RamnarayanMandal/video-recorder-studio";
const VERSION     = "1.0.6";

/* ═══════════════════════════════════════════════════════════════════════════
   METADATA  (Next.js 14+ App Router)
   – Rendered server-side → fully crawlable by Google / Bing / DuckDuckGo
═══════════════════════════════════════════════════════════════════════════ */
export const metadata: Metadata = {

  /* ── Core ─────────────────────────────────────────────────────────────── */
  title: {
    default:  "Video Recorder Studio – Free Screen + Webcam Recorder for Desktop",
    template: "%s | Video Recorder Studio",
  },
  description:
    "Free, open-source desktop screen recorder built with Electron & React. " +
    "Record screen + webcam simultaneously, floating overlay, live preview, " +
    "background MP4 conversion via FFmpeg. No watermarks. Available for Windows, macOS & Linux.",

  keywords: [
    "free screen recorder",
    "screen recorder desktop",
    "webcam screen recorder",
    "electron screen recorder",
    "open source screen recorder",
    "screen recorder windows",
    "screen recorder mac",
    "screen recorder linux",
    "video recorder studio",
    "no watermark screen recorder",
    "mp4 screen recorder",
    "screen capture software",
    "floating overlay recorder",
    "system audio recorder",
    "github screen recorder",
  ],

  /* ── Canonical / Alternate ───────────────────────────────────────────── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── Open Graph (WhatsApp, Facebook, LinkedIn, Slack previews) ────────── */
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    siteName:    "Video Recorder Studio",
    title:       "Video Recorder Studio – Free Screen + Webcam Recorder",
    description:
      "Open-source desktop recorder. Screen + webcam, floating overlay, " +
      "live preview, FFmpeg background encoding. Free & no watermarks.",
    images: [
      {
        url:    OG_IMAGE,
        width:  1200,
        height: 630,
        alt:    "Video Recorder Studio – Screen recording interface preview",
      },
    ],
    locale: "en_US",
  },

  /* ── Twitter / X Card ────────────────────────────────────────────────── */
  twitter: {
    card:        "summary_large_image",
    title:       "Video Recorder Studio – Free Desktop Screen Recorder",
    description:
      "Record screen + webcam with floating overlay. Free, open-source, no watermarks. " +
      "Windows / macOS / Linux.",
    images:      [OG_IMAGE],
    // site:     "@yourhandle",  // 👈 Twitter handle ho to add karo
  },

  /* ── App Meta ────────────────────────────────────────────────────────── */
  applicationName: "Video Recorder Studio",
  appleWebApp: {
    capable:         true,
    title:           "Video Recorder Studio",
    statusBarStyle:  "black-translucent",
  },
  formatDetection: {
    telephone: false,
    email:     false,
    address:   false,
  },

  /* ── Robots ──────────────────────────────────────────────────────────── */
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:               true,
      follow:              true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":       -1,
    },
  },

  /* ── Icons ───────────────────────────────────────────────────────────── */
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple:    "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  /* ── PWA Manifest ────────────────────────────────────────────────────── */
  manifest: "/manifest.json",

  /* ── Verification (Google Search Console token daalo) ───────────────── */
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_TOKEN", // 👈 replace karo
    // bing: "YOUR_BING_WEBMASTER_TOKEN",
  },

  /* ── Category ────────────────────────────────────────────────────────── */
  category: "technology",
};

/* ═══════════════════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   – Helps Google show Rich Results (App name, rating, download links etc.)
═══════════════════════════════════════════════════════════════════════════ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── Organization ─────────────────────────────────────────────────── */
    {
      "@type":  "Organization",
      "@id":    `${SITE_URL}/#organization`,
      name:     "Video Recorder Studio",
      url:      SITE_URL,
      logo: {
        "@type": "ImageObject",
        url:     `${SITE_URL}/icon-512.png`,
      },
      sameAs: [
        GITHUB_URL,
        // "https://twitter.com/yourhandle",
      ],
    },

    /* ── WebSite (enables Google Sitelinks Search Box) ────────────────── */
    {
      "@type":     "WebSite",
      "@id":       `${SITE_URL}/#website`,
      url:         SITE_URL,
      name:        "Video Recorder Studio",
      description: "Free open-source screen + webcam desktop recorder",
      publisher:   { "@id": `${SITE_URL}/#organization` },
    },

    /* ── SoftwareApplication ─────────────────────────────────────────── */
    {
      "@type":               "SoftwareApplication",
      "@id":                 `${SITE_URL}/#app`,
      name:                  "Video Recorder Studio",
      url:                   SITE_URL,
      downloadUrl:           `${GITHUB_URL}/releases`,
      softwareVersion:       VERSION,
      datePublished:         "2026-04-21",
      description:
        "Free, open-source desktop screen recorder built with Electron & React. " +
        "Record screen + webcam simultaneously, floating overlay, background MP4 " +
        "conversion via FFmpeg. No watermarks.",
      operatingSystem:       "Windows 10+, macOS 12+, Ubuntu 20.04+",
      applicationCategory:   "MultimediaApplication",
      applicationSubCategory:"ScreenRecorder",
      offers: {
        "@type":         "Offer",
        price:           "0",
        priceCurrency:   "USD",
        availability:    "https://schema.org/InStock",
      },
      author: {
        "@type": "Person",
        name:    "RamnarayanMandal",
        url:     "https://github.com/RamnarayanMandal",
      },
      license:        "https://opensource.org/licenses/MIT",
      releaseNotes:   `${GITHUB_URL}/releases/tag/v${VERSION}`,
      screenshot:     OG_IMAGE,
      featureList: [
        "Screen + Webcam simultaneous recording",
        "Floating draggable overlay UI",
        "Live preview during recording",
        "Background MP4 conversion with FFmpeg",
        "Microphone + System audio capture",
        "Live file size tracking",
        "4K resolution support",
        "60fps recording",
        "GPU acceleration support",
        "No watermarks",
        "MIT License – completely free",
      ],
      /* aggregateRating: {        // ← uncomment once you have real reviews
        "@type":       "AggregateRating",
        ratingValue:   "4.8",
        reviewCount:   "120",
        bestRating:    "5",
        worstRating:   "1",
      }, */
    },

    /* ── FAQPage (shows as accordion in Google results) ─────────────── */
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name:    "Is Video Recorder Studio free?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Video Recorder Studio is completely free and open-source under the MIT license. " +
              "There are no watermarks, subscriptions, or hidden fees.",
          },
        },
        {
          "@type": "Question",
          name:    "Which platforms does Video Recorder Studio support?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Video Recorder Studio supports Windows 10/11 (64-bit), macOS 12+ (Intel & Apple Silicon), " +
              "and Linux (Ubuntu 20.04+, Debian 11+, Fedora 35+).",
          },
        },
        {
          "@type": "Question",
          name:    "Can I record both screen and webcam at the same time?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. Video Recorder Studio supports simultaneous screen and webcam recording " +
              "with a live floating preview overlay.",
          },
        },
        {
          "@type": "Question",
          name:    "Does it record system audio and microphone?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes. You can capture both microphone and system audio simultaneously " +
              "with independent live level meters.",
          },
        },
        {
          "@type": "Question",
          name:    "How do I build Video Recorder Studio from source?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              `Clone the repository from ${GITHUB_URL}, run 'npm install', ` +
              "then 'npm run dev' for development or 'npm run dist' to build a distributable.",
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════════════════
   ROOT LAYOUT
═══════════════════════════════════════════════════════════════════════════ */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD Structured Data — server-rendered, fully crawlable */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

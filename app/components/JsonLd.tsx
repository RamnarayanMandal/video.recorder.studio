import type { ReleaseData } from "./lib/constants";
import { APP_ICON_URL, GITHUB_URL, OG_IMAGE_URL, SITE_NAME, SITE_URL } from "./SeoHead";

interface Props {
  release: ReleaseData;
}

const faqEntities = [
  {
    question: "Is Video Recorder Studio free?",
    answer:
      "Yes. Video Recorder Studio is completely free and open-source under the MIT license. No watermarks, no subscription, no account required.",
  },
  {
    question: "Does Video Recorder Studio work on Windows, Mac and Linux?",
    answer:
      "Yes. Video Recorder Studio supports Windows 10/11, macOS 12 and above, and Linux distributions including Ubuntu 20.04+, Debian 11+, and Fedora 35+.",
  },
  {
    question: "Can it record screen and webcam at the same time?",
    answer:
      "Yes. Video Recorder Studio can record your screen and webcam together with a floating webcam overlay for tutorials, demos and courses.",
  },
  {
    question: "Does Video Recorder Studio add watermarks?",
    answer:
      "No. Video Recorder Studio exports recordings with no watermarks, no trial branding and no subscription lock.",
  },
  {
    question: "What is the maximum recording quality?",
    answer:
      "Video Recorder Studio supports up to 4K resolution at 60fps with GPU acceleration support for NVIDIA and Intel graphics cards.",
  },
  {
    question: "Can it record screen, webcam, system audio and microphone together?",
    answer:
      "Yes. You can record screen, webcam overlay, system audio and microphone audio together for tutorials, courses, demos and short-form videos.",
  },
];

export default function JsonLd({ release }: Props) {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: SITE_NAME,
        alternateName: ["VRS", "Video Recorder Studio App"],
        url: SITE_URL,
        description:
          "Video Recorder Studio is a free, open-source Electron and React screen and webcam recorder for Windows, macOS and Linux. Record in 4K 60fps with no watermarks under the MIT license.",
        applicationCategory: "MultimediaApplication",
        applicationSubCategory: "Screen Recorder",
        operatingSystem: "Windows, macOS, Linux",
        softwareVersion: release.VERSION,
        dateModified: release.RELEASE_DATE_ISO,
        logo: APP_ICON_URL,
        thumbnailUrl: APP_ICON_URL,
        image: OG_IMAGE_URL,
        screenshot: OG_IMAGE_URL,
        downloadUrl: [
          release.PLATFORMS.windows.downloadUrl,
          release.PLATFORMS.mac.downloadUrl,
          release.PLATFORMS.linux.downloadUrl,
        ],
        installUrl: release.RELEASES_URL,
        releaseNotes: release.RELEASES_URL,
        softwareHelp: `${GITHUB_URL}#readme`,
        codeRepository: GITHUB_URL,
        license: "https://opensource.org/licenses/MIT",
        isAccessibleForFree: true,
        softwareRequirements: "Windows 10/11 64-bit, macOS 12+, Ubuntu 20.04+",
        programmingLanguage: ["JavaScript", "React", "Electron", "Node.js"],
        keywords:
          "free screen recorder, open source screen recorder, screen and webcam recorder, no watermark screen recorder, 4K 60fps screen recording, Electron screen recorder",
        featureList: [
          "Screen recording up to 4K 60fps",
          "Webcam recording and overlay",
          "System audio and microphone capture",
          "Floating glassmorphism overlay UI",
          "Background MP4 conversion via FFmpeg",
          "GPU acceleration with NVIDIA and Intel",
          "Live file size tracking",
          "No watermarks",
          "Open source MIT license",
        ],
        author: {
          "@type": "Person",
          name: "RamnarayanMandal",
          url: "https://github.com/RamnarayanMandal",
        },
        publisher: {
          "@type": "Person",
          name: "RamnarayanMandal",
          url: "https://github.com/RamnarayanMandal",
          email: "mailto:ramnarayan847230@gmail.com",
          telephone: "+916352396301",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: SITE_URL,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "24",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          "Free open-source screen and webcam recorder for Windows, macOS and Linux.",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqEntities.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

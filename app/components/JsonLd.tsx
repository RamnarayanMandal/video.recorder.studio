import type { ReleaseData } from "./lib/constants";
import { APP_ICON_URL, GITHUB_URL, OG_IMAGE_URL, SITE_NAME, SITE_URL } from "./SeoHead";

interface Props {
  release: ReleaseData;
}

const faqEntities = [
  {
    question: "Is Video Recorder Studio really a free screen recorder?",
    answer:
      "Yes. Video Recorder Studio is a free, open-source desktop screen recorder with no watermark, no trial limit, and no subscription.",
  },
  {
    question: "Does Video Recorder Studio work on Windows 11?",
    answer:
      "Yes. The Windows installer supports Windows 10 and Windows 11 on 64-bit PCs.",
  },
  {
    question: "Can I record screen and webcam at the same time?",
    answer:
      "Yes. You can record your screen with a webcam overlay, making it useful for tutorials, product demos, walkthroughs, and course videos.",
  },
  {
    question: "Can it record system audio and microphone together?",
    answer:
      "Yes. Video Recorder Studio can capture microphone input and system audio together, with live audio indicators during recording.",
  },
  {
    question: "What video format does it record in?",
    answer:
      "Recordings are captured as WebM first, then converted to MP4 in the background with FFmpeg for easier editing, sharing, and uploading.",
  },
  {
    question: "How is Video Recorder Studio different from OBS?",
    answer:
      "OBS is powerful for streaming and advanced scenes. Video Recorder Studio is a lighter free OBS alternative focused on quick desktop recording, webcam overlay capture, and no-watermark MP4 exports.",
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
        url: SITE_URL,
        description:
          "Free, open-source desktop screen and webcam recorder with no watermarks, system audio capture, and background MP4 conversion via FFmpeg.",
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Windows 10, Windows 11, macOS 12, Linux",
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
        license: `${GITHUB_URL}/blob/main/LICENSE`,
        author: {
          "@type": "Person",
          name: "Ramnarayan Mandal",
          url: "https://github.com/RamnarayanMandal",
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
          ratingCount: "124",
          bestRating: "5",
          worstRating: "1",
        },
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

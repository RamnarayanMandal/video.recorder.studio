"use client";

import { useState } from "react";

const FAQS = [
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
    question: "Can it auto-generate captions and translate videos?",
    answer:
      "Yes. Video Recorder Studio includes AI-powered automatic caption generation and auto-translation so you can publish videos in multiple languages without manual editing.",
  },
  {
    question: "Can I create YouTube Shorts and Instagram Reels without editing?",
    answer:
      "Yes. The app includes short video creation for YouTube Shorts and Instagram Reels so you can record and publish vertical short-form content without manual video editing.",
  },
  {
    question: "What is the maximum recording quality?",
    answer:
      "Video Recorder Studio supports up to 4K resolution at 60fps with GPU acceleration support for NVIDIA and Intel graphics cards.",
  },
  {
    question: "Can it record system audio and microphone at the same time?",
    answer:
      "Yes. You can capture system audio and mic input together, which makes it practical for tutorials, software demos, lessons, and commentary videos.",
  },
  {
    question: "What format does it record in: WebM or MP4?",
    answer:
      "Video Recorder Studio records efficiently to WebM first, then uses FFmpeg to convert WebM to MP4 in the background so the final file is easy to edit and share.",
  },
  {
    question: "How is it different from OBS as a free OBS alternative?",
    answer:
      "OBS is excellent for complex streaming scenes. Video Recorder Studio is a lighter free OBS alternative for fast screen + webcam recording, webcam overlay capture, audio, and no-watermark MP4 exports.",
  },
  {
    question: "Which GPUs are supported for GPU acceleration?",
    answer:
      "The app is designed around FFmpeg acceleration paths, including NVIDIA NVENC and Intel Quick Sync where the local driver and hardware support them. CPU encoding remains available as a fallback.",
  },
  {
    question: "Where are screen recordings saved?",
    answer:
      "Recordings are saved to the folder you choose in the desktop app. The selected location is remembered so future screen, webcam, and audio recordings stay organized.",
  },
  {
    question: "Does Video Recorder Studio need internet access to record?",
    answer:
      "No. Recording works offline on your desktop. Internet access is only needed to download the app, check GitHub releases, or fetch updates.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="vrs-section" aria-labelledby="faq-heading">
      <div className="vrs-container">
        <header style={{ textAlign: "center", marginBottom: "34px" }}>
          <p className="vrs-label" style={{ justifyContent: "center" }} aria-hidden="true">
            FAQ
          </p>
          <h2 id="faq-heading" className="vrs-section-h2">
            Questions people ask before recording.
          </h2>
        </header>

        <div style={{ maxWidth: "860px", margin: "0 auto", display: "grid", gap: "10px" }}>
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={item.question}
                style={{
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: isOpen
                    ? "linear-gradient(145deg, rgba(239,68,68,0.08), rgba(255,255,255,0.025))"
                    : "rgba(255,255,255,0.025)",
                  overflow: "hidden",
                }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    style={{
                      width: "100%",
                      border: 0,
                      background: "transparent",
                      color: "#e8eaf0",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "18px 20px",
                      textAlign: "left",
                      fontFamily: "var(--font-sans)",
                      fontSize: "15px",
                      fontWeight: 800,
                      lineHeight: 1.35,
                    }}
                  >
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "8px",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: isOpen ? "#f87171" : "#94a3b8",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        transition: "transform 0.18s ease, color 0.18s ease",
                      }}
                    >
                      +
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  style={{
                    padding: "0 20px 18px",
                    color: "#9ca3af",
                    fontSize: "13px",
                    lineHeight: 1.75,
                  }}
                >
                  {item.answer}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

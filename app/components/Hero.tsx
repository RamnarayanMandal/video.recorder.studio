// components/Hero.tsx
"use client";
import DownloadCard from "./DownloadCard";
import { TECH, type ReleaseData } from "./lib/constants";

interface Props {
  os:         string;
  onDownload: (key: string) => void;
  release: ReleaseData;
}

export default function Hero({ os, onDownload, release }: Props) {
  return (
    <section
      className="vrs-section"
      aria-labelledby="hero-heading"
      style={{ paddingTop:"48px", paddingBottom:"40px" }}
    >
      <div className="vrs-container">
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "36px",
          }}
          className="vrs-hero-grid"
        >
          {/* ── Copy ─────────────────────────────────────────────────────── */}
          <div>
            {/* Version badge */}
            <p
              className="fade-up"
              aria-label={`Latest release: ${release.VERSION}, ${release.RELEASE_DATE}`}
              style={{
                display:       "inline-flex",
                alignItems:    "center",
                gap:           "8px",
                background:    "rgba(239,68,68,.1)",
                border:        "1px solid rgba(239,68,68,.25)",
                color:         "#f87171",
                padding:       "5px 14px",
                borderRadius:  "100px",
                fontFamily:    "var(--font-mono)",
                fontSize:      "11px",
                letterSpacing: ".06em",
                textTransform: "uppercase",
                marginBottom:  "20px",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width:7, height:7, borderRadius:"50%", background:"#ef4444", flexShrink:0 }}
              />
              Latest - {release.VERSION} - {release.RELEASE_DATE}
            </p>

            {/* H1 */}
            <h1
              id="hero-heading"
              className="fade-up d1"
              style={{
                fontSize:      "clamp(2.4rem, 8vw, 5rem)",
                fontWeight:    800,
                lineHeight:    1.04,
                letterSpacing: "-.045em",
                marginBottom:  "18px",
              }}
            >
              Record Everything.
              <br />
              <span
                style={{
                  background:            "linear-gradient(130deg,#ef4444 0%,#f97316 100%)",
                  WebkitBackgroundClip:  "text",
                  WebkitTextFillColor:   "transparent",
                }}
              >
                No editing
              </span>
              <br />
              <span style={{ color:"#94a3b8", fontSize:".66em", fontWeight:700 }}>
                needed.
              </span>
            </h1>

            {/* Description */}
            <p
              className="fade-up d2"
              style={{
                fontSize:     "clamp(13px, 2.2vw, 16px)",
                color:        "#9ca3af",
                lineHeight:   1.78,
                maxWidth:     "500px",
                marginBottom: "28px",
                fontWeight:   400,
              }}
            >
              The free all-in-one screen recorder, webcam recorder and video editor for{" "}
              <strong style={{ color:"#e8eaf0", fontWeight:600 }}>Windows, Mac &amp; Linux</strong>.
              AI auto-captions, auto-translate, YouTube Shorts and Instagram Reels with{" "}
              <strong style={{ color:"#e8eaf0", fontWeight:600 }}>zero watermarks</strong>.
            </p>

            {/* Stats */}
            <dl
              className="fade-up d3"
              aria-label="Key specifications"
              style={{
                display:      "flex",
                gap:          "32px",
                flexWrap:     "wrap",
                marginBottom: "32px",
              }}
            >
              {[
                { v:"4K",   l:"Max Quality" },
                { v:"60fps",l:"Frame Rate"  },
                { v:"70%",  l:"Compression" },
                { v:"MIT",  l:"License"     },
              ].map((s) => (
                <div key={s.l}>
                  <dt
                    style={{
                      fontFamily:    "var(--font-mono)",
                      fontSize:      "10px",
                      color:         "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: ".1em",
                      marginTop:     "3px",
                    }}
                  >
                    {s.l}
                  </dt>
                  <dd
                    style={{
                      fontSize:      "clamp(1.4rem, 4vw, 2.1rem)",
                      fontWeight:    800,
                      letterSpacing: "-.04em",
                    }}
                  >
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Tech chips */}
            <ul
              className="fade-up d4"
              aria-label="Built with"
              style={{ display:"flex", flexWrap:"wrap", gap:"7px", listStyle:"none", padding:0 }}
            >
              {TECH.map((t) => (
                <li
                  key={t.name}
                  style={{
                    display:       "inline-flex",
                    alignItems:    "center",
                    gap:           "6px",
                    padding:       "4px 11px",
                    borderRadius:  "7px",
                    fontSize:      "11px",
                    fontFamily:    "var(--font-mono)",
                    fontWeight:    500,
                    letterSpacing: ".02em",
                    background:    `${t.color}18`,
                    border:        `1px solid ${t.color}35`,
                    color:          t.color,
                  }}
                >
                  {t.name}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Download Card ─────────────────────────────────────────────── */}
          <DownloadCard os={os} onDownload={onDownload} release={release} />
        </div>
      </div>

      {/* Responsive hero grid */}
      <style>{`
        @media (min-width: 1024px) {
          .vrs-hero-grid {
            grid-template-columns: 1fr 390px !important;
            gap: 52px !important;
            align-items: start;
          }
        }
      `}</style>
    </section>
  );
}

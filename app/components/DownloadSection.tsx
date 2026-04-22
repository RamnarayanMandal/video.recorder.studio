// components/DownloadSection.tsx
"use client";
import { PLATFORMS, REPO, DL_BASE } from "./lib/constants";
import type { PlatformKey } from "./lib/constants";
import { DownloadIcon } from "./icons/Icons";

interface Props {
  os:         string;
  onDownload: (key: string) => void;
}

export default function DownloadSection({ os, onDownload }: Props) {
  return (
    <section
      id="download"
      className="vrs-section"
      aria-labelledby="download-heading"
    >
      <div className="vrs-container">
        {/* Header */}
        <header style={{ textAlign:"center", marginBottom:"42px" }}>
          <p className="vrs-label" style={{ justifyContent:"center" }} aria-hidden="true">
            Download
          </p>
          <h2 id="download-heading" className="vrs-section-h2">
            Available on all platforms.
          </h2>
          <p style={{ fontSize:"14px", color:"#9ca3af", marginTop:"10px" }}>
            One installer per platform. No account, no subscription, no watermarks.
          </p>
        </header>

        {/* Platform cards */}
        <ul
          aria-label="Download by platform"
          style={{ listStyle:"none", padding:0, display:"grid", gap:"14px", gridTemplateColumns:"1fr" }}
          className="vrs-plat-grid"
        >
          {(Object.entries(PLATFORMS) as [PlatformKey, typeof PLATFORMS[PlatformKey]][]).map(([key, d]) => {
            const isDetected = os === key;
            const ac         = d.color;

            return (
              <li
                key={key}
                style={{
                  background:   "linear-gradient(155deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
                  border:       `1px solid ${isDetected ? `${ac}50` : "rgba(255,255,255,.08)"}`,
                  borderRadius: "18px",
                  padding:      "22px",
                  position:     "relative",
                  overflow:     "hidden",
                  boxShadow:    isDetected ? `0 0 36px ${ac}12` : "none",
                  transition:   "border-color .25s, transform .2s, box-shadow .25s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
              >
                {/* "Your Platform" badge */}
                {isDetected && (
                  <div
                    aria-label="Your current platform"
                    style={{
                      position:      "absolute",
                      top:           "12px",
                      right:         "12px",
                      background:    `${ac}20`,
                      border:        `1px solid ${ac}40`,
                      color:          ac,
                      padding:       "3px 9px",
                      borderRadius:  "6px",
                      fontSize:      "9px",
                      fontFamily:    "var(--font-mono)",
                      fontWeight:    600,
                      textTransform: "uppercase",
                    }}
                  >
                    Your Platform
                  </div>
                )}

                <div aria-hidden="true" style={{ fontSize:"34px", marginBottom:"13px" }}>{d.icon}</div>
                <h3 style={{ fontSize:"20px", fontWeight:800, letterSpacing:"-.03em", marginBottom:"4px" }}>
                  {d.label}
                </h3>
                <p
                  style={{
                    fontFamily:  "var(--font-mono)",
                    fontSize:    "11px",
                    color:        ac,
                    marginBottom:"12px",
                    wordBreak:   "break-all",
                  }}
                >
                  {d.file}
                </p>
                <p style={{ color:"#9ca3af", fontSize:"12px", lineHeight:1.65 }}>{d.hint}</p>

                {/* Format / Size meta */}
                <dl
                  aria-label={`${d.label} download details`}
                  style={{
                    display:             "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap:                 "7px",
                    marginTop:           "13px",
                  }}
                >
                  {[{ k:"Format", v:d.ext }, { k:"Size", v:d.size }].map((m) => (
                    <div
                      key={m.k}
                      style={{
                        background:   "#0a0b0f",
                        border:       "1px solid rgba(255,255,255,.07)",
                        borderRadius: "8px",
                        padding:      "8px 11px",
                      }}
                    >
                      <dt style={{ fontFamily:"var(--font-mono)", fontSize:"9px", color:"#6b7280", textTransform:"uppercase", letterSpacing:".08em" }}>
                        {m.k}
                      </dt>
                      <dd style={{ fontFamily:"var(--font-mono)", fontSize:"12px", fontWeight:600, marginTop:"3px" }}>
                        {m.v}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Download button */}
                <button
                  onClick={() => onDownload(key)}
                  aria-label={`Download Video Recorder Studio for ${d.label} — ${d.file} (${d.size})`}
                  style={{
                    width:          "100%",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    gap:            "8px",
                    borderRadius:   "12px",
                    padding:        "11px",
                    border:         `1px solid ${isDetected ? `${ac}70` : "rgba(255,255,255,.1)"}`,
                    fontFamily:     "var(--font-sans)",
                    fontWeight:     700,
                    fontSize:       "13px",
                    cursor:         "pointer",
                    transition:     "all .2s",
                    marginTop:      "15px",
                    background:     isDetected
                      ? `linear-gradient(135deg,${ac}cc,${ac}88)`
                      : "rgba(255,255,255,.05)",
                    color:          isDetected
                      ? (key === "mac" ? "#0a0a0a" : "#fff")
                      : "#e8eaf0",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-1px)";
                    e.currentTarget.style.filter    = "brightness(1.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "none";
                    e.currentTarget.style.filter    = "none";
                  }}
                >
                  <DownloadIcon
                    size={14}
                    color={isDetected && key === "mac" ? "#0a0a0a" : "currentColor"}
                  />
                  Download {d.label} {d.ext}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Build from source */}
        <div
          style={{
            background:   "linear-gradient(155deg,rgba(255,255,255,.04),rgba(255,255,255,.02))",
            border:       "1px solid rgba(255,255,255,.08)",
            borderRadius: "18px",
            padding:      "22px",
            marginTop:    "14px",
          }}
        >
          <div style={{ display:"flex", flexDirection:"column", gap:"18px" }} className="vrs-src-inner">
            <div style={{ flexShrink:0 }}>
              <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"10px" }}>
                <span aria-hidden="true" style={{ fontSize:20 }}>💻</span>
                <h3 style={{ fontWeight:700, fontSize:"15px" }}>Build from Source</h3>
              </div>
              <p style={{ color:"#9ca3af", fontSize:"12px", lineHeight:1.65, maxWidth:"300px" }}>
                Clone the repo, install dependencies, run dev mode or build for your platform.
              </p>
            </div>

            <pre
              aria-label="Build from source instructions"
              style={{
                background:   "#090a0d",
                border:       "1px solid rgba(255,255,255,.07)",
                borderRadius: "12px",
                padding:      "14px 18px",
                fontFamily:   "var(--font-mono)",
                fontSize:     "12px",
                lineHeight:   2,
                flex:         1,
                overflowX:    "auto",
                whiteSpace:   "pre",
              }}
            >
              <code>
                <span style={{ color:"#6b7280" }}># Clone &amp; install{"\n"}</span>
                <span style={{ color:"#4ade80" }}>git</span>{" clone "}{REPO}{"\n"}
                <span style={{ color:"#4ade80" }}>cd</span>{" video-recorder-studio\n"}
                <span style={{ color:"#4ade80" }}>npm</span>{" install\n"}
                <span style={{ color:"#6b7280" }}># Development{"\n"}</span>
                <span style={{ color:"#4ade80" }}>npm</span>{" run dev\n"}
                <span style={{ color:"#6b7280" }}># Build distributable{"\n"}</span>
                <span style={{ color:"#4ade80" }}>npm</span>{" run dist"}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 600px)  { .vrs-plat-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .vrs-plat-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (min-width: 768px)  { .vrs-src-inner { flex-direction: row !important; align-items: flex-start; gap: 28px !important; } }
      `}</style>
    </section>
  );
}
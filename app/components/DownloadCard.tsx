// components/DownloadCard.tsx
"use client";
import { DownloadIcon, ArrowIcon } from "./icons/Icons";
import { PLATFORMS, DL_BASE, REPO } from "./lib/constants";
import type { PlatformKey } from "./lib/constants";

interface Props {
  os:          string;
  onDownload:  (key: string) => void;
}

export default function DownloadCard({ os, onDownload }: Props) {
  const pOS     = os !== "unknown" ? os : "windows";
  const primary = PLATFORMS[pOS as PlatformKey];
  const others  = (Object.keys(PLATFORMS) as PlatformKey[]).filter((k) => k !== pOS);

  return (
    <aside aria-label="Download Video Recorder Studio" className="fade-up d2">
      {/* Card */}
      <div
        style={{
          background:    "linear-gradient(155deg,rgba(255,255,255,.05),rgba(255,255,255,.02))",
          border:        "1px solid rgba(255,255,255,.09)",
          borderRadius:  "20px",
          padding:       "22px",
          position:      "relative",
          overflow:      "hidden",
        }}
      >
        {/* Shimmer top line */}
        <div
          aria-hidden="true"
          style={{
            position:           "absolute",
            top:                0,
            left:               0,
            right:              0,
            height:             "2px",
            background:         "linear-gradient(90deg,transparent,#ef4444,#f97316,transparent)",
            backgroundSize:     "400% 100%",
            animation:          "shimmer 3.5s linear infinite",
          }}
        />

        {/* Header row */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            marginBottom:   "16px",
            flexWrap:       "wrap",
            gap:            "8px",
          }}
        >
          <span className="vrs-label" style={{ marginBottom: 0 }}>
            Detected platform
          </span>
          <div
            aria-live="polite"
            aria-label={`Detected OS: ${primary.label}`}
            style={{
              display:      "flex",
              alignItems:   "center",
              gap:          "7px",
              background:   "#12141c",
              border:       "1px solid rgba(255,255,255,.1)",
              padding:      "5px 12px",
              borderRadius: "8px",
              fontFamily:   "var(--font-mono)",
              fontSize:     "12px",
              fontWeight:   600,
            }}
          >
            <span aria-hidden="true">{primary.icon}</span>
            <span>{primary.label}</span>
            {os !== "unknown" && (
              <span
                aria-hidden="true"
                style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", flexShrink:0 }}
              />
            )}
          </div>
        </div>

        {/* Primary download button */}
        <button
          onClick={() => onDownload(pOS)}
          aria-label={`Download Video Recorder Studio for ${primary.label}, ${primary.size}`}
          style={{
            width:          "100%",
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            background:     "linear-gradient(135deg,#ef4444,#f97316)",
            border:         "none",
            borderRadius:   "13px",
            padding:        "13px 16px",
            color:          "#fff",
            fontFamily:     "var(--font-sans)",
            fontWeight:     700,
            fontSize:       "14px",
            cursor:         "pointer",
            boxShadow:      "0 8px 26px rgba(239,68,68,.25)",
            transition:     "transform .18s, box-shadow .18s, filter .18s",
            textAlign:      "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform  = "translateY(-2px)";
            e.currentTarget.style.boxShadow  = "0 14px 38px rgba(239,68,68,.35)";
            e.currentTarget.style.filter     = "brightness(1.07)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform  = "none";
            e.currentTarget.style.boxShadow  = "0 8px 26px rgba(239,68,68,.25)";
            e.currentTarget.style.filter     = "none";
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = "scale(.98)"; }}
          onMouseUp={(e)   => { e.currentTarget.style.transform = "translateY(-2px)"; }}
        >
          <span style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            <DownloadIcon size={19} />
            <span>
              <div style={{ fontSize:"13px", fontWeight:700, lineHeight:1.2 }}>
                Download for {primary.label}
              </div>
              <div style={{ fontSize:"10px", opacity:.72, fontFamily:"var(--font-mono)", fontWeight:400, marginTop:"2px" }}>
                {primary.file} · {primary.size}
              </div>
            </span>
          </span>
          <span
            aria-hidden="true"
            style={{
              width:        "32px",
              height:       "32px",
              background:   "rgba(255,255,255,.18)",
              borderRadius: "8px",
              display:      "grid",
              placeItems:   "center",
              flexShrink:   0,
            }}
          >
            <ArrowIcon />
          </span>
        </button>

        {/* Other platforms */}
        <div
          role="group"
          aria-label="Download for other platforms"
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr 1fr",
            gap:                 "7px",
            marginTop:           "8px",
          }}
        >
          {others.map((k) => (
            <button
              key={k}
              onClick={() => onDownload(k)}
              aria-label={`Download for ${PLATFORMS[k].label} (${PLATFORMS[k].ext})`}
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            "9px",
                background:     "#0d0f14",
                border:         "1px solid rgba(255,255,255,.08)",
                color:          "#e8eaf0",
                padding:        "10px 12px",
                borderRadius:   "10px",
                fontFamily:     "var(--font-sans)",
                cursor:         "pointer",
                transition:     "all .17s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background    = "#14161e";
                e.currentTarget.style.borderColor   = "rgba(255,255,255,.18)";
                e.currentTarget.style.transform     = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background    = "#0d0f14";
                e.currentTarget.style.borderColor   = "rgba(255,255,255,.08)";
                e.currentTarget.style.transform     = "none";
              }}
            >
              <span aria-hidden="true" style={{ fontSize:"18px", flexShrink:0 }}>{PLATFORMS[k].icon}</span>
              <span>
                <div style={{ fontSize:"12px", fontWeight:700 }}>{PLATFORMS[k].label}</div>
                <div style={{ fontSize:"10px", color:"#6b7280", fontFamily:"var(--font-mono)", marginTop:"1px" }}>{PLATFORMS[k].ext}</div>
              </span>
            </button>
          ))}

          <a
            href={`${REPO}/releases`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all releases on GitHub"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "9px",
              background:     "#0d0f14",
              border:         "1px solid rgba(255,255,255,.08)",
              color:          "#e8eaf0",
              padding:        "10px 12px",
              borderRadius:   "10px",
              textDecoration: "none",
              transition:     "all .17s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background  = "#14161e";
              e.currentTarget.style.borderColor = "rgba(255,255,255,.18)";
              e.currentTarget.style.transform   = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background  = "#0d0f14";
              e.currentTarget.style.borderColor = "rgba(255,255,255,.08)";
              e.currentTarget.style.transform   = "none";
            }}
          >
            <span aria-hidden="true" style={{ fontSize:"18px", flexShrink:0 }}>📦</span>
            <span>
              <div style={{ fontSize:"12px", fontWeight:700 }}>All Releases</div>
              <div style={{ fontSize:"10px", color:"#6b7280", fontFamily:"var(--font-mono)", marginTop:"1px" }}>GitHub</div>
            </span>
          </a>
        </div>

        {/* Meta info */}
        <dl
          aria-label="Release details"
          style={{
            display:        "flex",
            justifyContent: "space-between",
            marginTop:      "16px",
            paddingTop:     "16px",
            borderTop:      "1px solid rgba(255,255,255,.07)",
            flexWrap:       "wrap",
            gap:            "10px",
          }}
        >
          {[
            { k: "Version",  v: "v1.0.6"      },
            { k: "Released", v: "Apr 21 2026"  },
            { k: "License",  v: "MIT"          },
          ].map((m) => (
            <div key={m.k}>
              <dt style={{ fontFamily:"var(--font-mono)", fontSize:"9px", color:"#6b7280", textTransform:"uppercase", letterSpacing:".09em" }}>
                {m.k}
              </dt>
              <dd style={{ fontFamily:"var(--font-mono)", fontSize:"12px", fontWeight:600, marginTop:"3px" }}>
                {m.v}
              </dd>
            </div>
          ))}
        </dl>

        <p style={{ fontFamily:"var(--font-mono)", fontSize:"10px", color:"#6b7280", textAlign:"center", marginTop:"11px", lineHeight:1.6 }}>
          {primary.hint}
        </p>
      </div>

      {/* Warning box */}
      <div
        role="note"
        style={{
          marginTop:    "10px",
          display:      "flex",
          alignItems:   "flex-start",
          gap:          "9px",
          background:   "rgba(251,191,36,.05)",
          border:       "1px solid rgba(251,191,36,.2)",
          borderRadius: "10px",
          padding:      "10px 13px",
        }}
      >
        <span aria-hidden="true" style={{ fontSize:13, flexShrink:0, marginTop:1 }}>⚠️</span>
        <p style={{ fontFamily:"var(--font-mono)", fontSize:"10px", color:"rgba(251,191,36,.85)", lineHeight:1.6 }}>
          Enable GPU acceleration for best performance. Screen &amp; mic permissions must be granted on first launch.
        </p>
      </div>
    </aside>
  );
}
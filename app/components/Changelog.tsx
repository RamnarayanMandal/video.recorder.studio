// components/Changelog.tsx
import { CHANGELOG, VERSION, RELEASE_DATE, RELEASES_URL } from "./lib/constants";

export default function Changelog() {
  return (
    <section
      id="changelog"
      className="vrs-section"
      aria-labelledby="changelog-heading"
    >
      <div className="vrs-container">
        <div
          style={{
            display:             "grid",
            gridTemplateColumns: "1fr",
            gap:                 "28px",
          }}
          className="vrs-cl-grid"
        >
          {/* ── Left: release info ──────────────────────────────────────── */}
          <div>
            <p className="vrs-label" aria-hidden="true">Changelog</p>
            <h2
              id="changelog-heading"
              className="vrs-section-h2"
              style={{ lineHeight: 1.1 }}
            >
              What&apos;s new in
            </h2>

            {/* Version badge */}
            <div
              aria-label={`Version ${VERSION}`}
              style={{
                display:      "inline-flex",
                alignItems:   "center",
                gap:          "10px",
                background:   "rgba(239,68,68,.1)",
                border:       "1px solid rgba(239,68,68,.22)",
                borderRadius: "10px",
                padding:      "8px 16px",
                marginTop:    "14px",
              }}
            >
              <span className="rec-dot" aria-hidden="true" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize:   "22px",
                  fontWeight: 700,
                  color:      "#f87171",
                }}
              >
                {VERSION}
              </span>
            </div>

            <p
              style={{
                marginTop:  "18px",
                fontSize:   "13px",
                color:      "#9ca3af",
                lineHeight: 1.75,
                maxWidth:   "400px",
              }}
            >
              Released {RELEASE_DATE} — major UI &amp; stability update fixing
              core recording issues, new floating overlay architecture, and
              improved state management.
            </p>

            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display:        "inline-flex",
                alignItems:     "center",
                gap:            "7px",
                color:          "#f87171",
                textDecoration: "none",
                fontSize:       "12px",
                fontFamily:     "var(--font-mono)",
                marginTop:      "18px",
                padding:        "9px 16px",
                background:     "rgba(239,68,68,.08)",
                border:         "1px solid rgba(239,68,68,.2)",
                borderRadius:   "9px",
                transition:     "opacity .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = ".7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              Full changelog on GitHub →
            </a>
          </div>

          {/* ── Right: changelog list ────────────────────────────────────── */}
          <ol
            className="vrs-cl-list"
            style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:"6px" }}
            aria-label={`Changelog for ${VERSION}`}
          >
            {CHANGELOG.map((item, i) => (
              <li
                key={i}
                style={{
                  display:      "flex",
                  alignItems:   "flex-start",
                  gap:          "10px",
                  padding:      "9px 12px",
                  borderRadius: "9px",
                  background:   "rgba(255,255,255,.02)",
                  border:       "1px solid rgba(255,255,255,.06)",
                  transition:   "border-color .2s, background .2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(239,68,68,.22)";
                  e.currentTarget.style.background  = "rgba(239,68,68,.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,.06)";
                  e.currentTarget.style.background  = "rgba(255,255,255,.02)";
                }}
              >
                <span aria-hidden="true" style={{ fontSize:14, flexShrink:0, marginTop:1 }}>
                  {item.e}
                </span>
                <span style={{ fontSize:"12px", lineHeight:1.65, color:"#d1d5db" }}>
                  {item.t}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .vrs-cl-grid { grid-template-columns: 1fr 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
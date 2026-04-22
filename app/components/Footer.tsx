// components/Footer.tsx
import { PlayIcon } from "./icons/Icons";
import { REPO } from "./lib/constants";

const FOOTER_LINKS = [
  { l: "Source Code", h: REPO                  },
  { l: "Releases",    h: `${REPO}/releases`    },
  { l: "Issues",      h: `${REPO}/issues`      },
  { l: "Contribute",  h: `${REPO}/pulls`       },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: "1px solid rgba(255,255,255,.07)",
        padding:   "24px 16px",
      }}
    >
      <div
        style={{
          maxWidth:   "1200px",
          margin:     "0 auto",
          display:    "flex",
          flexDirection:"column",
          gap:        "16px",
          alignItems: "flex-start",
        }}
        className="vrs-footer-inner"
      >
        {/* Branding */}
        <div style={{ display:"flex", alignItems:"center", gap:"10px", flexShrink:0 }}>
          <div
            aria-hidden="true"
            style={{
              width:        "26px",
              height:       "26px",
              borderRadius: "7px",
              flexShrink:   0,
              background:   "linear-gradient(135deg,#ef4444,#f97316)",
              display:      "grid",
              placeItems:   "center",
            }}
          >
            <PlayIcon />
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize:   "11px",
              color:      "#6b7280",
            }}
          >
            © 2026 Video Recorder Studio ·{" "}
            <a
              href="https://github.com/RamnarayanMandal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="RamnarayanMandal GitHub profile"
              style={{ color:"#6b7280", textDecoration:"none" }}
            >
              RamnarayanMandal
            </a>
            {" "}· MIT License
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <ul
            style={{
              display:  "flex",
              flexWrap: "wrap",
              gap:      "16px",
              listStyle:"none",
              padding:  0,
            }}
          >
            {FOOTER_LINKS.map((x) => (
              <li key={x.l}>
                <a
                  href={x.h}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:     "var(--font-mono)",
                    fontSize:       "11px",
                    color:          "#6b7280",
                    textDecoration: "none",
                    transition:     "color .2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#e8eaf0"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; }}
                >
                  {x.l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .vrs-footer-inner {
            flex-direction:  row !important;
            align-items:     center !important;
            justify-content: space-between;
            flex-wrap:       wrap;
          }
        }
      `}</style>
    </footer>
  );
}
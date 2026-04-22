// components/Navbar.tsx
import { PlayIcon, GitHubIcon } from "./icons/Icons";
import { REPO } from "./lib/constants";

const NAV_LINKS = ["Features", "Changelog", "Download"] as const;

export default function Navbar() {
  return (
    <header role="banner">
      <nav
        className="vrs-nav"
        aria-label="Main navigation"
        style={{
          position:       "sticky",
          top:            0,
          zIndex:         200,
          background:     "rgba(11,12,16,.88)",
          backdropFilter: "blur(20px)",
          borderBottom:   "1px solid rgba(255,255,255,.07)",
        }}
      >
        <div
          style={{
            display:       "flex",
            alignItems:    "center",
            justifyContent:"space-between",
            height:        "58px",
            maxWidth:      "1200px",
            margin:        "0 auto",
            padding:       "0 16px",
            gap:           "12px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            aria-label="Video Recorder Studio – Home"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "10px",
              flexShrink:     0,
              textDecoration: "none",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width:      "34px",
                height:     "34px",
                borderRadius:"9px",
                flexShrink: 0,
                background: "linear-gradient(135deg,#ef4444,#f97316)",
                display:    "grid",
                placeItems: "center",
                boxShadow:  "0 4px 14px rgba(239,68,68,.3)",
              }}
            >
              <PlayIcon />
            </div>
            <span
              style={{
                fontWeight:     800,
                fontSize:       "15px",
                letterSpacing:  "-.02em",
                color:          "#e8eaf0",
                whiteSpace:     "nowrap",
              }}
            >
              Video Recorder Studio
            </span>
          </a>

          {/* Nav links — hidden on mobile */}
          <div
            role="list"
            style={{
              display:    "none",
              gap:        "24px",
              alignItems: "center",
            }}
            className="vrs-nav-links"
          >
            {NAV_LINKS.map((x) => (
              <a
                key={x}
                role="listitem"
                href={`#${x.toLowerCase()}`}
                style={{
                  color:          "#6b7280",
                  textDecoration: "none",
                  fontSize:       "12px",
                  fontWeight:     600,
                  textTransform:  "uppercase",
                  letterSpacing:  ".06em",
                  transition:     "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8eaf0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#6b7280")}
              >
                {x}
              </a>
            ))}
          </div>

          {/* GitHub button */}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source code on GitHub"
            style={{
              display:        "flex",
              alignItems:     "center",
              gap:            "7px",
              flexShrink:     0,
              background:     "#14161e",
              border:         "1px solid rgba(255,255,255,.1)",
              color:          "#e8eaf0",
              padding:        "7px 12px",
              borderRadius:   "9px",
              textDecoration: "none",
              fontSize:       "12px",
              fontWeight:     600,
              fontFamily:     "var(--font-mono)",
              transition:     "border-color .2s, background .2s",
              whiteSpace:     "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(239,68,68,.5)";
              e.currentTarget.style.background  = "rgba(239,68,68,.07)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,.1)";
              e.currentTarget.style.background  = "#14161e";
            }}
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>

        {/* Responsive nav links style injection */}
        <style>{`
          @media (min-width: 768px) {
            .vrs-nav-links { display: flex !important; }
          }
        `}</style>
      </nav>
    </header>
  );
}
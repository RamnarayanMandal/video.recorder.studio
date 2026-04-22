// components/Features.tsx
import { FEATURES } from "./lib/constants";

export default function Features() {
  return (
    <section
      id="features"
      className="vrs-section"
      aria-labelledby="features-heading"
    >
      <div className="vrs-container">
        {/* Section header */}
        <header style={{ marginBottom: "42px" }}>
          <p className="vrs-label" aria-hidden="true">Features</p>
          <h2 id="features-heading" className="vrs-section-h2">
            Everything in the box.
          </h2>
        </header>

        {/* Feature grid */}
        <ul
          aria-label="Feature list"
          style={{
            listStyle:        "none",
            padding:          0,
            display:          "grid",
            gap:              "1px",
            gridTemplateColumns: "1fr",
            background:       "rgba(255,255,255,.07)",
            borderRadius:     "16px",
            overflow:         "hidden",
            border:           "1px solid rgba(255,255,255,.07)",
          }}
          className="vrs-feat-grid"
        >
          {FEATURES.map((f, i) => (
            <li
              key={i}
              style={{
                background: "#0f1015",
                padding:    "22px 24px",
                transition: "background .2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#13151f"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#0f1015"; }}
            >
              <div aria-hidden="true" style={{ fontSize:"24px", marginBottom:"10px" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize:"14px", fontWeight:700, marginBottom:"6px" }}>
                {f.title}
              </h3>
              <p style={{ fontSize:"12px", color:"#9ca3af", lineHeight:1.72, fontWeight:400 }}>
                {f.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @media (min-width: 540px)  { .vrs-feat-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (min-width: 1024px) { .vrs-feat-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
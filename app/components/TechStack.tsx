// components/TechStack.tsx
import { TECH } from "./lib/constants";

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="vrs-section"
      aria-labelledby="tech-heading"
    >
      <div className="vrs-container">
        <header style={{ marginBottom: "32px" }}>
          <p className="vrs-label" aria-hidden="true">Tech Stack</p>
          <h2 id="tech-heading" className="vrs-section-h2">
            Built with modern tools.
          </h2>
        </header>

        <ul
          style={{ display:"flex", flexWrap:"wrap", gap:"9px", listStyle:"none", padding:0 }}
          aria-label="Technologies used"
        >
          {TECH.map((t) => (
            <li
              key={t.name}
              style={{
                display:      "flex",
                alignItems:   "center",
                gap:          "8px",
                background:   "#0f1015",
                borderRadius: "10px",
                padding:      "11px 16px",
                border:       `1px solid ${t.color}22`,
                transition:   "border-color .2s, transform .15s",
                cursor:       "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${t.color}55`;
                e.currentTarget.style.transform   = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${t.color}22`;
                e.currentTarget.style.transform   = "none";
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width:        "8px",
                  height:       "8px",
                  borderRadius: "50%",
                  background:    t.color,
                  flexShrink:   0,
                }}
              />
              <span style={{ fontWeight:700, fontSize:"14px" }}>{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
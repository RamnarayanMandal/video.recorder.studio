// components/Background.tsx
// ─── Fixed decorative grid + blob background ──────────────────────────────

export default function Background() {
  return (
    <div
      aria-hidden="true"
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        0,
        overflow:      "hidden",
        pointerEvents: "none",
      }}
    >
      {/* Red blob — top left */}
      <div style={{
        position:     "absolute",
        borderRadius: "50%",
        filter:       "blur(80px)",
        top:          "-20%",
        left:         "-15%",
        width:        "min(650px, 120vw)",
        height:       "min(650px, 120vw)",
        background:   "radial-gradient(circle, rgba(255,59,59,.1) 0%, transparent 65%)",
      }} />

      {/* Blue blob — bottom right */}
      <div style={{
        position:     "absolute",
        borderRadius: "50%",
        filter:       "blur(80px)",
        bottom:       "-20%",
        right:        "-15%",
        width:        "min(550px, 110vw)",
        height:       "min(550px, 110vw)",
        background:   "radial-gradient(circle, rgba(59,158,255,.08) 0%, transparent 65%)",
      }} />

      {/* Grid overlay */}
      <div style={{
        position:        "absolute",
        inset:           0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.028) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.028) 1px, transparent 1px)
        `,
        backgroundSize: "52px 52px",
      }} />
    </div>
  );
}
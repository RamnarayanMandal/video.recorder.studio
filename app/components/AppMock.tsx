import { VERSION } from "./lib/constants";


export default function AppMock() {
  return (
    <section
      aria-label="App interface preview"
      style={{ padding: "0 0 52px" }}
    >
      <div className="vrs-container">
        <figure aria-label="Video Recorder Studio interface screenshot">

          {/* App window */}
          <div
            style={{
              borderRadius: "16px",
              overflow:     "hidden",
              border:       "1px solid rgba(255,255,255,.1)",
              background:   "linear-gradient(155deg,#12141c,#0d0f15)",
              boxShadow:    "0 36px 90px rgba(0,0,0,.5)",
              animation:    "floatY 5s ease-in-out infinite",
            }}
          >
            {/* Title bar */}
            <div
              aria-hidden="true"
              style={{
                display:      "flex",
                alignItems:   "center",
                gap:          "7px",
                padding:      "10px 15px",
                background:   "#090a0d",
                borderBottom: "1px solid rgba(255,255,255,.07)",
              }}
            >
              {(["#ff5f57","#febc2e","#28c840"] as const).map((c, i) => (
                <div key={i} style={{ width:11, height:11, borderRadius:"50%", background:c }} />
              ))}
              <span
                style={{ fontFamily:"var(--font-mono)", fontSize:11, marginLeft:8, color:"#6b7280" }}
              >
                Video Recorder Studio — {VERSION}
              </span>
            </div>

            {/* Body */}
            <div
              aria-hidden="true"
              style={{ display:"flex", flexDirection:"column" }}
              className="vrs-mock-body"
            >
              {/* Settings sidebar */}
              <div
                style={{
                  padding:     "14px",
                  background:  "#090a0d",
                  borderBottom:"1px solid rgba(255,255,255,.07)",
                }}
                className="vrs-mock-side"
              >
                <div className="vrs-label" style={{ marginBottom:10 }}>Settings</div>
                {[
                  { i:"🖥️", k:"Screen",  v:"Full Display"   },
                  { i:"📷", k:"Camera",  v:"FaceTime HD"    },
                  { i:"🎙️",k:"Mic",     v:"Built-in Mic"   },
                  { i:"⚙️", k:"Quality", v:"1080p · 60fps"  },
                  { i:"📁", k:"Save to", v:"~/Desktop/"     },
                ].map((r) => (
                  <div
                    key={r.k}
                    style={{
                      display:      "flex",
                      alignItems:   "center",
                      gap:          "8px",
                      padding:      "7px 9px",
                      borderRadius: "7px",
                      marginBottom: "5px",
                      background:   "rgba(255,255,255,.025)",
                      border:       "1px solid rgba(255,255,255,.06)",
                    }}
                  >
                    <span style={{ fontSize:13 }}>{r.i}</span>
                    <div>
                      <div style={{ fontFamily:"var(--font-mono)", fontSize:"9px", color:"#6b7280", textTransform:"uppercase" }}>
                        {r.k}
                      </div>
                      <div style={{ fontSize:"11px", fontWeight:600 }}>{r.v}</div>
                    </div>
                  </div>
                ))}

                {/* Start button */}
                <div
                  style={{
                    marginTop:      "10px",
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    gap:            "7px",
                    background:     "linear-gradient(135deg,#ef4444,#f97316)",
                    borderRadius:   "8px",
                    padding:        "9px",
                    fontSize:       "11px",
                    fontWeight:     700,
                    boxShadow:      "0 4px 14px rgba(239,68,68,.3)",
                    cursor:         "pointer",
                  }}
                >
                  <span className="rec-dot" style={{ width:8, height:8 }} />
                  Start Recording
                </div>
              </div>

              {/* Preview area */}
              <div
                style={{
                  flex:           1,
                  minHeight:      "200px",
                  background:     "#0d0e13",
                  display:        "flex",
                  flexDirection:  "column",
                  alignItems:     "center",
                  justifyContent: "center",
                  position:       "relative",
                  overflow:       "hidden",
                  padding:        "20px",
                }}
                className="vrs-mock-preview"
              >
                {/* Scan line */}
                <div
                  style={{
                    position:   "absolute",
                    left:       0,
                    right:      0,
                    height:     "2px",
                    background: "linear-gradient(90deg,transparent,rgba(239,68,68,.45),transparent)",
                    animation:  "scan 4s linear infinite",
                    pointerEvents:"none",
                  }}
                />

                {/* Play ring */}
                <div
                  style={{
                    width:        "60px",
                    height:       "60px",
                    borderRadius: "50%",
                    border:       "2px solid rgba(239,68,68,.25)",
                    display:      "grid",
                    placeItems:   "center",
                    marginBottom: "10px",
                    background:   "radial-gradient(circle,rgba(239,68,68,.07),transparent)",
                  }}
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                    stroke="rgba(239,68,68,0.45)" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>

                <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"#6b7280" }}>
                  Click Start Recording to begin
                </span>

                {/* Floating control bar */}
                <div
                  style={{
                    position:       "absolute",
                    bottom:         "12px",
                    left:           "50%",
                    transform:      "translateX(-50%)",
                    background:     "rgba(9,10,13,.9)",
                    backdropFilter: "blur(10px)",
                    border:         "1px solid rgba(255,255,255,.12)",
                    borderRadius:   "10px",
                    padding:        "6px 13px",
                    display:        "flex",
                    alignItems:     "center",
                    gap:            "10px",
                    whiteSpace:     "nowrap",
                  }}
                >
                  <span className="rec-dot" />
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"#ef4444" }}>REC</span>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"#6b7280" }}>00:00:00</span>
                  <div style={{ width:1, height:13, background:"rgba(255,255,255,.1)" }} />
                  {["🎤","⏸","⏹"].map((ic) => (
                    <span
                      key={ic}
                      style={{
                        width:        "23px",
                        height:       "23px",
                        display:      "grid",
                        placeItems:   "center",
                        background:   "rgba(255,255,255,.05)",
                        borderRadius: "5px",
                        fontSize:     "11px",
                      }}
                    >
                      {ic}
                    </span>
                  ))}
                  {/* Audio bars */}
                  <div style={{ display:"flex", gap:2, alignItems:"flex-end" }}>
                    {[3,5,4,7,3,6,2].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          width:        "3px",
                          height:       `${h * 4}px`,
                          background:   "#ef4444",
                          borderRadius: "2px",
                          opacity:      0.7,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screen-reader caption */}
          <figcaption
            style={{
              position: "absolute",
              width:    1,
              height:   1,
              overflow: "hidden",
              clip:     "rect(0,0,0,0)",
            }}
          >
            Video Recorder Studio application showing recording settings panel with
            screen, webcam, microphone controls and a live preview area with floating
            control bar.
          </figcaption>
        </figure>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .vrs-mock-body  { flex-direction: row !important; }
          .vrs-mock-side  { width: 210px; border-bottom: none !important; border-right: 1px solid rgba(255,255,255,.07) !important; }
          .vrs-mock-preview { min-height: 260px !important; }
        }
      `}</style>
    </section>
  );
}
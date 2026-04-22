// components/HowToDownload.tsx
import { PLATFORMS, type PlatformKey, RELEASES_URL } from "./lib/constants";

interface Props {
  onDownload: (key: string) => void;
}

const STEPS: Array<{ title: string; desc: string }> = [
  {
    title: "Choose your platform",
    desc: "Select Windows, macOS, or Linux. The app shows “Your Platform” automatically in the Download section.",
  },
  {
    title: "Click Download",
    desc: "Your browser will start downloading the installer from the GitHub Releases page.",
  },
  {
    title: "Install and open",
    desc: "Run the downloaded file and follow the OS prompts (permissions may be required on first launch).",
  },
];

const YT_VIDEO_ID = "AiGjLZIduY8";
const YT_START_SECONDS = 141;

export default function HowToDownload({ onDownload }: Props) {
  return (
    <section className="vrs-section" id="how-to-download" aria-labelledby="howto-heading">
      <div className="vrs-container">
        <header style={{ marginBottom: 28 }}>
          <p className="vrs-label" aria-hidden="true">Guide</p>
          <h2 id="howto-heading" className="vrs-section-h2">How to download (step-by-step)</h2>
          <p style={{ marginTop: 10, color: "#9ca3af", lineHeight: 1.7, maxWidth: 720, fontSize: 14 }}>
            Quick steps to download the correct installer and understand what happens after you click the button.
          </p>
        </header>

        <div className="vrs-howto-grid">
          <ol className="vrs-howto-steps" aria-label="Download steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="vrs-howto-step">
                <div className="vrs-howto-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</div>
                <div>
                  <div className="vrs-howto-title">{s.title}</div>
                  <div className="vrs-howto-desc">{s.desc}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="vrs-howto-card" aria-label="Download demo and buttons">
            <div className="vrs-howto-video" aria-label="YouTube demo video">
              <iframe
                className="vrs-howto-iframe"
                src={`https://www.youtube-nocookie.com/embed/${YT_VIDEO_ID}?start=${YT_START_SECONDS}&rel=0&modestbranding=1`}
                title="How to download - demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              <div>
                <div style={{ fontWeight: 800, letterSpacing: "-.02em" }}>Direct download</div>
                <div style={{ marginTop: 6, color: "#9ca3af", fontSize: 12, lineHeight: 1.6 }}>
                  These buttons download the exact GitHub release assets.
                </div>
              </div>
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="vrs-howto-link"
              >
                View release
              </a>
            </div>

            <div className="vrs-howto-btns" role="group" aria-label="Download by platform">
              {(Object.keys(PLATFORMS) as PlatformKey[]).map((key) => {
                const p = PLATFORMS[key];
                return (
                  <button
                    key={key}
                    type="button"
                    className="vrs-howto-btn"
                    onClick={() => onDownload(key)}
                    aria-label={`Download for ${p.label} (${p.file})`}
                  >
                    <span className="vrs-howto-btnLeft">
                      <span className="vrs-howto-ico" aria-hidden="true">{p.icon || "💻"}</span>
                      <span>
                        <span className="vrs-howto-btnTitle">{p.label}</span>
                        <span className="vrs-howto-btnMeta">{p.file}</span>
                      </span>
                    </span>
                    <span className="vrs-howto-chip">{p.ext}</span>
                  </button>
                );
              })}
            </div>

            <div className="vrs-howto-note" role="note">
              Tip: If a download ever fails, open the GitHub release and download the file manually.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

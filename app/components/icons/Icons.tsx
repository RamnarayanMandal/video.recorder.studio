// components/icons/Icons.tsx
// ─── All reusable SVG icons in one place ───────────────────────────────────

export const PlayIcon = () => (
  <svg
    width={14} height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const DownloadIcon = ({
  size  = 18,
  color = "white",
}: {
  size?:  number;
  color?: string;
}) => (
  <svg
    width={size} height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1={12} y1={15} x2={12} y2={3} />
  </svg>
);

export const ArrowIcon = () => (
  <svg
    width={13} height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1={5} y1={12} x2={19} y2={12} />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const GitHubIcon = () => (
  <svg
    width={14} height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const CheckIcon = () => (
  <svg
    width={14} height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ef4444"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
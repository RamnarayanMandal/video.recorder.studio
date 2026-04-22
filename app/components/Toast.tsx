// components/Toast.tsx
import { CheckIcon } from "./icons/Icons";

interface Props {
  show: boolean;
  msg:  string;
}

export default function Toast({ show, msg }: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position:     "fixed",
        bottom:       "20px",
        right:        "16px",
        zIndex:       9999,
        display:      "flex",
        alignItems:   "center",
        gap:          "9px",
        background:   "#12141c",
        border:       "1px solid rgba(239,68,68,.4)",
        borderRadius: "11px",
        padding:      "11px 17px",
        fontFamily:   "var(--font-mono)",
        fontSize:     "12px",
        color:        "#e8eaf0",
        boxShadow:    "0 8px 30px rgba(0,0,0,.45)",
        maxWidth:     "calc(100vw - 32px)",
        transition:   "all .35s cubic-bezier(.34,1.56,.64,1)",
        transform:    show ? "translateY(0)"    : "translateY(80px)",
        opacity:      show ? 1                  : 0,
        pointerEvents:show ? "auto"             : "none",
      }}
    >
      <CheckIcon />
      {msg}
    </div>
  );
}
// app/page.tsx
// ─── Root page — assembles all section components ────────────────────────
"use client";
import { useState, useEffect } from "react";
import Background from "./components/Background";
import { detectOS, PLATFORMS, triggerDownload, type PlatformKey } from "./components/lib/constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AppMock from "./components/AppMock";
import Features from "./components/Features";
import Changelog from "./components/Changelog";
import DownloadSection from "./components/DownloadSection";
import HowToDownload from "./components/HowToDownload";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function Page() {
  const [os,    setOs]    = useState<ReturnType<typeof detectOS>>("unknown");
  const [toast, setToast] = useState({ show: false, msg: "" });

  // Detect OS client-side only (avoids SSR mismatch)
  useEffect(() => { setOs(detectOS()); }, []);

  function handleDownload(key: string) {
    if (!(key in PLATFORMS)) return;
    const msg = triggerDownload(key as PlatformKey);
    if (!msg) return;
    setToast({ show: true, msg });
    setTimeout(() => setToast((p) => ({ ...p, show: false })), 3000);
  }

  return (
    <>
      {/* ── Decorative animated background ── */}
      <Background />

      {/* ── Skip to main content (accessibility) ── */}
      <a
        href="#main-content"
        style={{
          position:   "absolute",
          left:       "-9999px",
          top:        "auto",
          width:      "1px",
          height:     "1px",
          overflow:   "hidden",
          zIndex:     9999,
          background: "#ef4444",
          color:      "#fff",
          padding:    "8px 16px",
          borderRadius:"0 0 8px 0",
        }}
        onFocus={(e) => {
          e.currentTarget.style.left   = "0";
          e.currentTarget.style.width  = "auto";
          e.currentTarget.style.height = "auto";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left   = "-9999px";
          e.currentTarget.style.width  = "1px";
          e.currentTarget.style.height = "1px";
        }}
      >
        Skip to main content
      </a>

      {/* ── All content sits above the fixed background ── */}
      <div style={{ position: "relative", zIndex: 1 }}>

        <Navbar />

        <main id="main-content">
          <Hero os={os} onDownload={handleDownload} />
          <AppMock />

          <div className="vrs-divider" role="separator" />
          <Features />

          <div className="vrs-divider" role="separator" />
          <Changelog />

          <div className="vrs-divider" role="separator" />
          <DownloadSection os={os} onDownload={handleDownload} />

          <div className="vrs-divider" role="separator" />
          <HowToDownload onDownload={handleDownload} />

          <div className="vrs-divider" role="separator" />
          <TechStack />
        </main>

        <div className="vrs-divider" role="separator" />
        <Footer />
      </div>

      {/* ── Download toast notification ── */}
      <Toast show={toast.show} msg={toast.msg} />
    </>
  );
}

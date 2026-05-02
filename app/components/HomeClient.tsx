"use client";

import { useEffect, useState } from "react";
import AppMock from "./AppMock";
import Background from "./Background";
import Changelog from "./Changelog";
import DownloadSection from "./DownloadSection";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import HowToDownload from "./HowToDownload";
import Navbar from "./Navbar";
import TechStack from "./TechStack";
import Toast from "./Toast";
import { detectOS, triggerDownload, type PlatformKey, type ReleaseData } from "./lib/constants";

interface Props {
  release: ReleaseData;
}

export default function HomeClient({ release }: Props) {
  const [os, setOs] = useState<ReturnType<typeof detectOS>>("unknown");
  const [toast, setToast] = useState({ show: false, msg: "" });

  useEffect(() => {
    const id = window.setTimeout(() => setOs(detectOS()), 0);
    return () => window.clearTimeout(id);
  }, []);

  function handleDownload(key: string) {
    if (!(key in release.PLATFORMS)) return;
    const msg = triggerDownload(key as PlatformKey, release.PLATFORMS);
    if (!msg) return;
    setToast({ show: true, msg });
    setTimeout(() => setToast((p) => ({ ...p, show: false })), 3000);
  }

  return (
    <>
      <Background />

      <a
        href="#main-content"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          zIndex: 9999,
          background: "#ef4444",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "0 0 8px 0",
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = "0";
          e.currentTarget.style.width = "auto";
          e.currentTarget.style.height = "auto";
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = "-9999px";
          e.currentTarget.style.width = "1px";
          e.currentTarget.style.height = "1px";
        }}
      >
        Skip to main content
      </a>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <main id="main-content">
          <Hero os={os} onDownload={handleDownload} release={release} />
          <AppMock version={release.VERSION} />

          <div className="vrs-divider" role="separator" />
          <Features />

          <div className="vrs-divider" role="separator" />
          <Changelog release={release} />

          <div className="vrs-divider" role="separator" />
          <DownloadSection os={os} onDownload={handleDownload} release={release} />

          <div className="vrs-divider" role="separator" />
          <HowToDownload onDownload={handleDownload} release={release} />

          <div className="vrs-divider" role="separator" />
          <TechStack />
        </main>

        <div className="vrs-divider" role="separator" />
        <Footer />
      </div>

      <Toast show={toast.show} msg={toast.msg} />
    </>
  );
}

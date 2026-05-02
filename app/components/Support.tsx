"use client";

import { useState } from "react";
import type { ReactNode } from "react";

const SUPPORT_PHONE = "6352396301";
const SUPPORT_EMAIL = "ramnarayan847230@gmail.com";

type CopyTarget = "phone" | "email" | null;

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m22 7-10 6L2 7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 6 9 17l-5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.4-4.2A8 8 0 1 1 21 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  );
}

function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "success" }) {
  return (
    <span
      className={[
        "inline-flex min-h-9 items-center gap-2 rounded-full border px-3.5 text-xs font-semibold",
        tone === "success"
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
          : "border-white/10 bg-white/[0.04] text-zinc-300",
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function SupportPreview() {
  return (
    <div className="relative min-h-48 overflow-hidden rounded-[18px] border border-white/10 bg-[#0b0c10]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-6 h-28 w-28 rounded-full bg-orange-400/10 blur-3xl" />

      <div className="absolute left-6 top-7 w-44 rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/30 backdrop-blur">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2 w-20 rounded-full bg-white/20" />
        </div>
        <div className="mb-2 h-2 w-28 rounded-full bg-white/20" />
        <div className="h-2 w-16 rounded-full bg-white/10" />
      </div>

      <div className="absolute right-7 top-8 grid h-16 w-16 place-items-center rounded-full border border-sky-300/20 bg-sky-400/10 text-[10px] font-black tracking-widest text-sky-200">
        CAM
      </div>

      <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-red-300/20 bg-[#171923] px-4 py-2.5 text-xs font-bold text-zinc-100 shadow-xl shadow-black/30">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-40" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-400" />
        </span>
        Recording 00:24
      </div>
    </div>
  );
}

function ContactCard({
  title,
  description,
  value,
  href,
  action,
  accent,
  copied,
  onCopy,
  icon,
}: {
  title: string;
  description: string;
  value: string;
  href: string;
  action: string;
  accent: "red" | "orange";
  copied: boolean;
  onCopy: () => void;
  icon: ReactNode;
}) {
  const primary =
    accent === "red"
      ? "bg-red-500 text-white hover:bg-red-400 focus-visible:outline-red-300"
      : "bg-orange-400 text-zinc-950 hover:bg-orange-300 focus-visible:outline-orange-300";
  const iconTone =
    accent === "red"
      ? "bg-red-500/10 text-red-200 ring-red-300/15"
      : "bg-orange-400/10 text-orange-200 ring-orange-300/15";

  return (
    <article className="group relative ">
      <div className="flex items-start gap-4 ">
        <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ring-1 ${iconTone}`}>
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-white">{title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-zinc-400">{description}</p>
          <p className="mt-3 break-all font-mono text-sm font-semibold text-zinc-200">{value}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 my-4">
        <a
          href={href}
          className={`inline-flex min-h-12 items-center justify-center rounded-2xl px-4 text-sm font-black transition duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${primary}`}
        >
          {action}
        </a>

        <button
          type="button"
          onClick={onCopy}
          aria-label={`Copy ${title.toLowerCase()} contact`}
          title={copied ? "Copied" : "Copy"}
          className="inline-flex min-h-12 min-w-12 my-4 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm font-bold text-zinc-200 transition duration-200 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.06] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </article>
  );
}

export default function Support() {
  const [copied, setCopied] = useState<CopyTarget>(null);

  async function copyValue(value: string, target: Exclude<CopyTarget, null>) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(target);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  }

  return (
    <section id="support" className="vrs-section" aria-labelledby="support-heading">
      <div className="vrs-container">
        
          

          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-10">
            <div>
              <p className="vrs-label" aria-hidden="true">
                Support
              </p>
              <h2
                id="support-heading"
                className="max-w-xl text-3xl font-black leading-tight tracking-normal text-white sm:text-4xl"
              >
                Need help with Video Recorder Studio?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-[15px]">
                Get friendly support for downloads, installation, recording errors, audio setup,
                MP4 conversion, or anything blocking your workflow.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Badge tone="success">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Response within 24 hours
                </Badge>
                <Badge>
                  <span className="h-2 w-2 rounded-full bg-zinc-500" />
                  Human support
                </Badge>
              </div>

              <div className="mt-7">
                <SupportPreview />
              </div>
            </div>

            <div className="grid gap-10">
              <ContactCard
                title="Call Support"
                description="Best for urgent setup or recording issues."
                value={SUPPORT_PHONE}
                href={`tel:${SUPPORT_PHONE}`}
                action="Call now"
                accent="red"
                copied={copied === "phone"}
                onCopy={() => copyValue(SUPPORT_PHONE, "phone")}
                icon={<PhoneIcon />}
              />

              <ContactCard
                title="Email Support"
                description="Send screenshots, logs, feedback, or detailed bugs."
                value={SUPPORT_EMAIL}
                href={`mailto:${SUPPORT_EMAIL}?subject=Video%20Recorder%20Studio%20Support`}
                action="Send email"
                accent="orange"
                copied={copied === "email"}
                onCopy={() => copyValue(SUPPORT_EMAIL, "email")}
                icon={<MailIcon />}
              />

              <button
                type="button"
                disabled
                aria-label="Live chat coming soon"
                className="flex min-h-20 cursor-not-allowed items-center justify-between gap-4 rounded-[18px] border border-dashed border-white/10 bg-white/[0.025] px-5 text-left opacity-80 p-10  text-sm font-bold text-zinc-400 transition duration-200 hover:scale-[1.02] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sky-400/10 text-sky-200 ring-1 ring-white/10">
                    <ChatIcon />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">Live chat</span>
                    <span className="block text-xs font-medium text-zinc-400">Coming soon</span>
                  </span>
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-xs font-semibold text-zinc-400">
                  Future
                </span>
              </button>
            </div>
          </div>
        </div>
     
    </section>
  );
}

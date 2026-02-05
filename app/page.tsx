"use client";

import { useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* HERO VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 h-full w-full object-cover"
      >
        <source
          src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/55" />

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Launch Incoming
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Slater Media Company
          </h1>

          <p className="mt-3 text-base text-white/80 sm:text-lg">
            Design & Development in Progress
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 text-white/80">
            <span className="h-px w-10 bg-white/30" />
            <span className="text-sm tracking-wide sm:text-base">
              Fuzion Consulting Group
            </span>
            <span className="h-px w-10 bg-white/30" />
          </div>
        </div>
      </div>
    </main>
  );
}




























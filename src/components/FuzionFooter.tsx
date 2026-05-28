"use client";

import { BRAND } from "../config/brand";

const NAVY = BRAND.colors.navy;
const GOLD = BRAND.colors.gold;

export default function FuzionFooter() {
  return (
    <footer className="border-t border-[#C8A96B]/20 bg-[#0B1F3A]">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <img
            src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo-V2.png"
            alt="Fuzion"
            className="h-16 w-auto opacity-95"
          />

          <div className="h-px w-24 bg-[#C8A96B]/40" />

          <p
            className="text-sm font-medium tracking-wide"
            style={{ color: GOLD }}
          >
            © {new Date().getFullYear()} Fuzion Consulting Group. All rights
            reserved.
          </p>

          <p className="text-xs text-white/50">
            Strategy • Technology • Operations • Enterprise Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
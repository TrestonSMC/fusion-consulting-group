"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LOGO_BLUE = "#2a8bff";

export default function FuzionNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[115px] border-b border-black/5 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-sm shadow-sm"
          : "bg-white/25 backdrop-blur-[2px]"
      }`}
    >
      <nav className="flex h-full items-center justify-between pr-10">

        {/* MASSIVE LOGO */}
        <Link href="/" aria-label="Home" className="inline-flex">
          <img
            src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
            alt="Fuzion Consulting Group"
            className="h-[105px] lg:h-[110px] w-auto"
          />
        </Link>

        {/* CENTER LINKS */}
        <div className="hidden items-center gap-12 md:flex">
          <Link href="/services" className="navLink">
            Capabilities
          </Link>
          <Link href="/projects" className="navLink">
            Projects
          </Link>
          <Link href="/company" className="navLink">
            Company
          </Link>
          <Link href="/news" className="navLink">
            News
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden items-center gap-10 md:flex">
          <Link href="/social-responsibility" className="navLink">
            Social Responsibility
          </Link>
          <Link href="/careers" className="navLink">
            Careers
          </Link>
          <Link
            href="/contact"
            className="rounded-full border px-6 py-2 text-sm font-semibold transition"
            style={{
              borderColor: LOGO_BLUE,
              color: LOGO_BLUE,
            }}
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}








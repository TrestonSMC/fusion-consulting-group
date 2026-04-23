"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/services", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/company", label: "Company" },
  { href: "/news", label: "News" },
  { href: "/social-responsibility", label: "Social Responsibility" },
  { href: "/careers", label: "Careers" },
];

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
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/5 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto h-[84px] w-full max-w-[1600px] px-6">
        <div className="grid h-full grid-cols-[auto_1fr_auto] items-center">
          {/* Left: Logo */}
          <div className="flex items-center justify-start">
            <Link href="/" aria-label="Home" className="inline-flex shrink-0">
              <img
                src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
                alt="Fuzion Consulting Group"
                className="h-[48px] w-auto"
              />
            </Link>
          </div>

          {/* Center: Nav */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-8 xl:gap-10 2xl:gap-12">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="whitespace-nowrap text-[15px] font-semibold text-black/85 transition hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Empty spacer for balance */}
          <div />
        </div>
      </nav>
    </header>
  );
}





"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BRAND } from "../config/brand";

const NAVY = BRAND.colors.navy;
const GOLD = BRAND.colors.gold;

const navItems = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/company", label: "Company", hasDropdown: true },
  { href: "/news", label: "News" },
  { href: "/social-responsibility", label: "Social Responsibility" },
  { href: "/careers", label: "Careers" },
];

export default function FuzionNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[#C8A96B]/30 bg-white/95 shadow-sm backdrop-blur-md"
          : "border-[#0B1F3A]/10 bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between lg:h-[84px]">
          <Link href="/" aria-label="Home" className="inline-flex shrink-0">
            <img
              src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo-V2.png"
              alt="Fuzion"
              className="h-[124px] w-auto sm:h-[105px] lg:h-[200px]"
            />
          </Link>

          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-[14px] font-semibold transition-colors"
                      style={{ color: NAVY }}
                    >
                      <span className="group-hover:text-[#C8A96B]">
                        {item.label}
                      </span>
                      <span className="text-[11px] text-[#C8A96B]">▾</span>
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                      <div className="rounded-2xl border border-[#C8A96B]/25 bg-white p-2 shadow-lg shadow-[#0B1F3A]/10">
                        <Link
                          href="/company/principal-advisors"
                          className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#0B1F3A]/80 transition hover:bg-[#C8A96B]/10 hover:text-[#0B1F3A]"
                        >
                          Principal Advisors
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[14px] font-semibold text-[#0B1F3A] transition-colors hover:text-[#C8A96B]"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="hidden lg:block lg:w-[72px]" />

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96B]/35 bg-white text-[#0B1F3A] shadow-sm transition hover:bg-[#C8A96B]/10 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`${
          mobileOpen ? "block" : "hidden"
        } border-t border-[#C8A96B]/20 bg-white/98 lg:hidden`}
      >
        <div className="px-4 pb-5 pt-3">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-semibold text-[#0B1F3A] transition hover:text-[#C8A96B]"
              >
                {item.label}
              </Link>

              {item.hasDropdown && (
                <Link
                  href="/company/principal-advisors"
                  onClick={() => setMobileOpen(false)}
                  className="block pb-3 pl-4 text-sm font-medium text-[#0B1F3A]/70 transition hover:text-[#C8A96B]"
                >
                  Principal Advisors
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}



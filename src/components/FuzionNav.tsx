"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/services", label: "Capabilities" },
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
      className={`fixed inset-x-0 top-0 z-50 border-b border-black/5 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between lg:h-[84px]">
          <div className="flex items-center">
            <Link href="/" aria-label="Home" className="inline-flex shrink-0">
              <img
                src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
                alt="Fuzion Consulting Group"
                className="h-[72px] w-auto sm:h-[82px] lg:h-[100px]"
              />
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold text-black/85 transition hover:text-black xl:text-[15px]"
                    >
                      {item.label}
                      <span className="text-[11px] leading-none">▾</span>
                    </Link>

                    <div className="invisible absolute left-1/2 top-full z-50 mt-4 w-60 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <Link
                        href="/company/principal-partners"
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/75 hover:bg-black/[0.04] hover:text-black"
                      >
                        Principal Advisors
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="whitespace-nowrap text-[14px] font-semibold text-black/85 transition hover:text-black xl:text-[15px]"
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
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-black/[0.03] lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-black/5 bg-white/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-3 sm:px-6">
          <div className="flex flex-col rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={index !== navItems.length - 1 ? "border-b border-black/5" : ""}
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-5 py-4 text-[15px] font-semibold text-black/85 transition hover:bg-black/[0.03] hover:text-black"
                >
                  {item.label}
                </Link>

                {item.hasDropdown && (
                  <Link
                    href="/company/principal-partners"
                    onClick={() => setMobileOpen(false)}
                    className="block border-t border-black/5 bg-black/[0.02] px-8 py-3 text-[14px] font-semibold text-black/65 transition hover:bg-black/[0.04] hover:text-black"
                  >
                    Principal Advisors
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}



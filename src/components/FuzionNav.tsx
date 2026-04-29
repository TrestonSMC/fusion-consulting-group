"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/capabilities", label: "Capabilities" }, // ✅ FIXED
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

          {/* Logo */}
          <Link href="/" className="inline-flex shrink-0">
            <img
              src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
              alt="Fuzion"
              className="h-[72px] w-auto sm:h-[82px] lg:h-[100px]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden flex-1 justify-center lg:flex">
            <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 text-[14px] font-semibold text-black/85 hover:text-black"
                    >
                      {item.label}
                      <span className="text-[11px]">▾</span>
                    </Link>

                    {/* Dropdown */}
                    <div className="invisible absolute left-1/2 top-full mt-4 w-60 -translate-x-1/2 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                      <Link
                        href="/company/principal-advisors"
                        className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/75 hover:bg-black/[0.04]"
                      >
                        Principal Advisors
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[14px] font-semibold text-black/85 hover:text-black"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:w-[72px]" />

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${mobileOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="px-4 pb-5 pt-3">
          {navItems.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 font-semibold"
              >
                {item.label}
              </Link>

              {item.hasDropdown && (
                <Link
                  href="/company/principal-advisors"
                  onClick={() => setMobileOpen(false)}
                  className="block pl-4 pb-3 text-sm"
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



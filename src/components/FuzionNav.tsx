"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LOGO_BLUE = "#2a8bff";

export default function FuzionNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b border-black/5 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-md shadow-sm"
            : "bg-white/55 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex h-[76px] items-center justify-between px-4 sm:h-[86px] sm:px-6 lg:h-[104px] lg:px-10">
          <Link
            href="/"
            aria-label="Home"
            className="relative z-[60] inline-flex shrink-0"
            onClick={closeMenu}
          >
            <img
              src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
              alt="Fuzion Consulting Group"
              className="h-[52px] w-auto sm:h-[64px] lg:h-[96px]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link href="/services" className="navLink">
              Capabilities
            </Link>
            <Link href="/industries" className="navLink">
              Industries
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
            <Link href="/social-responsibility" className="navLink">
              Social Responsibility
            </Link>
            <Link href="/careers" className="navLink">
              Careers
            </Link>
            <Link
              href="/contact"
              className="rounded-full border px-5 py-2 text-sm font-semibold transition hover:bg-blue-50"
              style={{
                borderColor: LOGO_BLUE,
                color: LOGO_BLUE,
              }}
            >
              Contact Us
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-[60] inline-flex items-center justify-center rounded-full p-2 text-black lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMenu}
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          />

          <div className="absolute left-0 right-0 top-[76px] border-t border-black/5 bg-white shadow-xl sm:top-[86px]">
            <div className="flex flex-col px-5 py-5">
              <Link
                href="/services"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                Capabilities
              </Link>
              <Link
                href="/industries"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                Industries
              </Link>
              <Link
                href="/projects"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                Projects
              </Link>
              <Link
                href="/company"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                Company
              </Link>
              <Link
                href="/news"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                News
              </Link>
              <Link
                href="/social-responsibility"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                Social Responsibility
              </Link>
              <Link
                href="/careers"
                onClick={closeMenu}
                className="border-b border-black/5 py-3 text-base font-medium"
              >
                Careers
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 rounded-full border px-5 py-3 text-center text-sm font-semibold transition"
                style={{
                  borderColor: LOGO_BLUE,
                  color: LOGO_BLUE,
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}








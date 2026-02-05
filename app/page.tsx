"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Supabase logo URL
  const LOGO_URL =
    "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png";

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // TOP RIGHT SLIDE MENU (ONLY THESE)
  const primaryNav = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // FOOTER (NETFLIX-STYLE MULTI COLUMN)
  const footerColumns = [
    {
      links: [
        { label: "Capabilities", href: "/capabilities" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Company", href: "/company" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Investor Relations", href: "/investors" },
        { label: "Buy Services", href: "/services" },
        { label: "Cookie Preferences", href: "/cookies" },
        { label: "Legal Notices", href: "/legal" },
      ],
    },
    {
      links: [
        { label: "Account", href: "/account" },
        { label: "Careers", href: "/careers" },
        { label: "Ways to Work", href: "/ways-to-work" },
        { label: "Corporate Information", href: "/company" },
        { label: "News", href: "/news" },
      ],
    },
    {
      links: [
        { label: "Social Responsibility", href: "/social-responsibility" },
        { label: "Shop", href: "/shop" },
        { label: "Terms of Use", href: "/terms" },
        { label: "Contact Us", href: "/contact" },
        {
          label: "Do Not Sell or Share My Personal Information",
          href: "/do-not-sell",
        },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
      {/* FULL-PAGE HERO VIDEO (GLOBAL BACKGROUND) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 h-full w-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 bg-black/65 z-10 pointer-events-none" />

      {/* SUBTLE FUTURISTIC GLOWS */}
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/12 blur-[220px]" />
        <div className="absolute top-1/3 right-[-350px] h-[550px] w-[550px] rounded-full bg-cyan-400/10 blur-[220px]" />
      </div>

      {/* ✅ FIXED TOP NAV BAR (more transparent so hero shows) */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <div className="border-b border-white/10 bg-black/10 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* Logo (top left) — WAY BIGGER */}
            <Link href="/" className="flex items-center">
              <img
                src={LOGO_URL}
                alt="Fuzion logo"
                className="h-20 md:h-24 w-auto object-contain opacity-95"
                loading="eager"
              />
            </Link>

            {/* Menu (top right) */}
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/85 hover:bg-white/[0.10] transition"
              aria-label="Open menu"
            >
              <span className="text-white/70">Menu</span>
              <span className="grid gap-1">
                <span className="h-[2px] w-5 bg-white/70" />
                <span className="h-[2px] w-5 bg-white/70" />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so content doesn’t hide under fixed nav (bigger because logo is bigger) */}
      <div className="h-[110px] md:h-[130px] relative z-20" />

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-40 transition ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          aria-label="Close menu backdrop"
          className="absolute inset-0 bg-black/25"
          onClick={() => setMenuOpen(false)}
        />
      </div>

      {/* GLASS SLIDE-OVER */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[340px] sm:w-[420px] transform transition duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="h-full border-l border-white/10 bg-white/[0.06] backdrop-blur-2xl">
          <div className="flex items-center justify-between px-7 py-6 border-b border-white/10">
            <p className="text-xs tracking-widest text-white/60 uppercase">
              Menu
            </p>

            <button
              onClick={() => setMenuOpen(false)}
              className="group rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm text-white/70 hover:bg-white/[0.10] transition"
              aria-label="Close menu"
            >
              <span className="group-hover:text-white/90 transition">✕</span>
            </button>
          </div>

          <nav className="px-7 py-7">
            <ul className="space-y-6">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="group inline-flex items-center gap-3 text-2xl font-medium text-white/90 hover:text-white transition"
                  >
                    <span className="h-[2px] w-6 bg-cyan-300/60 opacity-0 group-hover:opacity-100 transition" />
                    <span className="underline-offset-8 group-hover:underline decoration-white/30">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-white/55 leading-relaxed">
                Capabilities, Case Studies, Company, Social Responsibility, News,
                and Careers live in the footer.
              </p>
            </div>
          </nav>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="relative z-20">
        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Automating Business Processes
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                With Modern Technology
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
              We help organizations eliminate operational friction by designing
              scalable automation, AI, and enterprise technology systems that
              actually get used.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Technology-Driven Consulting for Modern Businesses
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Technology is no longer optional—it is foundational to how modern
              organizations operate, scale, and compete. Fuzion Consulting Group
              partners with leadership teams to align strategy with
              execution-focused technology solutions.
            </p>

            <p className="mt-6 text-lg text-zinc-400">
              From internal operations to customer-facing platforms, we design
              systems that reduce complexity, increase visibility, and support
              long-term growth.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-6 py-28 bg-zinc-900/60">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-white">
              Our Expertise
            </h2>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automation & Workflow Design",
                  desc: "Design and implement intelligent workflows that eliminate manual effort and operational bottlenecks.",
                },
                {
                  title: "Business & IT Systems Integration",
                  desc: "Connect platforms, data, and teams into cohesive, scalable systems.",
                },
                {
                  title: "AI Engineering Solutions",
                  desc: "Apply artificial intelligence where it creates real, measurable business value.",
                },
                {
                  title: "Dashboards & Productivity Portals",
                  desc: "Deliver real-time visibility and decision-making tools for leadership and operations.",
                },
                {
                  title: "Microsoft 365 & Cloud Optimization",
                  desc: "Secure, modernize, and optimize cloud environments for collaboration and efficiency.",
                },
                {
                  title: "Custom SaaS Platforms",
                  desc: "Build purpose-driven software aligned with real-world business needs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-xl p-[1px] bg-gradient-to-br from-blue-500/22 via-cyan-400/14 to-transparent"
                >
                  <div className="rounded-xl bg-zinc-950/80 p-6 backdrop-blur shadow-[0_0_22px_rgba(56,189,248,0.16)]">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-zinc-300/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Ready to Take the Next Step?
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Schedule a consultation with Fuzion Consulting Group to explore how
              modern systems and automation can support your business goals.
            </p>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-500 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER (NETFLIX-STYLE) */}
        <footer className="px-6 pb-20 pt-10">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm text-white/70 mb-8">
              Questions? Call{" "}
              <span className="underline underline-offset-4 decoration-white/30">
                1-800-000-0000
              </span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10">
              {footerColumns.map((col, i) => (
                <ul key={i} className="space-y-4">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-white/60 hover:text-white/80 underline underline-offset-4 decoration-white/20 hover:decoration-white/40 transition"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <div className="mt-14">
              <button
                className="inline-flex items-center gap-3 rounded border border-white/25 bg-black/30 px-4 py-2 text-sm text-white/80 hover:bg-black/40 transition"
                aria-label="Language selector"
              >
                <span className="text-base">🌐</span>
                English
                <span className="text-white/60">▾</span>
              </button>
            </div>

            <p className="mt-6 text-xs text-white/45">Fuzion Consulting Group</p>
          </div>
        </footer>
      </div>
    </main>
  );
}



























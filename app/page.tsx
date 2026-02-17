"use client";

import Link from "next/link";
import { useRef } from "react";

const LOGO_BLUE = "#2a8bff"; // adjust if you want closer to your exact logo

export default function HomePage() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.62);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const capabilities = [
    {
      title: "Construction, Document, and Project Management SaaS",
      desc: "Modern platforms that streamline approvals, documentation, scheduling, and delivery.",
      href: "/services",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80",
      badge: "SaaS / PM",
    },
    {
      title: "Field Productivity Portals & Dashboards",
      desc: "Operational visibility across teams, sites, and systems—built for speed and clarity.",
      href: "/services",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80",
      badge: "Dashboards",
    },
    {
      title: "Business & IT Integration Strategies",
      desc: "Connect tools, data, and workflows so your operations run as one system.",
      href: "/services",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=80",
      badge: "Strategy",
    },
    {
      title: "AI Engineering Solutions",
      desc: "Practical AI that reduces overhead, automates decisions, and increases output.",
      href: "/services",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=80",
      badge: "AI",
    },
    {
      title: "Microsoft 365 & Cloud Optimization",
      desc: "Implementations, governance, security hardening, and cloud cost control.",
      href: "/services",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80",
      badge: "M365 / Cloud",
    },
    {
      title: "Workflow Automation & Digital Transformation",
      desc: "Replace manual work with clean, measurable processes that scale.",
      href: "/services",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
      badge: "Automation",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="hazePanel" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl items-start px-6 pt-32 md:pt-36">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              FUZION CONSULTING GROUP
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight text-black/90 md:text-6xl">
              Automating Business Processes with Modern Technology
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
              Fuzion Consulting Group helps organizations make technology a true
              business advantage through strategic, operational, and IT
              consulting.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-black/20 bg-white/60 px-6 py-3 text-sm font-medium text-black/90 backdrop-blur hover:bg-white"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .hazePanel {
            position: absolute;
            top: 0; bottom: 0; left: 0;
            z-index: 10;
            width: 100%;
            pointer-events: none;
            background: rgba(255, 255, 255, 0.42);
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
            box-shadow: inset -160px 0 140px -80px rgba(255,255,255,0.65);
            animation: openHaze 1.2s ease-out 0.2s forwards;
          }

          @keyframes openHaze {
            from { width: 100%; }
            to { width: 66%; }
          }

          @media (prefers-reduced-motion: reduce) {
            .hazePanel { animation: none; width: 66%; }
          }

          .noScrollBar::-webkit-scrollbar { display: none; }
          .noScrollBar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      {/* BLUE DIVIDER LINE (Hero -> Content) */}
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== EXPANDED HOME COPY ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                CONSULTING SERVICES
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-4xl">
                Expert Consulting Services for Business
              </h2>

              <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
                Technology-Driven Solutions for a Complex Business Landscape
              </p>

              <p className="mt-6 text-sm leading-relaxed text-black/60 md:text-base">
                At Fuzion Consulting Group and our certified Minority Women-Owned
                subsidiary,{" "}
                <span className="font-semibold text-black/80">
                  Fuzion Chickasaw Group
                </span>
                , we recognize that technology is no longer optional—it’s
                foundational to business success. We deliver a comprehensive
                suite of consulting services spanning business strategy,
                professional operations, and IT infrastructure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Explore Services
                </Link>
                <Link
                  href="/company"
                  className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                >
                  About Our Company →
                </Link>
              </div>
            </div>

            {/* ✅ Blue border around the big rectangle */}
            <div className="lg:col-span-6">
              <div
                className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                style={{ borderColor: LOGO_BLUE }}
              >
                <h3 className="text-xl font-semibold text-black/90">
                  Our expertise includes:
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Construction, Document, and Project Management SaaS solutions",
                    "Business and IT Integration Strategies",
                    "AI Engineering Solutions",
                    "Technology dashboards and field productivity portals",
                    "Microsoft 365 implementation and cloud optimization",
                    "Workflow automation and digital transformation",
                    "Business and Professional Services Consulting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/10 bg-white/80 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                          style={{ background: LOGO_BLUE }}
                        />
                        <p className="text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-black/60">
                  With decades of combined experience, our consultants partner
                  closely with each client to understand their unique operational
                  challenges and design sustainable, scalable solutions. Whether
                  you're a growing startup or a large enterprise, we bring the
                  insight, precision, and execution needed to thrive in today’s
                  digital economy.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-black/5"
                  >
                    Talk to a Consultant →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== “PUSH BUTTON” CAPABILITIES CAROUSEL ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                CAPABILITIES
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-black/90">
                Built for real-world operations
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">
              </p>
            </div>

            {/* ✅ Blue arrow buttons */}
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={() => scrollByCards("left")}
                className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md hover:brightness-110"
                style={{ background: LOGO_BLUE }}
                aria-label="Previous"
              >
                <span className="text-xl">←</span>
              </button>
              <button
                type="button"
                onClick={() => scrollByCards("right")}
                className="grid h-12 w-12 place-items-center rounded-2xl text-white shadow-md hover:brightness-110"
                style={{ background: LOGO_BLUE }}
                aria-label="Next"
              >
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>

          <div className="relative mt-8">
            {/* Mobile arrows */}
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="md:hidden absolute left-0 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-2xl text-white shadow-md hover:brightness-110"
              style={{ background: LOGO_BLUE }}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="md:hidden absolute right-0 top-1/2 z-10 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-2xl text-white shadow-md hover:brightness-110"
              style={{ background: LOGO_BLUE }}
              aria-label="Next"
            >
              →
            </button>

            <div
              ref={sliderRef}
              className="noScrollBar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pr-6"
            >
              {capabilities.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group relative snap-start overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
                  style={{ minWidth: "min(720px, 90vw)" }}
                >
                  <div className="relative h-72 w-full">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div
                      className="absolute left-6 top-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur"
                      style={{
                        borderColor: "rgba(255,255,255,0.25)",
                        background: "rgba(42,139,255,0.20)",
                      }}
                    >
                      {c.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-3xl font-semibold text-black/90">
                      {c.title}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
                      {c.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-black/80">
                      Learn more
                      <span
                        className="grid h-8 w-8 place-items-center rounded-full border bg-white transition group-hover:translate-x-0.5"
                        style={{ borderColor: "rgba(0,0,0,0.15)" }}
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-4 text-xs text-black/45">
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CONTACT “SHEET” SECTION (BLUE) ===================== */}
      <section className="relative overflow-hidden" style={{ background: LOGO_BLUE }}>
        {/* subtle glow */}
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Would love to help.
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-white/80" />
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/90">
                Do you have questions about our services? Do you want to learn
                about ways we can help your business? Contact us now!
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/85">
                <p>• Strategy, operations, and modern digital solutions</p>
                <p>• Built for regulated + high-stakes environments</p>
                <p>• Scalable execution with measurable outcomes</p>
              </div>

              <div className="mt-10">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
                >
                  Explore Services →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name *" />
                  <Field label="Organization *" />
                  <Field label="Email *" />
                  <Field label="Phone" />
                  <div className="md:col-span-2">
                    <Field label="Interested in:" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/95">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="mt-2 w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/60"
                      placeholder="Tell us what you're building…"
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-end">
                  <button
                    type="submit"
                    className="rounded-2xl bg-white px-8 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
                  >
                    SUBMIT
                  </button>
                </div>

                <p className="mt-4 text-xs text-white/65">
                  This is a front-end form layout. Wire it to email/CRM when ready.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label }: { label: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/95">{label}</label>
      <input className="mt-2 w-full rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-white/60" />
    </div>
  );
}




















































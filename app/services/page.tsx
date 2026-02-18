// app/services/page.tsx
"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

type Service = {
  title: string;
  desc: string;
  href: string;
  badge: string;
};

export default function ServicesPage() {
  const services: Service[] = [
    {
      title: "Construction, Document & Project Management SaaS",
      desc: "Modern platforms that streamline approvals, documentation, scheduling, and delivery.",
      href: "/services",
      badge: "SaaS / PM",
    },
    {
      title: "Field Productivity Portals & Dashboards",
      desc: "Operational visibility across teams, sites, and systems—built for speed and clarity.",
      href: "/services",
      badge: "Dashboards",
    },
    {
      title: "Business & IT Integration Strategies",
      desc: "Connect tools, data, and workflows so your operations run as one system.",
      href: "/services",
      badge: "Strategy",
    },
    {
      title: "AI Engineering Solutions",
      desc: "Practical AI that reduces overhead, automates decisions, and increases output.",
      href: "/services",
      badge: "AI",
    },
    {
      title: "Microsoft 365 & Cloud Optimization",
      desc: "Migrations, governance, reporting architecture, and cloud cost control.",
      href: "/services/microsoft-cloud", // ✅ connects to your new page
      badge: "M365 / Cloud",
    },
    {
      title: "Workflow Automation & Digital Transformation",
      desc: "Replace manual work with clean, measurable processes that scale.",
      href: "/services",
      badge: "Automation",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            SERVICES
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Consulting built for real-world operations.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            We design and implement modern systems that streamline operations,
            strengthen compliance, and improve visibility across teams and tools.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Talk to a Consultant
            </Link>

            <Link
              href="/company"
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
            >
              About Our Company →
            </Link>
          </div>
        </div>
      </section>

      {/* Blue divider like your other pages */}
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== SERVICES GRID ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                CAPABILITIES
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-black/90">
                What we deliver
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">
                Select a capability to learn more about scope, outcomes, and engagement options.
              </p>
            </div>

            <Link
              href="/contact"
              className="hidden rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-black/5 md:inline-flex"
            >
              Start a conversation →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group rounded-3xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.10)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div
                    className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-black/70"
                    style={{
                      borderColor: "rgba(0,0,0,0.12)",
                      background: "rgba(42,139,255,0.10)",
                    }}
                  >
                    {s.badge}
                  </div>

                  <div
                    className="h-10 w-10 rounded-2xl border bg-white grid place-items-center transition group-hover:translate-x-0.5"
                    style={{ borderColor: "rgba(0,0,0,0.12)" }}
                    aria-hidden="true"
                  >
                    →
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold tracking-tight text-black/90">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/60">
                    {s.desc}
                  </p>

                  <div className="mt-6 h-[3px] w-12 rounded-full" style={{ background: LOGO_BLUE }} />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 md:hidden">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== CTA STRIP ===================== */}
      <section className="relative overflow-hidden" style={{ background: LOGO_BLUE }}>
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Would love to help.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                Tell us what you’re trying to improve — we’ll map the fastest path to measurable outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
              >
                Contact Us →
              </Link>
              <Link
                href="/company"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                About the team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

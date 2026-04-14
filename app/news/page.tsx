"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

type NewsItem = {
  title: string;
  desc: string;
  href?: string;
  category: string;
};

export default function NewsPage() {
  const newsItems: NewsItem[] = [
    {
      title:
        "Launch Fuzion Chickasaw Group - Native American Minority & Women Owned Sister Company - Calera, OK",
      desc:
        "Fuzion expands its reach through the launch of Fuzion Chickasaw Group, deepening its commitment to inclusion, community partnership, and scalable impact.",
      href: "/news",
      category: "Company News",
    },
    {
      title: "Fuzion/Veracity Inc. Partnership",
      desc:
        "A new strategic partnership focused on strengthening delivery capabilities and expanding support across client initiatives.",
      href: "/news",
      category: "Partnership",
    },
    {
      title:
        "Fuzion/Rancher Navy Partnership - Logistics/Mounted Patrol/Search & Rescue App Development",
      desc:
        "Fuzion partners with Rancher Navy to support logistics, mounted patrol, and search & rescue application development.",
      href: "/news",
      category: "Partnership",
    },
    {
      title:
        "Fuzion/Arizona Foothills 911 Partnership - Logistics/Mounted Patrol/Search & Rescue App Development",
      desc:
        "A new collaboration to support emergency response operations through logistics and search & rescue application development.",
      href: "/news",
      category: "Partnership",
    },
    {
      title: "Anderson Bean & Rios of Mercedes Boot Tour",
      desc:
        "Coverage of the Anderson Bean & Rios of Mercedes Boot Tour and related community and partner engagement.",
      href: "/news",
      category: "Event",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2400&q=80"
            alt="Fuzion news"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            NEWS
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Latest news and announcements
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Stay up to date with Fuzion’s latest partnerships, company
            milestones, industry activity, and new initiatives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Contact Us
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

      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== NEWS LIST ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              RECENT UPDATES
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-black/90">
              News from across Fuzion
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60">
              Company developments, strategic partnerships, and field-driven
              initiatives shaping our work across industries and communities.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href ?? "/news"}
                className="group block rounded-3xl border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-4xl">
                    <div
                      className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-black/70"
                      style={{
                        borderColor: "rgba(0,0,0,0.12)",
                        background: "rgba(42,139,255,0.10)",
                      }}
                    >
                      {item.category}
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-black/90">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                      {item.desc}
                    </p>

                    <div
                      className="mt-6 h-[3px] w-12 rounded-full"
                      style={{ background: LOGO_BLUE }}
                    />
                  </div>

                  <div
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border bg-white transition group-hover:translate-x-0.5"
                    style={{ borderColor: "rgba(0,0,0,0.12)" }}
                    aria-hidden="true"
                  >
                    →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="relative overflow-hidden"
        style={{ background: LOGO_BLUE }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Stay connected with Fuzion.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                Learn more about our latest initiatives, partnerships, and the
                work we’re doing across industries and communities.
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
                href="/services"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
// src/app/about/page.tsx
"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

type TeamMember = {
  name: string;
  title: string;
  img: string; // use real headshots here
  href?: string; // optional detail page link
};

export default function AboutPage() {
  const team: TeamMember[] = [
    {
      name: "Employee 1",
      title: "Chief Executive Officer",
      img: "",
      href: "/about",
    },
    {
      name: "Employee 2",
      title: "Vice President of Operations",
      img: "",
      href: "/about",
    },
    {
      name: "Employee 3",
      title: "VP of Business Development",
      img: "",
      href: "/about",
    },
    {
      name: "Employee 4",
      title: "Program / Delivery Lead",
      img: "",
      href: "/about",
    },
    {
      name: "Employee 5",
      title: "Engineering / IT Lead",
      img: "",
      href: "/about",
    },
    {
      name: "Employee 6",
      title: "Operations / Compliance",
      img: "",
      href: "/about",
    },
    {
      name: "Employee 7",
      title: "Client Success",
      img: "",
      href: "/about",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ===================== HERO (PHOTO) ===================== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
            alt="Fuzion Consulting Group"
            className="h-full w-full object-cover"
          />
          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Modern Business needs Modern Technology
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group LLC is a business and technology consulting firm headquartered in Olathe, Kansas,
            with offices in Arizona and California. Since our founding in 2019, we’ve delivered sustainable,
            client-centered solutions across regulated industries—empowering organizations to streamline operations,
            enhance compliance, and drive innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Contact Us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ Blue divider line under hero (same as home) */}
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== WHO WE ARE (LEFT) + VIDEO (RIGHT) ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* LEFT COPY */}
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                WHO WE ARE
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 md:text-4xl">
                Sustainable solutions. Client-centered delivery.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-black/60 md:text-base">
                We’ve recently expanded our reach through the launch of{" "}
                <span className="font-semibold text-black/80">Fuzion Chickasaw Group</span>, a certified Minority
                Women-Owned subsidiary based in Calera, Oklahoma. This strategic extension deepens our commitment to
                inclusion, community partnership, and scalable impact.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-black/60 md:text-base">
                With over 30 years of combined experience, we understand the communication gaps between traditional
                corporate IT and operational business units. We design intuitive, scalable systems that bridge those
                divides—enabling teams to work smarter, faster, and more collaboratively.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                >
                  Talk to a Consultant →
                </Link>
              </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="lg:col-span-6">
              <div
                className="overflow-hidden rounded-3xl border-2 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                style={{ borderColor: LOGO_BLUE }}
              >
                {/* Replace this src with your actual video.
                    - If mp4: keep <video>
                    - If YouTube/Vimeo: swap to <iframe>
                */}
                <div className="relative aspect-video w-full bg-black">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
                    controls
                    playsInline
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-black/85">
                    How we operate
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    Client-focused consulting across regulated industries — built to streamline operations, strengthen
                    compliance, and accelerate execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===================== MEET THE TEAM (UNDER WHO WE ARE) ===================== */}
          <div className="mt-16">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                  MEET THE TEAM
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-black/90">
                  Leadership + delivery you can count on.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-black/60">
                  Swap placeholders with real headshots, names, and roles when ready.
                </p>
              </div>

              <Link
                href="/contact"
                className="hidden rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5 md:inline-flex"
              >
                Work with us →
              </Link>
            </div>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((m) => (
                <div key={m.name} className="text-center">
                  <div className="mx-auto h-44 w-44 overflow-hidden rounded-full bg-black/5">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-6 text-lg font-medium text-black/90">
                    {m.name}
                  </p>

                  <p className="mt-1 text-xs font-semibold tracking-[0.18em] text-black/55">
                    {m.title.toUpperCase()}
                  </p>

                  <div className="mt-4">
                    <Link
                      href={m.href ?? "/about"}
                      className="inline-flex items-center gap-2 text-sm font-medium text-black/80 hover:text-black"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 md:hidden">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== OPTIONAL: WHAT WE DO (clean + different from home) ===================== */}
      <section className="bg-gray-50 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            WHAT WE DO
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-black/90">
            Consulting built for regulated environments.
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Construction, Document, and Project Management SaaS solutions",
              "Business and IT Integration Strategies",
              "AI Engineering Solutions",
              "Technology dashboards and field productivity portals",
              "Microsoft 365 implementation and cloud optimization",
              "Workflow automation and digital transformation",
              "Business and Professional Services Consulting",
              "Native American Sales Tax Exemptions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <div className="mb-4 h-[3px] w-12 rounded-full" style={{ background: LOGO_BLUE }} />
                <p className="text-sm leading-relaxed text-black/75">{item}</p>
              </div>
            ))}
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
                Whether you’re modernizing infrastructure, strengthening compliance, or implementing new systems —
                Fuzion brings clarity, precision, and execution to move forward with confidence.
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


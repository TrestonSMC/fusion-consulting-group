"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const projects = [
  {
    slug: "epms",
    category: "Enterprise Systems Modernization",
    title: "Enterprise Project Management System (EPMS)",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "2023 – Present",
    badge: "Business-Critical",
    summary:
      "Mission-critical utility platform supporting project lifecycle management, forecasting, accounting workflows, and operational planning across multiple business units.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Legacy application with limited documentation and institutional knowledge",
      "Business-critical support needs across generation, outage, and operations workflows",
      "Need for stabilization without disrupting live utility operations",
    ],
    delivered: [
      "Full IT discovery in under 6 weeks",
      "422+ technical and operational artifacts",
      "Business process mapping, break/fix support, and modernization roadmap",
    ],
  },
];

const impactStats = [
  { value: "422+", label: "Documented Artifacts" },
  { value: "< 6 Weeks", label: "Discovery Delivery" },
  { value: "2023 – Present", label: "Ongoing Support" },
  { value: "3 Phases", label: "Structured Engagement" },
];

const engagementPhases = [
  {
    title: "IT Discovery & Stabilization",
    text:
      "Fuzion assessed architecture, infrastructure, integrations, risks, and support dependencies, then delivered a complete executive-ready discovery package under an accelerated timeline.",
  },
  {
    title: "Business Process Mapping",
    text:
      "Fuzion partnered with leadership to document how EPMS supports real operational workflows, exposing inefficiencies, redundancies, and control gaps.",
  },
  {
    title: "Break/Fix, Enhancements & Modernization",
    text:
      "Fuzion assumed ongoing support responsibilities while driving stability, analytics, reporting, and a forward modernization roadmap.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                PROJECT EXPERIENCE
              </p>

              <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
                Selected projects built for complex operations and measurable outcomes.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
                Fuzion Consulting Group helps organizations modernize legacy systems,
                improve visibility, and create scalable digital foundations. Our
                project work reflects hands-on delivery across business-critical
                applications, operational transformation, and modernization strategy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                >
                  View Services →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                style={{ borderColor: LOGO_BLUE }}
              >
                <h2 className="text-xl font-semibold text-black/90">
                  What our project work demonstrates
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Legacy application stabilization",
                    "Enterprise workflow discovery and mapping",
                    "Operational support in regulated environments",
                    "Business and IT alignment",
                    "Roadmaps for modernization",
                    "Analytics, reporting, and governance improvements",
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
                        <p className="text-sm leading-relaxed text-black/70">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-black/60">
                  Each engagement is built around business continuity, technical clarity,
                  and long-term value. We focus on solving operational challenges while
                  creating a practical path forward for modernization and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="text-3xl font-semibold text-black/90">{stat.value}</div>
                <div className="mt-2 text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                FEATURED PROJECTS
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
                Recent project highlights
              </h2>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="relative min-h-[320px] lg:col-span-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <div
                      className="absolute left-6 top-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur"
                      style={{
                        borderColor: "rgba(255,255,255,0.25)",
                        background: "rgba(42,139,255,0.20)",
                      }}
                    >
                      {project.badge}
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-8 md:p-10">
                    <p className="text-xs font-semibold tracking-[0.25em] text-black/55">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-black/60">
                      <span className="rounded-full border border-black/10 px-3 py-1">
                        {project.client}
                      </span>
                      <span className="rounded-full border border-black/10 px-3 py-1">
                        {project.duration}
                      </span>
                    </div>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70">
                      {project.summary}
                    </p>

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                          Key Challenges
                        </h4>
                        <div className="mt-4 space-y-3">
                          {project.challenge.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <span
                                className="mt-2 inline-flex h-2.5 w-2.5 rounded-full"
                                style={{ background: LOGO_BLUE }}
                              />
                              <p className="text-sm leading-relaxed text-black/68">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                          Delivered
                        </h4>
                        <div className="mt-4 space-y-3">
                          {project.delivered.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <span
                                className="mt-2 inline-flex h-2.5 w-2.5 rounded-full"
                                style={{ background: LOGO_BLUE }}
                              />
                              <p className="text-sm leading-relaxed text-black/68">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href="/projects/epms"
                        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                      >
                        View Project Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 md:py-10">
          <div
            className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: LOGO_BLUE }}
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                  ENGAGEMENT APPROACH
                </p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-4xl">
                  A structured path from system risk to long-term modernization.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-black/65 md:text-base">
                  Our work on EPMS reflects how Fuzion approaches complex environments:
                  understand the system, align to the business, then deliver stability and
                  forward momentum.
                </p>
              </div>

              <div className="lg:col-span-7 grid gap-4 md:grid-cols-3">
                {engagementPhases.map((phase, index) => (
                  <div
                    key={phase.title}
                    className="rounded-2xl border border-black/10 bg-white/80 p-5"
                  >
                    <div
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
                      style={{ background: LOGO_BLUE }}
                    >
                      {index + 1}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-black/90">
                      {phase.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-black/65">
                      {phase.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ background: LOGO_BLUE }}>
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Need a partner for modernization, support, or digital transformation?
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-white/80" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Fuzion Consulting Group helps organizations stabilize critical systems,
                improve operational visibility, and build practical paths forward with
                modern technology.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-end lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
                >
                  Contact Us →
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const roleCards = [
  {
    title: "Senior Software Engineer / Developer",
    subtitle: "Future Opportunity",
    overview:
      "Fuzion is seeking experienced software engineers to help design, build, and support enterprise-grade platforms used in regulated and mission-critical environments. This role works across product development and client engagements, focusing on scalable, secure, and user-adoptable solutions.",
    bulletsTitle: "What You’ll Work On",
    bullets: [
      "Enterprise SaaS platforms and internal products",
      "Microsoft 365 Power Platform, cloud, and AI-enabled solutions",
      "Applications supporting construction, engineering, logistics, utilities, government, nonprofits, and agriculture",
    ],
    qualifications: [
      "5+ years of software development experience",
      "Strong experience with cloud-based architecture and APIs",
      "Experience in regulated or operational environments preferred",
      "Ability to translate business workflows into technical solutions",
    ],
  },
  {
    title: "Junior Software Engineer / Developer",
    subtitle: "Future Opportunity",
    overview:
      "This role is ideal for early-career engineers interested in growing within a consulting and product delivery environment. You’ll work alongside senior engineers and solution leaders on real-world applications used by clients and communities.",
    bulletsTitle: "What You’ll Learn",
    bullets: [
      "Enterprise application development",
      "Modern cloud and automation technologies",
      "Real-world delivery in regulated and operational environments",
    ],
    qualifications: [
      "1–3 years of development experience or relevant education",
      "Strong interest in learning enterprise systems",
      "Ability to collaborate across technical and non-technical teams",
    ],
  },
  {
    title: "Senior Project Manager / Program Manager (PMO)",
    subtitle: "Future Opportunity",
    overview:
      "Fuzion is seeking senior project and program managers to support large-scale, multi-disciplinary initiatives. This role partners with engineering, operations, IT, and leadership teams to execute complex programs with clarity and discipline.",
    bulletsTitle: "What You’ll Manage",
    bullets: [
      "Enterprise and regulated projects",
      "Construction, engineering, and technology programs",
      "Client stakeholder engagement and governance",
    ],
    qualifications: [
      "7+ years of project or program management experience",
      "Experience in utilities, infrastructure, construction, government, or IT PMO environments",
      "Strong communication and leadership skills",
    ],
  },
  {
    title: "Junior Project Manager / Project Coordinator",
    subtitle: "Future Opportunity",
    overview:
      "This role supports senior PMs and delivery teams with planning, coordination, documentation, and reporting. Ideal for individuals aspiring to grow into a PM or program leadership role.",
    bulletsTitle: "What You’ll Support",
    bullets: [
      "Project scheduling and documentation",
      "Status reporting and task coordination",
      "Client and team communication",
    ],
    qualifications: [
      "1–3 years of project coordination experience",
      "Strong organizational and communication skills",
      "Interest in project, program, or delivery leadership",
    ],
  },
];

const thrivePoints = [
  "Enjoy solving real operational problems, not just theoretical ones",
  "Are comfortable working in regulated or high-accountability environments",
  "Value collaboration, integrity, and long-term impact",
  "Want to build technology and processes that actually get used",
];

const industries = [
  "Technology",
  "Engineering",
  "Construction",
  "Logistics",
  "Utilities",
  "Government",
  "Nonprofits",
  "Agriculture",
  "Life Sciences",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* ===================== PAGE INTRO ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                CAREERS AT FUZION
              </p>

              <h1 className="mt-3 text-4xl font-semibold leading-tight text-black/90 md:text-6xl">
                Build Technology That Works in the Real World
              </h1>

              <div
                className="mt-6 h-[3px] w-20 rounded-full"
                style={{ background: LOGO_BLUE }}
              />

              <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
                While Fuzion Consulting Group does not have immediate openings,
                we are always interested in connecting with talented
                professionals who want to build practical, mission-driven
                solutions in complex, regulated environments.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg">
                As we grow, we anticipate future opportunities across
                technology, engineering, construction, logistics, utilities,
                government, nonprofits, agriculture, and life sciences. We value
                professionals who bring curiosity, integrity, and a strong sense
                of ownership to everything they do.
              </p>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg">
                If you’re interested in being considered for future roles, we
                encourage you to review the profiles below and submit your
                information.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#future-roles"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  View Future Roles
                </Link>

                <a
                  href="mailto:Careers@fcghelps.com"
                  className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                >
                  Email Careers@fcghelps.com →
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="rounded-[32px] border-2 bg-[#f8fbff] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:p-10"
                style={{ borderColor: LOGO_BLUE }}
              >
                <p className="text-xs font-semibold tracking-[0.22em] text-black/55">
                  FUTURE HIRING FOCUS
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-black/90 md:text-3xl">
                  Areas we expect to grow
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-black/65 md:text-base">
                  Fuzion expects future hiring needs across consulting,
                  delivery, engineering, operations, and client-facing roles as
                  the business expands.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {industries.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== FUTURE ROLES ===================== */}
      <section id="future-roles" className="bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              FUTURE OPPORTUNITIES
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
              Role profiles we anticipate hiring for
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
              These are not active openings today, but they reflect the types of
              roles we expect to hire for as Fuzion continues to grow.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {roleCards.map((role) => (
              <div
                key={role.title}
                className="rounded-[30px] border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <div
                    className="inline-flex rounded-full px-4 py-1 text-xs font-semibold tracking-[0.18em] text-white"
                    style={{ background: LOGO_BLUE }}
                  >
                    {role.subtitle.toUpperCase()}
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-semibold leading-snug text-black/90">
                  {role.title}
                </h3>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    Overview
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 md:text-base">
                    {role.overview}
                  </p>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    {role.bulletsTitle}
                  </p>
                  <div className="mt-3 space-y-3">
                    {role.bullets.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-2xl border border-black/8 bg-[#f8fbff] px-4 py-3"
                      >
                        <span
                          className="mt-2 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                          style={{ background: LOGO_BLUE }}
                        />
                        <p className="text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
                    Qualifications
                  </p>
                  <div className="mt-3 space-y-3">
                    {role.qualifications.map((item) => (
                      <div
                        key={item}
                        className="flex gap-3 rounded-2xl border border-black/8 bg-white px-4 py-3"
                      >
                        <span
                          className="mt-2 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                          style={{ background: LOGO_BLUE }}
                        />
                        <p className="text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHO THRIVES ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                WHO THRIVES AT FUZION
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-4xl">
                We look for people who care about real outcomes
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-black/60 md:text-base">
                Fuzion is built around practical execution, cross-functional
                collaboration, and work that supports real organizations in
                complex environments.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {thrivePoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-3 w-3 flex-none rounded-full"
                        style={{ background: LOGO_BLUE }}
                      />
                      <p className="text-sm leading-relaxed text-black/70">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EXPRESS INTEREST ===================== */}
      <section
        className="relative overflow-hidden"
        style={{ background: LOGO_BLUE }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.22em] text-white/75">
                HOW TO EXPRESS INTEREST
              </p>

              <h3 className="mt-3 text-4xl font-semibold tracking-tight text-white">
                Interested in future opportunities?
              </h3>

              <div className="mt-4 h-[2px] w-16 bg-white/80" />

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                If you’re interested in future opportunities with Fuzion, send a
                resume and a brief note outlining your interests. Be sure to
                indicate the role or roles you’re most aligned with.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/85">
                <p>• Send a resume and brief note outlining your interests</p>
                <p>• Indicate the role(s) you’re most aligned with</p>
                <p>• We’ll keep your information on file as roles open</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/75">
                  CAREERS CONTACT
                </p>
                <h4 className="mt-3 text-2xl font-semibold text-white">
                  Send your information directly
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Submit job inquiries and applications directly here for consideration
  by our team.
                </p>

                <div className="mt-6">
                  <a
                    href="mailto:Careers@fcghelps.com"
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
                  >
                    Careers@fcghelps.com
                  </a>
                </div>

                <div className="mt-3">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Visit Contact Page
                  </Link>
                </div>

                <p className="mt-4 text-xs text-white/65">
                  This can be replaced later with a careers form or integrated
                  application flow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

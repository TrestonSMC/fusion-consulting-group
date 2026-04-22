"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const culturePoints = [
  {
    title: "Meaningful Work",
    desc: "We work on business, technology, and transformation initiatives designed to improve operations and create measurable outcomes.",
  },
  {
    title: "Modern Solutions",
    desc: "From AI engineering to workflow automation and enterprise modernization, our team focuses on practical innovation.",
  },
  {
    title: "Collaborative Environment",
    desc: "We value thoughtful execution, strong communication, and cross-functional teamwork across consulting and delivery.",
  },
  {
    title: "Built for Growth",
    desc: "As Fuzion expands, we’re building a team of people who want to help shape what comes next.",
  },
];

const futureRoleAreas = [
  "Business Consulting",
  "Project & Program Management",
  "AI Engineering",
  "Microsoft 365 & Cloud Solutions",
  "Process Automation",
  "Implementation & Delivery",
  "Operations Support",
  "Client Success",
];

const hiringSteps = [
  {
    step: "01",
    title: "Openings Posted",
    desc: "Future roles will be published here as new positions become available.",
  },
  {
    step: "02",
    title: "Application Review",
    desc: "Our team will review submitted applications based on role alignment, experience, and business need.",
  },
  {
    step: "03",
    title: "Interview Process",
    desc: "Selected candidates will move through conversations focused on experience, communication, and problem solving.",
  },
  {
    step: "04",
    title: "Next Steps",
    desc: "Qualified finalists will be contacted directly regarding role details, expectations, and onboarding timelines.",
  },
];

export default function CareersPage() {
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              FUZION CONSULTING GROUP
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight text-black/90 md:text-6xl">
              Careers at Fuzion
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              We’re building a team around innovation, execution, and modern
              business transformation. While we do not have open positions at
              the moment, this is where future opportunities will be posted.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/company"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
              >
                Learn About Fuzion
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-black/20 bg-white/60 px-6 py-3 text-sm font-medium text-black/90 backdrop-blur hover:bg-white"
              >
                Contact Us →
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
        `}</style>
      </section>

      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== INTRO ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                BUILD WITH US
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-4xl">
                A place for problem-solvers, builders, and forward-thinkers
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-black/60 md:text-base">
                Fuzion Consulting Group supports organizations through digital
                transformation, automation, operational strategy, and modern
                technology delivery. As we continue to grow, we’re focused on
                building a high-caliber team that values clarity, execution, and
                measurable client impact.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                This careers page is structured to support future hiring. Once
                positions are available, they can be added here and managed
                through your separate admin workflow.
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
                  View Company →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                style={{ borderColor: LOGO_BLUE }}
              >
                <h3 className="text-xl font-semibold text-black/90">
                  What future candidates can expect
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {culturePoints.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-black/10 bg-white/80 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                          style={{ background: LOGO_BLUE }}
                        />
                        <div>
                          <p className="text-sm font-semibold text-black/80">
                            {item.title}
                          </p>
                          <p className="mt-2 text-sm leading-relaxed text-black/60">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-black/60">
                  We’re not hiring yet, but this page is ready to evolve into a
                  live recruiting destination as new roles are added.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CURRENT OPENINGS ===================== */}
      <section className="bg-[#f8fbff]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              CURRENT OPENINGS
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
              No positions available at this time
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
              We’re not actively hiring right now. When new opportunities open,
              they will appear here with role details, qualifications, and
              application links.
            </p>
          </div>

          <div className="mt-10 rounded-[32px] border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)] md:p-10">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-dashed border-black/15 bg-black/[0.02] p-8">
                  <div
                    className="inline-flex rounded-full px-4 py-1 text-xs font-semibold tracking-[0.18em] text-white"
                    style={{ background: LOGO_BLUE }}
                  >
                    CAREERS PORTAL
                  </div>

                  <h4 className="mt-5 text-2xl font-semibold text-black/90">
                    Open roles will be published here
                  </h4>

                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
                    This section is intentionally ready for future role cards or
                    admin-managed listings. For now, visitors can learn more
                    about the company and check back for updates.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/company"
                      className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                    >
                      About Fuzion
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                    >
                      Get in Touch →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-black/10 bg-white p-6">
                  <h5 className="text-lg font-semibold text-black/90">
                    Future role areas may include
                  </h5>

                  <div className="mt-5 grid gap-3">
                    {futureRoleAreas.map((role) => (
                      <div
                        key={role}
                        className="rounded-2xl border border-black/10 px-4 py-3 text-sm text-black/70"
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HIRING PROCESS ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              HIRING PROCESS
            </p>
            <h3 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
              What the process will look like
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
              Once active roles are available, candidates can expect a clear and
              professional process built around alignment, communication, and
              business impact.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {hiringSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_25px_rgba(0,0,0,0.04)]"
              >
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold text-white"
                  style={{ background: LOGO_BLUE }}
                >
                  {item.step}
                </div>
                <h4 className="mt-5 text-lg font-semibold text-black/90">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {item.desc}
                </p>
              </div>
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

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Interested in future opportunities?
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-white/80" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                We’re not accepting applications right now, but this page will
                become the central location for open roles as Fuzion continues
                to grow.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/85">
                <p>• Future positions will be posted here</p>
                <p>• Role details and expectations will be clearly outlined</p>
                <p>• Admin-managed listings can be added later without redesigning the page</p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/25 bg-white/10 p-8 backdrop-blur">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/75">
                  NEXT STEPS
                </p>
                <h4 className="mt-3 text-2xl font-semibold text-white">
                  Explore the company in the meantime
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-white/80">
                  Learn more about our services, company direction, and the kind
                  of work we do across consulting, operations, and technology.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    href="/company"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
                  >
                    Visit Company Page
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    View Services
                  </Link>
                </div>

                <p className="mt-4 text-xs text-white/65">
                  Career opportunities will be added here once openings are live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

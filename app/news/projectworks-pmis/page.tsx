"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const articleMeta = [
  {
    label: "Location",
    value: "Olathe, KS | Calera, OK",
  },
  {
    label: "Announcement Date",
    value: "April 2026",
  },
  {
    label: "Category",
    value: "Product News",
  },
  {
    label: "Organization",
    value: "Fuzion Consulting Group / Fuzion Chickasaw Group",
  },
  {
    label: "Focus",
    value:
      "AI-enabled Project Information Management System (PMIS) for regulated and enterprise environments",
  },
  {
    label: "Target Release",
    value: "Fall 2027",
  },
];

export default function ProjectWorksPmisPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
            Fuzion Announces Development of ProjectWorks™ – A Next-Generation
            Project Information Management System (PMIS)
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group and Fuzion Chickasaw Group are actively
            developing ProjectWorks™, a fully integrated Project Information
            Management System designed to modernize how complex projects and
            programs are planned, governed, and executed in regulated and
            enterprise environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Back to News
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* TOP INFO BOX */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-8">
          <div
            className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: LOGO_BLUE }}
          >
            <div className="space-y-5">
              {articleMeta.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold text-black/90">
                    {item.label}:
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-black/70">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="space-y-12">
            <ContentBlock title="Product Details">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group are actively
                developing <strong className="text-black">ProjectWorks™</strong>,
                a fully integrated Project Information Management System (PMIS)
                designed to modernize how complex projects and programs are
                planned, governed, and executed in regulated and enterprise
                environments.
              </p>

              <p>
                ProjectWorks builds upon Fuzion’s extensive experience
                supporting mission-critical enterprise project management
                platforms for large utility and infrastructure organizations.
                The new solution reflects real-world operational behaviors,
                workflows, and governance models proven in production
                systems—while introducing the latest AI-enabled capabilities and
                a refreshed, intuitive user experience.
              </p>

              <p>
                Designed as a cloud-native AI SaaS solution, ProjectWorks can
                be deployed within Fuzion’s Microsoft 365 or AWS tenants, with
                enterprise-grade security, scalability, and fully supported SLA
                models. The platform will support organizations managing both
                small initiatives and large, multi-year programs, delivering
                consistency across planning, execution, governance, and
                reporting.
              </p>
            </ContentBlock>

            <ContentBlock title="Key Capabilities Under Development">
              <p>ProjectWorks is being designed to deliver:</p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>
                  Robust Stage Gate lifecycle management (concept through
                  closeout)
                </li>
                <li>
                  Simplified, role-based workflows for project and program
                  stakeholders
                </li>
                <li>Integrated project tracking and long-range forecasting</li>
                <li>
                  AI-assisted insights to reduce overhead and improve
                  decision-making
                </li>
                <li>Enterprise reporting and visualization</li>
                <li>
                  Secure, auditable governance aligned with regulated
                  environments
                </li>
              </ul>

              <p>
                Many of the core capabilities have been informed by Fuzion’s
                multi-year support of a business-critical Enterprise Project
                Management System (EPMS) used across Generation, Operations, and
                Transmission &amp; Distribution domains—now reimagined using
                modern AI, cloud, and automation technologies.
              </p>
            </ContentBlock>

            <ContentBlock title="Built by Practitioners, Not Just Developers">
              <p>
                ProjectWorks is being developed by Fuzion’s diverse team of
                business, engineering, and technology experts who have spent
                years stabilizing, modernizing, and supporting enterprise
                project platforms under real operational pressures.
              </p>

              <p>
                This practitioner-led approach ensures the solution remains
                practical, scalable, and aligned with how projects are actually
                executed—not just how software is typically designed.
              </p>
            </ContentBlock>

            <ContentBlock title="Roadmap & Availability">
              <p>
                Fuzion anticipates releasing the Enterprise version of
                ProjectWorks in <strong className="text-black">Fall 2027</strong>.
              </p>

              <p>
                Development efforts will continue to incorporate customer
                feedback, evolving AI capabilities, and governance best
                practices as the platform progresses toward production
                readiness.
              </p>

              <p>
                ProjectWorks represents Fuzion’s ongoing commitment to applying
                enterprise-grade technology to real-world operational
                challenges, bridging the gap between business strategy, program
                governance, and execution excellence.
              </p>
            </ContentBlock>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: LOGO_BLUE }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Stay connected with Fuzion.
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-white/80" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Learn more about our latest partnerships, company milestones,
                product announcements, and strategic initiatives.
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
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Back to News
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContentBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-black/90 md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-black/70">
        {children}
      </div>
    </section>
  );
}
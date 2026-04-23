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
      "Microsoft 365–based construction and document management platform for regulated project and program environments",
  },
  {
    label: "Platform Launch",
    value: "Originally launched in Summer 2019",
  },
];

export default function FCG365FieldworksEvolutionPage() {
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
            Fuzion Highlights Continued Evolution of FCG365 Fieldworks Platform
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group and Fuzion Chickasaw Group continue to
            expand the capabilities of FCG365 Fieldworks, an enterprise
            construction and document management platform built on the Microsoft
            365 Power Platform.
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
                Fuzion Consulting Group and Fuzion Chickasaw Group continue to
                expand the capabilities of{" "}
                <strong className="text-black">FCG365 Fieldworks</strong>, an
                enterprise construction and document management platform built
                on the Microsoft 365 Power Platform.
              </p>

              <p>
                Originally launched in <strong className="text-black">Summer 2019</strong>,
                FCG365 Fieldworks has evolved into a mature, secure, and
                scalable SaaS solution supporting complex project and program
                environments across regulated industries.
              </p>

              <p>
                FCG365 Fieldworks is designed to support all project and program
                stakeholders involved in construction and engineering
                initiatives—from field teams and engineers to project managers,
                Owner’s Engineers, and executive leadership. The platform can
                manage both small and large-scale projects, providing secure,
                role-based access, workflow automation, reporting, and
                AI-enabled capabilities within the Microsoft ecosystem.
              </p>
            </ContentBlock>

            <ContentBlock title="Deployment Models">
              <p>The solution is available in two models:</p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>
                  A Fuzion-hosted deployment within Fuzion’s Microsoft 365
                  tenant with a fully supported SLA
                </li>
                <li>
                  A client-hosted deployment installed directly into a
                  customer’s Microsoft tenant, also supported under a fully
                  managed SLA model
                </li>
              </ul>

              <p>
                Both options give organizations flexibility while maintaining
                governance, security, and long-term support.
              </p>
            </ContentBlock>

            <ContentBlock title="Proven Enterprise Use in Regulated Environments">
              <p>
                FCG365 Fieldworks serves as the foundation for the{" "}
                <strong className="text-black">
                  Generation Document Management Portal (GDMP)
                </strong>{" "}
                developed by Fuzion for a major electric utility in the Phoenix,
                Arizona metro area.
              </p>

              <p>
                The platform was implemented to modernize construction,
                engineering, and operational document workflows supporting
                large-scale generation programs in a mission-critical, highly
                regulated environment.
              </p>

              <p>
                Since the initial engagement in <strong className="text-black">2021</strong>,
                Fuzion has provided multi-year design, development, pilot
                testing, change management, training, and ongoing application
                lifecycle management for GDMP. A Master Service Agreement
                executed in <strong className="text-black">2025</strong>{" "}
                formalized continued platform support, enhancement, and
                expansion.
              </p>
            </ContentBlock>

            <ContentBlock title="Key Capabilities Delivered">
              <p>
                Key capabilities delivered through GDMP and FCG365 Fieldworks
                include:
              </p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>Centralized construction and generation document management</li>
                <li>
                  Secure document storage, versioning, and auditable approval
                  workflows
                </li>
                <li>
                  Integration with Microsoft Teams, Outlook, Power BI, and Power
                  Apps
                </li>
                <li>
                  Field-friendly user experiences optimized for operational
                  environments
                </li>
                <li>Workflow automation, reporting, and mobile functionality</li>
                <li>
                  Continuous software upgrades, performance optimization, and
                  SLA-based support
                </li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Multi-Year Platform Growth & Business Impact">
              <p>
                Through successive phases of enhancement from{" "}
                <strong className="text-black">2019 through 2025</strong>,
                FCG365 Fieldworks has evolved from early discovery and
                proof-of-concept into an enterprise-grade SaaS platform
                supporting field execution, engineering standards, governance,
                and operational leadership.
              </p>

              <p>The platform has enabled organizations to:</p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>
                  Improve visibility and control over construction and
                  engineering documentation
                </li>
                <li>
                  Reduce reliance on manual, fragmented document processes
                </li>
                <li>
                  Strengthen collaboration across field, engineering, and
                  operations teams
                </li>
                <li>
                  Enforce consistent standards across regulated infrastructure
                  programs
                </li>
                <li>
                  Establish a scalable foundation for future digital
                  transformation
                </li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Built for Long-Term Adoption and Scale">
              <p>
                FCG365 Fieldworks reflects Fuzion’s product philosophy: build
                solutions grounded in real operational needs, supported by
                disciplined application lifecycle management, and designed to
                evolve alongside customer requirements—not vendor roadmaps.
              </p>

              <p>
                The platform continues to expand with enhanced workflows,
                reporting, AI-enabled automation, and mobile
                capabilities—ensuring it remains adaptable, secure, and aligned
                with the realities of complex construction and engineering
                environments.
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
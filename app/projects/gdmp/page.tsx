"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const projectMeta = [
  {
    label: "Client Type",
    value: "Major Electric Utility (Phoenix, AZ Metro Area)",
  },
  {
    label: "Application",
    value: "Enterprise Construction & Document Management SaaS Cloud",
  },
  {
    label: "Technology Stack",
    value: "Microsoft 365 Power Platform located in APS M365 Tenant",
  },
  {
    label: "Project Duration",
    value: "Initial engagement in 2021; Master Service Agreement executed in 2025",
  },
  {
    label: "Engagement Type",
    value: "Multi-Year Application Development, Pilot Testing, SLA Managed Support",
  },
  {
    label: "Scope",
    value: "Enterprise • Mission-Critical • Regulated Environment",
  },
  {
    label: "Capabilities",
    value:
      "Construction & Generation Document Management • Microsoft 365 Integration • Application Lifecycle Management • Change Management • Enterprise Support",
  },
];

export default function GDMPProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
            Generation Document Management Portal (GDMP)
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Multi-year enterprise document management platform supporting
            construction, engineering, and generation operations through long-term
            design, development, pilot expansion, and managed lifecycle support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Back to Projects
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

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-8">
          <div
            className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: LOGO_BLUE }}
          >
            <div className="space-y-5">
              {projectMeta.map((item) => (
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

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="space-y-12">
            <ContentBlock title="Project Overview">
              <p>
                Fuzion Consulting Group has served as a long-term technology
                partner for one of the largest electric utilities in the Phoenix,
                Arizona metro area, supporting the design, development, and
                ongoing evolution of a custom Generation Document Management Portal
                (GDMP). Internally branded by Fuzion as{" "}
                <span className="font-semibold text-black/85">
                  FCG365 Fieldworks
                </span>
                , the platform was created to modernize construction, engineering,
                and operational document workflows across large-scale generation
                projects.
              </p>

              <p>
                Since the initial engagement, Fuzion has provided continuous
                application development, pilot testing, production support, and
                lifecycle management services. The program evolved from early
                discovery and proof-of-concept work into a mature, enterprise-grade
                application supporting field teams, engineering stakeholders, and
                operational leadership.
              </p>

              <p>
                Delivered within the client’s Microsoft 365 ecosystem, GDMP was
                designed to improve control, visibility, and usability across
                document-intensive construction and generation workflows while
                aligning with broader digital transformation goals.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope & Capabilities Delivered">
              <p>
                Across multiple phases and contract years, Fuzion delivered a
                comprehensive set of services that included design and development
                of a centralized construction and generation document management
                platform, integration with Microsoft 365 and cloud-based
                collaboration tools, and secure document storage with versioning
                and approval workflows.
              </p>

              <p>
                The platform was shaped with field-friendly user experiences
                optimized for construction and operational environments, making it
                practical for day-to-day use while maintaining enterprise
                governance standards. Fuzion also provided application management,
                ongoing production support, pilot program execution, discovery
                efforts, and iterative enhancements as the platform matured.
              </p>

              <p>
                Additional delivery included change management, end-user training
                and adoption support, software upgrades, release management, and
                performance optimization—ensuring the application remained stable,
                relevant, and scalable as operational needs evolved.
              </p>
            </ContentBlock>

            <ContentBlock title="Multi-Year Program Delivery">
              <p>
                Fuzion supported the GDMP program through successive phases of
                growth and expansion. In 2022, the focus centered on application
                management and support for discovery and pilot testing. In 2023,
                the engagement expanded into continued application development and
                broader pilot testing across operational use cases.
              </p>

              <p>
                During 2024, Fuzion continued supporting pilot operations while
                introducing new feature development and platform enhancements. In
                2025, the effort advanced into pilot expansion, change management,
                training, and software upgrades and releases.
              </p>

              <p>
                Each phase built on prior work, allowing the platform to scale
                alongside operational needs while maintaining reliability,
                security, and compliance. This long-term structure gave the client
                a stable modernization path rather than a one-time implementation.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                The GDMP / FCG365 Fieldworks platform enabled the utility to
                improve visibility and control over construction and generation
                documentation while reducing manual and fragmented document
                processes that had previously limited consistency and efficiency.
              </p>

              <p>
                The platform enhanced collaboration between field teams,
                engineering stakeholders, and operations leadership, helping create
                more consistent standards across large, regulated infrastructure
                projects. It also improved the organization’s ability to manage
                documentation in a more structured and scalable way as projects and
                operational demands increased.
              </p>

              <p>
                Beyond immediate process improvements, GDMP established a durable
                foundation for future digital transformation initiatives by giving
                the utility a modern enterprise platform that could continue to
                evolve with changing business needs.
              </p>
            </ContentBlock>

            <ContentBlock title="Why It Matters">
              <p>
                This multi-year engagement reflects Fuzion’s ability to deliver
                long-term, enterprise-scale solutions for highly regulated
                utilities, combining construction domain expertise, Microsoft
                ecosystem knowledge, and disciplined application lifecycle
                management.
              </p>

              <p>
                The GDMP program demonstrates how Fuzion partners with clients to
                modernize mission-critical operations while supporting adoption,
                governance, and continuous improvement. It highlights not only
                technical delivery, but also the ability to remain embedded over
                time as a trusted modernization partner.
              </p>
            </ContentBlock>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" style={{ background: LOGO_BLUE }}>
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Need a partner for modernization, support, or digital transformation?
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-white/80" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Fuzion Consulting Group helps organizations stabilize critical
                systems, improve operational visibility, and build practical paths
                forward with modern technology.
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
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Back to Projects
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
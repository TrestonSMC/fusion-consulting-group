"use client";

import Link from "next/link";

const NAVY = "#0B1F3A";
const GOLD = "#C8A96B";
const CREAM = "#F8F8F6";

const projectMeta = [
  {
    label: "Client Type",
    value: "Major Electric Utility (Phoenix, AZ Metro Area)",
  },
  {
    label: "Application",
    value: "Enterprise project governance and collaboration platform",
  },
  {
    label: "Technology Stack",
    value: "Microsoft 365 Power Platform",
  },
  {
    label: "Project Duration",
    value: "2024 – 2025",
  },
  {
    label: "Engagement Type",
    value:
      "Microsoft 365 Platform Implementation, Application Discovery, Business Process Workflow Automation, Central Hub Dashboards, Power BI Reports",
  },
  {
    label: "Scope",
    value: "Enterprise • Regulated • Project Governance",
  },
  {
    label: "Capabilities",
    value:
      "Automated Workflow Automation • Change Management • Application Lifecycle Management • Enterprise Support • Centralized Hub • Advanced Search & Metadata Configuration",
  },
];

export default function PMBLibraryPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <div className="h-[3px] w-full bg-[#C8A96B]" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">
            Project Management Basis (PMB) SP Library
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/70 md:text-lg">
            Centralized Microsoft 365 project governance platform designed to
            unify project processes, Stage Gate lifecycle guidance, engineering
            standards, and operational reference materials for Generation project
            execution and outage planning.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#132f56]"
            >
              Back to Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#C8A96B]/50 bg-white px-6 py-3 text-sm font-medium text-[#0B1F3A] transition hover:bg-[#C8A96B]/10"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-8">
          <div className="rounded-3xl border-2 border-[#C8A96B]/45 bg-white p-8 shadow-[0_14px_40px_rgba(11,31,58,0.08)]">
            <div className="space-y-5">
              {projectMeta.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-semibold text-[#0B1F3A]">
                    {item.label}:
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-[#0B1F3A]/70">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="space-y-12">
            <ContentBlock title="Project Highlight">
              <p>
                Fuzion Consulting Group was engaged by the Generation
                organization of a large electric utility to design and implement
                a centralized Project Management Basis (PMB) SharePoint Library
                to support enterprise-wide project execution and governance.
              </p>

              <p>
                The PMB platform was created to serve as a single source of truth
                for Generation project management practices, consolidating
                project management processes, Stage Gate 1–5 definitions,
                engineering standards, vendor and supplier specifications, and
                operational guidance into a secure, structured, and highly
                accessible Microsoft 365 environment.
              </p>

              <p>
                In addition, the platform provides documentation and reference
                materials for the internal and external software applications
                used by project managers to plan and execute major outages during
                spring and fall operating cycles.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope of Work & Capabilities">
              <p>
                Fuzion delivered a comprehensive Microsoft 365–based solution
                that included the design and deployment of a Generation-wide PMB
                SharePoint Library, structured metadata and taxonomy to support
                search, governance, and reporting, and role-based security
                aligned with project managers, engineers, Owner’s Engineers, and
                leadership.
              </p>

              <p>
                The platform centralized documentation for project management
                processes and the full Stage Gate 1–5 lifecycle, while also
                organizing engineering standards and vendor and supplier
                specification libraries into a more governed and accessible
                environment.
              </p>

              <p>
                Fuzion also implemented reference documentation for internal and
                external project management and outage tools, custom dashboards
                and reporting for visibility and consistency, Power Apps–based
                forms to standardize submissions and updates, and Power Automate
                workflows to support approvals and process automation.
              </p>

              <p>
                The solution was further strengthened through Microsoft Teams
                collaboration integration and AI Copilot enablement to improve
                content discovery, user productivity, and long-term usability
                across the Generation organization.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                The PMB Central Hub enabled the Generation organization to
                standardize project management practices across complex capital
                and outage projects while reducing reliance on disconnected
                documents and tribal knowledge.
              </p>

              <p>
                It improved accessibility to critical project guidance,
                engineering standards, and specifications, while strengthening
                collaboration between project managers, engineers, Owner’s
                Engineers, and leadership through a centralized and governed
                digital environment.
              </p>

              <p>
                The platform also established a scalable governance foundation
                aligned with Microsoft 365 best practices, giving the
                organization a more structured and sustainable model for project
                execution and operational consistency.
              </p>
            </ContentBlock>

            <ContentBlock title="Strategic Roadmap & Future Integration">
              <p>
                The PMB platform was intentionally designed as part of a broader
                enterprise vision to integrate multiple Generation systems into a
                single Microsoft 365 Central Hub and Dataverse, including the
                Alarm Response Management Library, Project Management Basis (PMB)
                Library, Engineering Standards Library (ESL), Project Definition
                Library (PDL), Generation Document Management Portal (GDMP), and
                the enhanced Enterprise Project Management System (EPMS).
              </p>

              <p>
                This future-state architecture is intended to deliver a unified
                user experience for project managers, engineers, Owner’s
                Engineers, management, and executive leadership—driving increased
                productivity, improved decision-making, and long-term scalability
                without reliance on costly third-party platforms.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project highlights Fuzion’s ability to design
                enterprise-grade collaboration platforms for regulated utilities,
                apply Microsoft 365 and Power Platform technologies to improve
                governance and execution, and support complex Generation and
                outage-driven project environments.
              </p>

              <p>
                It also demonstrates Fuzion’s ability to deliver solutions that
                align immediate tactical needs with long-term enterprise
                architecture, helping clients build scalable operational systems
                that support both current execution and future modernization.
              </p>
            </ContentBlock>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(900px_420px_at_30%_15%,rgba(200,169,107,0.38),transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Need a partner for modernization, support, or digital
                transformation?
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-[#C8A96B]" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85">
                Fuzion Consulting Group helps organizations stabilize critical
                systems, improve operational visibility, and build practical
                paths forward with modern technology.
              </p>
            </div>

            <div className="flex items-end lg:col-span-5 lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#C8A96B] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#d8bb7c]"
                >
                  Contact Us →
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-[#C8A96B]/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
    <section className="rounded-3xl border border-[#C8A96B]/20 bg-white p-7 shadow-[0_10px_30px_rgba(11,31,58,0.04)]">
      <h2 className="text-2xl font-semibold text-[#0B1F3A] md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-[#0B1F3A]/70">
        {children}
      </div>
    </section>
  );
}
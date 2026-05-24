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
    value: "Enterprise Mission Critical Utility Project & Forecasting Platform",
  },
  {
    label: "Technology Stack",
    value: ".NET, SQL Server",
  },
  {
    label: "Project Duration",
    value: "2023 – Present",
  },
  {
    label: "Engagement Type",
    value:
      "Application Discovery, Stabilization, Enhancement & Managed Support",
  },
  {
    label: "Scope",
    value: "Enterprise • Regulated Environment • Business Critical",
  },
  {
    label: "Capabilities",
    value:
      "Project Management Tracking • Long Range Forecasting • Application Lifecycle Stage Gate (1–5) Management • Accounting & FBO Interface • Change Management • Enterprise Support",
  },
];

export default function EPMSProjectPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <div className="h-[3px] w-full bg-[#C8A96B]" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">
            Enterprise Project Management System (EPMS)
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/70 md:text-lg">
            Stabilization, support, and modernization planning for a
            business-critical enterprise platform supporting utility project
            lifecycle management, forecasting, accounting integration, and outage
            execution.
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
            <ContentBlock title="Project Description">
              <p>
                Fuzion Consulting Group was engaged by the Generation
                organization of a large electric utility to assume responsibility
                for the assessment, stabilization, and ongoing support of a
                legacy Enterprise Project Management System (EPMS). The
                application supports multiple business units—including
                Generation, Operations, and Transmission & Distribution—and is
                heavily utilized during seasonal outage planning and execution.
              </p>

              <p>
                EPMS was originally developed to replace manual project tracking
                processes and supports end-to-end project lifecycle management
                from Stage Gate 1 through Stage Gate 5, including long-range
                forecasting, accounting integration, and interfaces with the
                utility’s financial business office. Due to its long evolution,
                limited documentation, and the retirement of the original
                developer, the system presented elevated operational and support
                risks.
              </p>

              <p>
                In late 2022, utility leadership formally classified EPMS as a
                business-critical enterprise application. Business stakeholders
                expressed concerns regarding continuity of support, system
                knowledge gaps, and responsiveness. Fuzion was requested to
                evaluate and execute a structured transition plan to stabilize
                and support the application while defining a long-term
                modernization roadmap.
              </p>
            </ContentBlock>

            <ContentBlock title="Phase 1: IT Discovery & Risk Assessment">
              <p>
                <span className="font-semibold text-[#0B1F3A]">
                  Objective:
                </span>{" "}
                Establish full system transparency, reduce operational risk, and
                enable informed decision-making.
              </p>

              <p>
                Fuzion executed a comprehensive EPMS IT Discovery engagement
                under an accelerated timeline. Despite less than six weeks of
                execution time, Fuzion delivered a complete technical and
                operational assessment that included application architecture and
                infrastructure documentation, data flows and integrations,
                codebase assessment and supportability analysis, security and
                performance review, operational risk identification, and
                structured knowledge transfer documentation.
              </p>

              <p>
                The effort was completed on schedule, with an executive-level
                readout delivered to corporate IT leadership. The final delivery
                included over{" "}
                <span className="font-semibold text-[#0B1F3A]">
                  426 documented artifacts
                </span>
                , significantly improving governance, auditability, and
                long-term support readiness.
              </p>
            </ContentBlock>

            <ContentBlock title="Parallel Support Activities">
              <p>
                During the discovery phase, Fuzion also provided targeted support
                for a critical EPMS integration initiative involving the
                utility’s asset management system, ensuring continuity of
                operations and minimizing business disruption.
              </p>
            </ContentBlock>

            <ContentBlock title="Phase 2: Business Process Mapping">
              <p>
                Following IT discovery, Fuzion partnered with Generation
                leadership to perform enterprise business process mapping,
                documenting how EPMS supports operational workflows across
                departments. This phase helped align system capabilities with
                real-world business practices and identified process
                inefficiencies impacting schedule, forecasting, and execution.
              </p>
            </ContentBlock>

            <ContentBlock title="Phase 3: Stabilization, Break/Fix, and Enhancements">
              <p>
                Based on findings from discovery and process mapping, Fuzion
                provided ongoing break/fix support and prioritized enhancements
                while developing a structured remediation and modernization plan.
              </p>

              <p>
                Key activities included architecture and infrastructure
                remediation, controlled change and release management,
                ServiceNow-based incident and request tracking, Power BI
                reporting and analytics, and Six Sigma–driven governance and
                performance monitoring.
              </p>

              <p>
                Fuzion partnered with Veracity Consulting Inc., a qualified
                technology partner, to augment delivery capacity and ensure
                continuity.
              </p>
            </ContentBlock>

            <ContentBlock title="Current State & Forward Roadmap">
              <p>
                Fuzion continues to support EPMS operations in collaboration with
                utility IT leadership. A forward-looking roadmap has been defined
                to evolve the platform toward a{" "}
                <span className="font-semibold text-[#0B1F3A]">
                  modern, Microsoft 365–based SaaS
                </span>{" "}
                architecture, enhancing forecasting, reporting, and operational
                resilience.
              </p>

              <p>
                This approach enables the utility to extend the life of a
                mission-critical system, reduce dependency on costly COTS
                replacements, preserve business-specific functionality, and
                improve governance, supportability, and scalability.
              </p>
            </ContentBlock>

            <ContentBlock title="Results & Value Delivered">
              <p>
                This engagement stabilized a business-critical enterprise
                application, eliminated institutional knowledge gaps, improved
                auditability and governance, reduced operational and support
                risk, and established a scalable modernization path aligned with
                utility standards.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This engagement demonstrates Fuzion’s ability to assume
                responsibility for undocumented, mission-critical legacy systems,
                operate effectively in regulated and high-risk utility
                environments, deliver under aggressive timelines, bridge gaps
                between business operations and IT, and create modernization
                paths without disrupting core operations.
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
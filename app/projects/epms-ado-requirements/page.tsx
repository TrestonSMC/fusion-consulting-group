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
    value:
      "Enterprise Project Management System (EPMS) requirements framework supporting enterprise system evaluation",
  },
  {
    label: "Technology Stack",
    value: "Azure DevOps (ADO)",
  },
  {
    label: "Project Duration",
    value: "Dec 2024 – June 2025",
  },
  {
    label: "Engagement Type",
    value: "Functional Decomposition & Requirements Engineering",
  },
  {
    label: "Scope",
    value: "Enterprise • Regulated • Strategic Evaluation",
  },
  {
    label: "Capabilities",
    value:
      "Functional Decomposition & Requirements Engineering • Azure DevOps (ADO) • Enterprise Architecture • Utility Operations • Acceptance Criteria • Epics • Features • User Stories",
  },
];

export default function EPMSADORequirementsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
            Enterprise Functional Decomposition & ADO Requirements
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Requirements engineering and functional decomposition initiative built
            to translate complex business and engineering workflows into traceable,
            testable system requirements supporting enterprise EPMS platform
            evaluation.
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
            <ContentBlock title="Project Description">
              <p>
                Fuzion Consulting Group was engaged by the Generation organization
                and Corporate IT of a large electric utility to develop a
                comprehensive IT Project Charter and Azure DevOps (ADO) functional
                requirements framework for the Enterprise Project Management System
                (EPMS) program.
              </p>

              <p>
                The request was driven by a strategic evaluation effort involving
                multiple business units—including Generation, Operations, and
                Transmission & Distribution—along with Corporate IT leadership. The
                organization was assessing whether to continue investing in existing
                and evolving platforms, including internal construction and project
                management solutions, or to transition to alternative commercial
                SaaS platforms.
              </p>

              <p>
                To support this decision, Corporate IT requested a formal,
                defensible, and traceable documentation package detailing EPMS
                architecture, infrastructure, engineering workflows, and business
                processes that Fuzion had previously delivered and stabilized.
              </p>
            </ContentBlock>

            <ContentBlock title="Solution Overview">
              <p>
                Fuzion developed a structured IT Project Charter and ADO-based
                requirements model that translated business objectives into both
                functional and non-functional system requirements. The effort
                enabled leadership to objectively compare existing platforms with
                alternative SaaS solutions under consideration, including
                large-scale enterprise construction and project management systems.
              </p>

              <p>
                The work emphasized governance, clarity, and testability, ensuring
                all requirements were measurable, traceable, and aligned with
                enterprise standards. By creating a consistent framework within
                Azure DevOps, the utility gained a more disciplined and defensible
                basis for strategic system evaluation.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope of Work & Capabilities">
              <p>
                Fuzion delivered a comprehensive documentation and analysis effort
                that included development of an EPMS IT Project Charter aligned
                with enterprise governance standards, documentation of current-state
                and future-state architecture and infrastructure, and mapping of
                engineering and business processes across Generation, Operations,
                and T&D.
              </p>

              <p>
                The engagement also included decomposition of business requirements
                into functional requirements, definition of non-functional
                requirements such as performance, security, scalability, and
                compliance, and structured functional decomposition into epics,
                features, and user stories within Azure DevOps.
              </p>

              <p>
                Fuzion established clear, testable acceptance criteria for each
                requirement, aligned requirements with project stage gates 1–5 and
                operational workflows, and created a structured ADO framework that
                supported objective vendor and platform comparison.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                This engagement enabled the utility to objectively evaluate
                enterprise SaaS alternatives against existing platforms while
                establishing a clear and traceable link between business needs and
                system functionality.
              </p>

              <p>
                The resulting framework reduced risk by ensuring requirements were
                explicit, measurable, and testable, while also supporting informed
                executive decision-making with defensible documentation. It gave the
                organization a clearer basis for comparing major platform options
                without relying on assumptions or incomplete business logic.
              </p>

              <p>
                The work also created a reusable ADO framework for future
                enterprise initiatives and helped align business units and
                Corporate IT around a shared understanding of system needs,
                priorities, and evaluation criteria.
              </p>
            </ContentBlock>

            <ContentBlock title="Strategic Value">
              <p>
                By translating complex operational and engineering requirements
                into a structured ADO model, Fuzion provided the utility with a
                vendor-neutral decision framework. This approach enabled leadership
                to compare multi-million-dollar SaaS alternatives against
                internally developed and modernized platforms without bias,
                ambiguity, or reliance on vendor marketing claims.
              </p>

              <p>
                The engagement reinforced Fuzion’s role as a trusted advisor
                capable of bridging business strategy, engineering operations, and
                enterprise IT governance. Rather than focusing only on technical
                delivery, the work positioned Fuzion at the center of strategic
                technology evaluation and investment planning.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project highlights Fuzion’s ability to support enterprise
                technology investment decisions in regulated utility environments,
                translate business strategy into actionable and testable technical
                requirements, and lead cross-functional alignment across multiple
                business units and Corporate IT.
              </p>

              <p>
                It also demonstrates Fuzion’s strength in applying disciplined
                requirements engineering and governance practices at scale, helping
                organizations make high-value technology decisions with greater
                confidence, clarity, and structure.
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
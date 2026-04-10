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
    value: "Enterprise document governance platform for Generation engineering and plant operations",
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
      "SharePoint & Power Platform Automation, Application Discovery, Business Process Workflow Evaluation and Automation, Central Document Library",
  },
  {
    label: "Scope",
    value: "Enterprise • Regulated • Engineering Standards",
  },
  {
    label: "Capabilities",
    value:
      "Automated Workflow Automation • Change Management • Application Lifecycle Management • Enterprise Support • Centralized Document Hub • Advanced Search & Metadata Configuration",
  },
];

export default function ESLPDLProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
            Engineering Standards & Plant Document Automation (ESL & PDL)
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Microsoft 365–based modernization of two mission-critical document
            libraries supporting engineering standards, plant documentation, and
            outage execution across regulated Generation operations.
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
                of a large electric utility to modernize and automate two
                mission-critical SharePoint libraries: the Engineering Standards
                Library (ESL) and the Plant Document Library (PDL).
              </p>

              <p>
                These libraries support engineering standards, procedures, and
                plant documentation that are essential to managing generation
                projects and executing seasonal plant outages during spring and
                fall operating cycles. Prior to this engagement, document
                submission, change tracking, and visibility into updated standards
                relied heavily on manual processes and inconsistent user
                experiences.
              </p>

              <p>
                Fuzion was tasked with enhancing usability, governance, and
                traceability while aligning ESL and PDL with other Generation
                automation initiatives, including the Project Management Basis
                (PMB) and Alarm Response libraries. The goal was to drive toward a
                single, centralized, and standardized location for managing
                Generation documents and specifications in a regulated utility
                environment.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope of Work & Capabilities">
              <p>
                Fuzion delivered a fully automated Microsoft 365–based solution
                that included the modernization of both the ESL and PDL SharePoint
                libraries, structured metadata and taxonomy aligned with
                engineering and document standards, and role-based security
                supporting engineers, project engineers, project managers, Owner’s
                Engineers, and leadership.
              </p>

              <p>
                The solution also introduced automated tracking of newly submitted
                documents and revisions to existing standards, workflow automation
                for document review, updates, and approvals, and dashboards with
                Power BI reporting to provide visibility into document status and
                changes.
              </p>

              <p>
                To improve navigation and usability, Fuzion developed Power
                Apps–based user interfaces and integrated Microsoft Teams for
                collaboration and notifications. AI Copilot capabilities were also
                enabled to improve content discovery and knowledge access, all in
                alignment with corporate IT standards and cybersecurity policies
                inside the utility’s Microsoft 365 tenant.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                The automated ESL and PDL platforms enabled the Generation
                organization to centralize engineering standards and plant
                documentation in a governed environment while improving visibility
                into document changes and newly issued standards.
              </p>

              <p>
                The solution reduced reliance on manual tracking and email-based
                processes, enhanced collaboration across engineering, project
                management, and external partners, and supported more consistent
                execution of outage-related work in regulated operating conditions.
              </p>

              <p>
                Just as importantly, the effort established a scalable digital
                foundation aligned with the Generation organization’s broader
                modernization strategy, reinforcing governance, usability, and
                operational readiness across multiple teams.
              </p>
            </ContentBlock>

            <ContentBlock title="Strategic Alignment & Future Vision">
              <p>
                The ESL and PDL automation efforts were intentionally designed to
                align with the Generation organization’s broader roadmap to
                integrate the Engineering Standards Library (ESL), Plant Document
                Library (PDL), Project Management Basis (PMB) Library, Alarm
                Response Management Library, Generation Document Management Portal
                (GDMP), and the enhanced Enterprise Project Management System
                (EPMS).
              </p>

              <p>
                Together, these solutions form the foundation of a future
                Microsoft 365 Central Hub and Dataverse, delivering a unified,
                role-based user experience for project managers, engineers,
                Owner’s Engineers, management, and executive leadership—while
                improving productivity, governance, and decision-making.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project demonstrates Fuzion’s ability to modernize enterprise
                document management in regulated utility environments, apply
                Microsoft 365 and Power Platform technologies to enforce standards
                and governance, and design scalable solutions that integrate with
                broader digital ecosystems.
              </p>

              <p>
                It also highlights Fuzion’s ability to support Generation and
                outage-driven operations with minimal disruption, creating
                solutions that improve control, usability, and visibility while
                fitting within the client’s existing enterprise environment.
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
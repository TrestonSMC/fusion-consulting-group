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
    value: "Alarm Response Library (ARL) M365 App",
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
      "Application Discovery, Business Process Workflow Automation of Generation Plant Equipment Alarm Notifications",
  },
  {
    label: "Scope",
    value: "Regulated • Operational • Mission-Critical",
  },
  {
    label: "Capabilities",
    value:
      "Automated Workflow Automation • Change Management • Application Lifecycle Management • Enterprise Support • Advanced Search & Metadata Configuration",
  },
];

export default function ARLAppProjectPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
            Alarm Response Library (ARL) App
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Centralized alarm response management platform designed to automate the
            creation, review, and approval of power plant equipment alarm responses
            through structured, auditable Microsoft 365 workflows.
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
                Fuzion Consulting Group was engaged to modernize and automate a
                previously manual alarm response process used to manage power plant
                equipment alarms. The process required close coordination between
                plant operations, engineering teams, and an external Owner’s
                Engineer, and was historically managed through disconnected email
                communications and Microsoft Word documents.
              </p>

              <p>
                Leveraging deep expertise in Microsoft 365–based automation, Fuzion
                partnered directly with utility stakeholders and the Owner’s
                Engineer to design and implement a centralized Alarm Response
                Management application. The solution replaced manual document
                handling with structured digital workflows that improved visibility,
                accountability, and review cycle efficiency.
              </p>

              <p>
                The application was built using the Microsoft Power Platform and
                SharePoint, enabling secure collaboration, standardized reviews, and
                auditable approvals without introducing additional third-party
                systems.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope of Work & Capabilities">
              <p>
                Fuzion delivered a complete end-to-end automation solution that
                included the design and development of a Power Apps–based Alarm
                Response Management application tailored to the utility’s alarm
                response process.
              </p>

              <p>
                The platform introduced automated workflows for alarm response
                creation, review, rerouting, and approval, along with role-based
                notifications for plant managers, engineers, and Owner’s Engineer
                reviewers. Structured Issued for Review (IFR) and Issued for
                Construction (IFC) workflows were implemented to create a more
                controlled and repeatable process.
              </p>

              <p>
                Fuzion also led the migration of legacy alarm response records from
                Microsoft Word into SharePoint, establishing centralized document
                storage, versioning, and comment tracking. Additional capabilities
                included Power BI reporting for visibility into review status and
                cycle performance, Microsoft Teams and Outlook integration for
                real-time collaboration, and user documentation and training
                materials to support platform adoption.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                The Alarm Response Management application enabled the utility to
                eliminate manual, email-driven alarm response processes and replace
                them with a structured digital framework that improved consistency,
                accountability, and operational transparency.
              </p>

              <p>
                The solution improved review cycle discipline and helped ensure that
                alarm responses were fully reviewed and approved prior to
                implementation. It also strengthened collaboration between plant
                operations, engineering teams, and external partners by creating a
                centralized and auditable workflow environment.
              </p>

              <p>
                Beyond immediate efficiency gains, the platform established a
                scalable foundation for future operational automation and reinforced
                the utility’s ability to manage alarm response processes in a more
                controlled and defensible manner.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project demonstrates Fuzion’s ability to modernize operational
                processes in regulated utility environments through structured,
                role-based workflow automation. It highlights Fuzion’s strength in
                replacing fragmented manual coordination with scalable enterprise
                solutions that improve visibility, governance, and execution.
              </p>

              <p>
                It also reflects Fuzion’s ability to apply Microsoft 365 and Power
                Platform technologies to operationally critical use cases without
                requiring costly third-party software, creating practical solutions
                that align with the client’s broader digital ecosystem.
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
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
    value:
      "Enterprise document governance platform for non-nuclear generation operations",
  },
  {
    label: "Technology Stack",
    value: "Microsoft 365 Power Platform",
  },
  {
    label: "Project Duration",
    value: "Jan 2025 – March 2026",
  },
  {
    label: "Engagement Type",
    value:
      "Application Discovery, Business Process Workflow Automation of Generation non-nuclear (Processes, Procedures, Policies)",
  },
  {
    label: "Scope",
    value: "Enterprise • Regulated • Compliance-Critical",
  },
  {
    label: "Capabilities",
    value:
      "Automated Workflow Automation • Change Management • Application Lifecycle Management • Enterprise Support • Centralized Document Hub • Advanced Search & Metadata Configuration",
  },
];

export default function ThreePAppProjectPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <div className="h-[3px] w-full bg-[#C8A96B]" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">
            3P Lifecycle Management System (3P App)
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/70 md:text-lg">
            Enterprise Microsoft 365–based governance platform designed to
            manage the creation, review, approval, publication, and long-term
            maintenance of non-nuclear generation processes, procedures, and
            policies.
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
                organization of a large electric utility to design and deliver a
                new 3P Lifecycle Management System (3P App)—a mission-critical
                platform responsible for governing all non-nuclear documents
                across the utility’s generation fleet.
              </p>

              <p>
                The 3P App was developed to replace fragmented, manual, and
                email-driven document governance processes with a structured,
                auditable, and role-based system that manages documents
                throughout their entire lifecycle. The platform supports the
                creation, review, approval, publication, and long-term
                maintenance of processes, procedures, and policies that are
                essential to safe and compliant generation operations.
              </p>

              <p>
                Designed and implemented within the utility’s Microsoft 365
                environment, the system established a scalable governance
                foundation for document lifecycle control while aligning to
                enterprise IT, cybersecurity, and compliance standards.
              </p>
            </ContentBlock>

            <ContentBlock title="Solution Overview">
              <p>
                The 3P Lifecycle Management System provides a controlled
                governance framework that ensures documents are created
                consistently using approved templates, reviewed thoroughly by
                collaborators and formal reviewers, approved with documented
                authorization, and published and maintained through automated
                Biennial Review cycles.
              </p>

              <p>
                The system enforces controlled status transitions, automated
                routing, version integrity, and full audit traceability—supporting
                both regulatory compliance and internal policy standards. This
                created a much more disciplined, transparent, and defensible
                process for managing critical documentation across generation
                operations.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope of Work & Capabilities">
              <p>
                Fuzion delivered a comprehensive Microsoft 365–based solution
                that included the design and development of a custom Power
                Apps–based 3P Lifecycle Management application, structured intake
                forms, automated document number assignment, standardized
                document naming, and strict version control enforcement.
              </p>

              <p>
                The platform also introduced role-based workflows supporting
                Drafters, Collaborators, Reviewers, Approvers, and
                Administrators, along with automated actionable email
                notifications integrated with Outlook and Microsoft Teams.
                Controlled review, reroute, and approval processes were
                implemented with permanent audit history to strengthen
                accountability and governance.
              </p>

              <p>
                Additional capabilities included centralized SharePoint document
                repositories with structured metadata, Power BI dashboards showing
                document status, cycle time, and compliance visibility, automated
                Biennial Review tracking and lifecycle rerouting, and user
                training materials supported by a comprehensive operational user
                guide.
              </p>

              <p>
                All components were implemented in full alignment with corporate
                IT standards and cybersecurity policies within the utility’s
                Microsoft 365 tenant.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                The 3P Lifecycle Management System enabled the Generation
                organization to centralize governance of all non-nuclear
                processes, procedures, and policies while improving
                accountability and transparency across the full document
                lifecycle.
              </p>

              <p>
                The solution eliminated manual tracking, email-driven approvals,
                and inconsistent standards that had previously slowed reviews
                and created governance gaps. In doing so, it strengthened audit
                readiness, improved the utility’s regulatory compliance posture,
                and supported more consistent document governance across the
                entire generation fleet.
              </p>

              <p>
                Beyond immediate operational improvements, the platform
                established a scalable foundation for long-term digital
                governance and positioned the organization to manage controlled
                documentation with greater efficiency, visibility, and structure.
              </p>
            </ContentBlock>

            <ContentBlock title="Strategic Alignment & Future Vision">
              <p>
                The 3P App was built to integrate with the Generation
                organization’s broader Microsoft 365 ecosystem, including the
                Engineering Standards Library (ESL), Plant Document Library
                (PDL), Project Management Basis (PMB) Library, Alarm Response
                Management Library, Generation Document Management Portal (GDMP),
                and the enhanced Enterprise Project Management System (EPMS).
              </p>

              <p>
                Together, these platforms form the foundation of a future
                Microsoft 365 Central Hub and Dataverse, delivering a unified,
                role-based experience for engineers, project managers, Owner’s
                Engineers, leadership, and executive stakeholders.
              </p>

              <p>
                This broader alignment ensures that the 3P platform is not
                operating as a standalone tool, but as part of a larger digital
                governance and operational modernization strategy across
                Generation.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project highlights Fuzion’s ability to deliver
                enterprise-grade governance platforms for regulated utilities,
                design role-based and auditable workflows that support compliance
                and risk management, and apply Microsoft 365 and Power Platform
                technologies at enterprise scale.
              </p>

              <p>
                It also demonstrates Fuzion’s ability to modernize legacy
                governance processes without introducing costly third-party
                systems—creating practical, scalable solutions that align with
                the client’s existing enterprise environment.
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
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
      "Enterprise training and adoption framework supporting Generation system modernization",
  },
  {
    label: "Technology Stack",
    value: "Microsoft 365 Power Platform",
  },
  {
    label: "Project Duration",
    value: "Nov 2024 – Nov 2025",
  },
  {
    label: "Engagement Type",
    value: "Training & Change Management",
  },
  {
    label: "Scope",
    value: "Enterprise • Regulated • Workforce Enablement",
  },
  {
    label: "Capabilities",
    value:
      "Automated Workflow Automation • Change Management • Application Lifecycle Management • Enterprise Support • Centralized Training Hub • Advanced Search & Metadata Configuration • AI Training Videos & Documents",
  },
];

export default function TrainingChangeManagementPage() {
  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <div className="h-[3px] w-full bg-[#C8A96B]" />

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">
            Generation Training & Change Management Modernization
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/70 md:text-lg">
            Enterprise training and change management program designed to support
            adoption of modern Generation platforms through AI-enabled training,
            standardized processes, and scalable workforce enablement.
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
                organization of a large electric utility to design and deliver a
                comprehensive training and change management program supporting a
                multi-year modernization of mission-critical Generation systems.
              </p>

              <p>
                As Generation invested in new and enhanced digital platforms—
                including document management, project management, alarm response
                automation, and governance hubs—it became clear that legacy
                training materials and informal knowledge transfer methods were
                no longer sufficient to support enterprise-wide adoption across
                the generation fleet.
              </p>

              <p>
                Fuzion was tasked with replacing outdated training procedures,
                policies, and documentation with a modern, scalable, and
                user-centric enablement framework that ensures long-term
                adoption, consistency, and operational readiness.
              </p>
            </ContentBlock>

            <ContentBlock title="Solution Overview">
              <p>
                Fuzion designed a standardized, enterprise-wide training and
                change management framework aligned across all Generation systems
                developed, deployed, pilot tested, and released into production.
              </p>

              <p>
                The approach focused on simplicity and usability for field,
                engineering, and project management roles, while maintaining
                consistent governance across multiple applications and enabling
                repeatable onboarding and knowledge transfer processes.
              </p>

              <p>
                Training and change management assets were structured to support
                users at every stage—from initial rollout through ongoing
                enhancements and future releases—ensuring long-term
                sustainability as platforms continue to evolve.
              </p>
            </ContentBlock>

            <ContentBlock title="Scope of Work & Capabilities">
              <p>
                Fuzion delivered a comprehensive enablement program that included
                development of Generation-wide training strategies, policies, and
                procedures, along with role-based training frameworks for
                engineers, project managers, Owner’s Engineers, and leadership.
              </p>

              <p>
                The engagement included AI-assisted training videos and workflow
                walkthroughs, AI-enabled documentation and reference guides, and
                standardized change management procedures aligned with
                application releases and deployment cycles.
              </p>

              <p>
                Fuzion also created adoption playbooks supporting pilot programs
                and production rollouts, integrated training materials directly
                into Microsoft 365 environments, and aligned all content across
                GDMP, EPMS, ARL, PMB, ESL, and PDL systems while maintaining
                governance and version control for all training assets.
              </p>
            </ContentBlock>

            <ContentBlock title="Business Impact">
              <p>
                This initiative enabled the Generation organization to improve
                adoption and effective use of modern digital platforms while
                reducing reliance on tribal knowledge and informal training
                methods.
              </p>

              <p>
                It ensured consistent execution of project, document, and alarm
                response processes across the generation fleet, while improving
                workforce readiness and supporting scalable training delivery as
                applications continue to evolve.
              </p>

              <p>
                The program also reinforced governance, compliance, and
                operational consistency, ensuring that technology investments
                translated into measurable operational improvements.
              </p>
            </ContentBlock>

            <ContentBlock title="Strategic Value">
              <p>
                By pairing technology modernization with disciplined training and
                change management, Fuzion ensured that Generation’s digital
                investments deliver real operational value—not just system
                deployment.
              </p>

              <p>
                This program established a repeatable enablement model that
                supports future enhancements, new system integrations, and
                long-term organizational change without disrupting plant
                operations.
              </p>
            </ContentBlock>

            <ContentBlock title="Why This Matters">
              <p>
                This project highlights Fuzion’s ability to drive adoption
                alongside complex enterprise system deployments, design change
                management programs for regulated utility environments, and apply
                AI-enabled training methods to improve knowledge retention.
              </p>

              <p>
                It also demonstrates Fuzion’s ability to support large, diverse
                user populations with consistent, scalable enablement frameworks
                that evolve alongside enterprise systems.
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
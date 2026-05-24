"use client";

import Link from "next/link";

const NAV_HEIGHT = 112;

type ServiceCategory = {
  heading: string;
  items: {
    title: string;
    desc: string;
    href: string;
    badge: string;
  }[];
};

export default function CapabilitiesPage() {
  const serviceCategories: ServiceCategory[] = [
    {
      heading: "Business & Professional Consulting",
      items: [
        {
          title: "Business Process Optimization (BPO)",
          desc: "Improve efficiency, reduce friction, and align core business processes with operational goals.",
          href: "/contact",
          badge: "BPO",
        },
        {
          title: "Infrastructure & Integration",
          desc: "Connect systems, teams, and workflows with practical integration strategies built for real operations.",
          href: "/contact",
          badge: "Integration",
        },
        {
          title: "Nonprofit Evaluation & Business Automation",
          desc: "Support nonprofit organizations with evaluation frameworks, automation opportunities, and better operating visibility.",
          href: "/contact",
          badge: "Nonprofit",
        },
        {
          title: "Project & Program Management (PMO)",
          desc: "Bring structure, accountability, and delivery discipline to projects and enterprise programs.",
          href: "/contact",
          badge: "PMO",
        },
        {
          title: "Process & Automation",
          desc: "Replace manual work with scalable workflows that improve consistency and measurable performance.",
          href: "/contact",
          badge: "Automation",
        },
        {
          title: "Strategy & Change Management",
          desc: "Guide transformation efforts with practical planning, stakeholder alignment, and adoption support.",
          href: "/contact",
          badge: "Strategy",
        },
        {
          title: "Utility Consulting",
          desc: "Advisory and operational support tailored to utility environments, governance requirements, and modernization goals.",
          href: "/contact",
          badge: "Utility",
        },
      ],
    },
    {
      heading: "Technology Consulting",
      items: [
        {
          title: "Application & Web Development",
          desc: "Design and build modern digital platforms that improve operations, user experience, and visibility.",
          href: "/contact",
          badge: "Web / App",
        },
        {
          title: "Maintenance & Support",
          desc: "Ongoing support that keeps business-critical systems stable, secure, and performing well.",
          href: "/contact",
          badge: "Support",
        },
        {
          title: "Mobile App Development",
          desc: "Custom mobile solutions that extend business capabilities into the field and into customers’ hands.",
          href: "/contact",
          badge: "Mobile",
        },
        {
          title: "Process Analysis & Evaluation",
          desc: "Assess current-state workflows, identify inefficiencies, and define practical improvement paths.",
          href: "/contact",
          badge: "Analysis",
        },
        {
          title: "Reporting Evaluation & Development",
          desc: "Create reporting structures and dashboards that turn operational data into usable insight.",
          href: "/contact",
          badge: "Reporting",
        },
        {
          title: "System Evaluation & Integration",
          desc: "Evaluate current systems and implement integrations that reduce silos and improve business continuity.",
          href: "/contact",
          badge: "Systems",
        },
        {
          title: "Workflow Analysis & Automation",
          desc: "Analyze workflow bottlenecks and deploy automation solutions that support scalable growth.",
          href: "/contact",
          badge: "Workflow",
        },
      ],
    },
  ];

  return (
    <main
      className="min-h-screen bg-[#F8F8F6]"
      style={{ paddingTop: `${NAV_HEIGHT}px` }}
    >
      <section className="relative overflow-hidden border-b border-[#C8A96B]/20 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,169,107,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(11,31,58,0.10),transparent_32%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
            CAPABILITIES
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#0B1F3A] md:text-5xl">
            Fuzion capabilities for business, technology, and operational
            transformation.
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/70 md:text-lg">
            We support organizations with business and technology capabilities
            that strengthen operations, improve visibility, and help teams move
            faster with better systems in place.
          </p>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#0B1F3A]/60 md:text-lg">
            Consulting built for real-world operations.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#132f56]"
            >
              Talk to a Consultant
            </Link>

            <Link
              href="/company"
              className="rounded-full border border-[#C8A96B]/50 bg-white px-6 py-3 text-sm font-medium text-[#0B1F3A] transition hover:bg-[#C8A96B]/10"
            >
              About Our Company →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[3px] w-full bg-[#C8A96B]" />

      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
              WHAT WE DO
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#0B1F3A]">
              Our consulting capabilities
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#0B1F3A]/60">
              Fuzion provides both business-focused consulting and technology
              capabilities designed to solve operational challenges with
              practical, scalable solutions.
            </p>
          </div>

          <div className="mt-12 space-y-14">
            {serviceCategories.map((category) => (
              <div key={category.heading}>
                <h3 className="text-2xl font-semibold tracking-tight text-[#0B1F3A]">
                  {category.heading}
                </h3>

                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.items.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group rounded-3xl border border-[#C8A96B]/25 bg-white p-7 shadow-[0_12px_35px_rgba(11,31,58,0.06)] transition hover:-translate-y-[2px] hover:border-[#C8A96B]/45 hover:shadow-[0_18px_50px_rgba(11,31,58,0.12)]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex items-center rounded-full border border-[#C8A96B]/35 bg-[#C8A96B]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#0B1F3A]">
                          {service.badge}
                        </div>

                        <div
                          className="grid h-10 w-10 place-items-center rounded-2xl border border-[#C8A96B]/30 bg-white text-[#0B1F3A] transition group-hover:translate-x-0.5 group-hover:bg-[#C8A96B]/10"
                          aria-hidden="true"
                        >
                          →
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-xl font-semibold tracking-tight text-[#0B1F3A]">
                          {service.title}
                        </h4>

                        <p className="mt-3 text-sm leading-relaxed text-[#0B1F3A]/60">
                          {service.desc}
                        </p>

                        <div className="mt-6 h-[3px] w-12 rounded-full bg-[#C8A96B]" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#C8A96B]/50 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#C8A96B]/10"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(900px_420px_at_30%_15%,rgba(200,169,107,0.38),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Would love to help.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                Tell us what you’re trying to improve — we’ll help map the
                fastest path to practical, measurable outcomes.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#C8A96B] px-7 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#d8bb7c]"
              >
                Contact Us →
              </Link>

              <Link
                href="/company"
                className="rounded-full border border-[#C8A96B]/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                About the team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

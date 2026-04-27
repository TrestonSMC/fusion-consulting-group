"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const industries = [
  {
    name: "Construction",
    desc: "We support construction organizations with modern document, project, and field-execution platforms that improve visibility, governance, and collaboration across complex builds — without disrupting crews in the field.",
  },
  {
    name: "Engineering",
    desc: "Fuzion partners with engineering teams to streamline workflows, manage technical documentation, and align systems with real-world delivery — bridging the gap between design, execution, and operations.",
  },
  {
    name: "Education",
    desc: "We help educational institutions modernize operations, improve data visibility, and adopt technology responsibly while navigating compliance, governance, and limited administrative resources.",
  },
  {
    name: "Financial Services",
    desc: "Our teams support financial services organizations with secure, compliant technology solutions that improve reporting, integration, and operational transparency in highly regulated environments.",
  },
  {
    name: "Government",
    desc: "Fuzion works alongside public-sector clients to modernize systems, improve program oversight, and deliver accountable, compliant solutions that stand up to audit and long-term scrutiny.",
  },
  {
    name: "Healthcare",
    desc: "We bring disciplined, secure technology solutions to healthcare organizations — supporting operational workflows, data governance, and system integration while respecting patient safety and regulatory demands.",
  },
  {
    name: "Legal",
    desc: "Fuzion helps legal organizations streamline document management, workflows, and reporting so teams can focus on outcomes while maintaining confidentiality, compliance, and accuracy.",
  },
  {
    name: "Life Sciences",
    desc: "We support life sciences organizations with technology platforms and process modernization that enable compliance, traceability, and scalability across research, operations, and regulated programs.",
  },
  {
    name: "Logistics",
    desc: "From disaster response to enterprise supply chains, Fuzion delivers logistics-focused solutions that provide real-time visibility, coordination, and accountability across complex, time-critical operations.",
  },
  {
    name: "Native American",
    desc: "Fuzion Chickasaw Group partners with Native American tribes and organizations to deliver technology and consulting services that respect sovereignty, support compliance, and strengthen operational sustainability.",
  },
  {
    name: "Nonprofit (Disaster Relief)",
    desc: "We build and support purpose-driven platforms that help nonprofits coordinate volunteers, supplies, and logistics during crisis events — donated or delivered with mission-first intent.",
  },
  {
    name: "Nonprofit",
    desc: "Beyond disaster response, Fuzion supports nonprofits with technology, process improvement, and operational insight that maximizes impact while minimizing administrative burden.",
  },
  {
    name: "Nuclear",
    desc: "Fuzion delivers disciplined, secure solutions for nuclear and high-risk environments where governance, auditability, and precision are non-negotiable.",
  },
  {
    name: "Technology",
    desc: "We help technology organizations scale responsibly — supporting product development, integration, lifecycle management, and modernization grounded in practical execution.",
  },
  {
    name: "Utilities",
    desc: "Fuzion partners with utility organizations to modernize enterprise platforms, improve project governance, and support mission-critical infrastructure in regulated, safety-driven environments.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
            alt="Industries we serve"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            INDUSTRIES
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Industries we serve
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion supports organizations across a wide range of industries,
            delivering consulting and technology solutions tailored to the
            operational, regulatory, and performance demands of each sector.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Talk to a Consultant
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
            >
              View Services →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* WHO WE SERVE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              WHO WE SERVE
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-black/90">
              Deep experience across industries
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60">
              Our experience spans regulated environments, operationally complex
              organizations, public-sector programs, nonprofits, and high-growth
              teams. We bring practical solutions that align with how each
              industry actually operates.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group rounded-3xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="mb-4 h-[3px] w-12 rounded-full"
                  style={{ background: LOGO_BLUE }}
                />

                <h3 className="text-xl font-semibold text-black/90">
                  {industry.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {industry.desc}
                </p>
              </div>
            ))}
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

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold text-white md:text-4xl">
                Let’s build something that works.
              </h3>
              <p className="mt-4 max-w-2xl text-sm text-white/90 md:text-base">
                No matter the industry, we help organizations streamline
                operations, improve visibility, and move forward with confidence.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
              >
                Contact Us →
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
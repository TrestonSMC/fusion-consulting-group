"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const coreValues = [
  {
    title: "Client Partnership",
    desc: "We believe the strongest outcomes come from collaboration. We work closely with our clients to understand their business, operational realities, and long-term goals—building trusted partnerships, not transactional engagements.",
  },
  {
    title: "Practical Innovation",
    desc: "Innovation should solve real problems. We apply modern technologies—including automation, AI, and cloud platforms—in ways that are intuitive, scalable, and grounded in business value.",
  },
  {
    title: "Operational Clarity",
    desc: "We bridge the gap between business operations and IT. Our solutions are designed to simplify complexity, improve communication, and enable teams to work smarter, faster, and more effectively.",
  },
  {
    title: "Integrity & Accountability",
    desc: "We operate with transparency, professionalism, and accountability. Our clients trust us with critical systems and decisions, and we honor that trust through disciplined execution and ethical practices.",
  },
  {
    title: "Inclusion & Community Impact",
    desc: "We believe diverse perspectives strengthen outcomes. Through our partnership with Fuzion Chickasaw Group, we actively support inclusion, community engagement, and opportunities that create meaningful, long-term impact.",
  },
  {
    title: "Scalability & Sustainability",
    desc: "We design solutions that grow with our clients—systems that are resilient, adaptable, and built for long-term success in evolving regulatory and business environments.",
  },
];

const commitments = [
  "Support inclusive supplier and partner ecosystems",
  "Promote responsible and ethical use of technology, including AI",
  "Help organizations operate more efficiently, reducing waste and inefficiency",
  "Invest in long-term community and workforce development",
  "Deliver solutions that balance innovation, compliance, and human impact",
];

const shortValues = [
  "Partnership over transactions",
  "Innovation with purpose",
  "Clarity between business and IT",
  "Integrity in execution",
  "Inclusion and community impact",
  "Scalable, sustainable solutions",
];

export default function SocialResponsibilityPage() {
  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2400&q=80"
            alt="Our Values and Social Responsibility"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            SOCIAL RESPONSIBILITY
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Our Values & Social Responsibility
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Building technology with purpose, integrity, and impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Contact Us
            </Link>

            <Link
              href="/company"
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
            >
              About Our Company →
            </Link>
          </div>
        </div>
      </section>

      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ===================== CORE VALUES ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              FUZION VALUES
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-black/90">
              Fuzion Core Values
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60">
              Our values shape how we work, how we partner, and how we build
              solutions that create lasting value for clients and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="rounded-3xl border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div
                  className="mb-5 inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-black/70"
                  style={{
                    borderColor: "rgba(0,0,0,0.12)",
                    background: "rgba(42,139,255,0.10)",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-black/90">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                  {value.desc}
                </p>

                <div
                  className="mt-6 h-[3px] w-12 rounded-full"
                  style={{ background: LOGO_BLUE }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SOCIAL RESPONSIBILITY ===================== */}
      <section className="border-t border-black/10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-5xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              RESPONSIBILITY
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
              Fuzion Commitment to Social Responsibility
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-black/70 md:text-base">
              At Fuzion Consulting Group, social responsibility is embedded in
              how we do business—not treated as a separate initiative.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-black/70 md:text-base">
              Through the launch of{" "}
              <span className="font-semibold text-black/85">
                Fuzion Chickasaw Group
              </span>
              , a certified Minority Women-Owned company, we are expanding
              access to opportunities while supporting community partnerships
              and inclusive economic growth. We are committed to working with
              organizations that value responsible governance, ethical
              technology adoption, and sustainable operational practices.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <h3 className="text-xl font-semibold text-black/90">We strive to:</h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4"
                >
                  <div
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: LOGO_BLUE }}
                  />
                  <p className="text-sm leading-relaxed text-black/70 md:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm leading-relaxed text-black/70 md:text-base">
              Our goal is to create measurable value—for our clients, our
              partners, and the communities we serve.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== VALUES AT A GLANCE ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              AT A GLANCE
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-black/90">
              Our Values at a Glance
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shortValues.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
              >
                <div
                  className="mb-4 h-[3px] w-12 rounded-full"
                  style={{ background: LOGO_BLUE }}
                />
                <p className="text-sm font-medium leading-relaxed text-black/80 md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        className="relative overflow-hidden"
        style={{ background: LOGO_BLUE }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Purpose-driven work matters.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                We partner with organizations that care about innovation,
                responsibility, and long-term impact.
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
                View Services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
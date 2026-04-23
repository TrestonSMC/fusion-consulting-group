"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

const articleMeta = [
  {
    label: "Location",
    value: "Olathe, KS | Calera, OK",
  },
  {
    label: "Announcement Date",
    value: "April 2026",
  },
  {
    label: "Category",
    value: "Company News",
  },
  {
    label: "Organization",
    value: "Fuzion Consulting Group / Fuzion Chickasaw Group",
  },
  {
    label: "Focus",
    value:
      "Launch of a Native American women-owned business and technology consulting firm serving tribes, nonprofits, and public- and private-sector organizations",
  },
];

export default function FuzionChickasawGroupLaunchPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
            Fuzion Consulting Group Announces Launch of Fuzion Chickasaw Group
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group announces the launch of Fuzion Chickasaw
            Group, a Native American women-owned business and technology
            consulting firm headquartered in Calera, Oklahoma.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/news"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Back to News
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

      {/* TOP INFO BOX */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-8">
          <div
            className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: LOGO_BLUE }}
          >
            <div className="space-y-5">
              {articleMeta.map((item) => (
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

      {/* BODY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="space-y-12">
            <ContentBlock title="Announcement Details">
              <p>
                Fuzion Consulting Group is proud to announce the launch of{" "}
                <strong className="text-black">Fuzion Chickasaw Group</strong>, a
                Native American women-owned business and technology consulting
                firm headquartered in{" "}
                <strong className="text-black">Calera, Oklahoma</strong>.
                Established in <strong className="text-black">Fall 2025</strong>,
                Fuzion Chickasaw Group expands Fuzion’s ability to serve Native
                American tribes, nonprofits, and public- and private-sector
                organizations across{" "}
                <strong className="text-black">Oklahoma and Texas</strong>.
              </p>
            </ContentBlock>

            <ContentBlock title="Service Capabilities">
              <p>
                Fuzion Chickasaw Group offers the same core business,
                professional, and technology consulting services provided by
                Fuzion Consulting Group, including{" "}
                <strong className="text-black">enterprise SaaS solutions</strong>,{" "}
                <strong className="text-black">workflow automation</strong>,{" "}
                <strong className="text-black">AI-enabled systems</strong>,{" "}
                <strong className="text-black">
                  Microsoft 365 cloud optimization
                </strong>
                , and{" "}
                <strong className="text-black">
                  business process consulting
                </strong>
                .
              </p>

              <p>
                In addition, the firm brings specialized expertise in managing{" "}
                <strong className="text-black">
                  Native American sales tax exemption processes
                </strong>
                , helping organizations operate compliantly while supporting
                tribal economic development.
              </p>
            </ContentBlock>

            <ContentBlock title="Strategic Expansion">
              <p>
                This strategic expansion reflects Fuzion’s continued commitment to{" "}
                <strong className="text-black">inclusion</strong>,{" "}
                <strong className="text-black">community partnership</strong>, and{" "}
                <strong className="text-black">
                  responsible technology adoption
                </strong>
                .
              </p>

              <p>
                Fuzion Chickasaw Group is actively pursuing applicable
                disadvantaged-business certifications to formalize its status as a{" "}
                <strong className="text-black">
                  women-owned and Native American-led organization
                </strong>
                .
              </p>
            </ContentBlock>

            <ContentBlock title="Shared Vision">
              <p>
                Together, Fuzion Consulting Group and Fuzion Chickasaw Group
                deliver modern, scalable solutions designed for complex and
                regulated environments—empowering clients to operate more
                efficiently, transparently, and sustainably.
              </p>
            </ContentBlock>

            <ContentBlock title="Learn More">
              <p>
                To learn more about Fuzion Chickasaw Group, visit{" "}
                <a
                  href="https://fuzionchickasawgroup.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:text-black/70"
                >
                  fuzionchickasawgroup.com
                </a>
                .
              </p>
            </ContentBlock>
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

        <div className="relative mx-auto max-w-5xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Stay connected with Fuzion.
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-white/80" />
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Learn more about our latest partnerships, company milestones,
                industry activity, and strategic initiatives.
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
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Back to News
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
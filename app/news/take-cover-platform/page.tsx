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
    value: "June 2026",
  },
  {
    label: "Category",
    value: "Product News",
  },
  {
    label: "Organization",
    value: "Fuzion Consulting Group / Fuzion Chickasaw Group",
  },
  {
    label: "Focus",
    value:
      "Mobile and desktop severe weather preparedness platform for community safety, shelter mapping, alerts, and response planning",
  },
  {
    label: "Platform Type",
    value: "Future Mobile & Desktop Product",
  },
];

export default function TakeCoverPlatformPage() {
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
            Fuzion Announces Development of “Take Cover”™ – A Community-Focused
            Severe Weather Preparedness Platform
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group and Fuzion Chickasaw Group are proud to
            announce the development of Take Cover™, a mobile and desktop
            application designed to support community-based severe weather
            preparedness during tornadoes and other life-threatening storm
            events.
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
            <ContentBlock title="Future Mobile & Desktop Product Details">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group are proud to
                announce the development of{" "}
                <strong className="text-black">Take Cover™</strong>, a mobile
                and desktop application designed to support community-based
                severe weather preparedness during tornadoes and other
                life-threatening storm events.
              </p>

              <p>
                The idea for Take Cover was first inspired by conversations led
                by <strong className="text-black">Donna Webb</strong>, Founder &
                CEO of Fuzion Chickasaw Group, who shared her vision for better
                supporting Native American communities and rural neighborhoods in
                planning for severe weather.
              </p>

              <p>
                That vision took shape during early collaboration sessions with
                Fuzion’s nonprofit partner <strong className="text-black">Rancher Navy</strong>,
                alongside its founders <strong className="text-black">Morgan Broome</strong> and{" "}
                <strong className="text-black">Amy Houston</strong>, where the
                platform’s name—and mission—were born.
              </p>
            </ContentBlock>

            <ContentBlock title="Built for Communities, Inspired by Real-World Need">
              <p>
                Take Cover was initially developed to support the{" "}
                <strong className="text-black">
                  Tabernacle Community HOA in Calera, Oklahoma
                </strong>
                , providing residents with a clear, coordinated way to identify
                safe shelter locations and respond quickly during severe
                weather.
              </p>

              <p>
                Following early success, Fuzion is now expanding the platform to
                support Native American tribal communities in Oklahoma and
                nonprofit disaster-response partners, including Rancher Navy.
              </p>

              <p>
                At its core, Take Cover is built on a simple but critical
                belief: <strong className="text-black">Preparedness saves lives.</strong>
              </p>

              <p>
                By enabling communities to plan in advance—before sirens sound
                or warnings escalate—Take Cover helps reduce uncertainty,
                improve response times, and support neighbors when it matters
                most.
              </p>
            </ContentBlock>

            <ContentBlock title="Core Capabilities">
              <p>
                Take Cover is being designed with the following capabilities:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-black/90">
                    Community Shelter Mapping
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-black/70">
                    <li>Identification and mapping of approved storm shelters</li>
                    <li>Support for underground and above-ground shelters</li>
                    <li>
                      Optional sharing of shelter type, capacity, and location
                      by participating homeowners
                    </li>
                    <li>
                      Route planning to shelters before and during storm events
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black/90">
                    Severe Weather Monitoring
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-black/70">
                    <li>
                      Live weather updates distinguishing Tornado Watches vs.
                      Tornado Warnings
                    </li>
                    <li>Continuous monitoring of NOAA Weather Alerts</li>
                    <li>Future enhancements tied to evolving storm conditions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black/90">
                    Emergency Communication
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-black/70">
                    <li>Text and in-app alerts during severe weather events</li>
                    <li>
                      Community-level updates to support rapid, informed
                      decision-making
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-black/90">
                    Preparedness & Education
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-6 text-base leading-relaxed text-black/70">
                    <li>
                      Integration of disaster-preparedness guidance and planning
                      resources
                    </li>
                    <li>Support for emergency drills and response readiness</li>
                    <li>
                      Educational links to trusted partners such as the American
                      Red Cross
                    </li>
                  </ul>
                </div>
              </div>
            </ContentBlock>

            <ContentBlock title="Community-First by Design">
              <p>
                Take Cover encourages voluntary participation to strengthen
                neighborhood resilience. Residents who are willing may share
                information about their safe rooms or shelters, enabling
                neighbors—especially children, elderly residents, and those with
                limited mobility—to plan evacuation routes in advance of an
                emergency.
              </p>

              <p>
                By combining technology with mutual support, Take Cover helps
                communities become safer, more connected, and better prepared.
              </p>
            </ContentBlock>

            <ContentBlock title="Looking Ahead">
              <p>
                Take Cover is being developed in collaboration with nonprofit
                and community partners and is designed to integrate with broader
                emergency-response efforts.
              </p>

              <p>Planned future enhancements include:</p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>
                  Coordination with nonprofit partners such as Rancher Navy,
                  United Cajun Navy, and the American Red Cross
                </li>
                <li>
                  Collaboration with storm-chasing and weather-monitoring
                  organizations
                </li>
                <li>Expanded regional and tribal deployments</li>
                <li>
                  Enhanced analytics, alerting, and situational awareness
                </li>
              </ul>
            </ContentBlock>

            <ContentBlock title="Part of the Fuzion Platform Ecosystem">
              <p>
                Take Cover complements Fuzion’s broader mission-driven platform
                strategy, which includes:
              </p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>
                  <strong className="text-black">FCG365 Fieldworks</strong> –
                  Enterprise construction & document management
                </li>
                <li>
                  <strong className="text-black">Support Beacon Relief</strong>{" "}
                  – Disaster-relief logistics and volunteer coordination
                </li>
                <li>
                  <strong className="text-black">Support Beacon Logistics</strong>{" "}
                  – Enterprise logistics platform (planned)
                </li>
                <li>
                  <strong className="text-black">Take Cover</strong> – Severe
                  weather preparedness and community safety
                </li>
              </ul>

              <p>
                Together, these platforms reflect Fuzion’s commitment to
                applying enterprise-grade technology to real-world problems,
                from regulated infrastructure to disaster response and community
                resilience.
              </p>
            </ContentBlock>

            <ContentBlock title="Why Take Cover Matters">
              <p>Take Cover demonstrates Fuzion’s ability to:</p>

              <ul className="list-disc space-y-3 pl-6 text-base leading-relaxed text-black/70">
                <li>Build technology grounded in real community needs</li>
                <li>
                  Support nonprofit and tribal partners respectfully and
                  sustainably
                </li>
                <li>Design mobile-first, location-aware safety applications</li>
                <li>
                  Apply preparedness and planning to reduce losses before
                  disaster strikes
                </li>
              </ul>

              <p>
                <strong className="text-black">Prepared communities respond better.</strong>
                <br />
                <strong className="text-black">Informed communities respond faster.</strong>
                <br />
                <strong className="text-black">Connected communities respond together.</strong>
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
                product announcements, and strategic initiatives.
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
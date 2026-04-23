"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

type NewsItem = {
  title: string;
  desc: string;
  href: string;
  category: string;
  image?: string;
};

export default function NewsPage() {
  const newsItems: NewsItem[] = [
    {
      title:
        "Fuzion Consulting Group Announces Launch of Fuzion Chickasaw Group",
      desc:
        "Fuzion Consulting Group proudly announces the launch of Fuzion Chickasaw Group, a Native American women-owned business and technology consulting firm headquartered in Calera, Oklahoma, expanding Fuzion’s ability to serve tribes, nonprofits, and public- and private-sector organizations across Oklahoma and Texas.",
      href: "/news/fuzion-chickasaw-group-launch",
      category: "Company News",
    },
    {
      title:
        "Fuzion Consulting Group Announces Strategic Collaboration with Veracity Consulting Inc.",
      desc:
        "Fuzion recognizes its collaboration with Veracity Consulting Inc., whose support across mission-critical enterprise initiatives helped strengthen business process mapping, optimization, enterprise readiness, process automation, and change management efforts tied to major utility programs.",
      href: "/news/fuzion-veracity-collaboration",
      category: "Partnership",
    },
    {
      title:
        "Fuzion Consulting Group and Fuzion Chickasaw Group Partner with Rancher Navy to Support Wildfire Relief Efforts Across Oklahoma, Kansas, and Texas",
      desc:
        "Fuzion Consulting Group and Fuzion Chickasaw Group are honored to announce their partnership with Rancher Navy, a nonprofit organization dedicated to supporting agricultural communities affected by natural disasters, to provide direct wildfire and drought relief across Oklahoma, Kansas, and Texas.",
      href: "/news/fuzion-rancher-navy-wildfire-relief",
      category: "Partnership",
      image:
        "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/RancherNavy_5.jpg",
    },
    {
      title:
        "Fuzion Announces Development of Enterprise Support Beacon Relief Platform Inspired by Partnership with Rancher Navy",
      desc:
        "Fuzion Consulting Group and Fuzion Chickasaw Group are developing an enterprise version of Support Beacon Relief, a secure and scalable logistics platform inspired by real-world nonprofit disaster response needs and designed to support broader public-, private-, and nonprofit-sector operations.",
      href: "/news/support-beacon-relief-platform",
      category: "Product News",
    },
    {
      title:
        "Fuzion Announces Development of ProjectWorks™ – A Next-Generation Project Information Management System (PMIS)",
      desc:
        "ProjectWorks™ is a fully integrated project information management system designed to modernize how complex projects and programs are planned, governed, and executed, with AI-enabled capabilities and deployment options across Microsoft 365 or AWS environments.",
      href: "/news/projectworks-pmis",
      category: "Product News",
    },
    {
      title:
        "Fuzion Highlights Continued Evolution of FCG365 Fieldworks Platform",
      desc:
        "Fuzion Consulting Group and Fuzion Chickasaw Group continue expanding FCG365 Fieldworks, an enterprise construction and document management platform built on Microsoft 365 Power Platform, supporting secure workflows, reporting, automation, and role-based access for both small and large-scale projects.",
      href: "/news/fcg365-fieldworks-evolution",
      category: "Product News",
    },
    {
      title:
        "Fuzion Announces Development of “Take Cover”™ – A Community-Focused Severe Weather Preparedness Platform",
      desc:
        "Fuzion Consulting Group and Fuzion Chickasaw Group are proud to announce the development of Take Cover™, a mobile and desktop platform designed to support community-based severe weather preparedness during tornadoes and other life-threatening storm events.",
      href: "/news/take-cover-platform",
      category: "Product News",
    },
{
  title:
    "Fuzion Consulting Group and Fuzion Chickasaw Group Visit Anderson Bean Boot Company and Rios of Mercedes in Mercedes, Texas",
  desc:
    "Fuzion and Fuzion Chickasaw Group recently visited Anderson Bean Boot Company and Rios of Mercedes in Mercedes, Texas, highlighting continued relationship-building, shared values, and engagement with respected brands rooted in craftsmanship and community.",
  href: "/news/anderson-bean-rios-of-mercedes-tour",
  category: "Event",
  image:
    "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/AB1.jpg", // swap with your real Supabase image
},
  ];

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full">
          <img
            src="https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=2400&q=80"
            alt="Fuzion news"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            NEWS
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Latest news and announcements
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Stay up to date with Fuzion’s latest partnerships, company
            milestones, field activity, and product initiatives.
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

      {/* ===================== NEWS LIST ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              RECENT UPDATES
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-black/90">
              News from across Fuzion
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60">
              Company developments, strategic partnerships, field-driven
              initiatives, and new platform announcements shaping our work
              across industries and communities.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] md:p-8"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div
                      className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-black/70"
                      style={{
                        borderColor: "rgba(0,0,0,0.12)",
                        background: "rgba(42,139,255,0.10)",
                      }}
                    >
                      {item.category}
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight text-black/90">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-black/60 md:text-base">
                      {item.desc}
                    </p>

                    <div
                      className="mt-6 h-[3px] w-12 rounded-full transition-all duration-300 group-hover:w-20"
                      style={{ background: LOGO_BLUE }}
                    />
                  </div>

                  {item.image ? (
                    <div className="w-full shrink-0 md:w-[280px]">
                      <div className="overflow-hidden rounded-2xl border border-black/10 bg-black/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border bg-white transition group-hover:translate-x-0.5"
                      style={{ borderColor: "rgba(0,0,0,0.12)" }}
                      aria-hidden="true"
                    >
                      →
                    </div>
                  )}
                </div>
              </Link>
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
                Stay connected with Fuzion.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                Learn more about our latest initiatives, partnerships, and the
                work we’re doing across industries and communities.
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
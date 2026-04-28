"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";
const NAV_HEIGHT = 112;

type TeamMember = {
  name: string;
  title: string;
  img?: string;
  href: string;
  photoPosition?: string;
  photoScale?: number;
};

type TeamGroup = {
  label: string;
  title: string;
  description: string;
  members: TeamMember[];
};

export default function AboutPage() {
  const teamGroups: TeamGroup[] = [
    {
      label: "FOUNDERS",
      title: "Fuzion Founders",
      description:
        "The founding leadership behind Fuzion Consulting Group’s vision, strategy, and client-centered growth.",
      members: [
        {
          name: "Dan Goretskie",
          title: "Founder & CEO",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Dan%20Goretskie%20-%20Fuzion%20Website%20Image.jpg",
          href: "/company/dan-goretskie-consulting",
          photoPosition: "40% -5%",
          photoScale: 1.1,
        },
        {
          name: "Donna Webb",
          title: "Co-Founder & COO",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Donna%20Webb%20-%20Fuzion%20Image%20-%20Consulting.png",
          href: "/company/donna-webb-consulting",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
      ],
    },
    {
      label: "LEADERSHIP TEAM",
      title: "Fuzion Leadership Team",
      description:
        "Experienced leaders driving delivery, engineering, program execution, and operational excellence.",
      members: [
        {
          name: "Andy Much",
          title: "Principal Solutions Leader",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Andy%20Much%20-%20Bio%20Image.jpg",
          href: "/company/andy-much",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
        {
          name: "Prag Padilla",
          title: "Principal Solutions Leader",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Prag%20Padilla%20-%20Pending%20Approval%20-%20Bio%20Image%20(1).jpg",
          href: "/company/prag-padilla",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
        {
          name: "Pat Sagaser",
          title: "Principal Solutions Engineer",
          img: "/team/pat-sagaser.jpg",
          href: "/company/pat-sagaser",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
        {
          name: "Dennis DelGrosso",
          title: "Principal Engineering Leader",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Dennis%20DelGrosso%20-%20Approved%20Bio%20Image.jpg",
          href: "/company/dennis-delgrosso",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
        {
          name: "Charles Eder",
          title: "Principal Technology Program Manager",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Charles%20Eder.jpg",
          href: "/company/charles-eder",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
        {
          name: "Shirley Patterson",
          title: "Sr. Director of Accounting & Human Resources (HR)",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Shirley%20Patterson%20-%20Approved%20Bio%20Image.jpg",
          href: "/company/shirley-patterson",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
      ],
    },
    {
      label: "CONSULTING & SUPPORT",
      title: "Fuzion Consulting & Support Team",
      description:
        "Specialized support professionals helping maintain documentation quality, controls, and delivery continuity.",
      members: [
        {
          name: "Monica Mariscal",
          title: "Sr. Document Controls Analyst",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Monica%20Mariscal%20-%20Approved%20Bio%20Image.png",
          href: "/company/monica-mariscal",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
        {
          name: "Lisa Holliday",
          title: "Sr. Document Controls Analyst",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Lisa%2016x9.png",
          href: "/company/lisa-holliday",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
      ],
    },
    {
      label: "DIGITAL DESIGN PARTNER",
      title: "Fuzion Digital Design Partner",
      description:
        "Creative and digital execution support aligned with Fuzion’s modern business and technology initiatives.",
      members: [
        {
          name: "Treston Slater",
          title: "Slater Media Company",
          img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/TrestonSlater_Profile.png",
          href: "/company/treston-slater",
          photoPosition: "50% 20%",
          photoScale: 1,
        },
      ],
    },
  ];

  return (
    <main
      className="min-h-screen bg-white"
      style={{ paddingTop: `${NAV_HEIGHT}px` }}
    >
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] w-full">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2400&q=80"
            alt="Fuzion Consulting Group"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Modern Business needs Modern Technology
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
            Fuzion Consulting Group LLC is a business and technology consulting
            firm headquartered in Olathe, Kansas, with offices in Arizona,
            California, Oklahoma, and Texas. Since our founding in 2019, we’ve
            delivered sustainable, client-centered solutions across regulated
            industries—empowering organizations to streamline operations, enhance
            compliance, and drive innovation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
            >
              Contact Us
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                WHO WE ARE
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 md:text-4xl">
                Sustainable solutions. Client-centered delivery.
              </h2>

              <p className="mt-6 text-sm leading-relaxed text-black/60 md:text-base">
                We help organizations bridge the gap between business operations
                and modern technology through practical, scalable consulting
                solutions. Our approach is rooted in clarity, collaboration, and
                long-term value creation for every client we serve.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-black/60 md:text-base">
                With decades of combined leadership and delivery experience, our
                team understands the communication gaps that often exist between
                traditional corporate IT, field teams, and operational business
                units. We design systems and strategies that bring those worlds
                together.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                >
                  Talk to a Consultant →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="overflow-hidden rounded-3xl border-2 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                style={{ borderColor: LOGO_BLUE }}
              >
                <div className="relative aspect-video w-full bg-black">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
                    controls
                    playsInline
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm font-semibold text-black/85">
                    How we operate
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">
                    Client-focused consulting across regulated industries —
                    built to streamline operations, strengthen compliance, and
                    accelerate execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                  MEET THE TEAM
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
                  Leadership, advisory, and support structured for delivery.
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60 md:text-base">
                  Our team is organized across leadership, delivery, support,
                  and advisory functions to provide focused expertise where it
                  matters most.
                </p>
              </div>

              <Link
                href="/contact"
                className="hidden rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5 md:inline-flex"
              >
                Work with us →
              </Link>
            </div>

            <div className="mt-12 space-y-10">

              {teamGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.05)] md:p-8"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.22em] text-black/50">
                        {group.label}
                      </p>
                      <h4 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
                        {group.title}
                      </h4>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/60 md:text-base">
                        {group.description}
                      </p>
                    </div>

                    <div
                      className="h-[3px] w-16 rounded-full"
                      style={{ background: LOGO_BLUE }}
                    />
                  </div>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {group.members.map((member) => (
                      <div
                        key={`${group.title}-${member.name}`}
                        className="rounded-[24px] border border-black/10 bg-gray-50 p-6 text-center transition hover:border-black/15 hover:bg-white"
                      >
                        <div className="mx-auto h-36 w-36 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
                          {member.img ? (
                            <img
                              src={member.img}
                              alt={member.name}
                              className="h-full w-full object-cover"
                              style={{
                                objectPosition:
                                  member.photoPosition ?? "50% 20%",
                                transform: `scale(${member.photoScale ?? 1})`,
                                transformOrigin: "center",
                              }}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-xs font-semibold tracking-[0.16em] text-black/35">
                              PHOTO
                            </div>
                          )}
                        </div>

                        <div
                          className="mx-auto mt-5 h-[3px] w-12 rounded-full"
                          style={{ background: LOGO_BLUE }}
                        />

                        <p className="mt-5 text-lg font-semibold text-black/90">
                          {member.name}
                        </p>

                        <p className="mt-2 min-h-[44px] text-sm leading-relaxed text-black/60">
                          {member.title}
                        </p>

                        <div className="mt-5">
                          <Link
                            href={member.href}
                            className="inline-flex items-center gap-2 text-sm font-medium text-black/80 hover:text-black"
                          >
                            Learn more <span aria-hidden="true">→</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 md:hidden">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                Work with us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            WHAT WE DO
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-black/90">
            Consulting built for regulated environments.
          </h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Construction, Document, and Project Management SaaS solutions",
              "Business and IT Integration Strategies",
              "AI Engineering Solutions",
              "Technology dashboards and field productivity portals",
              "Microsoft 365 implementation and cloud optimization",
              "Workflow automation and digital transformation",
              "Business and Professional Services Consulting",
              "Native American Sales Tax Exemptions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/10 bg-white p-6"
              >
                <div
                  className="mb-4 h-[3px] w-12 rounded-full"
                  style={{ background: LOGO_BLUE }}
                />
                <p className="text-sm leading-relaxed text-black/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                Would love to help.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                Whether you’re modernizing infrastructure, strengthening
                compliance, or implementing new systems — Fuzion brings clarity,
                precision, and execution to move forward with confidence.
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
"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

type Advisor = {
  name: string;
  title: string;
  img: string;
  href: string;
};

export default function PrincipalPartnersPage() {
  const advisors: Advisor[] = [
    {
      name: "Amy Houston",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Amy%20Houston%20-%20Principal%20Advisor%20-%20Approved%20Image.jpg",
      href: "/company/amy-houston",
    },
    {
      name: "Morgan Broome",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Morgan%20Broome%20-%20Principal%20Advisor%20Pending%20Approval%20-%20Image.jpg",
      href: "/company/morgan-broome",
    },
    {
      name: "Sean Goretskie",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Sean%20Goretskie%20-%20Principal%20Advisor%20-%20Approved%20Image.jpg",
      href: "/company/sean-goretskie",
    },
    {
      name: "Robert S. Olson",
      title: "Principal Advisor",
      img: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Company%20Headshots/Senator%20Robert%20Olson%20-%20Principal%20Advisor%20-%20Approved%20Image.webp",
      href: "/company/robert-s-olson",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
          PRINCIPAL ADVISORS
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-black/90 md:text-5xl">
          Strategic perspective across the markets we serve and grow
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
          Fuzion Consulting Group and Fuzion Chickasaw Group are supported by a
          trusted network of Principal Advisors—experienced leaders who provide
          strategic perspective across the industries we serve today and the
          markets we are intentionally expanding into.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-black/70 md:text-lg">
          Our Principal Advisors offer real-world insight grounded in operations,
          regulation, and execution. They help ensure Fuzion’s solutions remain
          practical, credible, and aligned with real market conditions.
        </p>
      </section>

      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* ================= WHAT THEY DO ================= */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-black/90">
          What Principal Advisors Do
        </h2>

        <div className="mt-8 space-y-4 text-black/70">
          <p>Principal Advisors support Fuzion by:</p>

          <ul className="space-y-3 pl-5 list-disc">
            <li>
              Providing <strong>strategic guidance</strong> grounded in hands-on
              industry experience
            </li>
            <li>
              Advising on <strong>market entry, positioning, and growth</strong>
            </li>
            <li>
              Ensuring solutions reflect{" "}
              <strong>real operational and regulatory needs</strong>
            </li>
            <li>
              Strengthening Fuzion’s ability to serve{" "}
              <strong>complex, regulated environments</strong>
            </li>
          </ul>

          <p className="pt-4">
            This model allows Fuzion to remain agile while benefiting from
            credible, external perspective.
          </p>
        </div>
      </section>

      {/* ================= ADVISORS GRID ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl font-semibold text-black/90">
          Meet Our Principal Advisors
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="rounded-2xl border border-black/10 bg-white p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full border border-black/10">
                <img
                  src={advisor.img}
                  alt={advisor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mt-5 text-lg font-semibold text-black/90">
                {advisor.name}
              </p>

              <p className="mt-2 text-sm text-black/60">
                {advisor.title}
              </p>

              <div className="mt-4">
                <Link
                  href={advisor.href}
                  className="text-sm font-medium text-black/80 hover:text-black"
                >
                  View Profile →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="relative overflow-hidden"
        style={{ background: LOGO_BLUE }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h3 className="text-3xl font-semibold text-white">
            Work with a team backed by real-world experience.
          </h3>

          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
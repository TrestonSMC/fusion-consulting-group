"use client";

import Link from "next/link";
import { useRef } from "react";

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
    value: "Partnership",
  },
  {
    label: "Organization",
    value: "Fuzion Consulting Group / Fuzion Chickasaw Group / Rancher Navy",
  },
  {
    label: "Focus",
    value:
      "Wildfire and drought relief logistics support for agricultural communities across Oklahoma, Kansas, and Texas",
  },
];

const carouselImages = [
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/RacherNavy_1.jpg",
    alt: "Hay delivery trucks supporting wildfire-impacted ranchers",
    caption: "Hay delivery support for wildfire-impacted ranching communities",
  },
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/RancherNavy3.jpg",
    alt: "Hotshot trailers transporting hay during disaster relief",
    caption: "Hotshot hauling and supply movement during field response",
  },
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/RancherNavy2.jpg",
    alt: "Rancher Navy volunteer coordination and supply distribution",
    caption: "Volunteer coordination and rapid relief logistics",
  },
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/RancherNavy4.jpg",
    alt: "Field operations supporting livestock and ranching communities",
    caption: "Direct support for livestock operations and rural communities",
  },
];

export default function RancherNavyWildfireReliefPage() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION CONSULTING GROUP
          </p>

          <h1 className="mt-3 text-3xl font-semibold leading-tight text-black md:text-5xl">
            Fuzion Consulting Group and Fuzion Chickasaw Group Partner with
            Rancher Navy to Support Wildfire Relief Efforts Across Oklahoma,
            Kansas, and Texas
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/80 md:text-lg">
            Fuzion Consulting Group and Fuzion Chickasaw Group are honored to
            announce their partnership with Rancher Navy to provide direct
            wildfire and drought relief support to agricultural communities
            across Oklahoma, Kansas, and Texas.
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
              className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black hover:bg-black/5"
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
                  <p className="text-sm font-semibold text-black">
                    {item.label}:
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-black/80">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO CAROUSEL */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 pb-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                FIELD OPERATIONS
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-black md:text-3xl">
                Wildfire Relief Efforts
              </h2>
              <div className="mt-3 h-[2px] w-14 bg-black/10" />
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/80 md:text-base">
                Hay deliveries, hotshot transport, and coordinated field support
                for ranching communities impacted by wildfire and drought.
              </p>
            </div>

            <div className="hidden gap-3 md:flex">
              <button
                type="button"
                onClick={() => scrollByCards("left")}
                className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black/5"
                aria-label="Scroll left"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollByCards("right")}
                className="grid h-11 w-11 place-items-center rounded-full border border-black/15 bg-white text-black transition hover:bg-black/5"
                aria-label="Scroll right"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {carouselImages.map((image) => (
              <div
                key={image.src}
                className="min-w-[88%] snap-start md:min-w-[72%]"
              >
                <div className="overflow-hidden rounded-3xl border border-black/10 bg-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-[260px] w-full object-cover md:h-[420px]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent px-6 pb-6 pt-16">
                      <p className="text-sm font-medium text-white md:text-base">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="space-y-12">
            <ContentBlock title="Partnership Details">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group are honored
                to announce their partnership with Rancher Navy, a nonprofit
                organization dedicated to supporting agricultural communities
                affected by natural disasters, to provide direct wildfire and
                drought relief across Oklahoma, Kansas, and Texas.
              </p>

              <p>
                In response to a series of devastating wildfires—including the
                Ranger Road Fire (TX/KS), Stevens Fire (TX/KS), Andrew Lane Fire
                (KS), and the Texas Panhandle Fire (TX)—Fuzion donated the use
                of company-owned trucks and trailers, as well as staff time and
                logistics coordination, to assist Rancher Navy in delivering
                critical aid to impacted ranching communities.
              </p>
            </ContentBlock>

            <ContentBlock title="Field Operations">
              <p>
                Fuzion teams worked alongside Rancher Navy to haul hay and
                essential supplies to ranchers in Gate, Oklahoma; Knowles,
                Oklahoma; Ashland, Kansas; and surrounding rural areas, helping
                support livestock operations and families facing immediate loss
                and disruption.
              </p>
            </ContentBlock>

            <ContentBlock title="Leadership & Coordination">
              <p>
                This effort was coordinated in partnership with{" "}
                <strong className="text-black">Morgan Broome</strong>, Founder &
                Director of Operations and Disaster Coordination for Rancher
                Navy, and <strong className="text-black">Amy Houston</strong>,
                Founder & Director of Communications and Public Relations. Their
                leadership and grassroots coordination enabled rapid response
                and efficient delivery of resources to those most impacted by
                the fires.
              </p>

              <p>
                “Supporting agricultural communities during times of crisis
                reflects who we are as a company and as people,” said{" "}
                <strong className="text-black">Dan Goretskie</strong>, Founder &
                CEO of Fuzion Consulting Group, and{" "}
                <strong className="text-black">Donna Webb</strong>, Founder &
                CEO of Fuzion Chickasaw Group. “Rancher Navy represents the best
                of community-driven disaster response, and we’re proud to stand
                alongside Morgan, Amy, and the Rancher Navy volunteers in
                helping ranchers recover and rebuild.”
              </p>
            </ContentBlock>

            <ContentBlock title="Technology Alignment">
              <p>
                Beyond hands-on support, this partnership also aligns with
                Fuzion’s broader commitment to applying technology and logistics
                expertise to mission-driven causes. Fuzion is currently
                collaborating with Rancher Navy on{" "}
                <strong className="text-black">Support Beacon Relief</strong>, a
                disaster-response logistics and coordination platform designed to
                replace spreadsheet-driven workflows with secure, real-time
                operational visibility—donated at no cost to nonprofit
                partners.
              </p>
            </ContentBlock>

            <ContentBlock title="Ongoing Commitment">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group remain
                committed to supporting rural communities, nonprofit
                organizations, and disaster-response efforts through a
                combination of direct action, partnerships, and purpose-built
                technology.
              </p>

              <p>
                To learn more about Rancher Navy and its ongoing disaster relief
                efforts, visit{" "}
                <a
                  href="https://ranchernavy.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:text-black/70"
                >
                  ranchernavy.org
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
      <h2 className="text-2xl font-semibold text-black md:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-[2px] w-14 bg-black/10" />
      <div className="mt-5 space-y-4 text-base leading-relaxed text-black/80">
        {children}
      </div>
    </section>
  );
}
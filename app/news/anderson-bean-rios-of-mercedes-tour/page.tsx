"use client";

import Link from "next/link";
import { useRef } from "react";

const LOGO_BLUE = "#2a8bff";

const articleMeta = [
  {
    label: "Location",
    value: "Olathe, KS | Calera, OK | Mercedes, TX",
  },
  {
    label: "Announcement Date",
    value: "Spring 2026",
  },
  {
    label: "Category",
    value: "Event",
  },
  {
    label: "Organization",
    value:
      "Fuzion Consulting Group / Fuzion Chickasaw Group / Anderson Bean / Rios of Mercedes",
  },
  {
    label: "Focus",
    value:
      "Craftsmanship, heritage manufacturing, retailer relationships, and thoughtful technology alignment",
  },
];

const carouselImages = [
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/AB5.jpg",
    alt: "Tour of Anderson Bean and Rios of Mercedes facilities",
    caption:
      "Inside the Anderson Bean and Rios of Mercedes boot tour in Mercedes, Texas",
  },
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/AB3.jpg",
    alt: "Craftsmanship and boot-making process",
    caption: "A closer look at the craftsmanship and process behind each pair",
  },
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/AB4.jpg",
    alt: "Boot-making teams and manufacturing floor",
    caption:
      "The skilled teams and manufacturing pride behind heritage bootmaking",
  },
  {
    src: "https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Webphotos/AB2.jpg",
    alt: "Anderson Bean and Rios of Mercedes visit",
    caption:
      "A visit centered on learning, relationships, and respect for tradition",
  },
];

export default function AndersonBeanRiosOfMercedesTourPage() {
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
            Fuzion Consulting Group and Fuzion Chickasaw Group Visit Anderson
            Bean Boot Company and Rios of Mercedes in Mercedes, Texas
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/80 md:text-lg">
            Fuzion Consulting Group and Fuzion Chickasaw Group recently visited
            Anderson Bean Boot Company and Rios of Mercedes Boots in Mercedes,
            Texas, gaining firsthand insight into the craftsmanship, heritage,
            and operational discipline behind two iconic American brands.
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
                FEATURED IMAGERY
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-black md:text-3xl">
                Anderson Bean & Rios of Mercedes Tour
              </h2>
              <div className="mt-3 h-[2px] w-14 bg-black/10" />
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/80 md:text-base">
                Images from the visit highlighting craftsmanship, heritage
                manufacturing, and the people behind the brands.
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
            <ContentBlock title="Product Details">
              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group recently had
                the privilege of visiting{" "}
                <strong className="text-black">
                  Anderson Bean Boot Company
                </strong>{" "}
                and{" "}
                <strong className="text-black">Rios of Mercedes Boots</strong>{" "}
                in Mercedes, Texas—two iconic American brands recognized for
                exceptional craftsmanship, heritage, and an unwavering
                commitment to quality.
              </p>

              <p>
                Both companies proudly operate through a dedicated network of
                independent boot, shoe, and Western wear retailers rather than
                selling directly to consumers.
              </p>

              <p>
                The visit was graciously hosted by{" "}
                <strong className="text-black">Ryan Vaughan</strong>, President
                & CEO, and{" "}
                <strong className="text-black">Clayton Evans</strong>, Chief
                Financial Officer of Rios of Mercedes, who provided an in-depth
                look at the boot-making process and the skilled teams behind
                each pair.
              </p>

              <p>
                The tour was made possible through the sponsorship and
                coordination of{" "}
                <strong className="text-black">Michael Wright</strong> of The
                Shoe & Boot Outlet in Tupelo, Mississippi, whose longstanding
                retail partnership helped facilitate access to the operation.
              </p>

              <p>
                The experience offered valuable insight into how tradition,
                pride, and disciplined execution continue to define these legacy
                brands as they grow and evolve—supported by strong retailer
                relationships that connect craftsmanship directly to customers.
              </p>
            </ContentBlock>

            <ContentBlock title="Where Craftsmanship and Values Align">
              <p>
                At Fuzion, respect for craftsmanship and long-term value is more
                than an operational principle—it’s part of the company culture.
                The visit also carried a personal connection: Fuzion’s Founder
                & CEO (and Co-Owner & COO of Fuzion Chickasaw Group) has a
                long-standing appreciation for handmade, American-made
                square-toed cowboy boots, a passion that mirrors Fuzion’s
                belief in quality, durability, and work done the right way.
              </p>

              <p>
                That appreciation began with a first pair of{" "}
                <strong className="text-black">
                  Umber FQ Ostrich Anderson Bean boots
                </strong>
                , purchased from Nigro’s Western Store # 1, where{" "}
                <strong className="text-black">David Nigro Jr.</strong>,
                International Sales Representative for Rios of Mercedes and
                Anderson Bean, helped foster a deeper understanding of the
                craftsmanship behind the brands.
              </p>

              <p>
                Over time, that personal interest grew into a broader respect
                for the people, processes, and pride that go into producing
                world-class boots in the United States.
              </p>

              <p>
                Interestingly, this shared appreciation for American-made
                craftsmanship is also part of how Fuzion connected with one of
                its talented developers,{" "}
                <strong className="text-black">Prag Padilla</strong>, who is
                himself an avid collector of U.S.-made boots and a longtime
                admirer of Anderson Bean. The connection reflects how shared
                values—quality, attention to detail, and pride in one’s
                work—often bridge industries in unexpected but meaningful ways.
              </p>
            </ContentBlock>

            <ContentBlock title="Respecting Tradition While Supporting the Future">
              <p>
                While the visit was rooted in learning and appreciation, it also
                highlighted the operational realities faced by heritage
                manufacturing organizations as they scale. Fuzion recognizes and
                respects the thoughtful work already underway, including the
                adoption of <strong className="text-black">SAP Business One</strong>,
                and appreciates the transparency shared by Clayton Evans
                regarding the diligence and care taken in selecting the right
                systems.
              </p>

              <p>
                Any future collaboration would focus on complementing existing
                platforms, streamlining manual processes, and ensuring
                technology supports artisans and operations—without disrupting
                the traditions that make these brands exceptional.
              </p>

              <p>
                “When you see the pride on the manufacturing floor, it
                reinforces the importance of building systems that respect the
                craft rather than replace it,” said Fuzion leadership. “That
                philosophy is central to how we approach every partnership.”
              </p>
            </ContentBlock>

            <ContentBlock title="A Relationship Built on Respect">
              <p>
                Fuzion approached the visit with no expectation of immediate
                engagement, only a desire to learn, listen, and understand. The
                experience reinforced the company’s belief that the strongest
                partnerships are built on mutual respect, shared values, and a
                long-term perspective.
              </p>

              <p>
                Fuzion Consulting Group and Fuzion Chickasaw Group sincerely
                thank the teams at Anderson Bean Boot Company and Rios of
                Mercedes Boots for their hospitality, transparency, and time.
                Whether now or in the future, Fuzion looks forward to continued
                dialogue and the opportunity to support organizations that
                balance heritage with thoughtful growth.
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
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        {/* SLIDING HAZE */}
        <div className="hazePanel" aria-hidden="true" />

        {/* TOP NAV */}
        <header className="absolute top-0 left-0 right-0 z-30 h-[140px]">
          <nav className="relative mx-auto flex h-full max-w-7xl items-center px-8">
            {/* LEFT HALF */}
            <div className="hidden w-1/2 items-center justify-start gap-10 md:flex">
              <Link href="/services" className="navLink">
                Services
              </Link>
              <Link href="/projects" className="navLink">
                Projects
              </Link>
              <Link href="/company" className="navLink">
                Company
              </Link>
              <Link href="/news" className="navLink">
                News
              </Link>
            </div>

            {/* RIGHT HALF */}
            <div className="hidden w-1/2 items-center justify-end gap-10 md:flex">
              <Link
                href="/social-responsibility"
                className="navLink navLinkLong"
              >
                Social Responsibility
              </Link>
              <Link href="/careers" className="navLink">
                Careers
              </Link>
              <Link href="/contact" className="contactBtn">
                Contact Us
              </Link>
            </div>

            {/* CENTER LOGO */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="/" aria-label="Home" className="inline-flex">
                <img
                  src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
                  alt="Fuzion Consulting Group"
                  className="logoBig opacity-95 drop-shadow-sm"
                />
              </Link>
            </div>
          </nav>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl items-start px-6 pt-40">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              FUZION CONSULTING GROUP
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight text-black/90 md:text-6xl">
              Automating Business Processes with Modern Technology
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">
              Fuzion Consulting Group helps organizations make technology a true
              business advantage through strategic, operational, and IT
              consulting.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="rounded-full border border-black/20 bg-white/60 px-6 py-3 text-sm font-medium text-black/90 backdrop-blur hover:bg-white"
              >
                View Services →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          :root { --logoH: 150px; }
          .logoBig { height: var(--logoH); width: auto; }

          .navLink {
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 0.02em;
            color: rgba(0, 0, 0, 0.85);
            white-space: nowrap;
            padding: 8px 10px;
            border-radius: 9999px;
            transition: background 150ms ease, color 150ms ease;
          }
          .navLink:hover {
            background: rgba(255, 255, 255, 0.45);
            color: rgba(0, 0, 0, 1);
          }
          .navLinkLong { font-size: 16px; }

          .contactBtn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            padding: 10px 18px;
            font-size: 18px;
            font-weight: 900;
            letter-spacing: 0.02em;
            border-radius: 9999px;
            border: 2px solid #0b3c5d;
            color: #0b3c5d;
            background: transparent;
            transition: background 150ms ease;
          }
          .contactBtn:hover { background: rgba(11, 60, 93, 0.06); }

          /* ✅ HAZE: softer edge (no weird band) */
          .hazePanel {
            position: absolute;
            top: 0; bottom: 0; left: 0;
            z-index: 10;
            width: 100%;
            pointer-events: none;

            /* haze amount */
            background: rgba(255, 255, 255, 0.42);

            /* blur amount */
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);

            /* angled split */
            clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);

            /* ✅ soft “fade” on the split edge (tweakable) */
            box-shadow: inset -160px 0 140px -80px rgba(255,255,255,0.65);

            animation: openHaze 1.2s ease-out 0.2s forwards;
          }

          @keyframes openHaze { from { width: 100%; } to { width: 66%; } }

          @media (prefers-reduced-motion: reduce) {
            .hazePanel { animation: none; width: 66%; }
          }
        `}</style>
      </section>

      {/* ===================== NEXT SECTION: CARDS ===================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/services"
              className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-56 w-full">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
                  alt="Services placeholder"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-black/90">
                  Our Services
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Strategy, operations, and IT consulting built to move fast and
                  scale cleanly.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black/80">
                  Learn more{" "}
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/projects"
              className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-56 w-full">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
                  alt="Projects placeholder"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-black/90">
                  Projects
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Real-world outcomes across regulated, high-stakes environments.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black/80">
                  View projects{" "}
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/contact"
              className="group overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-56 w-full">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1600&q=80"
                  alt="Contact placeholder"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-black/90">
                  Contact Us
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  Tell us what you’re building. We’ll map the path from strategy
                  to execution.
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black/80">
                  Get in touch{" "}
                  <span className="transition group-hover:translate-x-0.5">
                    →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
















































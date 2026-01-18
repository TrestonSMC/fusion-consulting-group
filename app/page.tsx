export default function Home() {
  return (
    <main className="relative bg-zinc-950 text-zinc-100 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute top-1/3 right-[-200px] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

        {/* VIDEO BACKGROUND (SUPABASE CDN) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-950" />

        {/* HERO CONTENT */}
        <div className="relative z-10 max-w-5xl text-center">
          <p className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-zinc-300 backdrop-blur">
            Fusion Consulting Group
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Automating Business Processes
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              With Modern Technology
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            We help organizations reduce operational friction by designing and
            implementing scalable systems across automation, AI, and enterprise
            technology.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="rounded-md bg-blue-600 px-7 py-3 font-medium text-white hover:bg-blue-500 transition">
              Schedule a Consultation
            </button>

            <button className="rounded-md border border-white/20 px-7 py-3 font-medium text-zinc-200 hover:bg-white/5 transition">
              Explore Our Services
            </button>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Expert Consulting for Complex Business Environments
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Technology is no longer optional—it is foundational to how modern
            organizations operate, scale, and compete. Fusion Consulting Group
            partners with leadership teams to align business strategy with
            practical, results-driven technology solutions.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 py-24 bg-zinc-900/40">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl md:text-4xl font-semibold">
            Our Expertise
          </h2>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Automation & Workflow Design",
                desc: "Streamline business processes by eliminating manual effort and reducing operational bottlenecks.",
              },
              {
                title: "Business & IT Systems Integration",
                desc: "Connect platforms, data, and teams into cohesive, scalable systems that support growth.",
              },
              {
                title: "AI Engineering Solutions",
                desc: "Apply artificial intelligence where it creates real operational value—not hype.",
              },
              {
                title: "Dashboards & Productivity Portals",
                desc: "Provide leadership and field teams with real-time visibility into performance and operations.",
              },
              {
                title: "Microsoft 365 & Cloud Optimization",
                desc: "Design and optimize cloud environments that improve collaboration, security, and efficiency.",
              },
              {
                title: "SaaS & Custom Platform Development",
                desc: "Build scalable, purpose-driven software solutions aligned with real-world business needs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-zinc-900 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Our Approach
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            With decades of combined experience, our consultants work closely
            with each client to understand their operational challenges and
            design sustainable, scalable solutions. Whether supporting a growing
            organization or a large enterprise, we focus on clarity, execution,
            and long-term impact.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-24 bg-zinc-900/40">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Ready to Take the Next Step?
          </h2>

          <p className="mt-6 text-lg text-zinc-400">
            Schedule a consultation with Fusion Consulting Group to explore how
            modern technology and automation can support your business goals.
          </p>

          <div className="mt-10">
            <button className="rounded-md bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-500 transition">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}






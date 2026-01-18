export default function Home() {
  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">

      {/* FULL-PAGE HERO VIDEO (GLOBAL BACKGROUND) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="fixed inset-0 h-full w-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* DARK OVERLAY – SLIGHTLY DARKER */}
      <div className="fixed inset-0 bg-black/65 z-10 pointer-events-none" />

      {/* SUBTLE FUTURISTIC GLOWS (SMC STYLE) */}
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/12 blur-[220px]" />
        <div className="absolute top-1/3 right-[-350px] h-[550px] w-[550px] rounded-full bg-cyan-400/10 blur-[220px]" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-20">

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-5xl text-center">

            <p className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur">
              Fuzion Consulting Group
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Automating Business Processes
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                With Modern Technology
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
              We help organizations eliminate operational friction by designing
              scalable automation, AI, and enterprise technology systems that
              actually get used.
            </p>

          </div>
        </section>

        {/* OVERVIEW */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-5xl text-center">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Technology-Driven Consulting for Modern Businesses
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Technology is no longer optional—it is foundational to how modern
              organizations operate, scale, and compete. Fuzion Consulting Group
              partners with leadership teams to align strategy with execution-focused
              technology solutions.
            </p>

            <p className="mt-6 text-lg text-zinc-400">
              From internal operations to customer-facing platforms, we design
              systems that reduce complexity, increase visibility, and support
              long-term growth.
            </p>

          </div>
        </section>

        {/* SERVICES */}
        <section className="px-6 py-28 bg-zinc-900/60">
          <div className="mx-auto max-w-6xl">

            <h2 className="text-center text-3xl md:text-4xl font-semibold text-white">
              Our Expertise
            </h2>

            <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Automation & Workflow Design",
                  desc: "Design and implement intelligent workflows that eliminate manual effort and operational bottlenecks.",
                },
                {
                  title: "Business & IT Systems Integration",
                  desc: "Connect platforms, data, and teams into cohesive, scalable systems.",
                },
                {
                  title: "AI Engineering Solutions",
                  desc: "Apply artificial intelligence where it creates real, measurable business value.",
                },
                {
                  title: "Dashboards & Productivity Portals",
                  desc: "Deliver real-time visibility and decision-making tools for leadership and operations.",
                },
                {
                  title: "Microsoft 365 & Cloud Optimization",
                  desc: "Secure, modernize, and optimize cloud environments for collaboration and efficiency.",
                },
                {
                  title: "Custom SaaS Platforms",
                  desc: "Build purpose-driven software aligned with real-world business needs.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative rounded-xl p-[1px]
                             bg-gradient-to-br from-blue-500/22 via-cyan-400/14 to-transparent"
                >
                  <div className="rounded-xl bg-zinc-950/95 p-6 backdrop-blur
                                  shadow-[0_0_22px_rgba(56,189,248,0.16)]">
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-28">
          <div className="mx-auto max-w-4xl text-center">

            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Ready to Take the Next Step?
            </h2>

            <p className="mt-6 text-lg text-zinc-400">
              Schedule a consultation with Fuzion Consulting Group to explore how
              modern systems and automation can support your business goals.
            </p>

            <div className="mt-10">
              <button className="rounded-md bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-500 transition">
                Get in Touch
              </button>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

























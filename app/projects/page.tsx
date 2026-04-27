"use client";

import Link from "next/link";

const LOGO_BLUE = "#2a8bff";

type Project = {
  slug: string;
  category: string;
  title: string;
  client: string;
  duration: string;
  badge: string;
  summary: string;
  epmsNote?: string;
  image: string;
  challenge: string[];
  delivered: string[];
};

const projects: Project[] = [
  {
    slug: "epms",
    category: "Enterprise Systems Modernization",
    title: "Enterprise Project Management System (EPMS)",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "2023 – Present",
    badge: "Business-Critical",
    summary:
      "Mission-critical utility platform supporting project lifecycle management, forecasting, accounting workflows, and operational planning across multiple business units.",
    epmsNote:
      "Our work on EPMS reflects how Fuzion approaches complex environments: understand the system, align to the business, then deliver stability and forward momentum.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Legacy application with limited documentation and institutional knowledge",
      "Business-critical support needs across generation, outage, and operations workflows",
      "Need for stabilization without disrupting live utility operations",
    ],
    delivered: [
      "Full IT discovery in under 6 weeks",
      "422+ technical and operational artifacts",
      "Business process mapping, break/fix support, and modernization roadmap",
    ],
  },
  {
    slug: "3p-app",
    category: "Enterprise Systems Modernization",
    title: "3P Lifecycle Management System (3P App)",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "Jan 2025 – March 2026",
    badge: "Compliance-Critical",
    summary:
      "Enterprise document governance platform designed to automate and manage the full lifecycle of processes, procedures, and policies across non-nuclear generation operations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Fragmented, manual, and email-driven document governance processes",
      "Limited auditability, centralized control, and lifecycle visibility",
      "Need to support compliance in a regulated generation environment",
    ],
    delivered: [
      "Microsoft 365-based lifecycle management system for 3P governance",
      "Automated creation, review, approval, and biennial maintenance workflows",
      "Centralized, role-based document governance with search and metadata configuration",
    ],
  },
  {
    slug: "arl-app",
    category: "Enterprise Workflow Automation",
    title: "Alarm Response Library (ARL) App",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "2024 – 2025",
    badge: "Mission-Critical",
    summary:
      "Centralized alarm response management application built to automate the creation, review, and approval of power plant equipment alarm responses across regulated generation operations.",
    image: "/images/alarm-response.jpg",
    challenge: [
      "Manual, email-driven alarm response coordination",
      "Disconnected Word documents and review workflows",
      "Need for accountability across operations, engineering, and external stakeholders",
    ],
    delivered: [
      "Power Apps-based alarm response management solution",
      "Structured workflows for creation, review, and approval",
      "Centralized collaboration with auditable approvals and improved visibility",
    ],
  },
  {
    slug: "esl-pdl",
    category: "Enterprise Data & Document Standardization",
    title: "Equipment Specification Library (ESL) & PDL Alignment",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "2024 – 2025",
    badge: "Governance-Critical",
    summary:
      "Enterprise initiative to standardize and centralize equipment specifications and document libraries, improving governance, traceability, and alignment across generation systems.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Fragmented document and specification management across systems",
      "Limited traceability and governance in a regulated environment",
      "Need to align ESL and PDL with broader generation automation initiatives",
    ],
    delivered: [
      "Centralized and standardized document management approach across ESL and PDL",
      "Improved usability, governance, and traceability of generation specifications",
      "Aligned with EPMS, PMB, and Alarm Response systems for unified operations",
    ],
  },
  {
    slug: "epms-ado-requirements",
    category: "Enterprise Architecture & Requirements Engineering",
    title: "Enterprise Functional Decomposition & ADO Requirements",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "Dec 2024 – June 2025",
    badge: "Strategic",
    summary:
      "Enterprise requirements engineering initiative translating complex business and engineering workflows into structured, traceable system requirements to support EPMS platform evaluation.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Lack of standardized, traceable requirements across business units",
      "Need to support enterprise-level platform evaluation decisions",
      "Complex alignment across Generation, Operations, T&D, and Corporate IT",
    ],
    delivered: [
      "Developed functional decomposition model across business and engineering workflows",
      "Created structured ADO framework with epics, features, and user stories",
      "Delivered traceable, testable requirements supporting strategic platform decisions",
    ],
  },
  {
    slug: "gdmp",
    category: "Enterprise Application Development & Lifecycle",
    title: "Generation Document Management Portal (GDMP)",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "2021 – Present",
    badge: "Mission-Critical",
    summary:
      "Enterprise document management platform supporting construction, engineering, and generation operations through long-term development, integration, and lifecycle support.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Fragmented document workflows across construction and generation teams",
      "Need to modernize and standardize document management in a regulated environment",
      "Requirement for long-term scalability, adoption, and operational support",
    ],
    delivered: [
      "Designed and developed custom M365-based document management platform (GDMP)",
      "Led pilot testing, iterative development, and enterprise rollout",
      "Provided ongoing SLA-based support and application lifecycle management",
    ],
  },
  {
    slug: "generation-training",
    category: "Change Management & Workforce Enablement",
    title: "Generation Training & Change Management Modernization",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "Nov 2024 – Nov 2025",
    badge: "Adoption-Critical",
    summary:
      "Enterprise training and change management program designed to support adoption of modernized Generation systems through standardized processes, centralized training, and AI-enabled learning assets.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Outdated training materials and inconsistent knowledge transfer methods",
      "Need to support enterprise-wide adoption of multiple new systems",
      "Lack of standardized, scalable training across generation operations",
    ],
    delivered: [
      "Designed and implemented centralized training and enablement framework",
      "Replaced legacy materials with AI-enabled training videos and documentation",
      "Standardized adoption processes across multiple Generation platforms",
    ],
  },
  {
    slug: "pmb-library",
    category: "Enterprise Project Governance",
    title: "Project Management Basis (PMB) SharePoint Library",
    client: "Major Electric Utility · Phoenix Metro Area",
    duration: "2024 – 2025",
    badge: "Governance-Critical",
    summary:
      "Centralized project governance platform providing a single source of truth for project processes, stage gate lifecycle guidance, and engineering standards across generation operations.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=2200&q=80",
    challenge: [
      "Dispersed project management processes and documentation",
      "Lack of standardized governance across project lifecycle stages",
      "Need for centralized access to engineering standards and operational guidance",
    ],
    delivered: [
      "Implemented centralized PMB SharePoint platform for project governance",
      "Consolidated Stage Gate lifecycle, standards, and specifications into single hub",
      "Enabled structured workflows, dashboards, and improved project visibility",
    ],
  },
  {
    slug: "support-beacon",
    category: "Disaster Response & Logistics Platform",
    title: "Support Beacon Relief – Fuzion Logistics Application",
    client: "Rancher Navy (Nonprofit) · Central Texas",
    duration: "In Development – June 2026",
    badge: "Impact-Critical",
    summary:
      "Disaster relief logistics and volunteer coordination platform designed to automate large-scale response operations across multiple states using AI-driven workflows and cloud infrastructure.",
    image: "/images/support-beacon-flood.jpg",
    challenge: [
      "Manual coordination of disaster relief using spreadsheets and phone calls",
      "Limited scalability across multi-state operations and growing response volume",
      "Need for secure, real-time logistics and volunteer management",
    ],
    delivered: [
      "Designed and developed scalable disaster response logistics platform (Support Beacon)",
      "Automated coordination of donations, volunteers, routes, and delivery tracking",
      "Built cloud-based system leveraging AWS, AI tools, and mobile application support",
    ],
  },
];

const impactStats = [
  { value: "422+", label: "Documented Artifacts" },
  { value: "< 6 Weeks", label: "Discovery Delivery" },
  { value: "2023 – Present", label: "Ongoing Support" },
  { value: "3 Phases", label: "Structured Engagement" },
];

const engagementPhases = [
  {
    title: "IT Discovery & Stabilization",
    text:
      "Fuzion assessed architecture, infrastructure, integrations, risks, and support dependencies, then delivered a complete executive-ready discovery package under an accelerated timeline.",
  },
  {
    title: "Business Process Mapping",
    text:
      "Fuzion partnered with leadership to document how EPMS supports real operational workflows, exposing inefficiencies, redundancies, and control gaps.",
  },
  {
    title: "Break/Fix, Enhancements & Modernization",
    text:
      "Fuzion assumed ongoing support responsibilities while driving stability, analytics, reporting, and a forward modernization roadmap.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 md:pb-20 md:pt-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
                PROJECT EXPERIENCE
              </p>

              <h1 className="mt-3 text-3xl font-semibold leading-tight text-black/90 md:text-5xl">
                Selected projects built for complex operations and measurable outcomes.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
                Fuzion Consulting Group helps organizations modernize legacy systems,
                improve visibility, and create scalable digital foundations. Our
                project work reflects hands-on delivery across business-critical
                applications, operational transformation, and modernization strategy.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                >
                  Start a Conversation
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-medium text-black/90 hover:bg-black/5"
                >
                  View Services →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
                style={{ borderColor: LOGO_BLUE }}
              >
                <h2 className="text-xl font-semibold text-black/90">
                  What our project work demonstrates
                </h2>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Legacy application stabilization",
                    "Enterprise workflow discovery and mapping",
                    "Operational support in regulated environments",
                    "Business and IT alignment",
                    "Roadmaps for modernization",
                    "Analytics, reporting, and governance improvements",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-black/10 bg-white/80 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                          style={{ background: LOGO_BLUE }}
                        />
                        <p className="text-sm leading-relaxed text-black/70">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-black/60">
                  Each engagement is built around business continuity, technical
                  clarity, and long-term value. We focus on solving operational
                  challenges while creating a practical path forward for modernization
                  and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 pb-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
              >
                <div className="text-3xl font-semibold text-black/90">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-black/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              FEATURED PROJECTS
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
              Recent project highlights
            </h2>
          </div>

          <div className="mt-8 space-y-8">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="relative min-h-[320px] lg:col-span-5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`h-full w-full object-cover ${
                        project.slug === "arl-app"
                          ? "object-[50%_30%]"
                          : "object-center"
                      }`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div
                      className="absolute left-6 top-6 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur"
                      style={{
                        borderColor: "rgba(255,255,255,0.25)",
                        background: "rgba(42,139,255,0.20)",
                      }}
                    >
                      {project.badge}
                    </div>
                  </div>

                  <div className="p-8 md:p-10 lg:col-span-7">
                    <p className="text-xs font-semibold tracking-[0.25em] text-black/55">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold text-black/90 md:text-4xl">
                      {project.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3 text-sm text-black/60">
                      <span className="rounded-full border border-black/10 px-3 py-1">
                        {project.client}
                      </span>

                      <span className="rounded-full border border-black/10 px-3 py-1">
                        {project.duration}
                      </span>
                    </div>

                    <p className="mt-6 max-w-3xl text-base leading-relaxed text-black/70">
                      {project.summary}
                    </p>

                    {project.epmsNote && (
                      <div className="mt-5 rounded-2xl border border-black/10 bg-black/[0.02] p-4">
                        <p className="text-sm leading-relaxed text-black/65">
                          {project.epmsNote}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 grid gap-6 md:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                          Key Challenges
                        </h4>

                        <div className="mt-4 space-y-3">
                          {project.challenge.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <span
                                className="mt-2 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                                style={{ background: LOGO_BLUE }}
                              />

                              <p className="text-sm leading-relaxed text-black/70">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-black/55">
                          Delivered
                        </h4>

                        <div className="mt-4 space-y-3">
                          {project.delivered.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <span
                                className="mt-2 inline-flex h-2.5 w-2.5 flex-none rounded-full"
                                style={{ background: LOGO_BLUE }}
                              />

                              <p className="text-sm leading-relaxed text-black/70">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90"
                      >
                        View Project Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 md:py-10">
          <div
            className="rounded-3xl border-2 bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            style={{ borderColor: LOGO_BLUE }}
          >
            <div className="grid gap-8 lg:grid-cols-3">
              {engagementPhases.map((phase, index) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-black/10 bg-white/80 p-5"
                >
                  <div
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ background: LOGO_BLUE }}
                  >
                    {index + 1}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-black/90">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-black/65">
                    {phase.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{ background: LOGO_BLUE }}
      >
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(255,255,255,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(700px_380px_at_80%_40%,rgba(0,0,0,0.20),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Need a partner for modernization, support, or digital transformation?
              </h3>

              <div className="mt-4 h-[2px] w-16 bg-white/80" />

              <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/90">
                Fuzion Consulting Group helps organizations stabilize critical
                systems, improve operational visibility, and build practical paths
                forward with modern technology.
              </p>
            </div>

            <div className="flex items-end lg:col-span-5 lg:justify-end">
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-white/90"
                >
                  Contact Us →
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
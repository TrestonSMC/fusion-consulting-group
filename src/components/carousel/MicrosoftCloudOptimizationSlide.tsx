// src/components/carousel/MicrosoftCloudOptimizationSlide.tsx
"use client";

import Link from "next/link";
import {
  Cloud,
  ArrowLeftRight,
  BarChart3,
  ShieldCheck,
  Database,
  ChevronRight,
} from "lucide-react";

const LOGO_BLUE = "#2a8bff";

function cx(...c: Array<string | false | undefined | null>) {
  return c.filter(Boolean).join(" ");
}

type CardProps = {
  icon: React.ReactNode;
  title: string;
  blurb: string;
  bullets: string[];
};

function CapabilityCard({ icon, title, blurb, bullets }: CardProps) {
  return (
    <div className="group rounded-3xl border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_50px_rgba(0,0,0,0.10)]">
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-2xl border bg-white"
          style={{ borderColor: `${LOGO_BLUE}40` }}
        >
          <div style={{ color: LOGO_BLUE }}>{icon}</div>
        </div>

        <div className="min-w-0">
          <p className="text-base font-semibold tracking-tight text-black/90">
            {title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-black/60">{blurb}</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-4 h-[3px] w-12 rounded-full" style={{ background: LOGO_BLUE }} />
        <ul className="space-y-2 text-sm text-black/70">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: LOGO_BLUE }} />
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-black/70 group-hover:text-black">
        Learn more <ChevronRight className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function MicrosoftCloudOptimizationSlide() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-white">
      {/* top accent line (matches about-page vibe) */}
      <div className="h-[3px] w-full" style={{ background: LOGO_BLUE }} />

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: headline / positioning */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
              MICROSOFT & CLOUD OPTIMIZATION
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black/90 md:text-4xl">
              Modernize. Secure. Standardize.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-black/60 md:text-base">
              We help teams consolidate systems into Microsoft 365, build trusted reporting,
              and put governance in place so the environment stays clean, secure, and scalable.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-black/90"
              >
                Explore Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-black/20 bg-white px-6 py-3 text-sm font-semibold text-black/90 hover:bg-black/5"
              >
                Talk to a Consultant →
              </Link>
            </div>

            {/* small “platform tags” without looking cheesy */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["Microsoft 365", "SharePoint", "Power BI", "Azure", "SQL"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/70"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT: capability cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 md:grid-cols-2">
              <CapabilityCard
                icon={<Cloud className="h-5 w-5" />}
                title="Microsoft 365 Cloud Migration"
                blurb="Move content, users, and workflows into a unified M365 environment."
                bullets={[
                  "Migrate from on-prem SharePoint",
                  "Consolidate Dropbox/Box/local file servers",
                  "Tenant-to-tenant data transfers",
                  "Unify multi-cloud into Microsoft 365",
                ]}
              />

              <CapabilityCard
                icon={<BarChart3 className="h-5 w-5" />}
                title="Unified Reporting"
                blurb="Turn disconnected data into dashboards leaders actually use."
                bullets={[
                  "Power BI training + consulting",
                  "Custom dashboards and reports",
                  "On-prem systems → cloud integration",
                  "SQL data warehousing support",
                ]}
              />

              <CapabilityCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Information Governance"
                blurb="Keep your environment compliant, controlled, and sustainable."
                bullets={[
                  "Internal processes, roles, and policies",
                  "System governance playbooks",
                  "Deployment strategies and controls",
                  "Backup + business continuity plans",
                ]}
              />

              <CapabilityCard
                icon={<Database className="h-5 w-5" />}
                title="Construction Technology"
                blurb="Operational systems, field workflows, and tenant administration."
                bullets={[
                  "Construction project management support",
                  "Technology development and modernization",
                  "Microsoft 365 tenant administration",
                  "Information + application development",
                ]}
              />
            </div>

            {/* bottom blue frame (matches your “blue outline around rectangle” request vibe) */}
            <div
              className="mt-6 rounded-3xl border-2 p-5"
              style={{ borderColor: `${LOGO_BLUE}55` }}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="text-sm font-semibold text-black/85">
                  Want this packaged as a roadmap + implementation plan?
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white"
                  style={{ background: LOGO_BLUE }}
                >
                  Get a consult →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

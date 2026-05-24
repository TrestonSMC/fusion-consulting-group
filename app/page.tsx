"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { BRAND } from "../src/config/brand";

const NAVY = BRAND.colors.navy;
const GOLD = BRAND.colors.gold;

export default function HomePage() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const scrollByCards = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.62);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitStatus({ type: "", message: "" });

    if (
      !formData.name.trim() ||
      !formData.organization.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill out all required fields.",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully.",
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        interestedIn: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Unable to send your message right now. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const capabilities = [
    {
      title: "Construction, Document, and Project Management SaaS",
      desc: "Modern platforms that streamline approvals, documentation, scheduling, and delivery.",
      href: "/capabilities",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2200&q=80",
      badge: "SaaS / PM",
    },
    {
      title: "Field Productivity Portals & Dashboards",
      desc: "Operational visibility across teams, sites, and systems—built for speed and clarity.",
      href: "/capabilities",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2200&q=80",
      badge: "Dashboards",
    },
    {
      title: "Business & IT Integration Strategies",
      desc: "Connect tools, data, and workflows so your operations run as one system.",
      href: "/capabilities",
      img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=2200&q=80",
      badge: "Strategy",
    },
    {
      title: "AI Engineering Solutions",
      desc: "Practical AI that reduces overhead, automates decisions, and increases output.",
      href: "/capabilities",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2200&q=80",
      badge: "AI",
    },
    {
      title: "Microsoft 365 & Cloud Optimization",
      desc: "Implementations, governance, security hardening, and cloud cost control.",
      href: "/capabilities",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=80",
      badge: "M365 / Cloud",
    },
    {
      title: "Workflow Automation & Digital Transformation",
      desc: "Replace manual work with clean, measurable processes that scale.",
      href: "/capabilities",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2200&q=80",
      badge: "Automation",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F6]">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />

        <div className="hazePanel" aria-hidden="true" />

        <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl items-start px-6 pt-32 md:pt-36">
          <div className="heroTextWrap max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
              FUZION CONSULTING GROUP
            </p>

            <h1 className="mt-3 text-4xl font-semibold leading-tight text-[#0B1F3A] md:text-6xl">
              Automating Business Processes with Modern Technology
            </h1>

            <p className="mt-4 text-base leading-relaxed text-[#0B1F3A]/75 md:text-lg">
              Fuzion Consulting Group helps organizations unlock business value
              by automating processes, adopting AI, and modernizing their
              digital capabilities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#132f56]"
              >
                Contact Us
              </Link>

              <Link
                href="/capabilities"
                className="rounded-full border border-[#C8A96B]/50 bg-white/70 px-6 py-3 text-sm font-medium text-[#0B1F3A] backdrop-blur transition hover:bg-[#C8A96B]/10"
              >
                View Capabilities →
              </Link>
            </div>
          </div>
        </div>

        <style>{`
          .hazePanel {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            z-index: 10;
            width: 100%;
            pointer-events: none;
            background: linear-gradient(
              90deg,
              rgba(248,248,246,0.88) 0%,
              rgba(248,248,246,0.72) 48%,
              rgba(11,31,58,0.12) 100%
            );
            backdrop-filter: blur(18px);
            -webkit-backdrop-filter: blur(18px);
            clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%);
            box-shadow:
              inset -160px 0 140px -80px rgba(200,169,107,0.22),
              inset 0 0 0 1px rgba(200,169,107,0.08);
            animation: openHaze 1.2s ease-out 0.2s forwards;
          }

          .heroTextWrap {
            position: relative;
            padding: 24px;
            border-radius: 20px;
          }

          .heroTextWrap::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 20px;
            border-left: 3px solid rgba(200,169,107,0.8);
            pointer-events: none;
          }

          @keyframes openHaze {
            from { width: 100%; }
            to { width: 66%; }
          }

          @media (max-width: 767px) {
            .hazePanel {
              inset: 0;
              width: 100%;
              clip-path: none;
              box-shadow: none;
              animation: none;
              background: linear-gradient(
                180deg,
                rgba(248,248,246,0.60) 0%,
                rgba(248,248,246,0.42) 40%,
                rgba(11,31,58,0.28) 100%
              );
              backdrop-filter: blur(2px);
              -webkit-backdrop-filter: blur(2px);
            }

            .heroTextWrap {
              background: rgba(248,248,246,0.72);
              backdrop-filter: blur(12px);
              -webkit-backdrop-filter: blur(12px);
              padding: 22px 18px;
              border-radius: 18px;
              box-shadow: 0 18px 45px rgba(11,31,58,0.14);
            }

            .heroTextWrap::before {
              border: 1.5px solid rgba(200,169,107,0.55);
              box-shadow: 0 0 0 1px rgba(200,169,107,0.12);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hazePanel {
              animation: none;
              width: 66%;
            }
          }

          @media (prefers-reduced-motion: reduce) and (max-width: 767px) {
            .hazePanel {
              width: 100%;
            }
          }

          .noScrollBar::-webkit-scrollbar { display: none; }
          .noScrollBar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </section>

      <div className="h-[3px] w-full bg-[#C8A96B]" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
                CONSULTING SERVICES
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-4xl">
                Expert Consulting Services for Business
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#0B1F3A]/70 md:text-lg">
                Technology-Driven Solutions for a Complex Business Landscape
              </p>

              <p className="mt-6 text-sm leading-relaxed text-[#0B1F3A]/65 md:text-base">
                At Fuzion Consulting Group and our certified Minority
                Women-Owned subsidiary,{" "}
                <span className="font-semibold text-[#0B1F3A]">
                  Fuzion Chickasaw Group
                </span>
                , we recognize that technology is no longer optional—it’s
                foundational to business success. We deliver a comprehensive
                suite of consulting services spanning business strategy,
                professional operations, and IT infrastructure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/capabilities"
                  className="rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#132f56]"
                >
                  Explore Capabilities
                </Link>
                <Link
                  href="/company"
                  className="rounded-full border border-[#C8A96B]/50 bg-white px-6 py-3 text-sm font-medium text-[#0B1F3A] transition hover:bg-[#C8A96B]/10"
                >
                  About Our Company →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border-2 border-[#C8A96B]/45 bg-white p-8 shadow-[0_18px_45px_rgba(11,31,58,0.08)]">
                <h3 className="text-xl font-semibold text-[#0B1F3A]">
                  Our expertise includes:
                </h3>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    "Construction, Document, and Project Management SaaS solutions",
                    "Business and IT Integration Strategies",
                    "AI Engineering Solutions",
                    "Technology dashboards and field productivity portals",
                    "Microsoft 365 implementation and cloud optimization",
                    "Workflow automation and digital transformation",
                    "Business and Professional Services Consulting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#C8A96B]/25 bg-[#F8F8F6] p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-[#C8A96B]" />
                        <p className="text-sm leading-relaxed text-[#0B1F3A]/70">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-relaxed text-[#0B1F3A]/60">
                  With decades of combined experience, our consultants partner
                  closely with each client to understand their unique
                  operational challenges and design sustainable, scalable
                  solutions.
                </p>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[#C8A96B]/50 bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#C8A96B]/10"
                  >
                    Talk to a Consultant →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* keep the rest same structure */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-4">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-[#C8A96B]">
                CAPABILITIES
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-[#0B1F3A]">
                Built for real-world operations
              </h3>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              {["left", "right"].map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => scrollByCards(dir as "left" | "right")}
                  className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0B1F3A] text-white shadow-md transition hover:bg-[#132f56]"
                  aria-label={dir === "left" ? "Previous" : "Next"}
                >
                  <span className="text-xl">{dir === "left" ? "←" : "→"}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative mt-8">
            <button
              type="button"
              onClick={() => scrollByCards("left")}
              className="absolute left-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-2xl bg-[#0B1F3A] text-white shadow-md md:hidden"
              aria-label="Previous"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scrollByCards("right")}
              className="absolute right-0 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-2xl bg-[#0B1F3A] text-white shadow-md md:hidden"
              aria-label="Next"
            >
              →
            </button>

            <div
              ref={sliderRef}
              className="noScrollBar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pr-6"
            >
              {capabilities.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group relative snap-start overflow-hidden rounded-3xl border border-[#C8A96B]/25 bg-white shadow-[0_12px_35px_rgba(11,31,58,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(11,31,58,0.14)]"
                  style={{ minWidth: "min(720px, 90vw)" }}
                >
                  <div className="relative h-72 w-full">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/75 via-[#0B1F3A]/15 to-transparent" />

                    <div className="absolute left-6 top-6 inline-flex items-center rounded-full border border-white/25 bg-[#C8A96B]/25 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur">
                      {c.badge}
                    </div>
                  </div>

                  <div className="p-8">
                    <h4 className="text-3xl font-semibold text-[#0B1F3A]">
                      {c.title}
                    </h4>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#0B1F3A]/60">
                      {c.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#0B1F3A]">
                      Learn more
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-[#C8A96B]/40 bg-white transition group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(900px_420px_at_30%_15%,rgba(200,169,107,0.35),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="text-4xl font-semibold tracking-tight text-white">
                Would love to help.
              </h3>
              <div className="mt-4 h-[2px] w-16 bg-[#C8A96B]" />
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/85">
                Do you have questions about our services? Do you want to learn
                about ways we can help your business? Contact us now!
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/80">
                <p>• Strategy, operations, and modern digital solutions</p>
                <p>• Built for regulated + high-stakes environments</p>
                <p>• Scalable execution with measurable outcomes</p>
              </div>

              <div className="mt-10">
                <Link
                  href="/capabilities"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#F8F8F6]"
                >
                  Explore Capabilities →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-[#C8A96B]/30 bg-white/10 p-8 backdrop-blur"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <Field label="Name *" name="name" value={formData.name} onChange={handleChange} />
                  <Field label="Organization *" name="organization" value={formData.organization} onChange={handleChange} />
                  <Field label="Email *" name="email" type="email" value={formData.email} onChange={handleChange} />
                  <Field label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
                  <div className="md:col-span-2">
                    <Field label="Interested in:" name="interestedIn" value={formData.interestedIn} onChange={handleChange} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-white/95">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-2xl border border-[#C8A96B]/35 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#C8A96B]"
                      placeholder="Tell us what you're building…"
                    />
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    {submitStatus.message ? (
                      <p className="text-sm text-white">
                        {submitStatus.message}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-2xl bg-[#C8A96B] px-8 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#d8bb7c] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>

                <p className="mt-4 text-xs text-white/60">
                  Your message will be delivered directly to our team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
}: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/95">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 w-full rounded-2xl border border-[#C8A96B]/35 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none focus:border-[#C8A96B]"
      />
    </div>
  );
}




















































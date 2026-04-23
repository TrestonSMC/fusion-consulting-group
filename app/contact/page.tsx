"use client";

import Link from "next/link";
import { useState } from "react";

const LOGO_BLUE = "#2a8bff";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      setSubmitStatus({
        type: "success",
        message: "Thank you. Your message has been sent successfully.",
      });

      setFormData({
        name: "",
        organization: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      title: "General Inquiries",
      value: "technology@fcghelps.com",
      description:
        "Questions about Fuzion Consulting Group, services, technology support, or general inquiries.",
      href: "mailto:technology@fcghelps.com",
    },
    {
      title: "Call Us",
      value: "(913) 850-3509",
      description: "Speak directly with our team during normal business hours.",
      href: "tel:+19138503509",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-28 md:pt-32">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/5 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(42,139,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(42,139,255,0.10),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <div
              className="mb-5 inline-flex rounded-full border px-4 py-1 text-xs font-semibold tracking-[0.22em]"
              style={{
                borderColor: `${LOGO_BLUE}33`,
                color: LOGO_BLUE,
                backgroundColor: `${LOGO_BLUE}10`,
              }}
            >
              CONTACT FUZION
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-black md:text-6xl">
              Let’s start the conversation.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-black/70 md:text-lg">
              Whether you need business transformation, enterprise modernization,
              advisory support, or strategic execution, our team is ready to help
              you move forward with clarity and confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: LOGO_BLUE }}
              >
                Send a Message
              </a>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-black transition hover:border-black/20 hover:bg-black/[0.03]"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-5 md:grid-cols-2">
            {contactCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="group rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(42,139,255,0.12)]"
              >
                <div
                  className="mb-4 h-1.5 w-14 rounded-full"
                  style={{ backgroundColor: LOGO_BLUE }}
                />
                <h2 className="text-lg font-semibold text-black">{card.title}</h2>
                <p className="mt-3 text-base font-medium text-black/85 group-hover:text-black">
                  {card.value}
                </p>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  {card.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section id="contact-form" className="bg-[#f8fbff] py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.2fr_0.8fr] md:px-10">
          {/* FORM */}
          <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-8">
            <div className="mb-8">
              <p
                className="text-xs font-semibold tracking-[0.22em]"
                style={{ color: LOGO_BLUE }}
              >
                SEND US A MESSAGE
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-black">
                Tell us what you need.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-black/65">
                Share a little about your organization, your goals, and the support
                you’re looking for. We’ll route your message to the right team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Full Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-transparent focus:ring-2"
                    style={
                      {
                        "--tw-ring-color": `${LOGO_BLUE}55`,
                      } as React.CSSProperties
                    }
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Organization
                  </label>
                  <input
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-transparent focus:ring-2"
                    style={
                      {
                        "--tw-ring-color": `${LOGO_BLUE}55`,
                      } as React.CSSProperties
                    }
                    placeholder="Company or organization"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-transparent focus:ring-2"
                    style={
                      {
                        "--tw-ring-color": `${LOGO_BLUE}55`,
                      } as React.CSSProperties
                    }
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-transparent focus:ring-2"
                    style={
                      {
                        "--tw-ring-color": `${LOGO_BLUE}55`,
                      } as React.CSSProperties
                    }
                    placeholder="(555) 555-5555"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-transparent focus:ring-2"
                  style={
                    {
                      "--tw-ring-color": `${LOGO_BLUE}55`,
                    } as React.CSSProperties
                  }
                >
                  <option value="">Select a service</option>
                  <option value="Business Consulting">Business Consulting</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                  <option value="Enterprise Systems">Enterprise Systems</option>
                  <option value="Advisory Services">Advisory Services</option>
                  <option value="Project Delivery">Project Delivery</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none transition focus:border-transparent focus:ring-2"
                  style={
                    {
                      "--tw-ring-color": `${LOGO_BLUE}55`,
                    } as React.CSSProperties
                  }
                  placeholder="Tell us about your project, initiative, or what support you're looking for."
                />
              </div>

              {submitStatus.message ? (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    submitStatus.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-w-[180px] items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                style={{ backgroundColor: LOGO_BLUE }}
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <p
                className="text-xs font-semibold tracking-[0.22em]"
                style={{ color: LOGO_BLUE }}
              >
                WHY FUZION
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                Strategic guidance with execution in mind.
              </h3>
              <p className="mt-4 text-sm leading-6 text-black/65">
                We support organizations navigating growth, modernization,
                transformation, and operational complexity with practical,
                business-focused solutions.
              </p>

              <div className="mt-6 space-y-4">
                {[
                  "Enterprise transformation and modernization",
                  "Operational strategy and advisory support",
                  "Cross-functional execution and delivery leadership",
                  "Client-centered solutions designed for long-term value",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="mt-1 h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: LOGO_BLUE }}
                    />
                    <p className="text-sm leading-6 text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              <p
                className="text-xs font-semibold tracking-[0.22em]"
                style={{ color: LOGO_BLUE }}
              >
                OFFICE
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-black">
                Based in Kansas
              </h3>
              <p className="mt-4 text-sm leading-6 text-black/65">
                Fuzion Consulting Group serves clients across industries with a
                focus on strategic delivery, modernization, and organizational impact.
              </p>

              <div className="mt-6 rounded-[24px] border border-dashed border-black/10 bg-[#f8fbff] p-5">
                <p className="text-sm font-medium text-black">Olathe, Kansas</p>
                <p className="mt-1 text-sm leading-6 text-black/60">
                  Available for regional and national client engagements.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
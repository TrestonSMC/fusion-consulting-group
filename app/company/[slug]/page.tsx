import Link from "next/link";
import { notFound } from "next/navigation";
import { teamMembers } from "../team-data";

export default async function CompanyBioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const member = teamMembers.find((person) => person.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        <Link
          href="/company"
          className="mb-8 inline-block text-sm font-medium text-[#2a8bff]"
        >
          ← Back to Company
        </Link>

        <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-start">
          <div className="overflow-hidden rounded-[28px] border border-black/10 bg-[#f6f8fb]">
            <img
              src={member.image}
              alt={member.name}
              className="h-[420px] w-full object-cover"
              style={{
                objectPosition: member.photoPosition ?? "50% 20%",
                transform: `scale(${member.photoScale ?? 1})`,
                transformOrigin: "center",
              }}
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#2a8bff]">
              {member.group}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {member.name}
            </h1>

            <p className="mt-3 text-lg text-black/65">{member.title}</p>

            <p className="mt-8 text-base leading-8 text-black/80">
              {member.fullBio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
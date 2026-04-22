import { createClient } from "../../../utils/supabase/server";
import Editor from "./editor";

export default async function Page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: employees } = await supabase
    .from("employees")
    .select("*")
    .order("name");

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none opacity-60 [background:radial-gradient(900px_420px_at_12%_10%,rgba(42,139,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 pointer-events-none opacity-40 [background:radial-gradient(700px_340px_at_88%_12%,rgba(42,139,255,0.08),transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-[0.25em] text-black/60">
            FUZION ADMIN
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
            Company Page Editor
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-black/65 md:text-lg">
            Update employee photos and bios for the company page and linked team
            profile experience.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/60 shadow-sm">
            Logged in: {user?.email ?? "NOT LOGGED IN"}
          </div>
        </div>
      </section>

      <div className="h-[3px] w-full bg-[#2a8bff]" />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <Editor employees={employees || []} />
        </div>
      </section>
    </main>
  );
}
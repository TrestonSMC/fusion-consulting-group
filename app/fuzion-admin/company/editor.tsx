"use client";

import { useMemo, useRef, useState } from "react";
import { createClient } from "../../../utils/supabase/client";

const LOGO_BLUE = "#2a8bff";

type Employee = {
  id: string;
  name: string | null;
  title: string | null;
  bio: string | null;
  photo_url: string | null;
};

export default function Editor({ employees }: { employees: Employee[] }) {
  const supabase = createClient();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [list, setList] = useState<Employee[]>(employees);
  const [selectedId, setSelectedId] = useState<string>(employees[0]?.id ?? "");
  const [bio, setBio] = useState<string>(employees[0]?.bio ?? "");
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const selected = useMemo(
    () => list.find((employee) => employee.id === selectedId) ?? null,
    [list, selectedId]
  );

  const handleSelect = (employee: Employee) => {
    setSelectedId(employee.id);
    setBio(employee.bio ?? "");
    setStatus({ type: "", message: "" });
  };

  const handleSave = async () => {
    if (!selected) return;

    setIsSaving(true);
    setStatus({ type: "", message: "" });

    const { error } = await supabase
      .from("employees")
      .update({ bio })
      .eq("id", selected.id);

    setIsSaving(false);

    if (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
      return;
    }

    setList((current) =>
      current.map((employee) =>
        employee.id === selected.id ? { ...employee, bio } : employee
      )
    );

    setStatus({
      type: "success",
      message: "Bio updated successfully.",
    });
  };

  const handleUpload = async (file: File) => {
    if (!selected) return;

    setIsUploading(true);
    setStatus({ type: "", message: "" });

    try {
      const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
      const filePath = `employee-photos/${selected.id}-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("employee-photos")
        .upload(filePath, file, {
          upsert: true,
          contentType: file.type,
        });

      if (uploadError) {
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      const { data: publicUrlData } = supabase.storage
        .from("employee-photos")
        .getPublicUrl(filePath);

      const publicUrl = `${publicUrlData.publicUrl}?v=${Date.now()}`;

      const { error: updateError } = await supabase
        .from("employees")
        .update({ photo_url: publicUrl })
        .eq("id", selected.id);

      if (updateError) {
        throw new Error(`DB update failed: ${updateError.message}`);
      }

      setList((current) =>
        current.map((employee) =>
          employee.id === selected.id
            ? { ...employee, photo_url: publicUrl }
            : employee
        )
      );

      setStatus({
        type: "success",
        message: "Photo updated successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Upload failed.",
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  if (!list.length) {
    return (
      <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
        <p className="text-lg font-semibold text-black/90">No employees found</p>
        <p className="mt-2 text-sm text-black/60">
          Add rows to your <span className="font-medium text-black/75">employees</span> table in Supabase first.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_14px_40px_rgba(0,0,0,0.05)]">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-black/50">
              TEAM MEMBERS
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-black/90">
              Select Employee
            </h2>
          </div>

          <div
            className="h-[3px] w-12 rounded-full"
            style={{ background: LOGO_BLUE }}
          />
        </div>

        <div className="mt-6 space-y-2">
          {list.map((employee) => {
            const active = employee.id === selectedId;

            return (
              <button
                key={employee.id}
                type="button"
                onClick={() => handleSelect(employee)}
                className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                  active
                    ? "border-transparent bg-[rgba(42,139,255,0.10)] shadow-sm"
                    : "border-black/10 bg-gray-50 hover:border-black/15 hover:bg-white"
                }`}
              >
                <div className="text-base font-semibold text-black/90">
                  {employee.name ?? "Unnamed"}
                </div>
                <div className="mt-1 text-sm leading-relaxed text-black/55">
                  {employee.title ?? "No title"}
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_14px_40px_rgba(0,0,0,0.05)] md:p-8">
        {selected ? (
          <div className="flex flex-col gap-8 xl:flex-row">
            <div className="xl:w-[280px] xl:flex-none">
              <p className="text-xs font-semibold tracking-[0.22em] text-black/50">
                PROFILE PHOTO
              </p>

              <div className="mt-4 overflow-hidden rounded-[28px] border border-black/10 bg-gray-50">
                {selected.photo_url ? (
                  <img
                    src={selected.photo_url}
                    alt={selected.name ?? "Employee"}
                    className="h-[300px] w-full object-cover"
                  />
                ) : (
                  <div className="flex h-[300px] items-center justify-center text-sm font-medium text-black/35">
                    No photo
                  </div>
                )}
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/jpg"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUpload(file);
                }}
              />

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-black/90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isUploading ? "Uploading..." : "Upload Photo"}
                </button>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isUploading}
                  className="rounded-full border border-black/15 bg-white px-5 py-3 text-sm font-medium text-black/85 transition hover:bg-black/5 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  Replace Image
                </button>
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold tracking-[0.22em] text-black/50">
                BIO EDITOR
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-black/90">
                {selected.name ?? "Unnamed"}
              </h3>

              <p className="mt-2 text-base leading-relaxed text-black/55">
                {selected.title ?? "No title"}
              </p>

              <div className="mt-6">
                <label className="block text-sm font-medium text-black/85">
                  Bio
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={12}
                  className="mt-3 w-full rounded-[24px] border border-black/10 bg-gray-50 px-5 py-4 text-sm leading-relaxed text-black/85 outline-none transition placeholder:text-black/35 focus:border-[rgba(42,139,255,0.45)] focus:bg-white"
                  placeholder="Add or update this team member's bio..."
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
                  style={{ background: LOGO_BLUE }}
                >
                  {isSaving ? "Saving..." : "Save Bio"}
                </button>

                <div className="rounded-full border border-black/10 bg-white px-4 py-3 text-sm text-black/55">
                  Updates save directly to Supabase
                </div>
              </div>

              {status.message ? (
                <div
                  className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
                    status.type === "success"
                      ? "border-[rgba(42,139,255,0.18)] bg-[rgba(42,139,255,0.08)] text-black/80"
                      : "border-red-200 bg-red-50 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="text-black/60">Select an employee to begin.</div>
        )}
      </section>
    </div>
  );
}
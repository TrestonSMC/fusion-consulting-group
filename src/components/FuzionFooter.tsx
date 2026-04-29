"use client";

const LOGO_BLUE = "#2a8bff";

export default function FuzionFooter() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center">
        <p
          className="text-sm font-medium"
          style={{ color: LOGO_BLUE }}
        >
          © {new Date().getFullYear()} Fuzion Consulting Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
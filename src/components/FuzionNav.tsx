import Link from "next/link";

export default function FuzionNav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 h-[100px]">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">

        {/* LOGO */}
        <Link href="/" aria-label="Home" className="inline-flex">
          <img
            src="https://imeyhjgubpbglspfellj.supabase.co/storage/v1/object/public/media/Brand/logo.png"
            alt="Fuzion Consulting Group"
            className="logoBig opacity-95"
          />
        </Link>

        {/* CENTER NAV LINKS */}
        <div className="hidden items-center gap-12 md:flex">
          <Link href="/services" className="navLink">Services</Link>
          <Link href="/projects" className="navLink">Projects</Link>
          <Link href="/company" className="navLink">Company</Link>
          <Link href="/news" className="navLink">News</Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden items-center gap-10 md:flex">
          <Link href="/social-responsibility" className="navLink navLinkLong">
            Social Responsibility
          </Link>
          <Link href="/careers" className="navLink">Careers</Link>
          <Link href="/contact" className="contactBtn">
            Contact Us
          </Link>
        </div>

      </nav>
    </header>
  );
}



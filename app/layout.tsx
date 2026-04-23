import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FuzionNav from "../src/components/FuzionNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fuzion Consulting Group",
    template: "%s | Fuzion Consulting Group",
  },
  description:
    "Fuzion Consulting Group helps businesses scale through strategy, operations, and modern digital solutions.",
  openGraph: {
    title: "Fuzion Consulting Group",
    description:
      "Helping businesses scale through strategy, operations, and modern digital solutions.",
    url: "https://fuzionconsultinggroup.com",
    siteName: "Fuzion Consulting Group",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FuzionNav />
        {children}
      </body>
    </html>
  );
}






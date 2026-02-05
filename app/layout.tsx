import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "Fusion Consulting Group",
    template: "%s | Fusion Consulting Group",
  },
  description:
    "Fusion Consulting Group helps businesses scale through strategy, operations, and modern digital solutions.",
  openGraph: {
    title: "Fusion Consulting Group",
    description:
      "Helping businesses scale through strategy, operations, and modern digital solutions.",
    url: "https://fusionconsultinggroup.com",
    siteName: "Fusion Consulting Group",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // or /icon.png if you use png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


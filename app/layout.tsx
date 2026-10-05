import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteUrl } from "@/lib/site";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = localFont({ src: "../public/fonts/sans.woff2", variable: "--font-manrope", display: "swap" });
const jetbrainsMono = localFont({ src: "../public/fonts/mono.woff2", variable: "--font-jetbrains-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  openGraph: { type: "website", siteName: "Jahred Uy Portfolio", title: "Jahred Uy | Full Stack Developer", description: "Business systems, automation, and mobile applications." },
  twitter: { card: "summary_large_image" },
  title: "Jahred Uy | Full Stack Developer",
  description:
    "Portfolio of Jahred Uy, a Full Stack Developer building clean and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Header />

        <main id="main-content" tabIndex={-1}>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
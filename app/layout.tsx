import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
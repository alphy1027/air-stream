import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Button from "@/components/UI-primitives/button";
import { navLinks } from "@/content/navLinks";
import { siteInfo } from "@/content/siteInfo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.siteURL),
  title: "Airstream HVAC & Refrigeration Solutions in Kenya | Installation, Repair, Maintenance & Spare Parts",
  description:
    "Airstream provides expert air conditioning, refrigeration, and ventilation services in Kenya. We specialize in installation, repair, maintenance, and supply of genuine spare parts, delivering reliable HVAC solutions for homes, offices, and commercial spaces.",
  openGraph: {
    title: {
      default: "Airstream cooling systems Kenya",
      template: "%s | AirStream cooling systems Kenya",
    },
    description:
      "From installation and repair to maintenance and genuine spare parts, AirStream keeps your spaces cool, efficient, and reliable. Trusted HVAC and refrigeration solutions for homes and businesses in Kenya.",
    siteName: siteInfo.siteName,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "AirStream HVAC & Refrigeration Experts in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airstream HVAC & Refrigeration Experts in Kenya",
    description:
      "From installation and repair to maintenance and genuine spare parts, AirStream keeps your spaces cool, efficient, and reliable. Trusted HVAC and refrigeration solutions for homes and businesses in Kenya.",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
        <header className=" bg-red-200 p-4 flex justify-around">
          <Link href="/" className="bg-yellow-200 h-fit p-1">
            <h1 className="font-bold text-2xl">AIR STREAM</h1>
          </Link>

          <div className="">
            <nav className="font-semibold flex flex-col gap-1">
              {navLinks.map((navLink) => (
                <Link key={navLink.to} href={navLink.to}>
                  {navLink.link}
                </Link>
              ))}
            </nav>
            <Button>Catalogue</Button>
          </div>
        </header>
        <main className="flex-1 bg-yellow-100">{children}</main>
        <footer className=" bg-red-200 p-2 text-center">
          <h2 className="font-bold text-xl">Airstream</h2>
          <p className="">&copy; {new Date().getFullYear()} Airstream Cooling Systems Ltd. All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}

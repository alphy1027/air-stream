import type { Metadata } from "next";
import { Afacad, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Button from "@/components/UI-primitives/button";
import { navLinks } from "@/content/navLinks";
import { siteInfo } from "@/content/siteInfo";

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="en" className={`${afacad.variable} ${poppins.variable} antialiased `}>
      <body className="flex flex-col font-primary">
        <header className="p-4 flex justify-between">
          <Link href="/" className="h-fit p-1">
            <h1 className="font-bold text-heading-base">Airstream</h1>
          </Link>

          <div className="flex items-center gap-2">
            <nav className="font-semibold flex gap-2">
              {navLinks.map((navLink) => (
                <Link key={navLink.to} href={navLink.to} className="px-brand-spacing-sm py-brand-spacing-xs">
                  {navLink.link}
                </Link>
              ))}
            </nav>
            <Button>Catalogue</Button>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="p-2 text-center">
          <h2 className="font-bold text-xl">Airstream</h2>
          <p className="">&copy; {new Date().getFullYear()} Airstream Cooling Systems Ltd. All rights reserved</p>
        </footer>
      </body>
    </html>
  );
}

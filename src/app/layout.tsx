import type { Metadata } from "next";
import { Afacad, Poppins } from "next/font/google";
import "./globals.css";
import { siteInfo } from "@/content/siteInfo";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import CallToAction from "@/components/section/CallToAction";
import AppMainHead from "@/components/section/AppMainHead";
import { Toaster } from "react-hot-toast";

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
    <html data-scroll-behavior="smooth" lang="en" className={`${afacad.variable} ${poppins.variable} antialiased `}>
      <body className="flex relative flex-col font-primary gap-y-brand-spacing-2xl">
        <AppMainHead />
        <Header />
        <main className="flex-1 flex flex-col pb-brand-spacing gap-y-brand-spacing-2xl">
          <>{children}</>
          <CallToAction />
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              removeDelay: 1000,
              style: {
                background: "#fff",
                color: "#363636",
                borderRadius: "4px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
              },
            }}
          />
        </main>
        <Footer />
      </body>
    </html>
  );
}

import { Metadata } from "next";
import GetInTouchSection from "./sections/GetInTouchSection";
import LocationSection from "./sections/LocationSection";

export const metadata: Metadata = {
  title: "Contact AirStream | HVAC & Refrigeration Services in Kenya",
  description:
    "Get in touch with AirStream for HVAC and refrigeration installation, repair, maintenance, and spare parts in Kenya. Call or email us today for fast, reliable service.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact AirStream | HVAC & Refrigeration Experts",
    description:
      "Need expert HVAC or refrigeration services? Reach out to AirStream in Kenya for installation, repair, maintenance, and spare parts.",
    url: "/contact-us",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-brand-page-spacing">
      <div className="w-full h-28 bg-neutral"></div>
      <GetInTouchSection />
      <LocationSection />
    </div>
  );
}

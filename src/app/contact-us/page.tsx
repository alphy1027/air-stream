import { Metadata } from "next";

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
  return <div>Contact</div>;
}

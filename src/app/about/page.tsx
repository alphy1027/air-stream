import { Metadata } from "next";
import MainAboutSection from "./sections/MainAboutSection";
import IdentitySection from "./sections/IdentitySection";
import AdvantagesSection from "./sections/AdvantagesSection";
import IndustrySection from "../home/sections/IndustrySection";
import ServicesSection from "../services/sections/ServicesSection";
import TestimonialSection from "../home/sections/TestimonialSection";

export const metadata: Metadata = {
  title: "About AirStream | Trusted HVAC & Refrigeration Experts in Kenya",
  description:
    "Discover AirStream’s story and expertise in HVAC, refrigeration, and ventilation. With years of experience, we deliver installation, repair, maintenance, and genuine spare parts across Kenya.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AirStream | HVAC & Refrigeration Experts in Kenya",
    description:
      "AirStream is Kenya’s trusted provider of HVAC, refrigeration, and spare parts. Learn about our mission, expertise, and commitment to reliable climate solutions.",
    url: "/about",
  },
};

export default function page() {
  return (
    <div className="flex flex-col gap-y-brand-page-spacing">
      <MainAboutSection />
      <IdentitySection />
      <AdvantagesSection />
      <ServicesSection />
      <IndustrySection />
      <TestimonialSection />
    </div>
  );
}

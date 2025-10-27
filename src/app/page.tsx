import { Metadata } from "next";
import GetInTouchSection from "./contact-us/sections/GetInTouchSection";
import IndustrySection from "./home/sections/IndustrySection";
import ServicesSection from "./services/sections/ServicesSection";
import AdvantagesSection from "./about/sections/AdvantagesSection";
import TestimonialSection from "./home/sections/TestimonialSection";
import ProductsSection from "./home/sections/ProductsSection";
import AboutSection from "./home/sections/AboutSection";

export const metadata: Metadata = {
  title: "Airstream Cooling Systems | HVAC & Refrigeration Solutions in Kenya",
  description:
    "Airstream provides expert air conditioning, refrigeration, and ventilation services in Kenya. We specialize in installation, repair, maintenance, and supply of genuine spare parts, delivering reliable HVAC solutions for homes, offices, and commercial spaces.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Airstream HVAC & Refrigeration Experts in Kenya",
    description:
      "From installation and repair to maintenance and genuine spare parts, AirStream keeps your spaces cool, efficient, and reliable. Trusted HVAC and refrigeration solutions for homes and businesses in Kenya.",
    url: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col gap-y-brand-page-spacing">
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <AdvantagesSection />
      <IndustrySection />
      <TestimonialSection />
      <GetInTouchSection />
    </div>
  );
}

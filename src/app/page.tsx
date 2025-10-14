import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airstream HVAC & Refrigeration Solutions in Kenya | Installation, Repair, Maintenance & Spare Parts",
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
    <SectionContainer className="h-[92%] flex flex-col justify-center">
      <div className="flex flex-col gap-y-brand-spacing-sm max-w-[760px]">
        <h1 className="font-secondary text-heading-base md:text-heading-lg text-foreground-heading font-semibold md:font-bold">
          Reliable Air Conditioning, Ventilation & Refrigeration Services in Kenya
        </h1>
        <p className="">
          From installation to maintenance, Air stream delivers reliable air conditioning and refrigeration solutions
          designed for comfort, efficiency, and lasting performance.
        </p>
        <div className="flex flex-wrap gap-4 md:gap-brand-spacing">
          <Button>Get a Quote</Button>
          <Button variant="secondary">Our Services</Button>
        </div>
      </div>
    </SectionContainer>
  );
}

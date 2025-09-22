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
    <div className="">
      <h1 className="">Expert Air Conditioning, Ventilation, and Refrigeration Services in Kenya</h1>
      <p className="">
        Expert installation, repair, and maintenance of air conditioning, ventilation, and refrigeration systems —
        keeping your home and business comfortable all year round.
      </p>
      <div className="flex gap-4">
        <Button>Get a Quote</Button>
        <Button variant="outline">Explore Our Services</Button>
      </div>
    </div>
  );
}

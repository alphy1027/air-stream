import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { products } from "@/content/products";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC and Refrigeration Products | AirStream HVAC & Refrigeration in Kenya",
  description:
    "Explore a wide range of high-quality HVAC, refrigeration, and air conditioning products and spare parts from Airstream Cooling Systems. Supplying reliable, energy-efficient units across Kenya.",
  alternates: {
    canonical: "/products",
  },
  keywords: [
    "HVAC products Kenya",
    "refrigeration units",
    "air conditioning spare parts",
    "HVAC accessories",
    "refrigeration systems Nairobi",
    "cooling equipment Kenya",
    "Airstream Cooling Systems",
  ],
  openGraph: {
    title: "Our Products | AirStream HVAC & Refrigeration in Kenya",
    description:
      "Supplying top-grade HVAC, refrigeration, and air conditioning products and spares designed for performance, efficiency, and reliability.",
    url: "/products",
  },
};

export default function page() {
  return (
    <SectionContainer>
      <SectionTitle className="">Products</SectionTitle>

      <div className="flex gap-brand-spacing flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-y-brand-spacing-sm">
            <div className="w-[190px] h-[280px] bg-neutral rounded-brand-radius" />
            <Text className="pl-1">{product.name}</Text>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

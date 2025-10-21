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
    <SectionContainer className="flex flex-col gap-y-brand-spacing">
      <SectionTitle className="max-w-[555px]">
        Premium HVAC & Refrigeration <span className="text-primary">Units and Spare Parts</span> in Kenya
      </SectionTitle>
      <Text className="max-w-[760px]">
        Explore a wide selection of high-quality air conditioning and refrigeration products — from complete systems to
        genuine spare parts. Air stream supplies reliable, energy-efficient solutions designed to keep your home or
        business running smoothly.
      </Text>
      <div className="flex gap-brand-spacing flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} className="card gap-y-brand-spacing-xs">
            <div className="w-[230px] h-[300px] bg-neutral rounded-brand-radius" />
            <Text className="px-2 text-body-lg font-medium">{product.name}</Text>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

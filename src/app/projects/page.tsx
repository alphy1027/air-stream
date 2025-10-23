import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import { Metadata } from "next";
import Text from "@/components/UI-primitives/text/Text";
import MainProductsSection from "../products/sections/MainProductsSection";

export const metadata: Metadata = {
  title: "Projects | AirStream HVAC & Refrigeration in Kenya",
  description:
    "See AirStream’s completed HVAC and refrigeration projects across Kenya. From offices to commercial spaces, we deliver efficient, reliable climate control solutions.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | AirStream HVAC & Refrigeration in Kenya",
    description:
      "Discover AirStream’s portfolio of HVAC and refrigeration projects across Kenya, showcasing our expertise in installation, repair, and maintenance.",
    url: "/projects",
  },
};

export default function page() {
  return (
    <SectionContainer className="flex flex-col gap-y-brand-spacing-sm">
      <SectionTitle>
        Delivering Comfort & Efficiency – Our <span className="text-primary">Project Portfolio</span>
      </SectionTitle>
      <Text className="max-w-[760px]">
        Discover Air stream’s successful installations across residential, commercial, and industrial spaces in Kenya.
        Each project reflects our commitment to quality workmanship, innovative solutions, and reliable climate control
        systems built to last.
      </Text>
      <MainProductsSection />
    </SectionContainer>
  );
}

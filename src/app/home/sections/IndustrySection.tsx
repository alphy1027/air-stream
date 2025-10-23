import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import IndustryIconsSection from "./IndustryIconsSection";

export default function IndustrySection() {
  return (
    <div className="bg-secondary py-brand-spacing">
      <SectionContainer className="flex flex-col items-center gap-y-brand-spacing">
        <SectionTitle className="text-brand-white">Sectors we cover</SectionTitle>
        <IndustryIconsSection />
      </SectionContainer>
    </div>
  );
}

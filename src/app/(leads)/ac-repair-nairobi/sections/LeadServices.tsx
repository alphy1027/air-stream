import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import LeadServiceCard from "../components/LeadServiceCard";

export default function LeadServices() {
  return (
    <SectionContainer className="flex flex-col gap-brand-spacing-lg">
      <SectionTitle className="mx-auto">Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <LeadServiceCard>AC repair</LeadServiceCard>
        <LeadServiceCard>AC installation</LeadServiceCard>
        <LeadServiceCard>AC maintenance</LeadServiceCard>
        <LeadServiceCard>AC unit sales</LeadServiceCard>
      </div>
    </SectionContainer>
  );
}

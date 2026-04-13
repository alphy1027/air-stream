import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import LeadServiceCard from "../components/LeadServiceCard";

export default function LeadServices() {
  return (
    <SectionContainer className="flex flex-col gap-brand-spacing-lg">
      <SectionTitle className="mx-auto">Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <LeadServiceCard title="AC repair">
          Fast and reliable same-day fixes to get your AC running smoothly again.
        </LeadServiceCard>
        <LeadServiceCard title="AC installation">
          Professional installation for efficient cooling from day one.
        </LeadServiceCard>
        <LeadServiceCard title="AC maintenance">
          Regular servicing to keep your AC efficient and prevent costly breakdowns
        </LeadServiceCard>
        <LeadServiceCard title="AC unit sales">
          Quality air conditioners at competitive prices, ready for your space
        </LeadServiceCard>
      </div>
    </SectionContainer>
  );
}

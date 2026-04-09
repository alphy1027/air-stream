import SectionContainer from "@/components/section/SectionContainer";
import LeadCertifiedIcon from "../icons/LeadCertifiedIcon";
import LeadTrackPointCard from "../components/LeadTrackPointCard";
import LeadFastIcon from "../icons/LeadFastIcon";
import LeadPremiumIcon from "../icons/LeadPremiumIcon";

export default function LeadTrackPoints() {
  return (
    <SectionContainer className="grid lg:gap-brand-spacing-sm grid-cols-1 md:grid-cols-3 divide-foreground-borders divide-y md:divide-y-0 md:divide-x">
      <LeadTrackPointCard icon={LeadCertifiedIcon}>Experienced technicians</LeadTrackPointCard>
      <LeadTrackPointCard icon={LeadFastIcon}>Fast response time</LeadTrackPointCard>
      <LeadTrackPointCard icon={LeadPremiumIcon}>Reliable & professional service</LeadTrackPointCard>
    </SectionContainer>
  );
}

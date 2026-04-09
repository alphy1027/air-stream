import SectionContainer from "@/components/section/SectionContainer";
import CallButton from "@/components/UI-primitives/button/CallButton";
import Badge from "@/components/UI-primitives/text/Badge";
import { contact } from "@/content/contact";

export default function LeadHeader() {
  return (
    <header className="absolute top-0 left-0 right-0">
      <SectionContainer className="flex justify-between items-center">
        <Badge />
        <CallButton
          className="bg-primary py-brand-spacing-xs sm:py-brand-spacing-sm px-brand-spacing-xs sm:px-brand-spacing stroke-brand-white text-brand-white"
          phone={contact.info.phone1}
        />
      </SectionContainer>
    </header>
  );
}

import SectionContainer from "@/components/section/SectionContainer";
import Badge from "@/components/UI-primitives/text/Badge";

export default function LeadHeader() {
  return (
    <header className="absolute top-0 left-0 right-0">
      <SectionContainer className="flex justify-between items-center">
        <Badge />
        {/* <CallButton
          className="bg-primary py-brand-spacing-sm sm:py-brand-spacing-sm px-brand-spacing-sm sm:px-brand-spacing stroke-brand-white text-brand-white"
          phone={contact.info.phone1}
        /> */}
      </SectionContainer>
    </header>
  );
}

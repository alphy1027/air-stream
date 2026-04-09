import SectionContainer from "@/components/section/SectionContainer";
import CallButton from "@/components/UI-primitives/button/CallButton";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import { contact } from "@/content/contact";

export default function LeadActionCall() {
  return (
    <SectionContainer className="flex flex-col gap-brand-spacing justify-center items-center">
      <SectionTitle className="max-w-125 text-center">Call now for fast services or to get a quote</SectionTitle>
      <CallButton className="bg-primary text-brand-white stroke-brand-white" phone={contact.info.phone1} />
    </SectionContainer>
  );
}

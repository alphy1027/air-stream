import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";

export default function LeadActionCall() {
  return (
    <SectionContainer>
      <SectionTitle>Call now for fast services or to get a quote</SectionTitle>
      <a
        href="none"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-brand-spacing-sm rounded-brand-radius border border-foreground-borders py-brand-spacing-sm lg:py-brand-spacing lg:px-brand-spacing-lg px-brand-spacing hover:scale-105 duration-200 transition ease-in group hover:bg-accent hover:border-none active:bg-accent active:border-none"
      ></a>
    </SectionContainer>
  );
}

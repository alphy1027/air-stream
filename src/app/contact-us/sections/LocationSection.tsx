import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";

export default function LocationSection() {
  return (
    <SectionContainer className="flex flex-col gap-y-brand-spacing">
      <div className="flex gap-y-brand-spacing-xs flex-wrap justify-between items-center">
        <SectionTitle>Our Location</SectionTitle>
        <div className="flex items-center gap-4">
          <Button className="p-brand-spacing-xs rounded-full">E</Button>
          <Button variant="secondary" className="p-brand-spacing-xs rounded-full">
            L
          </Button>
          <Button variant="accent" className="p-brand-spacing-xs rounded-full">
            P
          </Button>
        </div>
      </div>
      <div className="w-full rounded-brand-radius h-[260px] md:h-[320px] xl:h-[350px] bg-neutral"></div>
    </SectionContainer>
  );
}

import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import QuoteIcon from "../icons/QuoteIcon";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function TestimonialSection() {
  return (
    <div className="bg-neutral py-brand-spacing">
      <SectionContainer className="flex flex-col items-center lg:flex-row lg:justify-around gap-brand-spacing lg:gap-0">
        <div className="flex flex-col self-start gap-y-brand-spacing-sm w-fit">
          <SectionTitle>
            Our <span className="text-primary">clients speak</span>
            <br /> for us
          </SectionTitle>
          <QuoteIcon />
        </div>
        <div className="">
          <TestimonialCarousel />
        </div>
      </SectionContainer>
    </div>
  );
}

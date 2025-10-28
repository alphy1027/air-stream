import SectionContainer from "@/components/section/SectionContainer";
import Image from "next/image";
import HeroContent from "../components/HeroContent";
import BrandSection from "./BrandSection";
import Button from "@/components/UI-primitives/button";
import ArrowDown from "../icons/ArrowDown";

export default function HeroSection() {
  return (
    <section className="">
      <div className="relative min-h-[85vh] md:min-h-[85vh] lg:min-h-[90vh] bg-secondary -z-30 flex flex-col justify-center">
        <Image
          src="/images/hero.png"
          alt="HVAC systems"
          fill
          priority
          className="object-cover object-center hero-img -z-10"
        />
        <SectionContainer className="flex flex-col py-0 justify-center translate-y-1/2">
          <HeroContent />
        </SectionContainer>
        <Button
          variant="transparent"
          rightIcon={<ArrowDown />}
          className="animate animate-bounce absolute left-1/2 -translate-x-1/2 bottom-0"
        />
      </div>
      <BrandSection />
    </section>
  );
}

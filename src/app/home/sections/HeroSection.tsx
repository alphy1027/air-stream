import SectionContainer from "@/components/section/SectionContainer";
import Image from "next/image";
import HeroContent from "../components/HeroContent";
import BrandSection from "./BrandSection";
import ScrollButton from "@/components/UI-primitives/button/ScrollButton";

export default function HeroSection() {
  return (
    <section className="">
      <div className="relative min-h-[94vh] md:min-h-[90vh] gap-brand-spacing-lg lg:min-h-[90vh] bg-secondary flex flex-col items-end">
        <Image
          src="/images/airstream-hero.jpg"
          alt="Airstream HVAC systems"
          fill
          priority
          className="object-fill object-center hero-img"
        />
        <div className="flex-1"></div>
        <SectionContainer className="flex flex-col py-0 justify-center  z-40 ">
          <HeroContent />
        </SectionContainer>
        <ScrollButton />
      </div>
      <BrandSection />
    </section>
  );
}

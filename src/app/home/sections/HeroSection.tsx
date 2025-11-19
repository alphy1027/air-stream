import SectionContainer from "@/components/section/SectionContainer";
import Image from "next/image";
import HeroContent from "../components/HeroContent";
import BrandSection from "./BrandSection";
import ScrollButton from "@/components/UI-primitives/button/ScrollButton";

export default function HeroSection() {
  return (
    <section className="">
      <div className="relative min-h-[85vh] md:min-h-[85vh] lg:min-h-[90vh] bg-secondary flex flex-col justify-center">
        <Image
          src="/images/airstream-hero.jpg"
          alt="HVAC systems"
          fill
          priority
          className="object-fill object-center hero-img"
        />
        <SectionContainer className="flex flex-col py-0 justify-center translate-y-1/2">
          <HeroContent />
        </SectionContainer>
        <ScrollButton />
      </div>
      <BrandSection />
    </section>
  );
}

import LocationDetails from "./LocationDetails";
import SectionContainer from "./SectionContainer";
import Image from "next/image";

export default function PageHead() {
  return (
    <div className="relative min-h-[25vh] md:min-h-[30vh] lg:min-h-[40vh] bg-secondary flex flex-col justify-end">
      <Image src="/images/hero.png" alt="HVAC systems" fill priority className="object-cover object-center hero-img " />
      <SectionContainer className="flex flex-col py-0 justify-center translate-y-3/4">
        <LocationDetails />
      </SectionContainer>
    </div>
  );
}

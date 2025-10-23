import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import MainServicesSection from "./sections/MainServicesSection";

export default function ServicesRootPage() {
  return (
    <SectionContainer className="flex flex-col gap-y-brand-spacing">
      <SectionTitle>
        Reliable <span className="text-primary">HVAC Solutions</span> for Homes & Businesses in Kenya
      </SectionTitle>
      <Text className="max-w-[760px]">
        At Air stream, we provide comprehensive HVAC and refrigeration solutions tailored to homes, businesses, and
        industries across Kenya. From system design and installation to preventive maintenance and emergency repairs,
        our expert team ensures reliable comfort and efficiency all year round.
      </Text>
      <MainServicesSection />
    </SectionContainer>
  );
}

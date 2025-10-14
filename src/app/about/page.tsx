import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { about } from "@/content/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About AirStream | Trusted HVAC & Refrigeration Experts in Kenya",
  description:
    "Discover AirStream’s story and expertise in HVAC, refrigeration, and ventilation. With years of experience, we deliver installation, repair, maintenance, and genuine spare parts across Kenya.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About AirStream | HVAC & Refrigeration Experts in Kenya",
    description:
      "AirStream is Kenya’s trusted provider of HVAC, refrigeration, and spare parts. Learn about our mission, expertise, and commitment to reliable climate solutions.",
    url: "/about",
  },
};

export default function page() {
  return (
    <SectionContainer>
      <SectionTitle>ABOUT US</SectionTitle>
      <Text>{about.intro}</Text>
      <SectionTitle>Air stream cooling systems</SectionTitle>
      <Text>{about.description}</Text>
      <SectionTitle>Custom Service</SectionTitle>
      <Text>{about.section.customerService}</Text>
      <SectionTitle>Business Aim</SectionTitle>
      <Text>{about.section.businessAim}</Text>
      <SectionTitle>Experience</SectionTitle>
      <Text>{about.section.experience}</Text>
      <SectionTitle>Why choose us</SectionTitle>
      <div>
        {about.advantages.map((item) => (
          <div key={item.id} className="pb-brand-spacing">
            <h3 className="font-semibold text-body-lg">{item.title}</h3>
            <Text>{item.description}</Text>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import React from "react";
import AirstreamCard from "../components/AirstreamCard";
import Text from "@/components/UI-primitives/text/Text";
import { about } from "@/content/about";

export default function MainAboutSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-brand-spacing-sm">
        <div className="w-full h-[350px] bg-neutral rounded-brand-radius" />
        <SectionTitle className="sm:w-1/2">
          We are <span className="text-primary">Airstream</span> Cooling Systems
        </SectionTitle>
        <Text>{about.description}</Text>
        <div className="p-brand-spacing-sm flex justify-center flex-wrap gap-brand-spacing-sm md:p-brand-spacing">
          <AirstreamCard title="Customer Service">{about.section.customerService}</AirstreamCard>
          <AirstreamCard title="Business Aim">{about.section.businessAim}</AirstreamCard>
          <AirstreamCard title="Experience">{about.section.experience}</AirstreamCard>
        </div>
      </div>
    </SectionContainer>
  );
}

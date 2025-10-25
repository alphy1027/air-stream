import React from "react";
import ValuesCards from "./ValuesCards";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import SectionContainer from "@/components/section/SectionContainer";
import Text from "@/components/UI-primitives/text/Text";

export default function IdentitySection() {
  return (
    <SectionContainer>
      <div className="lg:flex-row flex flex-col xl:gap-x-brand-spacing-xl gap-y-brand-spacing lg:items-start items-center lg:justify-between">
        <div className="max-w-[560px] page-container">
          <SectionTitle>
            Our <span className="text-primary">Mission</span>, <span className="text-primary">Vision</span> & Core{" "}
            <span className="text-primary">Values</span>
          </SectionTitle>
          <Text>
            At Airstream Cooling Systems, our mission, vision, and core values define who we are and guide every project
            we undertake. They reflect our dedication to excellence, innovation, and lasting client satisfaction in
            every service we deliver.
          </Text>
        </div>
        <ValuesCards />
      </div>
    </SectionContainer>
  );
}

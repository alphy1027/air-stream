import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import { industry } from "@/content/industry";

export default function IndustrySection() {
  return (
    <div className="bg-secondary py-brand-spacing">
      <SectionContainer className="flex flex-col items-center gap-y-brand-spacing">
        <SectionTitle className="text-brand-white">Sectors we cover</SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-brand-spacing">
          {industry.map(({ icon: Icon, sector }, index) => (
            <div
              key={index}
              className="rounded-brand-radius flex flex-col items-center justify-center p-brand-spacing-lg gap-y-brand-spacing-sm bg-[#282E56] w-[245px] h-[350px]"
            >
              <Icon />
              <h5 className="text-brand-white text-center">{sector}</h5>
            </div>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

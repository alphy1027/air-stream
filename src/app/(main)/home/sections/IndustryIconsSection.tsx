import { industry } from "@/content/industry";

export default function IndustryIconsSection() {
  return (
    <div className="flex flex-wrap justify-center items-center max-w-[1000px] gap-brand-spacing-sm md:gap-brand-spacing">
      {industry.map(({ icon: Icon, sector }, index) => (
        <div
          key={index}
          className="rounded-brand-radius flex flex-col items-center justify-center p-brand-spacing-lg gap-y-brand-spacing-sm bg-[#282E56] w-[180px] h-[280px] md:w-[215px] md:h-[320px]"
        >
          <Icon />
          <h6 className="text-brand-white text-center">{sector}</h6>
        </div>
      ))}
    </div>
  );
}

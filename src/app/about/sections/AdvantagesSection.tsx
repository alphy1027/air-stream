import DisplayCard from "@/components/cards/DisplayCard";
import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { about } from "@/content/about";

export default function AdvantagesSection() {
  return (
    <div className="bg-neutral py-brand-spacing">
      <SectionContainer className="flex justify-center items-center">
        <div className="flex-wrap justify-center flex gap-brand-spacing md:w-[700px] xl:w-full">
          <div className="display-card gap-y-brand-spacing p-0">
            <SectionTitle>
              Advantages of <br />
              <span className="text-primary">choosing us</span>
            </SectionTitle>
            <Text className="">
              With years of hands-on experience and a dedicated technical team, Air stream delivers reliable HVAC and
              refrigeration solutions designed around your needs — on time and on budget.
            </Text>
          </div>
          {about.advantages.map((item) => (
            <DisplayCard icon={item.icon} title={item.title} key={item.id} className="bg-background">
              {item.description}
            </DisplayCard>
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}

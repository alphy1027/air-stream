import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { about } from "@/content/about";
import ArrowRightIcon from "../icons/ArrowRightIcon";

export default function AboutSection() {
  return (
    <SectionContainer className="flex flex-col gap-brand-spacing-lg lg:flex-row lg:gap-x-brand-spacing-2xl justify-center items-center">
      <div className="bg-neutral w-full max-w-[600px] lg:w-[350px] h-[350px] lg:h-[500px] rounded-brand-radius" />
      <div className="card max-w-[450px] lg:max-w-[350px]">
        <SectionTitle>
          Know<span className="text-primary"> about</span> our <br />
          company
        </SectionTitle>
        <Text>{about.intro}</Text>
        <Button variant="transparent" rightIcon={<ArrowRightIcon />} className="self-end">
          Learn more
        </Button>
      </div>
    </SectionContainer>
  );
}

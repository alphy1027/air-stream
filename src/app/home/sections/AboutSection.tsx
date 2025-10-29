import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { about } from "@/content/about";
import LinkButton from "@/components/UI-primitives/button/LinkButton";

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
        <LinkButton noIcon variant="primary" href="/about" className="self-end">
          Learn more
        </LinkButton>
      </div>
    </SectionContainer>
  );
}

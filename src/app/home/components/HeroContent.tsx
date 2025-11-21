import RequestServiceDialog from "@/components/dialog/RequestServiceDialog";
import LinkButton from "@/components/UI-primitives/button/LinkButton";
import Text from "@/components/UI-primitives/text/Text";

export default function HeroContent() {
  return (
    <div className="card max-w-[760px]">
      <h1 className="font-secondary text-brand-white font-bold">
        Reliable Air Conditioning, Ventilation & Refrigeration Services in Kenya
      </h1>
      <Text className="text-neutral">
        From installation to maintenance, Air stream delivers reliable air conditioning and refrigeration solutions
        designed for comfort, efficiency, and lasting performance.
      </Text>
      <div className="flex flex-wrap gap-brand-spacing-xs md:gap-brand-spacing-lg lg:gap-brand-spacing-x justify-center md:justify-start">
        <RequestServiceDialog />
        <LinkButton href="/services" noIcon className="text-brand-white">
          Our Services
        </LinkButton>
      </div>
    </div>
  );
}

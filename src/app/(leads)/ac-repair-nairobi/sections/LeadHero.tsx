import SectionContainer from "@/components/section/SectionContainer";

export default function LeadHero() {
  return (
    <div className="min-h-[65vh] md:min-h-[70vh] flex flex-col items-center justify-center from-neutral to-background bg-linear-to-t">
      <SectionContainer className="translate-y-1/3">
        <div className="flex flex-col gap-brand-spacing-xs max-w-190">
          <h1 className="text-foreground-heading">
            Air Conditioning Repair & Installation in Nairobi -
            <span className="text-primary">Fast & Reliable Services</span>
          </h1>
          <p className="max-w-130">
            Get same-day AC repair, installation, or purchase quality air conditioning units. Call Now for quick service
          </p>
        </div>
      </SectionContainer>
    </div>
  );
}

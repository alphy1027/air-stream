import LeadActionCall from "./sections/LeadActionCall";
import LeadHero from "./sections/LeadHero";
import LeadServices from "./sections/LeadServices";
import LeadTrackPoints from "./sections/LeadTrackPoints";
import TestimonialSection from "@/app/(main)/home/sections/TestimonialSection";

export default function page() {
  return (
    <div className="flex flex-col gap-y-12">
      <LeadHero />
      <LeadTrackPoints />
      <LeadServices />
      <TestimonialSection />
      <LeadActionCall />
    </div>
  );
}

import CallButton from "@/components/UI-primitives/button/CallButton";
import LeadActionCall from "./sections/LeadActionCall";
import LeadHero from "./sections/LeadHero";
import LeadServices from "./sections/LeadServices";
import LeadTrackPoints from "./sections/LeadTrackPoints";
import TestimonialSection from "@/app/(main)/home/sections/TestimonialSection";
import { contact } from "@/content/contact";

export default function page() {
  return (
    <div className="flex flex-col gap-y-6">
      <LeadHero />
      <LeadTrackPoints />
      <LeadServices />
      <CallButton
        className="bg-primary text-brand-white my-2 stroke-brand-white w-fit mx-auto"
        phone={contact.info.phone1}
      />
      <TestimonialSection />
      <LeadActionCall />
    </div>
  );
}

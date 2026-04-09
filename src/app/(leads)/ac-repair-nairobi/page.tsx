import LeadActionCall from "./sections/LeadActionCall";
import LeadHero from "./sections/LeadHero";
import LeadServices from "./sections/LeadServices";
import LeadTrackPoints from "./sections/LeadTrackPoints";

export default function page() {
  return (
    <div className="flex flex-col gap-y-12">
      <LeadHero />
      <LeadTrackPoints />
      <LeadServices />
      <LeadActionCall />
    </div>
  );
}

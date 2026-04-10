import SectionContainer from "@/components/section/SectionContainer";
import { contact } from "@/content/contact";
import LeadPhoneIcon from "../components/LeadPhoneIcon";

export default function LeadHero() {
  return (
    <div className="min-h-[65vh] md:min-h-[70vh] flex flex-col items-center justify-center from-neutral to-background bg-linear-to-t">
      <SectionContainer className="translate-y-1/4">
        <div className="flex flex-col gap-brand-spacing-xs max-w-190">
          <h1 className="text-foreground-heading">
            Air Conditioning Repair & Installation in Nairobi -
            <span className="text-primary">Get same-day services</span>
          </h1>
          <p className="max-w-130">
            Get same-day AC repair, installation, or purchase quality air conditioning units. Call Now for quick service
          </p>
          <a
            href={`tel:${contact.info.phone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 mt-2 duration-300 ease-in font-semibold flex items-center gap-2 stroke-primary py-1 w-fit border-b border-secondary"
          >
            Call Now For Immediate AC Repair
            <LeadPhoneIcon />
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}

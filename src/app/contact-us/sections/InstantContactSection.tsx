import SectionContainer from "@/components/section/SectionContainer";
import InstantContact from "../components/InstantContact";
import { Mail, Phone } from "lucide-react";
import { contact } from "@/content/contact";
import WhatsappIcon from "../icons/WhatsappIcon";

export default function InstantContactSection() {
  return (
    <SectionContainer className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-brand-spacing-sm md:gap-brand-spacing max-w-[400px] sm:max-w-full">
      <InstantContact href={`tel:${contact.info.phone1}`} title="Call Us" icon={<Phone />} body={contact.info.phone1} />
      <InstantContact href={`tel:${contact.info.phone2}`} title="Call Us" icon={<Phone />} body={contact.info.phone2} />
      <InstantContact
        href={`mailto:${contact.info.email}`}
        title="Email Us"
        icon={<Mail />}
        body={contact.info.email}
      />
      <InstantContact
        href={`https://wa.me/${contact.info.phone1}`}
        title="Whatsapp Us"
        icon={<WhatsappIcon />}
        body={contact.info.phone1}
      />
    </SectionContainer>
  );
}

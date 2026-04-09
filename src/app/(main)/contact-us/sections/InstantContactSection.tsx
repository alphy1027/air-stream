import SectionContainer from "@/components/section/SectionContainer";
import InstantContact from "../components/InstantContact";
import { Mail, Phone } from "lucide-react";
import { contact } from "@/content/contact";
import WhatsappIcon from "../icons/WhatsappIcon";

export default function InstantContactSection() {
  return (
    <SectionContainer className="grid grid-cols-1 md:grid-cols-2 gap-brand-spacing-sm sm:gap-brand-spacing max-w-[400px] md:max-w-full content-end lg:max-w-[1000px]">
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

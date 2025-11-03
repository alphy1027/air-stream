import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import ContactInfo from "../components/ContactInfo";
import PhoneIcon from "../icons/PhoneIcon";
import ClockIcon from "../icons/ClockIcon";
import EmailIcon from "../icons/EmailIcon";
import LocationIcon from "../icons/LocationIcon";
import { contact } from "@/content/contact";
import ContactForm from "../components/ContactForm";

export default function GetInTouchSection() {
  return (
    <div className="bg-secondary py-brand-spacing">
      <SectionContainer className="grid lg:grid-cols-2 lg:grid-rows-1 gap-x-brand-spacing-2xl content-between justify-center gap-y-brand-spacing-lg">
        <div className="card max-w-[520px]">
          <SectionTitle className="text-brand-white">Get in touch with us</SectionTitle>
          <Text className="text-neutral">
            Whether you need expert advice, genuine spares and units, system installation, or reliable maintenance, our
            team is ready to assist. Reach out today and let’s create efficient, lasting climate solutions for your
            space.
          </Text>
          <div className="grid grid-cols-1 pt-2 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-3 md:gap-0">
            <ContactInfo icon={<PhoneIcon />}>{contact.info.phone1}</ContactInfo>
            <ContactInfo icon={<EmailIcon />}>{contact.info.email}</ContactInfo>
            <ContactInfo icon={<ClockIcon />}>{contact.operationTime}</ContactInfo>
            <ContactInfo icon={<LocationIcon />}>
              {contact.location.street}, {contact.location.city}
            </ContactInfo>
          </div>
        </div>
        <div>
          <div className="card max-w-[520px] w-full gap-y-brand-spacing-sm">
            <h4 className="text-brand-white">Send Us a Message</h4>
            <Text className="text-neutral">Send us a message and we will get back to you as soon as possible</Text>
            <ContactForm />
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

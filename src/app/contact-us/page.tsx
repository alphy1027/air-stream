import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { Metadata } from "next";
import ContactInfo from "./components/ContactInfo";
import { contact } from "@/content/contact";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";
import ClockIcon from "./icons/ClockIcon";
import LocationIcon from "./icons/LocationIcon";
import Input from "@/components/UI-primitives/input/Input";
import TextArea from "@/components/UI-primitives/input/TextArea";
import Button from "@/components/UI-primitives/button";

export const metadata: Metadata = {
  title: "Contact AirStream | HVAC & Refrigeration Services in Kenya",
  description:
    "Get in touch with AirStream for HVAC and refrigeration installation, repair, maintenance, and spare parts in Kenya. Call or email us today for fast, reliable service.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact AirStream | HVAC & Refrigeration Experts",
    description:
      "Need expert HVAC or refrigeration services? Reach out to AirStream in Kenya for installation, repair, maintenance, and spare parts.",
    url: "/contact-us",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-y-brand-spacing-2xl">
      <div className="w-full h-28 bg-neutral"></div>
      <div className="bg-secondary py-brand-spacing">
        <SectionContainer className="grid lg:grid-cols-2 lg:grid-rows-1 gap-x-brand-spacing-2xl content-between justify-center gap-y-brand-spacing-lg">
          <div className="card max-w-[520px]">
            <SectionTitle className="text-brand-white">Get in touch with us</SectionTitle>
            <Text className="text-neutral">
              Whether you need expert advice, genuine spares and units, system installation, or reliable maintenance,
              our team is ready to assist. Reach out today and let’s create efficient, lasting climate solutions for
              your space.
            </Text>
            <div className="grid grid-cols-1 pt-2 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-y-3 gap-x-brand-spacing-xs">
              <ContactInfo icon={<PhoneIcon />}>{contact.info.phone1}</ContactInfo>
              <ContactInfo icon={<EmailIcon />}>{contact.info.email}</ContactInfo>
              <ContactInfo icon={<ClockIcon />}>{contact.operationTime}</ContactInfo>
              <ContactInfo icon={<LocationIcon />}>
                {contact.location.street}, {contact.location.city}
              </ContactInfo>
            </div>
          </div>
          <div>
            <div className="card max-w-[520px] w-full gap-y-brand-spacing-xs">
              <h4 className="text-brand-white">Send Us a Message</h4>
              <Text className="text-neutral">Send us a message and we will get back to you as soon as possible</Text>
              <form className="card gap-y-brand-spacing-xs">
                <Input
                  id="fullName"
                  label="Full Name"
                  type="text"
                  placeholder="Full Name"
                  name="fullName"
                  required
                  minLength={3}
                />
                <Input id="email" label="Email" type="email" placeholder="Email" name="email" required minLength={3} />
                <TextArea
                  rows={4}
                  id="message"
                  label="Message"
                  placeholder="Message"
                  name="message"
                  required
                  minLength={3}
                />
                <Button type="submit" variant="accent" className="self-end mt-4">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </SectionContainer>
      </div>
      <SectionContainer className="flex flex-col gap-y-brand-spacing">
        <div className="flex gap-y-brand-spacing-xs flex-wrap justify-between items-center">
          <SectionTitle>Our Location</SectionTitle>
          <div className="flex items-center gap-4">
            <Button className="p-brand-spacing-xs rounded-full">E</Button>
            <Button variant="secondary" className="p-brand-spacing-xs rounded-full">
              L
            </Button>
            <Button variant="accent" className="p-brand-spacing-xs rounded-full">
              P
            </Button>
          </div>
        </div>
        <div className="w-full rounded-brand-radius h-[260px] md:h-[320px] xl:h-[350px] bg-neutral"></div>
      </SectionContainer>
    </div>
  );
}

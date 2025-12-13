import { contact } from "@/content/contact";
import Text from "../UI-primitives/text/Text";
import SectionContainer from "./SectionContainer";
import CtaPhoneIcon from "./icons/CtaPhoneIcon";

const CallToAction = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col bg-primary items-end gap-y-brand-spacing-sm p-brand-spacing justify-between md:py-brand-spacing md:px-brand-spacing-2xl lg:flex-row lg:py-brand-spacing-lg lg:px-32 xl:px-48 rounded-brand-radius">
        <div className="flex flex-col gap-y-brand-spacing-sm w-full">
          <h3 className="text-brand-white">Call Us Now!</h3>
          <Text className="max-w-[360px] text-neutral">
            Need expert HVAC support? Let’s get your system running perfectly
          </Text>
        </div>
        <div className="w-full h-full flex justify-end">
          <a
            href={`tel:${contact.info.phone1}`}
            target="_blank"
            rel="noopener noreferrer"
            className="py-brand-spacing-sm text-foreground-accent-btn bg-accent text-center px-brand-spacing-lg flex items-center justify-center gap-brand-spacing-xs rounded-brand-radius hover:scale-105 active:scale-95 transition ease-in duration-200 font-semibold "
          >
            <CtaPhoneIcon />
            {contact.info.phone1}
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CallToAction;

import { contact } from "@/content/contact";
import Button from "../UI-primitives/button";
import Text from "../UI-primitives/text/Text";
import SectionContainer from "./SectionContainer";
import CtaPhoneIcon from "./icons/CtaPhoneIcon";

const CallToAction = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col bg-primary items-end gap-y-brand-spacing p-brand-spacing justify-between md:py-brand-spacing md:px-brand-spacing-2xl lg:flex-row lg:py-brand-spacing-lg lg:px-32 xl:px-48 rounded-brand-radius">
        <div className="flex flex-col gap-y-brand-spacing-sm w-full">
          <h3 className="text-brand-white">Call Us Now!</h3>
          <Text className="max-w-[360px] text-neutral">
            Need expert HVAC support? Let’s get your system running perfectly
          </Text>
        </div>
        <div className="w-full h-full flex justify-end">
          <Button variant="accent" leftIcon={<CtaPhoneIcon />}>
            {contact.info.phone1}
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default CallToAction;

import { contact } from "@/content/contact";
import Button from "../UI-primitives/button";
import Text from "../UI-primitives/text/Text";
import SectionContainer from "./SectionContainer";
import CtaPhoneIcon from "./icons/CtaPhoneIcon";

const CallToAction = () => {
  return (
    <SectionContainer>
      <div className="flex flex-wrap bg-neutral items-end gap-y-brand-spacing p-brand-spacing-sm justify-between md:p-brand-spacing xl:py-brand-spacing-xl px-24 rounded-brand-radius">
        <div className="flex flex-col gap-y-brand-spacing-sm  max-w-[360px]">
          <h3 className="">Call Us Now!</h3>
          <Text>Need expert HVAC support? Let’s get your system running perfectly</Text>
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

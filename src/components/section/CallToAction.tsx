import { contact } from "@/content/contact";
import Text from "../UI-primitives/text/Text";
import SectionContainer from "./SectionContainer";
import CallButton from "../UI-primitives/button/CallButton";

const CallToAction = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col bg-primary items-end gap-y-brand-spacing-sm p-brand-spacing justify-between md:py-brand-spacing md:px-brand-spacing-2xl lg:flex-row lg:py-brand-spacing-lg lg:px-32 xl:px-48 rounded-brand-radius">
        <div className="flex flex-col gap-y-brand-spacing-sm w-full">
          <h3 className="text-brand-white">Call Us Now!</h3>
          <Text className="max-w-90 text-neutral">
            Need expert HVAC support? Let’s get your system running perfectly
          </Text>
        </div>
        <div className="w-full h-full flex justify-end">
          <CallButton phone={contact.info.phone1} />
        </div>
      </div>
    </SectionContainer>
  );
};

export default CallToAction;

import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import BrandCard from "../components/BrandCard";
import LgIcon from "../icons/brand-section/LgIcon";
import ToshibaIcon from "../icons/brand-section/ToshibaIcon";
import SumsangIcon from "../icons/brand-section/SumsangIcon";
import MitsubishiIcon from "../icons/brand-section/MitsubishiIcon";
import CarrierIcon from "../icons/brand-section/CarrierIcon";
import DaikinIcon from "../icons/brand-section/DaikinIcon";

export default function BrandSection() {
  return (
    <div id="brand" className="bg-secondary py-brand-spacing">
      <SectionContainer className="page-container items-center">
        <SectionTitle className="text-brand-white text-center">
          We work with top <br />
          brands
        </SectionTitle>
        <div className="flex flex-wrap gap-brand-spacing items-center justify-center max-w-[600px] xl:max-w-none">
          <BrandCard icon={LgIcon} />
          <BrandCard icon={MitsubishiIcon} />
          <BrandCard icon={ToshibaIcon} />
          <BrandCard icon={DaikinIcon} />
          <BrandCard icon={CarrierIcon} />
          <BrandCard icon={SumsangIcon} />
        </div>
      </SectionContainer>
    </div>
  );
}

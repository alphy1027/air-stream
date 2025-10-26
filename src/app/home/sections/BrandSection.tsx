import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import BrandCard from "../components/BrandCard";
import LgIcon from "../icons/brand-section/LgIcon";
import PanasonicIcon from "../icons/brand-section/PanasonicIcon";
import ToshibaIcon from "../icons/brand-section/ToshibaIcon";
import SumsangIcon from "../icons/brand-section/SumsangIcon";
import FujitsuIcon from "../icons/brand-section/FujitsuIcon";
import BoschIcon from "../icons/brand-section/BoschIcon";

export default function BrandSection() {
  return (
    <div className="bg-secondary py-brand-spacing">
      <SectionContainer className="page-container items-center">
        <SectionTitle className="text-brand-white text-center">
          We work with top <br />
          brands
        </SectionTitle>
        <div className="flex flex-wrap gap-brand-spacing items-center justify-center max-w-[600px] xl:max-w-none">
          <BrandCard icon={LgIcon} />
          <BrandCard icon={PanasonicIcon} />
          <BrandCard icon={ToshibaIcon} />
          <BrandCard icon={BoschIcon} />
          <BrandCard icon={FujitsuIcon} />
          <BrandCard icon={SumsangIcon} />
        </div>
      </SectionContainer>
    </div>
  );
}

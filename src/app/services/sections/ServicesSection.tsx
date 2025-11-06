import DisplayCard from "@/components/cards/DisplayCard";
import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { services } from "@/content/services";

import AirConIcon from "@/app/services/icons/AirConIcon";
import FridgeIcon from "@/app/services/icons/FridgeIcon";
import KitchenIcon from "@/app/services/icons/KitchenIcon";
import RepairIcon from "@/app/services/icons/RepairIcon";
import VentIcon from "@/app/services/icons/VentIcon";
import React from "react";
import ViewServiceButton from "../components/ViewServiceButton";

type IconKey = "airCon" | "fridge" | "kitchen" | "repair" | "vent";

const icons: Record<IconKey, React.FC> = {
  airCon: AirConIcon,
  fridge: FridgeIcon,
  kitchen: KitchenIcon,
  repair: RepairIcon,
  vent: VentIcon,
};

export default function ServicesSection() {
  return (
    <SectionContainer className="page-container items-center">
      <SectionTitle>
        <span className="text-primary">Services</span> we provide
      </SectionTitle>

      <div className="flex flex-wrap gap-brand-spacing max-w-[900px] justify-center content-start">
        {services.map((service) => {
          const icon = icons[service.icon as keyof typeof icons];
          return (
            <DisplayCard key={service.link} icon={icon} title={service.title} className="bg-neutral">
              {service.intro}
            </DisplayCard>
          );
        })}
        <div className="display-card bg-primary">
          <h4 className="text-brand-white">View All Services</h4>
          <Text className="text-neutral opacity-70 font-light">
            At Air stream Cooling Systems, we specialize in complete air-conditioning, ventilation, and refrigeration
            solutions — from supply to installation to maintenance and repairs — ensuring comfort and performance for
            every space.
          </Text>
          <ViewServiceButton />
        </div>
      </div>
    </SectionContainer>
  );
}

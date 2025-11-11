import DisplayCard from "@/components/cards/DisplayCard";
import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import { services } from "@/content/services";
import AirConIcon from "@/app/services/icons/AirConIcon";
import FridgeIcon from "@/app/services/icons/FridgeIcon";
import KitchenIcon from "@/app/services/icons/KitchenIcon";
import RepairIcon from "@/app/services/icons/RepairIcon";
import VentIcon from "@/app/services/icons/VentIcon";
import React from "react";
import MoreServicesCard from "../components/MoreServicesCard";

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
            <DisplayCard
              key={service.link}
              icon={icon}
              href={`/services/${service.link}`}
              title={service.title}
              className="bg-neutral justify-between"
            >
              {service.intro}
            </DisplayCard>
          );
        })}
        <MoreServicesCard />
      </div>
    </SectionContainer>
  );
}

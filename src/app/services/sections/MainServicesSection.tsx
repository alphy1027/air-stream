import React from "react";
import ServiceMainCard from "../components/ServiceMainCard";
import { services } from "@/content/services";

export default function MainServicesSection() {
  return (
    <div className="flex flex-col lg:divide-none p-brand-spacing-sm divide-y divide-foreground-borders gap-y-brand-spacing items-center">
      {services.map((service, id) => (
        <ServiceMainCard key={id} service={service} index={id} />
      ))}
    </div>
  );
}

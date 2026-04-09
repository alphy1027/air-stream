import { services } from "@/content/services";
import ServiceDetails from "./ServiceDetails";
import Image from "next/image";

export default function ServiceMainCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "lg:flex-row-reverse" : ""
      } flex-col lg:flex-row lg:gap-brand-spacing-2xl gap-brand-spacing-xs`}
    >
      <div className="relative lg:w-[400px] lg:h-[530px] max-w-[415px] h-[415px]">
        <Image
          src={`/images/${service.thumbnail}`}
          alt="Airstream HVAC services across Kenya"
          fill
          sizes="(min-width: 1024px) 400px, 415px"
          className="object-cover rounded-brand-radius"
        />
      </div>
      <ServiceDetails service={service} />
    </div>
  );
}

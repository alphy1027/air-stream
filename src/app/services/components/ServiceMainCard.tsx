import { services } from "@/content/services";
import ServiceDetails from "./ServiceDetails";

export default function ServiceMainCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <div
      className={`flex ${
        index % 2 === 0 ? "lg:flex-row-reverse" : ""
      } flex-col lg:flex-row lg:gap-brand-spacing-2xl gap-brand-spacing`}
    >
      <div className="bg-neutral rounded-brand-radius lg:w-[400px] lg:h-[530px] max-w-[415px] h-[415px]" />
      <ServiceDetails service={service} />
    </div>
  );
}

import Text from "@/components/UI-primitives/text/Text";
import ViewServiceButton from "./ViewServiceButton";

export default function MoreServicesCard() {
  return (
    <div className="display-card bg-primary">
      <h4 className="text-brand-white">View All Services</h4>
      <Text className="text-neutral opacity-70 font-light">
        At Air stream Cooling Systems, we specialize in complete air-conditioning, ventilation, and refrigeration
        solutions — from supply to installation to maintenance and repairs — ensuring comfort and performance for every
        space.
      </Text>
      <ViewServiceButton />
    </div>
  );
}

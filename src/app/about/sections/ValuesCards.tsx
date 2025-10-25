import DisplayCard from "@/components/cards/DisplayCard";
import { about } from "@/content/about";
import MissionIcon from "../icons/MissionIcon";
import VisionIcon from "../icons/VisionIcon";
import ValuesIcon from "../icons/ValuesIcon";

export default function ValuesCards() {
  return (
    <div className="flex flex-col w-fit md:flex-row divide-y items-center md:items-start divide-foreground-borders md:divide-y-0 md:divide-x">
      <DisplayCard title="Mission" icon={MissionIcon} className="rounded-none">
        {about.values.mission}
      </DisplayCard>
      <DisplayCard title="Vision" icon={VisionIcon} className="rounded-none">
        {about.values.vision}
      </DisplayCard>
      <DisplayCard title="Value" icon={ValuesIcon} className="rounded-none">
        {about.values.values}
      </DisplayCard>
    </div>
  );
}

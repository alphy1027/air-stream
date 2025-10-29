import ProjectDate from "@/app/projects/components/ProjectDate";
import { projects } from "@/content/projects";

export default function HomeProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="border w-[280px] rounded-brand-radius border-foreground-borders gap-brand-spacing-sm flex flex-col pb-brand-spacing-sm">
      <div className="h-[330px] bg-neutral rounded-t-brand-radius" />
      <div className="flex-col flex gap-brand-spacing-xs px-brand-spacing-sm">
        <ProjectDate />
        <h6 className="">{project.title}</h6>
      </div>
    </div>
  );
}

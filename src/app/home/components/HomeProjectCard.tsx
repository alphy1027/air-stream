import ProjectDate from "@/app/projects/components/ProjectDate";
import { projects } from "@/content/projects";

export default function HomeProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="border w-[180px] md:w-[230px] lg:w-[280px] border-foreground-borders gap-brand-spacing-sm flex flex-col pb-brand-spacing-sm">
      <div className="  h-[280px] md:h-[300px] lg:h-[330px] bg-neutral rounded-t-brand-radius" />
      <div className="flex-col flex gap-brand-spacing-xs px-brand-spacing-xs">
        <ProjectDate />
        <h6 className="">{project.title}</h6>
      </div>
    </div>
  );
}

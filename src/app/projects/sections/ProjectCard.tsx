import { projects } from "@/content/projects";
import ProjectRightArrowIcon from "../icons/ProjectRightArrowIcon";
import Button from "@/components/UI-primitives/button";

export default function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-y-brand-spacing-xs border border-foreground-borders w-fit rounded-brand-radius ${
        project.id % 2 === 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="max-w-[435px] lg:w-[350px] lg:h-[420px] h-[380px] bg-neutral rounded-t-brand-radius" />

      <div className="p-brand-spacing-sm lg:justify-between lg:w-[380px] max-w-[435px] flex flex-col gap-y-brand-spacing-xs md:p-brand-spacing lg:p-brand-spacing-lg">
        <div className="">
          <small className="uppercase bg-neutral text-foreground-muted px-2 py-0.5 border border-foreground-borders rounded-brand-radius w-fit">
            18 September 2025
          </small>
        </div>
        <h5 className="">{project.title}</h5>
        <Button variant="transparent" rightIcon={<ProjectRightArrowIcon />} className="self-end" />
      </div>
    </div>
  );
}

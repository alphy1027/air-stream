"use client";
import { projects } from "@/content/projects";
import ProjectRightArrowIcon from "../icons/ProjectRightArrowIcon";
import Button from "@/components/UI-primitives/button";
import ProjectDate from "../components/ProjectDate";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col lg:flex-row gap-y-brand-spacing-xs flex-1 border border-foreground-borders w-fit rounded-brand-radius ${
        project.id % 2 === 0 ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="max-w-[435px] relative lg:w-[400px] lg:h-[450px] h-[380px] lg:rounded-brand-radius rounded-t-brand-radius">
        <Image
          src={`/images/${project.folder}/${project.thumbnail}`}
          alt="Airstream HVAC projects across Kenya"
          fill
          sizes="(min-width: 1024px) 350px, 435px"
          className="object-cover rounded-brand-radius"
        />
      </div>

      <div className="p-brand-spacing-sm lg:justify-between lg:w-[380px] max-w-[435px] flex flex-col gap-y-brand-spacing-xs md:p-brand-spacing lg:p-brand-spacing-lg">
        <div className="">
          <ProjectDate />
        </div>
        <h5 className="">{project.title}</h5>
        <Button
          onClick={() => router.push(`/projects/${project.folder}`)}
          variant="transparent"
          rightIcon={<ProjectRightArrowIcon />}
          className="self-end"
        />
      </div>
    </div>
  );
}

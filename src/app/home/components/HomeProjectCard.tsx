import ProjectDate from "@/app/projects/components/ProjectDate";
import LinkButton from "@/components/UI-primitives/button/LinkButton";
import { projects } from "@/content/projects";
import Image from "next/image";

export default function HomeProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div className="border rounded-brand-radius border-foreground-borders gap-brand-spacing-sm flex flex-col pb-brand-spacing-sm">
      <div className="h-[330px] relative rounded-t-brand-radius">
        <Image
          src={`/images/${project.folder}/${project.thumbnail}`}
          alt="Airstream HVAC projects across Kenya"
          fill
          sizes="(max-width:640px) 100vw,(max-width:768px) 50vw, 25vw"
          className="object-cover rounded-t-brand-radius"
        />
      </div>
      <div className="flex-col flex gap-brand-spacing-xs px-brand-spacing-sm">
        <ProjectDate />
        <h6 className="">{project.title}</h6>
        <LinkButton href={`/projects/${project.folder}`} className="self-end" />
      </div>
    </div>
  );
}

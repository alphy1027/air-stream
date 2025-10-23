import { projects } from "@/content/projects";
import React from "react";
import ProjectCard from "./ProjectCard";

export default function MainProjectSection() {
  return (
    <div className="flex pt-brand-spacing gap-brand-spacing-xl flex-col items-center">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

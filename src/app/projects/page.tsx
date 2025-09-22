import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import { projects } from "@/content/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | AirStream HVAC & Refrigeration in Kenya",
  description:
    "See AirStream’s completed HVAC and refrigeration projects across Kenya. From offices to commercial spaces, we deliver efficient, reliable climate control solutions.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Our Projects | AirStream HVAC & Refrigeration in Kenya",
    description:
      "Discover AirStream’s portfolio of HVAC and refrigeration projects across Kenya, showcasing our expertise in installation, repair, and maintenance.",
    url: "/projects",
  },
};

export default function page() {
  return (
    <SectionContainer>
      {projects.map((project, id) => (
        <div key={id} className="">
          <h3 className="">{project.title}</h3>
          <Button>View Project</Button>
        </div>
      ))}
    </SectionContainer>
  );
}

import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
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
      <SectionTitle>Projects</SectionTitle>
      <div className="flex gap-brand-spacing flex-wrap justify-center">
        {projects.map((project) => (
          <div key={project.id} className="flex flex-col w-[190px] gap-y-brand-spacing-sm">
            <div className="w-[190px] h-[280px] bg-neutral rounded-brand-radius" />
            <Text className="pl-1">{project.title}</Text>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

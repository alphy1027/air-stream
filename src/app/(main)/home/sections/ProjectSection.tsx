import SectionContainer from "@/components/section/SectionContainer";
import LinkButton from "@/components/UI-primitives/button/LinkButton";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { projects } from "@/content/projects";
import HomeProjectCard from "../components/HomeProjectCard";

export default function ProjectSection() {
  return (
    <SectionContainer className="page-container">
      <div className="flex flex-col sm:justify-between gap-brand-spacing-sm sm:flex-row sm:items-end">
        <div className="max-w-[435px] lg:max-w-[640px] page-container">
          <SectionTitle>
            Some of our{" "}
            <span className="text-primary">
              recent <br /> works
            </span>
          </SectionTitle>
          <Text>
            We stock and supply high-quality equipment, components, and spare parts for all major HVAC and refrigeration
            systems. Reliable, efficient, and built to last.
          </Text>
        </div>

        <LinkButton href="/projects" className="text-primary self-end">
          View Projects
        </LinkButton>
      </div>
      <div className="grid grid-cols-1 max-w-[500px] md:max-w-full md:grid-cols-2 xl:grid-cols-4 justify-center self-center gap-brand-spacing-sm md:gap-brand-spacing">
        {projects.slice(0, 4).map((project) => (
          <HomeProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
}

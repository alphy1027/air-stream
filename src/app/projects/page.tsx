import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import { projects } from "@/content/projects";
import { Metadata } from "next";
import ProjectRightArrowIcon from "./icons/ProjectRightArrowIcon";
import Text from "@/components/UI-primitives/text/Text";

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
    <SectionContainer className="flex flex-col gap-y-brand-spacing-sm">
      <SectionTitle>
        Delivering Comfort & Efficiency – Our <span className="text-primary">Project Portfolio</span>
      </SectionTitle>
      <Text className="max-w-[760px]">
        Discover Air stream’s successful installations across residential, commercial, and industrial spaces in Kenya.
        Each project reflects our commitment to quality workmanship, innovative solutions, and reliable climate control
        systems built to last.
      </Text>
      <div className="flex gap-brand-spacing flex-col items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col gap-y-brand-spacing-xs border border-foreground-borders w-fit rounded-brand-radius"
          >
            <div className="max-w-[435px] h-[350px] bg-neutral rounded-brand-radius" />

            <div className="p-brand-spacing-sm max-w-[435px] flex flex-col gap-y-brand-spacing-xs md:p-brand-spacing lg:p-brand-spacing-lg">
              <div className="">
                <small className="uppercase bg-neutral px-2 py-0.5 border border-foreground-borders rounded-brand-radius w-fit">
                  18 September 2025
                </small>
              </div>
              <h5 className="">{project.title}</h5>
              <Button variant="transparent" rightIcon={<ProjectRightArrowIcon />} className="self-end" />
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

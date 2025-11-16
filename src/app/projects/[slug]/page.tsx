import NotFound from "@/app/not-found";
import ImageGallery from "@/components/gallery/ImageGallery";
import SectionContainer from "@/components/section/SectionContainer";
import { projects } from "@/content/projects";
import { GetImages } from "@/utils/GetImages";
import Image from "next/image";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((project) => project.folder === slug);

  if (!project) {
    return NotFound();
  }

  return (
    <SectionContainer className="flex flex-col gap-brand-page-spacing">
      <div className="card">
        <h3 className="lg:w-3/4">{project.title}</h3>
        <div className="relative rounded-brand-radius h-[415px]">
          <Image
            src={`/images/${project.folder}/${project.thumbnail}`}
            alt="Airstream HVAC projects across Kenya"
            fill
            sizes="100vw"
            className="object-cover rounded-brand-radius"
          />
        </div>
      </div>
      <ImageGallery folder={project.folder} images={GetImages(project.folder)} />
    </SectionContainer>
  );
}

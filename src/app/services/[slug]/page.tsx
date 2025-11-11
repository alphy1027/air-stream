import SectionContainer from "@/components/section/SectionContainer";
import { services } from "@/content/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import Text from "@/components/UI-primitives/text/Text";
import BulletPoint from "../components/BulletPoint";
import RequestServiceDialog from "@/components/dialog/RequestServiceDialog";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const serviceInfo = services.find((service) => service.link === slug);
  if (!serviceInfo) {
    return notFound();
  }
  const service = serviceInfo.title;

  return {
    title: `${service} | AirStream HVAC & Refrigeration Services in Kenya`,
    description: `AirStream provides expert ${service.toLowerCase()} services in Kenya, including installation, repair, maintenance, and genuine spare parts.`,
    alternates: {
      canonical: `/services/${params}`,
    },
    openGraph: {
      title: `${service} | AirStream HVAC & Refrigeration`,
      description: `Discover AirStream’s ${service.toLowerCase()} solutions in Kenya. Reliable installation, repair, maintenance, and spare parts.`,
      url: `/services/${params}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((service) => service.link === slug);

  if (!service) {
    return notFound();
  }

  return (
    <SectionContainer>
      <div className="rounded-brand-radius w-full h-[300px] bg-neutral" />
      <div className="flex flex-col py-4 justify-center gap-y-brand-spacing-sm lg:w-[400px] max-w-[400px]">
        <h3 className="lg:w-3/4">{service.title}</h3>
        <Text>{service.description.message}</Text>
        <div className="flex flex-col gap-y-2">
          {service.description.points.map((item, itemId) => (
            <BulletPoint key={itemId}>{item}</BulletPoint>
          ))}
        </div>
        <RequestServiceDialog defaultService={service.title} />
      </div>
    </SectionContainer>
  );
}

import SectionContainer from "@/components/section/SectionContainer";
import { services } from "@/content/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import ServiceDetails from "../components/ServiceDetails";

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
      <ServiceDetails service={service} />
    </SectionContainer>
  );
}

import SectionContainer from "@/components/section/SectionContainer";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { services } from "@/content/services";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

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
      <SectionTitle className="">Service Page</SectionTitle>
      <div className="">
        <h3 className="">{service.title}</h3>
        <Text className="">{service.description.message}</Text>
        {service.description.points.map((item, id) => (
          <Text key={id} className="">
            == {item}
          </Text>
        ))}
      </div>
    </SectionContainer>
  );
}

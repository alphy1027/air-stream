"use client";
import SectionContainer from "@/components/section/SectionContainer";
import Button from "@/components/UI-primitives/button";
import SectionTitle from "@/components/UI-primitives/text/SectionTitle";
import Text from "@/components/UI-primitives/text/Text";
import { services } from "@/content/services";
import { useRouter } from "next/navigation";

export default function ServicesRootPage() {
  const router = useRouter();
  return (
    <SectionContainer>
      <SectionTitle>SERVICES</SectionTitle>
      {services.map((service, id) => (
        <div key={id} className="card">
          <SectionTitle>{service.title}</SectionTitle>
          <Text>{service.description.message}</Text>
          <div className="">
            {service.description.points.map((item, itemId) => (
              <Text key={itemId} className="">
                == {item}
              </Text>
            ))}
          </div>
          <Button onClick={() => router.push(`/services/${service.link}`)}>View Service</Button>
          <hr className="text-foreground-borders" />
        </div>
      ))}
    </SectionContainer>
  );
}

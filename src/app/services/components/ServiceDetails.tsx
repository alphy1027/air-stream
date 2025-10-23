"use client";
import ProjectRightArrowIcon from "@/app/projects/icons/ProjectRightArrowIcon";
import React from "react";
import BulletPoint from "./BulletPoint";
import Text from "@/components/UI-primitives/text/Text";
import Button from "@/components/UI-primitives/button";
import { useRouter } from "next/navigation";
import { services } from "@/content/services";

export default function ServiceDetails({ service }: { service: (typeof services)[0] }) {
  const router = useRouter();
  return (
    <div className="flex flex-col py-4 justify-center gap-y-brand-spacing-sm lg:w-[400px] max-w-[400px]">
      <h3 className="lg:w-3/4">{service.title}</h3>
      <Text>{service.description.message}</Text>
      <div className="flex flex-col gap-y-2">
        {service.description.points.map((item, itemId) => (
          <BulletPoint key={itemId}>{item}</BulletPoint>
        ))}
      </div>
      <Button
        variant="transparent"
        rightIcon={<ProjectRightArrowIcon />}
        onClick={() => router.push(`/services/${service.link}`)}
        className="self-end"
      />
    </div>
  );
}

import Button from "@/components/UI-primitives/button";
import Text from "@/components/UI-primitives/text/Text";
import { reviews } from "@/content/review";
import React from "react";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";

export default function TestimonialCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div key={review.name} className="flex flex-col gap-y-brand-spacing-sm max-w-[700px]">
      <Text className="text-body-lg font-semibold italic">{review.message}</Text>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h6 className="text-primary font-secondary">{review.name}</h6>
          <small className="text-foreground-muted text-caption-base">{review.role}</small>
        </div>
        <div className="flex items-center gap-x-4">
          <Button variant="transparent" leftIcon={<ArrowLeftIcon />} />
          <Button variant="transparent" rightIcon={<ArrowRightIcon />} />
        </div>
      </div>
    </div>
  );
}

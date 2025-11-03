import Text from "@/components/UI-primitives/text/Text";
import { reviews } from "@/content/review";
import React from "react";

export default function TestimonialCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div key={review.name} className="flex flex-col w-full gap-y-brand-spacing-sm max-w-[700px]">
      <Text className="text-body-lg font-semibold italic">{review.message}</Text>
      <div className="flex items-center">
        <div className="flex flex-col">
          <h6 className="text-primary font-secondary">{review.name}</h6>
          <small className="text-foreground-muted text-caption-lg italic">{review.role}</small>
        </div>
      </div>
    </div>
  );
}

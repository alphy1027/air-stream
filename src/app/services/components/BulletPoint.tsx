import Text from "@/components/UI-primitives/text/Text";
import React, { ReactNode } from "react";
import TickIcon from "../icons/TickIcon";

export default function BulletPoint({ children }: { children: ReactNode }) {
  return (
    <Text className="flex gap-x-4">
      <TickIcon />
      <span className="">{children}</span>
    </Text>
  );
}

import Text from "@/components/UI-primitives/text/Text";
import { ReactNode } from "react";

export default function AirstreamCard({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="card p-brand-spacing max-w-[350px]">
      <h4 className="">{title}</h4>
      <Text className="">{children}</Text>
    </div>
  );
}

import Text from "@/components/UI-primitives/text/Text";
import { ReactNode } from "react";

export default function LeadServiceCard({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div className="flex p-6 rounded-brand-radius border border-foreground-borders flex-col gap-2">
      <h5 className="font-semibold text-lg text-foreground-heading"> {title}</h5>
      <Text className="text-foreground-muted"> {children}</Text>
    </div>
  );
}

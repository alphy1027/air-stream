import { ReactNode } from "react";

export default function LeadServiceCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex p-6 rounded-brand-radius border border-foreground-borders text-body-lg font-semibold">
      {children}
    </div>
  );
}

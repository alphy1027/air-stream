import { FC, ReactNode } from "react";

export default function LeadTrackPointCard({ icon: Icon, children }: { icon: FC; children: ReactNode }) {
  return (
    <div className="p-brand-spacing text-body-lg font-semibold fill-primary flex items-center gap-brand-spacing-sm">
      <Icon />
      <p>{children}</p>
    </div>
  );
}

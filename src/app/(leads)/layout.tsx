import { ReactNode } from "react";
import LeadHeader from "./components/LeadHeader";
import LeadFooter from "./components/LeadFooter";

export default function LeadLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <LeadHeader />
      {children}
      <LeadFooter />
    </div>
  );
}

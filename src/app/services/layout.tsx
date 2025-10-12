import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Airstream Services | HVAC & Refrigeration in Kenya",
    template: "%s | Airstream Services",
  },
  description:
    "Explore AirStream’s HVAC & refrigeration services in Kenya. Installation, repair, maintenance, and spare parts for homes, offices, and businesses.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    url: "/services",
  },
};

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return <div className="">{children}</div>;
}

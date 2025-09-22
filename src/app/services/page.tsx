import { Metadata } from "next";
import ServicesRootPage from "./ServicesRootPage";

export const metadata: Metadata = {
  title: "Our Services | AirStream HVAC & Refrigeration in Kenya",
  description:
    "Discover AirStream’s wide range of HVAC and refrigeration services in Kenya, including installation, repair, maintenance, and spare parts supply.",
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return <ServicesRootPage />;
}

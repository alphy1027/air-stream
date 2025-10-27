"use client";
import HeroSection from "@/app/home/sections/HeroSection";
import { usePathname } from "next/navigation";
import PageHead from "./PageHead";

export default function AppMainHead() {
  const location = usePathname();
  return <>{location === "/" ? <HeroSection /> : <PageHead />}</>;
}

import SectionContainer from "@/components/section/SectionContainer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <SectionContainer className="pb-24">
      <h2 className="text-red-600 font-bold">404</h2>
      <h3 className="font-semibold pb-2">Page Not Found</h3>
      <Link className="flex items-center text-primary gap-2 underline" href="/">
        <ArrowLeft />
        Homepage{" "}
      </Link>
    </SectionContainer>
  );
}

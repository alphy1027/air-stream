import SectionContainer from "@/components/section/SectionContainer";
import Link from "next/link";

export default function NotFound() {
  return (
    <SectionContainer>
      <h2 className="text-red-600 font-bold">404</h2>
      <h3 className="font-semibold">Page Not Found</h3>
      <Link href="/">Homepage</Link>
    </SectionContainer>
  );
}

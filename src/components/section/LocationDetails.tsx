"use client";
import { usePathname } from "next/navigation";
import SectionTitle from "../UI-primitives/text/SectionTitle";
import HomeIcon from "./icons/HomeIcon";
import Link from "next/link";
import RightBracket from "./icons/RightBracket";

export default function LocationDetails() {
  const location = usePathname();
  const currentLocation = location.split("/").at(-1);
  let currentLink = "";

  const crumbs = location
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div key={crumb} className="flex items-center gap-brand-spacing-xs">
          <RightBracket />{" "}
          <Link href={currentLink} className="font-medium text-body-base capitalize text-neutral">
            {crumb}
          </Link>
        </div>
      );
    });

  return (
    <div className="flex flex-col gap-brand-spacing-xs">
      <SectionTitle className="text-brand-white capitalize">{currentLocation}</SectionTitle>
      <nav className="flex items-center gap-brand-spacing-sm">
        <Link href="/" className="font-medium flex items-center gap-brand-spacing-xs text-body-base text-neutral">
          <HomeIcon />
          <span className="">Home</span>
        </Link>
        {crumbs}
      </nav>
    </div>
  );
}

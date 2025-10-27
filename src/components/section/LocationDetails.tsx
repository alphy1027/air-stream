"use client";
import { usePathname } from "next/navigation";
import SectionTitle from "../UI-primitives/text/SectionTitle";
import HomeIcon from "./icons/HomeIcon";
import Link from "next/link";
import RightBracket from "./icons/RightBracket";
import React from "react";

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
        <React.Fragment key={crumb}>
          <RightBracket />{" "}
          <Link href={currentLink} className="crumb-link">
            {crumb}
          </Link>
        </React.Fragment>
      );
    });

  return (
    <div className="flex flex-col gap-brand-spacing-xs">
      <SectionTitle className="text-brand-white capitalize">{currentLocation}</SectionTitle>
      <nav className="flex items-center gap-brand-spacing-xs">
        <Link href="/" className="flex items-center gap-brand-spacing-xs crumb-link">
          <HomeIcon />
          <span className="">Home</span>
        </Link>
        {crumbs}
      </nav>
    </div>
  );
}

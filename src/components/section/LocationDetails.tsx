"use client";
import { usePathname } from "next/navigation";
import SectionTitle from "../UI-primitives/text/SectionTitle";
import HomeIcon from "./icons/HomeIcon";
import Link from "next/link";
import RightBracket from "./icons/RightBracket";
import React from "react";

export default function LocationDetails() {
  const location = usePathname();
  const currentLocation = location.split("/").at(-1)?.replace(/-/g, " ");
  let currentLink = "";

  const crumbs = location
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <li key={crumb} className="flex items-center gap-1">
          <RightBracket />{" "}
          <Link href={currentLink} className="crumb-link">
            {crumb.replace(/-/g, " ")}
          </Link>
        </li>
      );
    });

  return (
    <div className="flex flex-col gap-brand-spacing-xs w-fit">
      <SectionTitle className="text-brand-white capitalize">{currentLocation}</SectionTitle>
      <nav aria-label="BreadCrumb">
        <ol className="flex items-center">
          <li>
            <Link href="/" className="flex items-center gap-brand-spacing-xs crumb-link">
              <HomeIcon />
              <span className="">Home</span>
            </Link>
          </li>
          {crumbs}
        </ol>
      </nav>
    </div>
  );
}

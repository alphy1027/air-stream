import React from "react";
import Badge from "../UI-primitives/text/Badge";
import { navLinks } from "@/content/navLinks";
import Link from "next/link";
import Button from "../UI-primitives/button";

const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <Badge className="text-brand-white" />

      <div className="flex items-center gap-2">
        <nav className="font-semibold md:flex gap-2 hidden">
          {navLinks.map((navLink) => (
            <Link key={navLink.to} href={navLink.to} className="px-brand-spacing-sm py-brand-spacing-xs">
              {navLink.link}
            </Link>
          ))}
        </nav>
        <Button variant="accent">Catalogue</Button>
      </div>
    </header>
  );
};

export default Header;

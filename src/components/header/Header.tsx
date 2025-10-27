import React from "react";
import Badge from "../UI-primitives/text/Badge";
import { navLinks } from "@/content/navLinks";
import Link from "next/link";
import Button from "../UI-primitives/button";

const Header = () => {
  return (
    <header className="p-2 flex justify-between items-center w-[96%] md:w-[92%] max-w-[1400px] z-50 absolute top-brand-spacing-sm left-1/2 -translate-x-1/2 bg-[#f9fafa] rounded-brand-radius">
      <Badge className="" />

      <div className="flex items-center gap-2">
        <nav className="font-semibold md:flex gap-2 hidden">
          {navLinks.map((navLink) => (
            <Link key={navLink.to} href={navLink.to} className="px-brand-spacing-sm py-brand-spacing-xs">
              {navLink.link}
            </Link>
          ))}
        </nav>
        <Button>Catalogue</Button>
      </div>
    </header>
  );
};

export default Header;

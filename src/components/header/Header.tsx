import React from "react";
import Badge from "../UI-primitives/text/Badge";
import { navLinks } from "@/content/navLinks";
import Link from "next/link";
import Button from "../UI-primitives/button";
import MenuIcon from "./icons/MenuIcon";

const Header = () => {
  return (
    <header className="p-2 flex justify-between items-center w-[96%] md:w-[92%] max-w-[1400px] z-50 absolute top-brand-spacing-sm left-1/2 -translate-x-1/2 backdrop-blur-md shadow-md shadow-white/10 border-white/20 border bg-white/10 rounded-brand-radius">
      <Badge className="" />

      <div className="hidden md:flex items-center gap-2">
        <nav className="font-semibold flex gap-2 ">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.to}
              href={navLink.to}
              className="px-brand-spacing-sm text-brand-white py-brand-spacing-xs"
            >
              {navLink.link}
            </Link>
          ))}
        </nav>
        <Button>Catalogue</Button>
      </div>
      <Button rightIcon={<MenuIcon />} variant="transparent" className="md:hidden p-1.5 rounded-full" />
    </header>
  );
};

export default Header;

import React from "react";
import Badge from "../UI-primitives/text/Badge";
import Navbar from "./components/Navbar";
import MobileSidebar from "../sidebar/MobileSidebar";
import CatalogueLink from "@/app/home/components/CatalogueLink";

const Header = () => {
  return (
    <header className="p-2 flex justify-between items-center w-[96%] md:w-[92%] max-w-[1400px] z-50 absolute top-brand-spacing-sm left-1/2 -translate-x-1/2 backdrop-blur-md shadow-md shadow-white/10 border-white/20 border bg-white/10 rounded-brand-radius">
      <Badge className="" />

      <div className="hidden md:flex items-center gap-brand-spacing-xs lg:gap-brand-spacing-sm">
        <Navbar />
        <CatalogueLink />
      </div>
      <MobileSidebar />
    </header>
  );
};

export default Header;

import { navLinks } from "@/content/navLinks";
import Link from "next/link";
import SectionContainer from "../section/SectionContainer";
import Badge from "../UI-primitives/text/Badge";
import Text from "../UI-primitives/text/Text";

const Footer = () => {
  return (
    <footer className="bg-secondary py-4">
      <SectionContainer className="p-2 flex flex-col gap-y-brand-spacing-lg">
        <div className="flex gap-2 flex-col max-w-[570px]">
          <Badge className="text-brand-white" />
          <Text className="text-neutral text-sm font-light">
            Airstream Cooling Systems is a trusted provider of air conditioning, ventilation, and refrigeration
            solutions across Kenya. We combine expert craftsmanship with smart technology to deliver efficient, lasting
            comfort for homes and businesses.
          </Text>
        </div>
        <nav className="font-medium gap-2 flex items-center flex-wrap justify-center divide-x divide-foreground-borders">
          {navLinks.map((navLink) => (
            <Link
              key={navLink.to}
              href={navLink.to}
              className="px-brand-spacing-xs sm:px-brand-spacing-sm hover:scale-105 duration-200 ease-in-out text-neutral active:text-accent"
            >
              {navLink.link}
            </Link>
          ))}
        </nav>
        <p className="text-foreground-borders text-center text-sm">
          &copy; {new Date().getFullYear()} Airstream Cooling Systems Ltd. All rights reserved
        </p>
      </SectionContainer>
    </footer>
  );
};

export default Footer;

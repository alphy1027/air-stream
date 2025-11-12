import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuIcon from "../header/icons/MenuIcon";
import Button from "../UI-primitives/button";
import Badge from "../UI-primitives/text/Badge";
import { navLinks } from "@/content/navLinks";
import Link from "next/link";
import { XIcon } from "lucide-react";
import Text from "../UI-primitives/text/Text";

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button rightIcon={<MenuIcon />} variant="transparent" className="md:hidden p-1.5 rounded-full" />
      </SheetTrigger>
      <SheetContent side="left" className="p-brand-spacing-sm pt-brand-spacing justify-between gap-y-brand-spacing-xl">
        <SheetHeader className="flex-row items-center justify-between">
          <SheetTitle asChild>
            <SheetClose asChild>
              <Badge />
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="sr-only">Mobile navigation menu for Airstream Cooling Systems</SheetDescription>
          <SheetClose asChild>
            <Button
              variant="transparent"
              className="p-1 translate-x-1"
              rightIcon={<XIcon className="text-foreground-muted w-8 h-8" />}
            />
          </SheetClose>
        </SheetHeader>
        <nav className="w-full p-brand-spacing-xs">
          <ul className="divide-y divide-foreground-borders flex flex-col">
            {navLinks.map((navLink) => (
              <li key={navLink.link} className="flex">
                <SheetClose asChild>
                  <Link
                    href={navLink.to}
                    className="py-3 w-full tracking-wide active:scale-105 duration-200 ease-in transition active:text-primary font-semibold text-foreground text-lg"
                  >
                    {navLink.link}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter className="">
          <Text className="text-foreground-borders text-center text-sm">
            &copy; {new Date().getFullYear()} Airstream Cooling Systems Ltd. All rights reserved
          </Text>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

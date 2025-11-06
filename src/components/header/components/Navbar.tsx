"use client";

import * as React from "react";
import Link from "next/link";

/* import { useIsMobile } from "@/hooks/use-mobile"; */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navLinks } from "@/content/navLinks";
import { services } from "@/content/services";

export default function Navbar() {
  /* const isMobile = useIsMobile(); */

  return (
    <NavigationMenu className="" /* viewport={isMobile} */>
      <NavigationMenuList className="flex-wrap">
        {navLinks.map((navLink) =>
          navLink.link === "Services" ? (
            <NavigationMenuItem key={navLink.link}>
              <NavigationMenuTrigger>{navLink.link}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem key={service.title} title={service.title} href={`${navLink.to}/${service.link}`}>
                      {service.intro}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={navLink.link}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={navLink.to}>{navLink.link}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild className="group">
        <Link href={href} className="">
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground group-hover:text-slate-300/95 line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

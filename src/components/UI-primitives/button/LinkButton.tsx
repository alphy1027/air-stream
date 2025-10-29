"use client";

import Button from ".";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import ArrowRightIcon from "@/app/home/icons/ArrowRightIcon";

type LinkProps = {
  children?: ReactNode;
  href: string;
  className?: string;
  noIcon?: boolean;
  variant?: "transparent" | "accent" | "primary" | "secondary";
};

export default function LinkButton({ variant = "transparent", children, href, className, noIcon = false }: LinkProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      variant={variant}
      rightIcon={noIcon ? null : <ArrowRightIcon />}
      className={className}
    >
      {children}
    </Button>
  );
}

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
};

export default function LinkButton({ children, href, className, noIcon = false }: LinkProps) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(href)}
      variant="transparent"
      rightIcon={noIcon ? null : <ArrowRightIcon />}
      className={className}
    >
      {children}
    </Button>
  );
}

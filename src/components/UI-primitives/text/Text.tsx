import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  children: ReactNode;
  className?: string;
}

const textVariants = cva("", {
  variants: {
    variant: {
      bronze: "color-foreground",
      champagne: "color-secondary",
      sage: "color-accent",
      cream: "color-background",
    },
    size: {
      xs: "text-body-xs",
      sm: "text-body-sm",
      base: "text-body-base",
      lg: "text-body-lg",
      xl: "text-body-xl",
    },
  },
  defaultVariants: {
    variant: "bronze",
    size: "base",
  },
});

export default function Text({ variant, size, className, children, ...props }: TextProps) {
  return (
    <p className={cn(textVariants({ variant, size }), className)} {...props}>
      {children}
    </p>
  );
}

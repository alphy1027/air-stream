import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const buttonVariants = cva(
  "tracking-wide flex w-fit items-center uppercase justify-center rounded-sm cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out gap-x-4",
  {
    variants: {
      variant: {
        primary: "bg-primary color-background",
        secondary: "bg-secondary color-primary",
        outline: "bg-transparent color-primary border-2 border-primary",
        "secondary-outline": "bg-transparent color-secondary border-2 border-secondary",
      },
      size: {
        sm: "px-4 py-2 font-medium text-body-sm",
        md: "px-6 py-3 font-semibold text-body-bas",
        lg: "px-8 py-4 font-bold text-body-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({ children, leftIcon, rightIcon, variant, size, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {leftIcon && <span className="">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="">{rightIcon}</span>}
    </button>
  );
}

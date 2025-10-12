import cn from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  children?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const buttonVariants = cva(
  "tracking-wide flex w-fit py-3 px-8 text-body-lg items-center capitalize justify-center rounded-brand-radius font-semibold cursor-pointer hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out gap-x-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-brand-white primary-btn-shadow",
        secondary: "bg-secondary text-brand-white secondary-btn-shadow",
        accent: "bg-accent text-foreground-accent-btn accent-btn-shadow",
        transparent: "bg-transparent color-primary px-2",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default function Button({ children, leftIcon, rightIcon, variant, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {leftIcon && <span className="">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="">{rightIcon}</span>}
    </button>
  );
}

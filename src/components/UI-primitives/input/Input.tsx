import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";
import ErrorText from "../text/ErrorText";

interface inputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

const inputVariants = cva(
  "rounded-brand-radius block w-full py-3 px-4 bg-neutral border text-body focus:border-2 focus:outline-none font-medium",
  {
    variants: {
      variant: {
        primary: "text-body-default border-foreground-borders focus:outline-none focus:border-primary",
        danger: "text-red-600 border-red-600 placeholder:text-red-600",
        success: "text-success border-green-600 focus:border-green-600 placeholder:text-green-600",
        disabled: "text-foreground-borders border-gray-300",
      },
    },
  }
);

const Input = ({ className, variant, error, label, rightIcon, leftIcon, ...props }: inputProps) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={props.id} className="text-body-base text-brand-white font-semibold">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && <span className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-500">{leftIcon}</span>}
        <input
          className={cn(
            inputVariants({ variant }),
            error && "border-error focus:border-error border-2",
            leftIcon && "pl-11",
            rightIcon && "pr-9",
            className
          )}
          {...props}
        />
        {rightIcon && <span className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500">{rightIcon}</span>}
      </div>
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default Input;

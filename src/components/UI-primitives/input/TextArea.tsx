import cn from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode, TextareaHTMLAttributes } from "react";

interface inputProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textAreaVariants> {
  label?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: string;
}

const textAreaVariants = cva(
  "rounded-brand-radius bg-neutral block w-full py-3 px-4 border text-body-base focus:border-2 focus:outline-none font-medium",
  {
    variants: {
      variant: {
        primary: "text-foreground border-foreground-borders focus:outline-none focus:border-primary",
        danger: "text-red-600 border-red-600 placeholder:text-red-600",
        success: "text-green-600 border-green-600 focus:border-green-600 placeholder:text-green-600",
        disabled: "text-foreground-borders border-gray-300",
      },
    },
  }
);

const TextArea = ({ className, variant, error, label, rightIcon, leftIcon, ...props }: inputProps) => {
  return (
    <div className="">
      {label && (
        <label htmlFor={props.id} className="text-body-base text-brand-white font-semibold">
          {label}
        </label>
      )}
      <textarea
        className={cn(textAreaVariants({ variant }), leftIcon && "pl-9", rightIcon && "pr-9", className)}
        {...props}
      ></textarea>
      {error && <span className="text-error text-sm">{error}</span>}
    </div>
  );
};

export default TextArea;

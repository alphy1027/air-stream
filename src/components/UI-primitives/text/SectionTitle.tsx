import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  className?: string;
  children: ReactNode;
  caption?: string;
};

export default function SectionTitle({ className, children, caption }: TitleProps) {
  return (
    <div className={twMerge("flex flex-col py-4 w-fit ", className)}>
      <p className="text-body-sm color-foreground font-family-caption tracking-wide">{caption}</p>
      <h2 className="font-semibold tracking-wide uppercase text-heading-base font-family-heading color-primary">
        {children}
      </h2>
    </div>
  );
}

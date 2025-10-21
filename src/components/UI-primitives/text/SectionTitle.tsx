import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  className?: string;
  children: ReactNode;
  caption?: string;
};

export default function SectionTitle({ className, children, caption }: TitleProps) {
  return (
    <div className={twMerge("flex flex-col w-fit ", className)}>
      <p className="text-body-sm color-foreground font-family-caption tracking-wide">{caption}</p>
      <h2 className="">{children}</h2>
    </div>
  );
}

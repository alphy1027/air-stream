import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = {
  className?: string;
  children: ReactNode;
  caption?: string;
};

export default function SectionTitle({ className, children }: TitleProps) {
  return <h2 className={twMerge("flex flex-col w-fit ", className)}>{children}</h2>;
}

import React from "react";
import Text from "../UI-primitives/text/Text";
import { twMerge } from "tailwind-merge";

type CardProps = {
  title: string;
  children: string;
  icon: React.FC;
  className?: string;
};

export default function DisplayCard({ title, children, className, icon: Icon }: CardProps) {
  return (
    <article className={twMerge("display-card", className)}>
      <Icon />
      <h4 className="">{title}</h4>
      <Text>{children}</Text>
    </article>
  );
}

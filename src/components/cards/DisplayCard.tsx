import React from "react";
import Text from "../UI-primitives/text/Text";
import { twMerge } from "tailwind-merge";
import LinkButton from "../UI-primitives/button/LinkButton";

type CardProps = {
  title: string;
  children: string;
  icon: React.FC;
  className?: string;
  href?: string;
};

export default function DisplayCard({ title, href, children, className, icon: Icon }: CardProps) {
  return (
    <article className={twMerge("display-card", className)}>
      <Icon />
      <h4 className="">{title}</h4>
      <Text>{children}</Text>
      {href && <LinkButton href={href} className="self-end" />}
    </article>
  );
}

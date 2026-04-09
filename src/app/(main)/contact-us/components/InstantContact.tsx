import Text from "@/components/UI-primitives/text/Text";
import { ReactNode } from "react";

type ContactProps = {
  title: string;
  icon: ReactNode;
  body: string;
  href: string;
};

export default function InstantContact({ title, icon, href, body }: ContactProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col gap-brand-spacing-sm rounded-brand-radius border border-foreground-borders py-brand-spacing-sm lg:py-brand-spacing lg:px-brand-spacing-lg px-brand-spacing hover:scale-105 duration-200 transition ease-in group hover:bg-accent hover:border-none active:bg-accent active:border-none"
    >
      <h5 className="font-bold">{title}</h5>
      <div className="flex items-center gap-brand-spacing-xs">
        {icon}
        <Text className="text-body-lg font-medium tracking-wide">{body}</Text>
      </div>
    </a>
  );
}

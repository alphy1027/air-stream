import Text from "@/components/UI-primitives/text/Text";
import { LucideProps } from "lucide-react";
import Link from "next/link";

type ContactProps = {
  title: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  body: string;
  href: string;
};

export default function InstantContact({ title, icon: Icon, href, body }: ContactProps) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-brand-spacing-sm rounded-brand-radius bg-neutra border border-foreground-borders py-brand-spacing-sm px-brand-spacing hover:scale-105 duration-200 transition ease-in group hover:bg-accent hover:border-none"
    >
      <h5 className="font-bold">{title}</h5>
      <div className="flex items-center gap-brand-spacing-xs">
        <Icon />
        <Text className="text-body-lg font-medium tracking-wide">{body}</Text>
      </div>
    </Link>
  );
}

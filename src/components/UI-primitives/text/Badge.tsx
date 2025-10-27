import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  className?: string;
};

const Badge = ({ className }: BadgeProps) => {
  return (
    <Link href="/" className="p-0.5">
      <h4 className={twMerge("text-secondary tracking-wide", className)}>
        Air<span className="text-primary">stream</span>
      </h4>
    </Link>
  );
};

export default Badge;

import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  className?: string;
};

const Badge = ({ className }: BadgeProps) => {
  return (
    <Link href="/" className="p-0.5">
      <h5 className={twMerge("text-brand-white tracking-wide font-bold", className)}>
        Air<span className="text-accent">stream</span>
      </h5>
    </Link>
  );
};

export default Badge;

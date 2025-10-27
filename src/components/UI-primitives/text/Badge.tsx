import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  className?: string;
};

const Badge = ({ className }: BadgeProps) => {
  return (
    <Link href="/" className="p-0.5">
      <h5 className={twMerge("text-secondary tracking-wide font-bold", className)}>
        Air<span className="text-primary">stream</span>
      </h5>
    </Link>
  );
};

export default Badge;

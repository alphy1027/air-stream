import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type BadgeProps = {
  className?: string;
};

const Badge = ({ className }: BadgeProps) => {
  return (
    <Link href="/" className={twMerge("relative aspect-[352/98] w-32 px-2", className)}>
      <Image
        src="/images/airstream-logo.png"
        sizes="(max-width:1200px) 128px"
        alt="Airstream Logo"
        priority
        fill
        className="object-contain"
      />
    </Link>
  );
};

export default Badge;

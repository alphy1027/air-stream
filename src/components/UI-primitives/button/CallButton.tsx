import CtaPhoneIcon from "@/components/section/icons/CtaPhoneIcon";
import { twMerge } from "tailwind-merge";

export default function CallButton({ phone, className }: { phone: string; className?: string }) {
  return (
    <a
      href={`tel:${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "py-brand-spacing-sm text-foreground-accent-btn bg-accent text-center px-brand-spacing-lg flex items-center justify-center gap-brand-spacing-xs rounded-brand-radius hover:scale-105 active:scale-95 transition ease-in duration-200 font-semibold stroke-foreground-accent-btn",
        className,
      )}
    >
      <CtaPhoneIcon />
      {phone}
    </a>
  );
}

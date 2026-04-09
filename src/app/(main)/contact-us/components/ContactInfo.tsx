import { ReactNode } from "react";

const ContactInfo = ({ icon, children }: { icon: ReactNode; children: ReactNode }) => {
  return (
    <div className="flex gap-x-brand-spacing-xs">
      {icon && icon}
      <span className="text-foreground-borders text-caption-base ">{children}</span>
    </div>
  );
};

export default ContactInfo;

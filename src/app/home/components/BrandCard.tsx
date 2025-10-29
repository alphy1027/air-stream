import React from "react";

export default function BrandCard({ icon: Icon }: { icon: React.FC }) {
  return (
    <div className=" border-[#383F6C] flex justify-center items-center rounded-brand-radius w-[150px] h-[150px] lg:h-[180px] lg:w-[180px]">
      <Icon />
    </div>
  );
}

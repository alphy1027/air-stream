import ArrowDown from "@/app/home/icons/ArrowDown";
import React from "react";
import Button from ".";

export default function ScrollButton() {
  const handleScroll = () => {
    const section = document.getElementById("brand");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleScroll}
      aria-label="Scroll down"
      variant="transparent"
      rightIcon={<ArrowDown />}
      className="animate animate-bounce absolute left-1/2 -translate-x-1/2 bottom-0"
    />
  );
}

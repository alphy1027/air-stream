import React from "react";
import Button from ".";
import { Mouse } from "lucide-react";

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
      leftIcon={<Mouse />}
      className=" text-foreground-borders gap-0.5 text-sm flex flex-col self-center"
    >
      Scroll Down
    </Button>
  );
}

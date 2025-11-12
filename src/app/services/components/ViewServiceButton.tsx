"use client";
import Button from "@/components/UI-primitives/button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ViewServiceButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push("/services")} variant="accent" rightIcon={<ArrowRight />} className="">
      View More
    </Button>
  );
}

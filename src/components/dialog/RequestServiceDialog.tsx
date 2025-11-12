"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "../UI-primitives/button";
import RequestServiceForm from "./components/RequestServiceForm";
import { useRef } from "react";
import { XIcon } from "lucide-react";

export default function RequestServiceDialog({ defaultService = "" }: { defaultService?: string }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={`${!defaultService ? "w-fit" : "w-full"}`}>Request service</Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[600px] p-brand-spacing sm:p-brand-spacing-lg flex flex-col gap-y-brand-spacing"
      >
        <DialogHeader className="items-center flex-row justify-between">
          <div className="flex flex-col gap-2">
            <DialogTitle asChild>
              <h3>Request a Service</h3>
            </DialogTitle>
            <DialogDescription>Fill in your details below and our team will get back to you shortly.</DialogDescription>
          </div>
          <DialogClose asChild>
            <button
              ref={closeButtonRef}
              className="p-1 translate-x-1 bg-transparent hover:scale-105 duration-200 ease-in transition"
            >
              <XIcon className="text-foreground-muted w-8 h-8" />
            </button>
          </DialogClose>
        </DialogHeader>
        <RequestServiceForm closeButtonRef={closeButtonRef} defaultService={defaultService} />
      </DialogContent>
    </Dialog>
  );
}

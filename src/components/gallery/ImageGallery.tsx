"use client";
import { useState } from "react";
import { Dialog, DialogClose, DialogContent } from "../ui/dialog";
import Button from "../UI-primitives/button";
import { XIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function ImageGallery() {
  const [openImage, setOpenImage] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleOpenImage = (index: number) => {
    setActiveImage(index);
    setOpenImage(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-brand-spacing-sm">
        {[...Array(24)].map((image, index) => (
          <div key={index} onClick={() => handleOpenImage(index)} className="bg-neutral h-52 w-full cursor-pointer">
            {image}
          </div>
        ))}
      </div>

      <Dialog open={openImage} onOpenChange={setOpenImage}>
        <DialogContent
          showCloseButton={false}
          className="p-0 max-w-full w-full sm:max-w-full shadow-none border-none rounded-none h-full bg-black/40 flex flex-col items-center justify-center"
        >
          <DialogTitle className="sr-only">Airstream HVAC images</DialogTitle>
          <DialogClose asChild>
            <Button
              variant="transparent"
              className="p-1 translate-x-1 absolute top-2 md:top-4 right-2 md:right-4"
              rightIcon={<XIcon className="text-brand-white w-8 h-8" />}
            />
          </DialogClose>
          <Carousel
            opts={{
              loop: true,
              startIndex: activeImage,
            }}
            className="w-full max-w-[90vw] h-[85vh] relative"
          >
            <CarouselContent className="bg-fuchsia-200 -ml-4">
              {[...Array(24)].map((image, index) => (
                <CarouselItem key={index} className="flex pl-4 items-center basis-full justify-center">
                  <div className="relative w-[80vw]  h-[85vh] bg-red-200">{image}</div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-1 -translate-y-1/2 top-1/2 text-white bg-primary border-none" />
            <CarouselNext className="absolute right-1 -translate-y-1/2 top-1/2 text-white border-none bg-primary" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}

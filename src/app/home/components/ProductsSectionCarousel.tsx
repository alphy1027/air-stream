import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "@/app/products/sections/ProductCard";
import { products } from "@/content/products";

export function ProductsSectionCarousel() {
  return (
    <Carousel className="w-full flex flex-col gap-brand-spacing">
      <CarouselContent className="-ml-brand-spacing-sm">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-brand-spacing-sm md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ProductCard productName={product.name} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-2 self-end pr-6 md:pr-8 lg:pr-10">
        <CarouselPrevious className="px-4 py-2 border-none bg-transparent shadow-none" />
        <CarouselNext className="px-4 py-2 border-none bg-transparent shadow-none" />
      </div>
    </Carousel>
  );
}

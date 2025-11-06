import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard from "@/app/products/sections/ProductCard";
import { products } from "@/content/products";

export function ProductsSectionCarousel() {
  return (
    <Carousel className="w-full flex flex-col gap-brand-spacing pl-16">
      <CarouselContent className="-ml-brand-spacing-sm">
        {products.map((product) => (
          <CarouselItem key={product.id} className="pl-brand-spacing-sm md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <ProductCard productName={product.name} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center gap-brand-spacing-sm self-end pr-8">
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </div>
    </Carousel>
  );
}

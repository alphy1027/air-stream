import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { reviews } from "@/content/review";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel() {
  return (
    <Carousel className="w-fit max-w-[720px] flex flex-col gap-brand-spacing-sm">
      <CarouselContent className="h-fit w-fit">
        {reviews.map((review) => (
          <CarouselItem key={review.name} className="basis-full w-fit shrink-0 h-fit">
            <div className="p-1 w-fit">
              <TestimonialCard review={review} />
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

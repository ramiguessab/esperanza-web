"use client";
import Autoplay from "embla-carousel-autoplay"

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTestimonial } from "@/contexts/TestimonialContext";
import { Testimonial } from "@/components/interface/types";

export function Activities() {
  const { selectedTestimonial, isDialogOpen, setIsDialogOpen } = useTestimonial();
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-evenly relative overflow-hidden h-[calc(100vh-4rem)]">
      <h1 className="text-3xl sm:text-5xl font-bold text-center py-4">
        Our Activities
      </h1>
      <div className="h-96 cursor-pointer">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      {selectedTestimonial && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className=" bg-esperanza_very_dark_blue p-10 px-16">
            <DialogHeader>
              <DialogTitle className="text-center">{selectedTestimonial.title}</DialogTitle>
              <DialogDescription>
                
                <Carousel setApi={setApi}  plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{
    align: "start",
    loop: true,
  }}>
  <CarouselContent>
    <CarouselItem><img
                  src={selectedTestimonial.imgSrc}
                  alt={selectedTestimonial.title}
                  className="w-full h-60 object-cover"
                /></CarouselItem>
    <CarouselItem><img
                  src={selectedTestimonial.imgSrc}
                  alt={selectedTestimonial.title}
                  className="w-full h-60 object-cover"
                /></CarouselItem>
    <CarouselItem><img
                  src={selectedTestimonial.imgSrc}
                  alt={selectedTestimonial.title}
                  className="w-full h-60 object-cover"
                /></CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

                <br />
                <p className="text-white text-center">{selectedTestimonial.text} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur corrupti inventore rem, alias non cum placeat repellat iste fuga sequi accusantium, nihil eum repellendus aperiam ipsa dignissimos numquam omnis doloremque.</p>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

const testimonials: Testimonial[] = [
  {
    imgSrc: "/assets/envision-logo-2.png",
    text: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    imgSrc: "/assets/_MG_6787.jpg",
    text: "William Shakespeare",
    title: "Hamlet",
  },
  {
    imgSrc: "/assets/_MG_6787.jpg",
    text: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    imgSrc: "/assets/IMG_4877.JPG",
    text: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    imgSrc: "/assets/_MG_6787.jpg",
    text: "Herman Melville",
    title: "Moby-Dick",
  },
];

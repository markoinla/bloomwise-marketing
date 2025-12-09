import { ArrowRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote: "I use Bloomwise to manage all my wedding proposals. It's a lifesaver.",
    author: "Amy Chase",
    role: "Owner",
    company: "Petal & Stem",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "Bloomwise helped me cut my admin time in half. Highly recommended.",
    author: "Jonas Kotara",
    role: "Lead Florist",
    company: "Rosewood Floral",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "Finally a tool that understands how florists actually work.",
    author: "Kevin Yam",
    role: "Creative Director",
    company: "The Garden Studio",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "Inventory management used to be a nightmare. Now it's a breeze.",
    author: "Kundo Marta",
    role: "Founder",
    company: "Blooms & Co",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "The event planning workspace is exactly what I needed.",
    author: "Sarah Jen",
    role: "Event Planner",
    company: "Floral Dreams",
    image: "/testimonials/amy-chase.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Loved by florists everywhere
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              Bloomwise is built on the habits that make the best floral businesses
              successful: staying organized, minimizing waste, and delighting customers.
            </p>
            <Button variant="outline" className="shadow-md">
              Read our Customer Stories <ArrowRight className="size-4" />
            </Button>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="relative h-[288px] lg:h-[328px]">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="size-full object-cover object-top"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};

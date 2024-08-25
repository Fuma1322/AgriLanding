import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent } from "../ui/card";
import TestimonialCards from "./TestimonialCards";

export default function Testimonials() {
  return (
    <div>
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-[#204E51] text-3xl font-bold sm:text-4xl">
            Testimonials
          </h3>
          <p className="mt-3 flex items-center justify-center">
            Li Europan lingues es membres del sam familie. Lor separat existentie es <br/> un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. 
          </p>
          <div className="flex justify-center items-center w-full">
          <Carousel className="">
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                    <Card className="w-[100px] h-[400px]">
                        <CardContent className="flex items-center justify-center">
                        <TestimonialCards />
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
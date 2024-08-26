import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function CarouselDemo() {
  // Array of objects with image paths, titles,positions and descriptions
  const items = [
    {
      src: "/agri11.png",
      title: "Madeline Williamson",
      post: "Forward Creative Manager",
      description:
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
      rating: 4.5,
    },
    {
      src: "/agri11.png",
      title: "Madeline Williamson",
      post: "Forward Creative Manager",
      description:
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
      rating: 3,
    },
    {
      src: "/agri11.png",
      title: "Madeline Williamson",
      post: "Forward Creative Manager",
      description:
        "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.",
      rating: 5,
    },
  ];

  return (
    <Carousel className="w-full max-w-3xl mx-auto">
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-4">
              <Card className="bg-[#204E51]">
                <CardContent className="flex flex-col md:flex-row h-full w-full p-2 space-y-4 md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2 h-48 md:h-full">
                    <img
                      src={item.src}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col justify-center p-4 space-y-2">
                    <div className="flex items-center justify-start mb-2">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-5 w-5 ${
                            starIndex < Math.floor(item.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-white flex    ">
                      {item.title}
                    </h3>
                    <h4 className="text-sm text-gray-300 flex">{item.post}</h4>
                    <p className="text-sm text-gray-200 text-start flex">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

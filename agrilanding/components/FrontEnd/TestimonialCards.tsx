"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

type Slide = {
  id: number;
  src: string;
};

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides: Slide[] = [
    { id: 0, src: "/agri1.png" },
    { id: 1, src: "/agri2.png" },
    { id: 2, src: "/agri3.png" },
  ];

  const textColors = ["text-blue-500", "text-green-500", "text-red-500"];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [activeIndex]);

  return (
    <div className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`duration-700 ease-in-out absolute w-full h-full transition-opacity flex items-center justify-center ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </div>
        ))}
      </div>

      {/* Button container to wrap buttons and position them outside the carousel */}
      <div className="flex justify-between items-center mt-4">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70"
          onClick={handlePrev}
        >
          <ChevronLeft />
          <span className="sr-only">Previous</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:ring-4 focus:ring-white dark:focus:ring-gray-800/70"
          onClick={handleNext}
        >
          <ChevronRight />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

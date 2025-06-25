"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { SliderImage } from "../../Mocdata/data";

interface SliderProps {
  slides: SliderImage[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden shadow-2xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.url}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover" }}
              priority={index === 0}
              className="transition-transform duration-700"
            />
            {/* Cinema-themed gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Enhanced Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:text-red-400 cursor-pointer"
      >
        <svg
          className="w-8 h-8 drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer hover:text-red-400"
      >
        <svg
          className="w-8 h-8 drop-shadow-lg"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-red-500 to-yellow-400 shadow-lg"
                : "w-3 bg-white/50 hover:bg-white/70 hover:w-6"
            }`}
          />
        ))}
      </div>

      {/* Enhanced Overlay Content with current slide data */}
      <div className="absolute bottom-20 left-20 right-8 text-white z-10 w-[50%]">
        <div className="max-w w-[600px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-yellow-200 to-red-200 bg-clip-text text-transparent drop-shadow-2xl">
            {currentSlide?.title || "Welcome to Cinema"}
          </h2>
          <p className="text-lg md:text-2xl opacity-90 drop-shadow-lg font-medium">
            {currentSlide?.description || "Experience the magic of movies"}
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-red-500/25 transform hover:-translate-y-1">
              🎬 Watch Trailer
            </button>
            <button className="border-2 border-white/50 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300">
              📋 More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

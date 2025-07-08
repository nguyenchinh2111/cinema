import NewMovies from "../components/NewMovies/NewMovies";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero Slider Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <Carousel
          className="w-full h-full"
          autoplay={true}
          autoplayDelay={4000}
        >
          <CarouselContent className="h-full ml-0">
            <CarouselItem className="basis-full pl-0">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/film1.png"
                  alt="Film 1"
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/film2.png"
                  alt="Film 2"
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full pl-0">
              <div className="relative w-full h-[400px]">
                <Image
                  src="/images/film3.png"
                  alt="Film 3"
                  className="w-full h-full object-cover"
                  width={800}
                  height={400}
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 bg- border-none cursor-pointer" />
          <CarouselNext className="right-4 bg- border-none cursor-pointer" />
        </Carousel>
      </div>

      {/* New Movies Section */}
      <NewMovies />

      <Footer />
    </>
  );
}

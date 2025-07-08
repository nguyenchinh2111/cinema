import Slider from "../components/Slider/Slider";
import NewMovies from "../components/NewMovies/NewMovies";
import { cinemaData } from "../Mocdata/data";
import Footer from "@/components/Footer";
import Header from '../components/Header';
import Image from 'next/image';
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
      <div>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basic-1/3">
              <Image
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffptshop.com.vn%2Ftin-tuc%2Fdanh-gia%2Fposter-film-176175&psig=AOvVaw2A5SWgxVOS-MC1qBwd4aJ3&ust=1751970478704000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD5qeLEqo4DFQAAAAAdAAAAABAX"
                alt={""}
                width={800} // hoặc số phù hợp
                height={600}
              />
            </CarouselItem>
            <CarouselItem className="basic-1/3">
              <Image
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesigner.com.vn%2Fposter%2Fposter-phim-kinh-di&psig=AOvVaw2A5SWgxVOS-MC1qBwd4aJ3&ust=1751970478704000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD5qeLEqo4DFQAAAAAdAAAAABAv"
                alt={""}
                width={800} // hoặc số phù hợp
                height={600}
              />
            </CarouselItem>
            <CarouselItem className="basic-1/3">
              <Image
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpoulwebb.blogspot.com%2F2015%2F08%2Ffilm-posters-1960s-part-1.html&psig=AOvVaw2A5SWgxVOS-MC1qBwd4aJ3&ust=1751970478704000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJD5qeLEqo4DFQAAAAAdAAAAABA7"
                alt={""}
                width={800} // hoặc số phù hợp
                height={600}
              />
            </CarouselItem>
            <CarouselPrevious />
            <CarouselNext />
          </CarouselContent>
        </Carousel>
      </div>

      {/* New Movies Section */}
      <NewMovies />

      <Footer />
    </>
  );
}

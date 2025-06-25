import Slider from "../components/Slider/Slider";
import NewMovies from "../components/NewMovies/NewMovies";
import { cinemaData } from "../Mocdata/data";

export default function Home() {
  return (
    <>
      {/* Hero Slider Section */}
      <section className="mb-0">
        <Slider slides={cinemaData.sliderImages} />
      </section>

      {/* New Movies Section */}
      <NewMovies />
    </>
  );
}

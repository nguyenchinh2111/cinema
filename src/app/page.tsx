import Slider from "../components/Slider/Slider";
import NewMovies from "../components/NewMovies/NewMovies";
import { cinemaData } from "../Mocdata/data";
import Footer from "@/components/Footer";
import Header from '../components/Header';

export default function Home() {
  return (
    <>

      <Header />
      {/* Hero Slider Section */}
      <section className="mb-0">
        <Slider slides={cinemaData.sliderImages} />
      </section>

      {/* New Movies Section */}
      <NewMovies />

      <Footer />
    </>
  );
}

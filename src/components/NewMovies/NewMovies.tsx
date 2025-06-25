"use client";
import { useState } from "react";
import Image from "next/image";
import MovieCard from "../MovieCard/MovieCard";
import { cinemaData } from "../../Mocdata/cinemaData";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const NewMovies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"trending" | "new">("trending");
  const [isAnimating, setIsAnimating] = useState(false);
  const movies = cinemaData.newMovies;

  // Split movies into trending and new releases - limit to 4 each
  const trendingMovies = movies.slice(0, 4);
  const newReleases = movies.slice(4, 8);

  const currentMovies = activeTab === "trending" ? trendingMovies : newReleases;

  const handleTabChange = (tab: "trending" | "new") => {
    if (tab === activeTab || isAnimating) return;

    setIsAnimating(true);

    // Add delay for smooth transition
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 150);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-yellow-400 bg-clip-text text-transparent mb-6">
            🎬 Trending Now & New Releases
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the hottest trending movies and latest releases now showing
            in our premium cinema experience
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-700/50">
            <ButtonComponent
              onClick={() => handleTabChange("trending")}
              disabled={isAnimating}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === "trending"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl shadow-red-500/25"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer"
              } ${isAnimating ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              🔥 Trending Now
            </ButtonComponent>
            <ButtonComponent
              onClick={() => handleTabChange("new")}
              disabled={isAnimating}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ml-2 ${
                activeTab === "new"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-2xl shadow-red-500/25"
                  : "text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer"
              } ${isAnimating ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              ✨ New Releases
            </ButtonComponent>
          </div>
        </div>

        {/* Movies Grid */}
        <div className="relative min-h-[600px]">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12 transition-all duration-300 ${
              isAnimating
                ? "opacity-0 transform translate-y-4 scale-95"
                : "opacity-100 transform translate-y-0 scale-100"
            }`}
          >
            {currentMovies.map((movie, index) => (
              <div
                key={`${activeTab}-${movie.id}`}
                className={`transform transition-all duration-500 hover:scale-105 ${
                  isAnimating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                }`}
                style={{
                  transitionDelay: isAnimating ? "0ms" : `${index * 100}ms`,
                }}
              >
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                {activeTab === "trending"
                  ? trendingMovies.length
                  : newReleases.length}
              </div>
              <div className="text-gray-300">
                {activeTab === "trending" ? "Trending Movies" : "New Releases"}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                4.8★
              </div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
                Premium
              </div>
              <div className="text-gray-300">Cinema Experience</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <ButtonComponent className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 text-lg shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 border border-red-500/20 cursor-pointer">
            🎭 View All Movies
          </ButtonComponent>
        </div>

        {/* Watch Trailers Section */}
        <div className="mb-16 mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              🎥 Watch Trailers
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get a sneak peek of the most anticipated movies with exclusive
              trailers
            </p>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-yellow-400 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Trailer 1 */}
            <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    movies[0]?.poster ||
                    "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=800&h=450&fit=crop"
                  }
                  alt={movies[0]?.title || "Featured Movie"}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-red-600/90 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/20">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {movies[0]?.title || "Avatar: The Way of Water"}
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  {movies[0]?.genre || "Sci-Fi, Adventure"} •{" "}
                  {movies[0]?.duration || "3h 12m"}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-semibold">
                      {movies[0]?.rating || "8.5"}
                    </span>
                  </div>
                  <button className="text-red-400 hover:text-red-300 font-semibold text-sm transition-colors">
                    Watch Now →
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Trailer 2 */}
            <div className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={
                    movies[1]?.poster ||
                    "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=450&fit=crop"
                  }
                  alt={movies[1]?.title || "Featured Movie"}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <button className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-20 bg-red-600/90 hover:bg-red-500 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/20">
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {movies[1]?.title || "Top Gun: Maverick"}
                </h4>
                <p className="text-gray-300 text-sm mb-3">
                  {movies[1]?.genre || "Action, Drama"} •{" "}
                  {movies[1]?.duration || "2h 17m"}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-semibold">
                      {movies[1]?.rating || "9.2"}
                    </span>
                  </div>
                  <button className="text-red-400 hover:text-red-300 font-semibold text-sm transition-colors">
                    Watch Now →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewMovies;

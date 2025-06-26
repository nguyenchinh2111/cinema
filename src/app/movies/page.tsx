"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cinemaData } from "../../Mocdata/cinemaData";

export default function MoviesPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  // Extract unique genres from movies
  const genres = [
    "All",
    ...new Set(
      cinemaData.allMovies.flatMap((movie) =>
        movie.genre.split(", ").map((g) => g.trim())
      )
    ),
  ];

  // Filter and sort movies
  const filteredMovies = cinemaData.allMovies
    .filter((movie) => {
      const matchesGenre =
        selectedGenre === "All" || movie.genre.includes(selectedGenre);
      const matchesSearch = movie.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesGenre && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "title":
          return a.title.localeCompare(b.title);
        case "releaseDate":
          return (
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
          );
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            🎬 Now Showing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the latest blockbusters, timeless classics, and exclusive
            premieres at your favorite cinema destination
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50 focus:bg-gray-800/70 transition-all duration-300"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-red-500/50 transition-all duration-300 appearance-none pr-12"
              >
                <option value="rating">Sort by Rating</option>
                <option value="title">Sort by Title</option>
                <option value="releaseDate">Sort by Release Date</option>
              </select>
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Genre Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedGenre === genre
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/25 transform scale-105"
                    : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700/50 hover:border-red-500/30"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {filteredMovies.length} Movies Found
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>

          {filteredMovies.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎭</div>
              <h3 className="text-2xl font-bold text-gray-300 mb-2">
                No movies found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMovies.map((movie, index) => (
                <div
                  key={movie.id}
                  className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-500/20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Movie Poster */}
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-yellow-500/90 text-black px-2 py-1 rounded-full text-sm font-bold backdrop-blur-sm flex items-center gap-1">
                        ⭐ {movie.rating}
                      </div>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-red-600/80 hover:bg-red-600 text-white p-4 rounded-full backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Movie Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-200 line-clamp-1 overflow-hidden text-ellipsis">
                      {movie.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-300 text-sm">{movie.genre}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>🕐 {movie.duration}</span>
                        <span>
                          📅 {new Date(movie.releaseDate).getFullYear()}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link href={`/movies/${movie.id}`} className="flex-1">
                        <button className="w-full bg-gradient-to-r from-red-600/20 to-orange-600/20 hover:from-red-600 hover:to-orange-600 text-red-400 hover:text-white px-4 py-3 rounded-xl font-semibold transition-all duration-300 border border-red-500/30 hover:border-red-500 text-sm">
                          View Details
                        </button>
                      </Link>
                      <Link href={`/tickets?movieId=${movie.id}`}>
                        <button className="bg-gray-700/50 hover:bg-gray-600/50 text-gray-300 hover:text-white px-4 py-3 rounded-xl transition-all duration-300 border border-gray-600/30 hover:border-gray-500">
                          🎫
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl p-8 md:p-12 border border-gray-700/50">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              🎟️ Ready to Watch?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your tickets now and enjoy the ultimate cinema experience
              with premium seating, cutting-edge sound, and crystal-clear
              visuals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/showtimes">
                <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1">
                  View Showtimes
                </button>
              </Link>
              <Link href="/tickets">
                <button className="bg-transparent border-2 border-red-500/50 hover:border-red-500 text-red-400 hover:text-white hover:bg-red-500/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Book Tickets
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cinemaData } from "../../../Mocdata/cinemaData";

// Extended movie data for detail page
const movieDetails = {
  1: {
    ...cinemaData.allMovies.find((m) => m.id === 1),
    description:
      "Set more than a decade after the events of the first film, Avatar: The Way of Water begins to tell the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    director: "James Cameron",
    cast: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney Weaver",
      "Stephen Lang",
      "Kate Winslet",
    ],
    trailerUrl: "https://www.youtube.com/embed/d9MyW72ELq0",
    backgroundImage:
      "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=1400&h=800&fit=crop",
    showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
    ageRating: "PG-13",
    language: "English",
  },
  2: {
    ...cinemaData.allMovies.find((m) => m.id === 2),
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
    director: "Joseph Kosinski",
    cast: [
      "Tom Cruise",
      "Miles Teller",
      "Jennifer Connelly",
      "Jon Hamm",
      "Glen Powell",
    ],
    trailerUrl: "https://www.youtube.com/embed/giXco2jaZ_4",
    backgroundImage:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=1400&h=800&fit=crop",
    showtimes: ["11:00 AM", "2:30 PM", "6:00 PM", "9:30 PM"],
    ageRating: "PG-13",
    language: "English",
  },
  3: {
    ...cinemaData.allMovies.find((m) => m.id === 3),
    description:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    director: "Joaquim Dos Santos",
    cast: [
      "Shameik Moore",
      "Hailee Steinfeld",
      "Brian Tyree Henry",
      "Luna Lauren Vélez",
      "Jake Johnson",
    ],
    trailerUrl: "https://www.youtube.com/embed/cqGjhVJWtEg",
    backgroundImage:
      "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=1400&h=800&fit=crop",
    showtimes: ["10:30 AM", "1:00 PM", "4:30 PM", "7:30 PM", "10:00 PM"],
    ageRating: "PG",
    language: "English",
  },
  4: {
    ...cinemaData.allMovies.find((m) => m.id === 4),
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb. A biographical thriller that chronicles the enigmatic physicist's journey during the Manhattan Project.",
    director: "Christopher Nolan",
    cast: [
      "Cillian Murphy",
      "Emily Blunt",
      "Matt Damon",
      "Robert Downey Jr.",
      "Florence Pugh",
    ],
    trailerUrl: "https://www.youtube.com/embed/uYPbbksJxIg",
    backgroundImage:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1400&h=800&fit=crop",
    showtimes: ["12:00 PM", "4:00 PM", "8:00 PM"],
    ageRating: "R",
    language: "English",
  },
  5: {
    ...cinemaData.allMovies.find((m) => m.id === 5),
    description:
      "Peter Quill must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    director: "James Gunn",
    cast: [
      "Chris Pratt",
      "Zoe Saldana",
      "Dave Bautista",
      "Karen Gillan",
      "Bradley Cooper",
    ],
    trailerUrl: "https://www.youtube.com/embed/u3V5KDHRQvk",
    backgroundImage:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1400&h=800&fit=crop",
    showtimes: ["11:30 AM", "3:00 PM", "6:30 PM", "9:45 PM"],
    ageRating: "PG-13",
    language: "English",
  },
};

interface MovieDetailPageProps {
  params: {
    id: string;
  };
}

export default function MovieDetailPage({ params }: MovieDetailPageProps) {
  const [selectedShowtime, setSelectedShowtime] = useState<string>("");
  const [activeTab, setActiveTab] = useState("overview");

  const movieId = parseInt(params.id);
  const movie = movieDetails[movieId as keyof typeof movieDetails];

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🎬</div>
          <h1 className="text-3xl font-bold text-white mb-4">
            Movie Not Found
          </h1>
          <p className="text-gray-400 mb-8">
            The movie you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/movies">
            <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Back to Movies
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section with Background */}
      <section className="relative h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={movie.backgroundImage || movie.poster}
            alt={movie.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              {/* Movie Poster */}
              <div className="lg:col-span-1">
                <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0 group">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-red-500/50 transition-colors duration-300"></div>
                </div>
              </div>

              {/* Movie Info */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="mb-4">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold border border-red-500/30">
                    {movie.ageRating}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                  {movie.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    ⭐{" "}
                    <span className="text-yellow-400 font-bold">
                      {movie.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    🕐 <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    📅 <span>{new Date(movie.releaseDate).getFullYear()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    🗣️ <span>{movie.language}</span>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
                  {movie.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href={`/tickets?movieId=${movieId}`}>
                    <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:-translate-y-1">
                      🎫 Book Tickets
                    </button>
                  </Link>
                  <button className="bg-gray-800/50 border border-gray-700/50 hover:border-red-500/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-700/50">
                    ▶️ Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            {[
              { id: "overview", label: "Overview", icon: "📖" },
              { id: "cast", label: "Cast & Crew", icon: "🎭" },
              { id: "showtimes", label: "Showtimes", icon: "🕐" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/25"
                    : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700/50"
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-2xl p-8 border border-gray-700/50">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Movie Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Genre
                      </h3>
                      <p className="text-gray-300">{movie.genre}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Director
                      </h3>
                      <p className="text-gray-300">{movie.director}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Release Date
                      </h3>
                      <p className="text-gray-300">
                        {movie.releaseDate
                          ? new Date(movie.releaseDate).toLocaleDateString()
                          : "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Duration
                      </h3>
                      <p className="text-gray-300">{movie.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Rating
                      </h3>
                      <p className="text-gray-300">{movie.ageRating}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">
                        Language
                      </h3>
                      <p className="text-gray-300">{movie.language}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "cast" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Cast & Crew
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-4">
                      Director
                    </h3>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30">
                      <p className="text-white font-semibold">
                        {movie.director}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-4">
                      Main Cast
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {movie.cast?.map((actor, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/30 hover:border-red-500/30 transition-colors duration-300"
                        >
                          <p className="text-white font-semibold">{actor}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "showtimes" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Today&apos;s Showtimes
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {movie.showtimes?.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedShowtime(time)}
                      className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                        selectedShowtime === time
                          ? "bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg shadow-red-500/25"
                          : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-700/50 hover:border-red-500/30"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                {selectedShowtime && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-xl border border-red-500/30">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Selected Showtime
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {selectedShowtime} - {movie.title}
                    </p>
                    <Link
                      href={`/tickets?movieId=${movieId}&showtime=${encodeURIComponent(
                        selectedShowtime
                      )}`}
                    >
                      <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                        Book This Showtime
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Movies */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cinemaData.allMovies
              .filter((m) => m.id !== movieId)
              .slice(0, 4)
              .map((relatedMovie) => (
                <Link key={relatedMovie.id} href={`/movies/${relatedMovie.id}`}>
                  <div className="group bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative aspect-[2/3]">
                      <Image
                        src={relatedMovie.poster}
                        alt={relatedMovie.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="bg-yellow-500/90 text-black px-2 py-1 rounded-full text-sm font-bold">
                          ⭐ {relatedMovie.rating}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-semibold line-clamp-2 group-hover:text-red-400 transition-colors duration-300">
                        {relatedMovie.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {relatedMovie.genre}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Image from "next/image";
import { Movie } from "../../Mocdata/data";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden hover:shadow-4xl hover:border-red-600 transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={movie.poster}
          alt={movie.title}
          fill
          style={{ objectFit: "cover" }}
          className="group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
        <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ⭐ {movie.rating}
        </div>
      </div>

      <div className="p-5 bg-gray-900">
        <h3
          className="text-xl font-bold mb-3 text-white truncate hover:text-clip group-hover:text-red-400 transition-colors duration-200"
          title={movie.title}
        >
          {movie.title}
        </h3>

        <div className="space-y-2 text-sm text-gray-300">
          <p className="flex items-center">
            <span className="font-medium text-red-400 mr-2">🎭</span>
            <span className="text-gray-400">Genre:</span>
            <span className="ml-2 text-white">{movie.genre}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium text-red-400 mr-2">⏱️</span>
            <span className="text-gray-400">Duration:</span>
            <span className="ml-2 text-white">{movie.duration}</span>
          </p>
          <p className="flex items-center">
            <span className="font-medium text-red-400 mr-2">📅</span>
            <span className="text-gray-400">Release:</span>
            <span className="ml-2 text-white">{movie.releaseDate}</span>
          </p>
        </div>

        <div className="mt-5 space-y-3">
          <ButtonComponent
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            text="🎫 Book Tickets"
          />
          <ButtonComponent
            className="w-full border-2 border-gray-600 hover:border-red-500 bg-transparent hover:bg-red-500/10 text-gray-300 hover:text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium cursor-pointer"
            text="▶️ Watch Trailer"
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

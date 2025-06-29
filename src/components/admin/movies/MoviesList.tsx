"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { DialogCreateMovie } from "./DialogCreateMovie/DialogCreateMovie";

interface Movie {
  id: string;
  title: string;
  genre: string;
  duration: number;
  status: "active" | "inactive";
  rating: number;
  releaseDate: string;
  director: string;
}

const sampleMovies: Movie[] = [
  {
    id: "1",
    title: "Avatar: The Way of Water",
    genre: "Sci-Fi",
    duration: 192,
    status: "active",
    rating: 8.5,
    releaseDate: "2022-12-16",
    director: "James Cameron",
  },
  {
    id: "2",
    title: "Top Gun: Maverick",
    genre: "Action",
    duration: 130,
    status: "active",
    rating: 8.8,
    releaseDate: "2022-05-27",
    director: "Joseph Kosinski",
  },
  {
    id: "3",
    title: "Black Panther: Wakanda Forever",
    genre: "Action",
    duration: 161,
    status: "inactive",
    rating: 7.2,
    releaseDate: "2022-11-11",
    director: "Ryan Coogler",
  },
  {
    id: "4",
    title: "Spider-Man: No Way Home",
    genre: "Action",
    duration: 148,
    status: "active",
    rating: 8.4,
    releaseDate: "2021-12-17",
    director: "Jon Watts",
  },
  {
    id: "5",
    title: "The Batman",
    genre: "Action",
    duration: 176,
    status: "active",
    rating: 7.8,
    releaseDate: "2022-03-04",
    director: "Matt Reeves",
  },
  {
    id: "6",
    title: "Doctor Strange in the Multiverse of Madness",
    genre: "Action",
    duration: 126,
    status: "inactive",
    rating: 6.9,
    releaseDate: "2022-05-06",
    director: "Sam Raimi",
  },
  {
    id: "7",
    title: "Jurassic World Dominion",
    genre: "Adventure",
    duration: 147,
    status: "active",
    rating: 5.6,
    releaseDate: "2022-06-10",
    director: "Colin Trevorrow",
  },
  {
    id: "8",
    title: "Minions: The Rise of Gru",
    genre: "Animation",
    duration: 87,
    status: "active",
    rating: 6.5,
    releaseDate: "2022-07-01",
    director: "Kyle Balda",
  },
  {
    id: "9",
    title: "Thor: Love and Thunder",
    genre: "Action",
    duration: 119,
    status: "inactive",
    rating: 6.2,
    releaseDate: "2022-07-08",
    director: "Taika Waititi",
  },
  {
    id: "10",
    title: "Nope",
    genre: "Horror",
    duration: 130,
    status: "active",
    rating: 6.8,
    releaseDate: "2022-07-22",
    director: "Jordan Peele",
  },
  {
    id: "11",
    title: "Bullet Train",
    genre: "Action",
    duration: 127,
    status: "active",
    rating: 7.3,
    releaseDate: "2022-08-05",
    director: "David Leitch",
  },
  {
    id: "12",
    title: "Elvis",
    genre: "Biography",
    duration: 159,
    status: "inactive",
    rating: 7.3,
    releaseDate: "2022-06-24",
    director: "Baz Luhrmann",
  },
];

export function MoviesList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage] = useState(5);

  // Filter movies based on search term
  const filteredMovies = sampleMovies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = filteredMovies.slice(startIndex, endIndex);

  // Reset to first page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const getStatusBadge = (status: Movie["status"]) => (
    <span
      className={`px-2 py-1 text-xs rounded-full ${
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1E201E]">
            Movies Management
          </h2>
          <p className="text-[#1E201E]">Manage all movies in your cinema.</p>
        </div>
        <DialogCreateMovie
          onMovieCreated={(movie) => {
            console.log("New movie created:", movie);
            // Here you can add the logic to update the movies list
            // For example, refetch data or add to local state
          }}
        />
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white text-[#1E201E] border-gray-300"
          />
        </div>
        <div className="text-sm text-[#1E201E]">
          {filteredMovies.length} movie(s) found
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-lg border border-gray-300 bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#1E201E]">Title</TableHead>
              <TableHead className="text-[#1E201E]">Genre</TableHead>
              <TableHead className="text-[#1E201E]">Director</TableHead>
              <TableHead className="text-[#1E201E]">Duration</TableHead>
              <TableHead className="text-[#1E201E]">Rating</TableHead>
              <TableHead className="text-[#1E201E]">Release Date</TableHead>
              <TableHead className="text-[#1E201E]">Status</TableHead>
              <TableHead className="text-right text-[#1E201E]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentMovies.length > 0 ? (
              currentMovies.map((movie) => (
                <TableRow key={movie.id} className="border-gray-200">
                  <TableCell className="font-medium text-[#1E201E]">
                    {movie.title}
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {movie.genre}
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {movie.director}
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {movie.duration} min
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {movie.rating}/10
                  </TableCell>
                  <TableCell className="text-[#1E201E]">
                    {new Date(movie.releaseDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{getStatusBadge(movie.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-24 text-center text-[#1E201E]"
                >
                  No movies found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-[#1E201E]">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredMovies.length)} of{" "}
            {filteredMovies.length} entries
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 p-0 ${
                      currentPage === page
                        ? "bg-gray-800 text-white"
                        : "bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
                    }`}
                  >
                    {page}
                  </Button>
                )
              )}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="bg-[#B6B09F] text-[#1E201E] border-[#B6B09F] hover:bg-[#B6B09F]/80 hover:text-[#1E201E]"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

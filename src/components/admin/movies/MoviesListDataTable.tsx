"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "../DataTable";
import { Plus, Edit, Trash2 } from "lucide-react";

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

export function MoviesListDataTable() {
  const getStatusBadge = (status: Movie["status"]) => (
    <span
      className={`px-2 py-1 text-xs rounded-full ${
        status === "active"
          ? "bg-green-100 text-green-800"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      {status}
    </span>
  );

  const columns = [
    {
      key: "title" as keyof Movie,
      header: "Title",
      render: (value: Movie[keyof Movie]) => (
        <span className="font-medium">{String(value)}</span>
      ),
    },
    {
      key: "genre" as keyof Movie,
      header: "Genre",
    },
    {
      key: "director" as keyof Movie,
      header: "Director",
    },
    {
      key: "duration" as keyof Movie,
      header: "Duration",
      render: (value: Movie[keyof Movie]) => `${value} min`,
    },
    {
      key: "rating" as keyof Movie,
      header: "Rating",
      render: (value: Movie[keyof Movie]) => `${value}/10`,
    },
    {
      key: "releaseDate" as keyof Movie,
      header: "Release Date",
      render: (value: Movie[keyof Movie]) =>
        new Date(String(value)).toLocaleDateString(),
    },
    {
      key: "status" as keyof Movie,
      header: "Status",
      render: (value: Movie[keyof Movie]) =>
        getStatusBadge(value as Movie["status"]),
    },
    {
      key: "id" as keyof Movie,
      header: "Actions",
      className: "text-right",
      render: () => (
        <div className="flex items-center justify-end space-x-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Movies Management
          </h2>
          <p className="text-muted-foreground">
            Manage all movies in your cinema using DataTable.
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Movie
        </Button>
      </div>

      <DataTable
        data={sampleMovies}
        columns={columns}
        searchableFields={["title", "genre", "director"]}
        itemsPerPage={5}
        searchPlaceholder="Search movies by title, genre, or director..."
      />
    </div>
  );
}

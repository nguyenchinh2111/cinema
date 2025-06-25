// Interface definitions for cinema data
export interface Movie {
  id: number;
  title: string;
  poster: string;
  genre: string;
  duration: string;
  rating: number;
  releaseDate: string;
}

export interface SliderImage {
  id: number;
  url: string;
  alt: string;
  title?: string;
  description?: string;
}

// Mock cinema data
export const cinemaData = {
  // Slider images for homepage
  sliderImages: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=1200&h=600&fit=crop",
      alt: "Movie theater interior",
      title: "Experience Cinema",
      description: "Premium movie experience",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=1200&h=600&fit=crop",
      alt: "Cinema screen",
      title: "Big Screen Magic",
      description: "Latest blockbusters",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1200&h=600&fit=crop",
      alt: "Movie poster wall",
      title: "Now Showing",
      description: "All the latest releases",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
      alt: "Cinema lobby",
      title: "Welcome to Cinema",
      description: "Your entertainment destination",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=1200&h=600&fit=crop",
      alt: "Movie screening",
      title: "Premium Experience",
      description: "State-of-the-art technology",
    },
  ],

  // New movies this week
  newMovies: [
    {
      id: 1,
      title: "Avatar: The Way of Water",
      poster:
        "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=400&h=600&fit=crop",
      genre: "Sci-Fi, Adventure",
      duration: "3h 12m",
      rating: 8.5,
      releaseDate: "2024-06-20",
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      poster:
        "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
      genre: "Action, Drama",
      duration: "2h 17m",
      rating: 9.2,
      releaseDate: "2024-06-21",
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      poster:
        "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=400&h=600&fit=crop",
      genre: "Animation, Action",
      duration: "2h 20m",
      rating: 8.8,
      releaseDate: "2024-06-22",
    },
    {
      id: 4,
      title: "Oppenheimer",
      poster:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
      genre: "Biography, Drama",
      duration: "3h 0m",
      rating: 8.9,
      releaseDate: "2024-06-23",
    },
    {
      id: 5,
      title: "Guardians of the Galaxy Vol. 3",
      poster:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
      genre: "Action, Adventure",
      duration: "2h 30m",
      rating: 8.3,
      releaseDate: "2024-06-24",
    },
    {
      id: 6,
      title: "The Little Mermaid",
      poster:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
      genre: "Family, Musical",
      duration: "2h 15m",
      rating: 7.8,
      releaseDate: "2024-06-25",
    },
    {
      id: 7,
      title: "Fast X",
      poster:
        "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=400&h=600&fit=crop",
      genre: "Action, Thriller",
      duration: "2h 21m",
      rating: 7.9,
      releaseDate: "2024-06-26",
    },
    {
      id: 8,
      title: "Indiana Jones 5",
      poster:
        "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
      genre: "Adventure, Action",
      duration: "2h 34m",
      rating: 8.1,
      releaseDate: "2024-06-27",
    },
    {
      id: 9,
      title: "Transformers: Rise of the Beasts",
      poster:
        "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=400&h=600&fit=crop",
      genre: "Sci-Fi, Action",
      duration: "2h 7m",
      rating: 7.6,
      releaseDate: "2024-06-28",
    },
    {
      id: 10,
      title: "The Flash",
      poster:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
      genre: "Superhero, Action",
      duration: "2h 24m",
      rating: 8.0,
      releaseDate: "2024-06-29",
    },
  ],

  // All movies (can include more movies for different sections)
  allMovies: [
    {
      id: 1,
      title: "Avatar: The Way of Water",
      poster:
        "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=400&h=600&fit=crop",
      genre: "Sci-Fi, Adventure",
      duration: "3h 12m",
      rating: 8.5,
      releaseDate: "2024-06-20",
    },
    {
      id: 2,
      title: "Top Gun: Maverick",
      poster:
        "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
      genre: "Action, Drama",
      duration: "2h 17m",
      rating: 9.2,
      releaseDate: "2024-06-21",
    },
    {
      id: 3,
      title: "Spider-Man: Across the Spider-Verse",
      poster:
        "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=400&h=600&fit=crop",
      genre: "Animation, Action",
      duration: "2h 20m",
      rating: 8.8,
      releaseDate: "2024-06-22",
    },
    {
      id: 4,
      title: "Oppenheimer",
      poster:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
      genre: "Biography, Drama",
      duration: "3h 0m",
      rating: 8.9,
      releaseDate: "2024-06-23",
    },
    {
      id: 5,
      title: "Guardians of the Galaxy Vol. 3",
      poster:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=400&h=600&fit=crop",
      genre: "Action, Adventure",
      duration: "2h 30m",
      rating: 8.3,
      releaseDate: "2024-06-24",
    },
    {
      id: 6,
      title: "The Little Mermaid",
      poster:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop",
      genre: "Family, Musical",
      duration: "2h 15m",
      rating: 7.8,
      releaseDate: "2024-06-25",
    },
    {
      id: 7,
      title: "John Wick: Chapter 4",
      poster:
        "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
      genre: "Action, Thriller",
      duration: "2h 49m",
      rating: 8.7,
      releaseDate: "2024-06-15",
    },
    {
      id: 8,
      title: "The Super Mario Bros. Movie",
      poster:
        "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=400&h=600&fit=crop",
      genre: "Animation, Family",
      duration: "1h 32m",
      rating: 7.9,
      releaseDate: "2024-06-10",
    },
  ],
};

// Export default data object for backward compatibility
export default cinemaData;

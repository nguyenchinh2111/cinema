// Interface definitions
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

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

// Mock data for cinema application
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

  // Blog posts data
  blogPosts: [
    {
      id: 1,
      title: "The Evolution of Cinema Technology: From Film to Digital",
      excerpt:
        "Explore how cinema technology has transformed the movie-watching experience over the decades, from traditional film to cutting-edge digital projection.",
      content: `
        <p>The world of cinema has undergone a remarkable transformation over the past century. From the early days of silent films projected on crude screens to today's immersive digital experiences, technology has continuously reshaped how we consume and create movies.</p>
        
        <h2>The Film Era</h2>
        <p>Traditional film projection dominated cinema for nearly a century. The mechanical precision required to project 35mm film at exactly 24 frames per second created the magical illusion of movement that captivated audiences worldwide.</p>
        
        <h2>The Digital Revolution</h2>
        <p>The transition to digital projection in the 2000s marked a paradigm shift. Digital projectors offered several advantages:</p>
        <ul>
          <li>Consistent image quality throughout the film's run</li>
          <li>No film degradation over time</li>
          <li>Easier distribution and lower shipping costs</li>
          <li>Enhanced capabilities for 3D and high frame rate content</li>
        </ul>
        
        <h2>Modern Innovations</h2>
        <p>Today's cinema technology continues to evolve with 4K projection, laser projection systems, immersive audio technologies like Dolby Atmos, and even experimental formats like high frame rate filming.</p>
        
        <p>As we look to the future, virtual reality and augmented reality promise to once again revolutionize how we experience stories on the big screen.</p>
      `,
      author: "Cinema Tech Team",
      publishDate: "2024-06-20",
      readTime: "5 min read",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=1200&h=600&fit=crop",
      tags: ["Technology", "Cinema", "Digital"],
    },
    {
      id: 2,
      title: "Top 10 Must-Watch Movies This Summer",
      excerpt:
        "Discover the hottest blockbusters and hidden gems hitting theaters this summer season. From action-packed adventures to heartwarming dramas.",
      content: `
        <p>Summer 2024 brings an incredible lineup of films that promise to deliver entertainment for every type of moviegoer. From superhero spectacles to intimate dramas, this season has something special in store.</p>
        
        <h2>Blockbuster Highlights</h2>
        <p>This summer's biggest releases include highly anticipated sequels and original stories that are set to dominate the box office:</p>
        <ul>
          <li><strong>Avatar: The Way of Water</strong> - The long-awaited sequel brings stunning underwater visuals</li>
          <li><strong>Top Gun: Maverick</strong> - Tom Cruise returns in this high-octane aerial adventure</li>
          <li><strong>Spider-Man: Across the Spider-Verse</strong> - Animated excellence with multiverse storytelling</li>
        </ul>
        
        <h2>Hidden Gems</h2>
        <p>Don't overlook these smaller films that offer unique perspectives and innovative storytelling techniques. Independent cinema continues to push boundaries and offer fresh narratives.</p>
        
        <p>Whether you're looking for escapist entertainment or thought-provoking cinema, this summer's movie lineup delivers on all fronts.</p>
      `,
      author: "Movie Critics",
      publishDate: "2024-06-18",
      readTime: "8 min read",
      category: "Reviews",
      image:
        "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=1200&h=600&fit=crop",
      tags: ["Movies", "Summer", "Reviews"],
    },
    {
      id: 3,
      title: "Behind the Scenes: How Modern Movies Are Made",
      excerpt:
        "Take a deep dive into the filmmaking process, from pre-production planning to post-production magic that brings stories to life.",
      content: `
        <p>The art of filmmaking has evolved dramatically with advances in technology, but the fundamental storytelling principles remain unchanged. Today's movies are the result of countless hours of planning, creativity, and technical expertise.</p>
        
        <h2>Pre-Production: Where It All Begins</h2>
        <p>Before cameras roll, months or even years of preparation take place:</p>
        <ul>
          <li>Script development and storyboarding</li>
          <li>Location scouting and set design</li>
          <li>Casting and rehearsals</li>
          <li>Technical planning and equipment preparation</li>
        </ul>
        
        <h2>Production: Bringing Vision to Life</h2>
        <p>The filming phase is where all the planning comes together. Modern productions utilize cutting-edge cameras, lighting equipment, and on-set technology to capture the director's vision.</p>
        
        <h2>Post-Production: The Magic Happens</h2>
        <p>Visual effects, color grading, sound design, and editing transform raw footage into the polished films we see in theaters. This phase can take longer than the actual filming.</p>
      `,
      author: "Film Industry Insider",
      publishDate: "2024-06-15",
      readTime: "12 min read",
      category: "Industry",
      image:
        "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=1200&h=600&fit=crop",
      tags: ["Filmmaking", "Industry", "Behind the Scenes"],
    },
    {
      id: 4,
      title: "The Art of Movie Theater Design",
      excerpt:
        "Learn about the architectural and acoustic considerations that go into creating the perfect cinema experience for moviegoers.",
      content: `
        <p>Movie theater design is a specialized field that combines architecture, acoustics, and psychology to create spaces that enhance the cinematic experience. Every element, from seating to lighting, is carefully planned.</p>
        
        <h2>Acoustic Engineering</h2>
        <p>Sound is crucial to the movie experience. Theater designers work with acoustic engineers to:</p>
        <ul>
          <li>Minimize external noise interference</li>
          <li>Optimize sound distribution throughout the space</li>
          <li>Design walls and surfaces to prevent echo and distortion</li>
          <li>Integrate advanced sound systems like Dolby Atmos</li>
        </ul>
        
        <h2>Visual Considerations</h2>
        <p>The visual design focuses on creating the perfect viewing environment with proper sight lines, screen positioning, and ambient lighting that doesn't interfere with the projection.</p>
        
        <h2>Comfort and Accessibility</h2>
        <p>Modern theaters prioritize comfort with luxurious seating, adequate legroom, and accessibility features for all patrons.</p>
      `,
      author: "Design Team",
      publishDate: "2024-06-12",
      readTime: "6 min read",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&h=600&fit=crop",
      tags: ["Design", "Architecture", "Experience"],
    },
    {
      id: 5,
      title: "Streaming vs Cinema: The Future of Movie Watching",
      excerpt:
        "Analyzing the ongoing debate between streaming platforms and traditional cinema experiences, and what the future holds.",
      content: `
        <p>The entertainment landscape has been transformed by streaming platforms, creating an ongoing debate about the future of traditional cinema. Both mediums offer unique advantages and face distinct challenges.</p>
        
        <h2>The Streaming Revolution</h2>
        <p>Streaming platforms have revolutionized content consumption with:</p>
        <ul>
          <li>Instant access to vast libraries of content</li>
          <li>Personalized recommendations and algorithms</li>
          <li>Original content and exclusive releases</li>
          <li>Flexibility to watch anytime, anywhere</li>
        </ul>
        
        <h2>The Cinema Experience</h2>
        <p>Traditional theaters continue to offer irreplaceable experiences:</p>
        <ul>
          <li>Immersive large-screen viewing</li>
          <li>Superior audio systems and acoustic design</li>
          <li>Social shared experience</li>
          <li>Latest releases and premium formats</li>
        </ul>
        
        <h2>The Future Landscape</h2>
        <p>Rather than one replacing the other, we're likely to see continued coexistence with each medium serving different viewing preferences and occasions.</p>
      `,
      author: "Industry Analyst",
      publishDate: "2024-06-10",
      readTime: "10 min read",
      category: "Industry",
      image:
        "https://images.unsplash.com/photo-1635863138275-d9864f959d1f?w=1200&h=600&fit=crop",
      tags: ["Streaming", "Cinema", "Future"],
    },
    {
      id: 6,
      title: "Creating the Perfect Movie Night Experience",
      excerpt:
        "Tips and tricks for enhancing your cinema visits, from choosing the best seats to picking the perfect snacks.",
      content: `
        <p>A great movie experience goes beyond just the film itself. From pre-planning to post-movie discussions, every aspect can be optimized for maximum enjoyment.</p>
        
        <h2>Choosing Your Seats</h2>
        <p>Seat selection can make or break your viewing experience:</p>
        <ul>
          <li>Center seats offer the best audio balance</li>
          <li>Two-thirds back from the screen provides optimal viewing angle</li>
          <li>Aisle seats offer easier access but may have distractions</li>
          <li>Premium seating options enhance comfort</li>
        </ul>
        
        <h2>Timing Your Visit</h2>
        <p>Consider showtime carefully - evening shows offer atmosphere while matinees provide better value and smaller crowds.</p>
        
        <h2>Snack Strategy</h2>
        <p>Cinema snacks are part of the experience. Consider sharing large portions and staying hydrated, but remember that crunchy snacks during quiet scenes can be disruptive.</p>
        
        <h2>Group Dynamics</h2>
        <p>When going with others, discuss expectations beforehand - some prefer complete silence while others enjoy commenting and reactions.</p>
      `,
      author: "Cinema Experience Team",
      publishDate: "2024-06-08",
      readTime: "4 min read",
      category: "Tips",
      image:
        "https://images.unsplash.com/photo-1489599651485-4d0b7b7ca0ad?w=1200&h=600&fit=crop",
      tags: ["Tips", "Experience", "Entertainment"],
    },
  ],
};

// Export default data object for backward compatibility
export default cinemaData;

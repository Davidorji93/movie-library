import React, { useState, useEffect } from "react";
import { Movie } from "../types";
import Link from "next/link";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  // Check if the movie is already in favorites from localStorage
  const [isFavorite, setIsFavorite] = useState<boolean>(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.some((fav: Movie) => fav.id === movie.id);
  });

  // Handle adding/removing movie from favorites
  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      // Remove the movie from favorites
      favorites = favorites.filter((fav: Movie) => fav.id !== movie.id);
    } else {
      // Add the movie to favorites
      favorites.push(movie);
    }

    // Update the state and localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="cursor-pointer border rounded p-2 hover:shadow-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-2"
        />
        <h2 className="font-bold text-lg">{movie.title}</h2>
        <p>Release: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        
        {/* Add the "Favorite" button */}
        <button 
          onClick={toggleFavorite} 
          className={`mt-2 p-1 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-500'}`}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </Link>
  );
};

export default MovieCard;

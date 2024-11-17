import { useEffect, useState } from 'react';
import { Movie } from './types/index';
import MovieCard from './components/MovieCard';

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movie: Movie) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movie.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">My Favorite Movies</h1>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {favorites.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFromFavorites(movie)}
                className="absolute top-2 right-2 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies yet!</p>
      )}
    </div>
  );
};

export default Favorites;

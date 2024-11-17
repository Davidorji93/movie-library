import { GetServerSideProps } from 'next';
import { fetchMovieDetails } from '../utils/api'; // Corrected import
import { Movie } from '../types/index';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
    if (!movie) {
      return <div className="p-4">Movie not found.</div>;
    }
  
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded mb-4"
        />
        <p>{movie.overview}</p>
        <div>
          <h2 className="font-bold mt-4">Genres:</h2>
          <ul>
            {movie.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
  
    try {
      const movie = await fetchMovieDetails(Number(id));
      return { props: { movie } };
    } catch (error) {
      console.error(`Error fetching movie details for ID ${id}:`);
      return { notFound: true }; 
    }
  };
  

export default MovieDetails;

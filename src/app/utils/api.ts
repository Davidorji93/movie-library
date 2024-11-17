import axios from 'axios';
import { Movie } from '../types'; 
const TMDB_API_KEY = '2f4ad2beb3c50f81d059a886230529cc';
const API_URL = 'https://api.themoviedb.org/3/movie';

// Fetch popular movies (already implemented)
export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

// Fetch movie details by ID
export const fetchMovieDetails = async (id: number): Promise<Movie> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw new Error('Failed to fetch movie details');
  }
};

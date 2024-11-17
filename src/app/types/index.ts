export interface Movie {
    cast: boolean;
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview?: string;
    genres?: { id: number; name: string }[];
  }
  
  export interface ApiResponse {
    results: Movie[];
  }
  
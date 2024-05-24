export interface Genre {
  value: string;
  label: string;
}

export interface Genres {
  genres: Array<Genre>;
}

export interface GenreResponse {
  id: number;
  name: string;
}

export interface GenresResponse {
  genres: Array<GenreResponse>;
}

export interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
}

export interface MoviesResponse {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export interface MovieDetails {
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  budget: number;
  revenue: number;
  overview: string;
  production_companies: Array<ProductionCompany>;
  videos: Array<MovieVideo>;
  vote_average: number;
  vote_count: number;
  genres: Array<GenreResponse>;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface MovieVideo {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

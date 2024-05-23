import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { Genre, Movie } from '@/types';

interface Genres {
  genres: Array<Genre>;
}

interface GenresResponse {
  genres: Array<{ id: number; name: string }>;
}

interface MoviesResponse {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      query: () => API_ROUTES.GENRES,
      transformResponse: (response: GenresResponse) => {
        const genres =
          response.genres?.map(({ id, name }: { id: number; name: string }) => ({
            value: id.toString(),
            label: name,
          })) || [];

        return { genres };
      },
    }),
    getFilteredMovies: builder.query<MoviesResponse, number>({
      query: (page = 1) => `${API_ROUTES.MOVIES}?page=${page}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetFilteredMoviesQuery } = moviesApi;

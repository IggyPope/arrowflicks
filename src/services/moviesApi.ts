import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { FiltersState } from '@/store/slices/filtersSlice';
import { Genres, GenresResponse, MovieDetails, MoviesResponse } from '@/types';

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
    getFilteredMovies: builder.query<MoviesResponse, FiltersState>({
      query: ({
        selectedGenres,
        selectedYear,
        ratingFrom,
        ratingTo,
        sortBy,
        page = 1,
      }: FiltersState) => {
        const params = new URLSearchParams();

        selectedGenres.forEach((genre) => params.append('with_genres', genre));
        selectedYear && params.append('primary_release_year', selectedYear);
        ratingFrom !== undefined && params.append('vote_average.gte', ratingFrom.toString());
        ratingTo !== undefined && params.append('vote_average.lte', ratingTo.toString());

        params.append('sort_by', sortBy);

        return `${API_ROUTES.MOVIES}?page=${page}&${params}`;
      },
    }),
    getMovieDetails: builder.query<MovieDetails, string>({
      query: (id) => `${API_ROUTES.MOVIES}/${id}`,
    }),
  }),
});

export const { useGetGenresQuery, useGetFilteredMoviesQuery, useGetMovieDetailsQuery } = moviesApi;

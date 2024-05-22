import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { Genre } from '@/types';

type GenreResponse = {
  genres: Array<Genre>;
};

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<GenreResponse, void>({
      query: () => API_ROUTES.GENRES,
    }),
  }),
});

export const { useGetGenresQuery } = moviesApi;

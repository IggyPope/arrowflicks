import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { Genre } from '@/types';

type GenresDTO = {
  genres: Array<Genre>;
};

type GenresResponse = {
  genres: Array<{ id: number; name: string }>;
};

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<GenresDTO, void>({
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
  }),
});

export const { useGetGenresQuery } = moviesApi;

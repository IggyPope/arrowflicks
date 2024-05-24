'use client';

import { Stack, Title } from '@mantine/core';

import MovieList from '@/components/MovieList/MovieList';
import MoviesFilters from '@/components/filters/MoviesFilters';

const HomePage = () => (
  <Stack gap="xxl">
    <Title lh="48px">Movies</Title>
    <Stack gap="xl">
      <MoviesFilters />
      <MovieList />
    </Stack>
  </Stack>
);

export default HomePage;

'use client';

import { Container, Stack, Title } from '@mantine/core';

import MovieList from '@/components/MovieList/MovieList';
import MoviesFilters from '@/components/filters/MoviesFilters';

const HomePage = () => (
  <Container p={0} m={0} size={980}>
    <Stack gap="xxl">
      <Title lh="48px">Movies</Title>
      <Stack gap="xl">
        <MoviesFilters />
        <MovieList />
      </Stack>
    </Stack>
  </Container>
);

export default HomePage;

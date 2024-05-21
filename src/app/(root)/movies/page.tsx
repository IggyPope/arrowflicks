'use client';

import { Stack, Title } from '@mantine/core';

import MoviesFilters from '@/components/filters/MoviesFilters';

const HomePage = () => (
  <Stack gap="xxl">
    <Title lh="48px">Movies</Title>
    <Stack gap="xl">
      <MoviesFilters />
    </Stack>
  </Stack>
);

export default HomePage;

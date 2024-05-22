'use client';

import { Button, Flex, Stack } from '@mantine/core';

import GenresFilter from './GenresFilter/GenresFilter';
import classes from './MoviesFilters.module.css';
import RatingsFilter from './RatingsFilter/RatingsFilter';
import ReleaseYearFilter from './ReleaseYearFilter/ReleaseYearFilter';
import SortBy from './SortBy/SortBy';

const MoviesFilters = () => (
  <Stack gap="xl">
    <Flex gap="md" align="flex-end">
      <GenresFilter />
      <ReleaseYearFilter />
      <RatingsFilter />
      <Button variant="transparent" className={classes.resetButton}>
        Reset filters
      </Button>
    </Flex>
    <Flex justify="flex-end">
      <SortBy />
    </Flex>
  </Stack>
);

export default MoviesFilters;

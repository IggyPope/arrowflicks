'use client';

import { Button, Flex, Stack } from '@mantine/core';

import { useAppDispatch } from '@/store/hooks';
import { resetFilters } from '@/store/slices/filtersSlice';

import GenresFilter from './GenresFilter/GenresFilter';
import classes from './MoviesFilters.module.css';
import RatingsFilter from './RatingsFilter/RatingsFilter';
import ReleaseYearFilter from './ReleaseYearFilter/ReleaseYearFilter';
import SortBy from './SortBy/SortBy';

const MoviesFilters = () => {
  const dispatch = useAppDispatch();

  return (
    <Stack gap="xl">
      <Flex gap="md" align="flex-end">
        <GenresFilter />
        <ReleaseYearFilter />
        <RatingsFilter />
        <Button
          variant="transparent"
          className={classes.resetButton}
          onClick={() => dispatch(resetFilters())}
        >
          Reset filters
        </Button>
      </Flex>
      <Flex justify="flex-end">
        <SortBy />
      </Flex>
    </Stack>
  );
};

export default MoviesFilters;

'use client';

import { useEffect, useState } from 'react';

import { Accordion, Button, Flex, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { resetFilters } from '@/store/slices/filtersSlice';

import GenresFilter from './GenresFilter/GenresFilter';
import classes from './MoviesFilters.module.css';
import RatingsFilter from './RatingsFilter/RatingsFilter';
import ReleaseYearFilter from './ReleaseYearFilter/ReleaseYearFilter';
import SortBy from './SortBy/SortBy';

const MoviesFilters = () => {
  const dispatch = useAppDispatch();
  const { selectedGenres, selectedYear, ratingFrom, ratingTo } = useAppSelector(
    (state) => state.filters
  );
  const [allFiltersEmpty, setAllFiltersEmpty] = useState(false);

  const isMobile = useMediaQuery('(max-width: 768px)');
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    setAllFiltersEmpty(
      selectedGenres.length === 0 &&
        selectedYear === null &&
        ratingFrom === undefined &&
        ratingTo === undefined
    );
  }, [selectedGenres, selectedYear, ratingFrom, ratingTo]);

  return (
    <Accordion value={isMobile ? value : 'filters'} onChange={setValue}>
      <Accordion.Item value="filters" styles={{ item: { border: 'none' } }}>
        <Accordion.Control
          hiddenFrom="sm"
          bg="grey.2"
          styles={{ control: { borderRadius: '8px' } }}
        >
          Filters
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="xl">
            <Flex
              gap="md"
              justify="space-between"
              align={isMobile ? 'flex-start' : 'flex-end'}
              direction={isMobile ? 'column' : 'row'}
            >
              <GenresFilter />
              <ReleaseYearFilter />
              <RatingsFilter />
              <Button
                flex="1 0 auto"
                variant="transparent"
                className={classes.resetButton}
                onClick={() => dispatch(resetFilters())}
                disabled={allFiltersEmpty}
              >
                Reset filters
              </Button>
            </Flex>
            <Flex justify={isMobile ? 'flex-start' : 'flex-end'}>
              <SortBy />
            </Flex>
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default MoviesFilters;

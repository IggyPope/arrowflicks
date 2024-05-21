'use client';

import { Button, Flex, NumberInput, Select, Stack } from '@mantine/core';

import { API_SORT_OPTIONS } from '@/constants/api';

import GenresFilter from './GenresFilter/GenresFilter';
import classes from './MoviesFilters.module.css';
import ReleaseYearFilter from './ReleaseYearFilter/ReleaseYearFilter';

const MoviesFilters = () => (
  <Stack gap="xl">
    <Flex gap="md" align="flex-end">
      <GenresFilter />
      <ReleaseYearFilter />
      <Flex gap="xxs" align="flex-end">
        <NumberInput
          label="Ratings"
          placeholder="From"
          classNames={{
            root: classes.filterRoot,
            label: classes.filterLabel,
            input: classes.inputRoot,
          }}
        />
        <NumberInput
          placeholder="To"
          classNames={{ root: classes.filterRoot, input: classes.inputRoot }}
        />
      </Flex>
      <Button variant="transparent" className={classes.resetButton}>
        Reset filters
      </Button>
    </Flex>
    <Flex justify="flex-end">
      <Select
        label="Sort by"
        data={API_SORT_OPTIONS}
        classNames={{
          root: classes.filterRoot,
          label: classes.filterLabel,
          input: classes.inputRoot,
        }}
      />
    </Flex>
  </Stack>
);

export default MoviesFilters;

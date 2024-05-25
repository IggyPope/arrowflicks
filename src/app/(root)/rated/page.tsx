'use client';

import { useEffect, useState } from 'react';

import { Group, SimpleGrid, Stack, Title } from '@mantine/core';

import CustomPagination from '@/components/CustomPagination/CustomPagination';
import MovieCard from '@/components/MovieCard/MovieCard';
import SearchField from '@/components/filters/SearchField/SearchField';
import { RATED_MOVIES_PER_PAGE } from '@/constants/app';
import { useAppSelector } from '@/store/hooks';
import { Movie } from '@/types';

const RatedPage = () => {
  const ratingState = useAppSelector((state) => state.rating);

  const [searchValue, setSearchValue] = useState<string>('');
  const [ratedMovies, setRatedMovies] = useState<Array<Movie>>([]);
  const [filteredMovies, setFilteredMovies] = useState<Array<Movie>>([]);
  const [moviesOnPage, setMoviesOnPage] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setRatedMovies(
      Object.values(ratingState)
        .filter((entry) => entry.rating !== undefined)
        .map((entry) => entry.movie)
    );
  }, [ratingState]);

  useEffect(() => {
    setFilteredMovies(
      ratedMovies.filter((movie) =>
        movie.original_title.toLowerCase().includes(searchValue.toLowerCase().trim())
      )
    );
  }, [page, ratedMovies]);

  useEffect(() => {
    setMoviesOnPage(
      filteredMovies.slice((page - 1) * RATED_MOVIES_PER_PAGE, page * RATED_MOVIES_PER_PAGE)
    );
  }, [page, filteredMovies]);

  useEffect(() => {
    setTotalPages(Math.ceil(filteredMovies.length / RATED_MOVIES_PER_PAGE));
  }, [filteredMovies]);

  const handleSearchSubmit = () => {
    setPage(1);
    setFilteredMovies(
      ratedMovies.filter((movie) =>
        movie.original_title.toLowerCase().includes(searchValue.toLowerCase().trim())
      )
    );
  };

  return (
    <Stack gap="xxl" maw={980} w="100%">
      <Group justify="space-between">
        <Title lh="48px">Rated movies</Title>
        <SearchField
          value={searchValue}
          setValue={setSearchValue}
          onSearchSubmit={handleSearchSubmit}
        />
      </Group>
      <SimpleGrid cols={2} spacing="md">
        {moviesOnPage.length &&
          moviesOnPage.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </SimpleGrid>
      <CustomPagination page={page} align="center" setPage={setPage} totalPages={totalPages} />
    </Stack>
  );
};

export default RatedPage;

'use client';

import { useEffect, useState } from 'react';

import { SimpleGrid, Stack, Title } from '@mantine/core';

import CustomPagination from '@/components/CustomPagination/CustomPagination';
import MovieCard from '@/components/MovieCard/MovieCard';
import { RATED_MOVIES_PER_PAGE } from '@/constants/app';
import { useAppSelector } from '@/store/hooks';
import { Movie } from '@/types';

const RatedPage = () => {
  const rating = useAppSelector((state) => state.rating);

  const [ratedMovies, setRatedMovies] = useState<Array<Movie>>([]);
  const [page, setPage] = useState<number>(1);
  const [currentPageMovies, setCurrentPageMovies] = useState<Array<Movie>>([]);

  useEffect(() => {
    setCurrentPageMovies(
      ratedMovies.slice((page - 1) * RATED_MOVIES_PER_PAGE, page * RATED_MOVIES_PER_PAGE)
    );
  }, [page, ratedMovies]);

  useEffect(() => {
    setRatedMovies(
      Object.values(rating)
        .filter((entry) => entry.rating !== undefined)
        .map((entry) => entry.movie)
    );
  }, [rating]);

  return (
    <Stack gap="xxl" maw={980} w="100%">
      <Title lh="48px">Rated movies</Title>
      <SimpleGrid cols={2} spacing="md">
        {currentPageMovies.length &&
          currentPageMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </SimpleGrid>
      <CustomPagination
        page={page}
        align="center"
        setPage={setPage}
        totalPages={Math.ceil(ratedMovies.length / RATED_MOVIES_PER_PAGE)}
      />
    </Stack>
  );
};

export default RatedPage;

'use client';

import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button, Flex, Image, SimpleGrid, Stack, Title } from '@mantine/core';

import noRatedMoviesImage from '@/assets/images/no_rated_movies.svg';
import CustomPagination from '@/components/CustomPagination/CustomPagination';
import MovieCard from '@/components/MovieCard/MovieCard';
import SearchField from '@/components/filters/SearchField/SearchField';
import { APP_ROUTES, RATED_MOVIES_PER_PAGE } from '@/constants/app';
import { useAppSelector } from '@/store/hooks';
import { Movie } from '@/types';

const RatedPage = () => {
  const ratingState = useAppSelector((state) => state.rating);

  const router = useRouter();

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

  return ratedMovies.length ? (
    <Stack gap="xxl" maw={980} w="100%">
      <Flex
        justify="space-between"
        gap={{ base: 'md', md: 'lg' }}
        align={{ base: 'flex-start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Title lh="48px">Rated movies</Title>
        <SearchField
          value={searchValue}
          setValue={setSearchValue}
          onSearchSubmit={handleSearchSubmit}
        />
      </Flex>
      <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={{ base: 'xs', xl: 'md' }}>
        {moviesOnPage.length &&
          moviesOnPage.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </SimpleGrid>
      <CustomPagination page={page} align="center" setPage={setPage} totalPages={totalPages} />
    </Stack>
  ) : (
    <Stack w="100%" h="100%" gap="md" justify="center" align="center">
      <Image maw={400} w="100%" src={noRatedMoviesImage.src} alt="no rated movies" />
      <Title fz="md" lh="xs" fw={600}>
        You haven`t rated any films yet
      </Title>
      <Button onClick={() => router.push(APP_ROUTES.MOVIES)}>Find movies</Button>
    </Stack>
  );
};

export default RatedPage;

import { Flex, Loader, Stack, Title } from '@mantine/core';

import { useGetFilteredMoviesQuery } from '@/services/moviesApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPage } from '@/store/slices/filtersSlice';

import CustomPagination from '../CustomPagination/CustomPagination';
import MovieCard from '../MovieCard/MovieCard';
import NoSuchMovies from '../icons/NoSuchMovies';

const MovieList = () => {
  const { selectedGenres, selectedYear, ratingFrom, ratingTo, sortBy, page } = useAppSelector(
    (state) => state.filters
  );

  const dispatch = useAppDispatch();

  const setCurrentPage = (currentPage: number) => {
    dispatch(setPage(currentPage));
  };

  const { data: moviesResponse, isFetching } = useGetFilteredMoviesQuery({
    selectedGenres,
    selectedYear,
    ratingFrom,
    ratingTo,
    sortBy,
    page,
  });

  if (!moviesResponse?.results.length && !isFetching) {
    return (
      <Stack gap="md" w="100%" align="center">
        <NoSuchMovies />
        <Title order={4} fz="md" lh="xs" fw={600}>
          We don`t have such movies, look for another one
        </Title>
      </Stack>
    );
  }

  if (isFetching) {
    return (
      <Stack gap="md" w="100%" align="center">
        <Loader size="xl" />
      </Stack>
    );
  }

  return (
    <>
      <Flex gap={{ base: 'sm', lg: 'md' }} wrap="wrap" justify="center">
        {moviesResponse?.results.length &&
          moviesResponse?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </Flex>
      <CustomPagination
        page={page}
        setPage={setCurrentPage}
        align="right"
        totalPages={Math.min(moviesResponse?.total_pages || 1, 500)}
        isLoading={isFetching}
      />
    </>
  );
};

export default MovieList;

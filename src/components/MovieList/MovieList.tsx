import { SimpleGrid } from '@mantine/core';

import { useGetFilteredMoviesQuery } from '@/services/moviesApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPage } from '@/store/slices/filtersSlice';

import CustomPagination from '../CustomPagination/CustomPagination';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
  const { selectedGenres, selectedYear, ratingFrom, ratingTo, sortBy, page } = useAppSelector(
    (state) => state.filters
  );

  const dispatch = useAppDispatch();

  const setCurrentPage = (currentPage: number) => {
    dispatch(setPage(currentPage));
  };

  const {
    data: moviesResponse,
    isLoading,
    isFetching,
  } = useGetFilteredMoviesQuery({
    selectedGenres,
    selectedYear,
    ratingFrom,
    ratingTo,
    sortBy,
    page,
  });

  return (
    <>
      <SimpleGrid cols={2} spacing="md">
        {moviesResponse?.results.length &&
          !isLoading &&
          moviesResponse?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </SimpleGrid>
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

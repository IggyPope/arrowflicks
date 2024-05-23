import { useGetFilteredMoviesQuery } from '@/services/moviesApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setPage } from '@/store/slices/filtersSlice';

import CustomPagination from '../CustomPagination/CustomPagination';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = () => {
  const page = useAppSelector((state) => state.filters.page);

  const dispatch = useAppDispatch();

  const setCurrentPage = (currentPage: number) => {
    dispatch(setPage(currentPage));
  };

  const { data: moviesResponse, isLoading } = useGetFilteredMoviesQuery(page);

  return (
    <>
      {moviesResponse?.results?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      <CustomPagination
        page={page}
        setPage={setCurrentPage}
        totalPages={Math.min(moviesResponse?.total_pages || 1, 500)}
        isLoading={isLoading}
      />
    </>
  );
};

export default MovieList;

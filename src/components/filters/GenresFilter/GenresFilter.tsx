import { Loader, MultiSelect } from '@mantine/core';

import ChevronIcon from '@/components/icons/ChevronIcon';
import { useGetGenresQuery } from '@/services/moviesApi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setGenres } from '@/store/slices/filtersSlice';

import commonClasses from '../MoviesFilters.module.css';
import classes from './GenresFilter.module.css';

const GenresFilter = () => {
  const selectedGenres = useAppSelector((state) => state.filters.selectedGenres);
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetGenresQuery();

  return (
    <MultiSelect
      label="Genres"
      placeholder={selectedGenres.length ? '' : 'Select genre'}
      data={data?.genres}
      value={selectedGenres}
      onChange={(genres: string[]) => dispatch(setGenres(genres))}
      withCheckIcon={false}
      rightSection={isLoading ? <Loader size="xs" /> : <ChevronIcon />}
      classNames={{
        root: commonClasses.filterRoot,
        wrapper: commonClasses.filterWrapper,
        label: commonClasses.filterLabel,
        input: commonClasses.inputRoot,
        dropdown: commonClasses.selectDropdown,
        option: commonClasses.selectOption,
        pill: classes.pill,
        pillsList: classes.pillsList,
      }}
    />
  );
};

export default GenresFilter;

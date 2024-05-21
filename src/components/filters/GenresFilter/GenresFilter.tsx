import { useEffect, useState } from 'react';

import { MultiSelect } from '@mantine/core';

import ChevronIcon from '@/components/icons/ChevronIcon';

import commonClasses from '../MoviesFilters.module.css';
import classes from './GenresFilter.module.css';

const GenresFilter = () => {
  const [genres, setGenres] = useState<Array<{ value: string; label: string }>>([]);
  const [selectedGenres, setSelectedGenres] = useState<Array<string>>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/genres', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) =>
        setGenres(
          data.genres.map((genre: { id: number; name: string }) => ({
            value: genre.id.toString(),
            label: genre.name,
          }))
        )
      );
  }, []);

  return (
    <MultiSelect
      label="Genres"
      placeholder={selectedGenres.length ? '' : 'Select genre'}
      data={genres}
      value={selectedGenres}
      onChange={setSelectedGenres}
      withCheckIcon={false}
      rightSection={<ChevronIcon />}
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

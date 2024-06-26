import { useEffect, useState } from 'react';

import { Select } from '@mantine/core';

import ChevronIcon from '@/components/icons/ChevronIcon';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setReleaseYear } from '@/store/slices/filtersSlice';
import { getYearsFilterOptions } from '@/utils/helpers';

import commonClasses from '../MoviesFilters.module.css';

const ReleaseYearFilter = () => {
  const [yearOptions, setYearOptions] = useState<Array<string>>([]);

  const selectedYear = useAppSelector((state) => state.filters.selectedYear);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setYearOptions(getYearsFilterOptions());
  }, []);

  return (
    <Select
      flex="1 1 100%"
      w="100%"
      label="Release year"
      placeholder="Select release year"
      data={yearOptions}
      value={selectedYear}
      onChange={(year: string | null) => dispatch(setReleaseYear(year))}
      withCheckIcon={false}
      rightSection={<ChevronIcon />}
      classNames={{
        root: commonClasses.filterRoot,
        label: commonClasses.filterLabel,
        input: commonClasses.inputRoot,
        dropdown: commonClasses.selectDropdown,
        option: commonClasses.selectOption,
      }}
    />
  );
};

export default ReleaseYearFilter;

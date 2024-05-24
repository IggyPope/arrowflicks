import { Select } from '@mantine/core';

import ChevronIcon from '@/components/icons/ChevronIcon';
import { API_SORT_OPTIONS, DEFAULT_SORT_OPTION } from '@/constants/api';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSortBy } from '@/store/slices/filtersSlice';

import commonClasses from '../MoviesFilters.module.css';

const SortBy = () => {
  const sortBy = useAppSelector((state) => state.filters.sortBy);
  const dispatch = useAppDispatch();

  return (
    <Select
      label="Sort by"
      data={API_SORT_OPTIONS}
      value={sortBy}
      allowDeselect={false}
      defaultValue={DEFAULT_SORT_OPTION}
      onChange={(value) =>
        value && dispatch(setSortBy(value as (typeof API_SORT_OPTIONS)[number]['value']))
      }
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

export default SortBy;

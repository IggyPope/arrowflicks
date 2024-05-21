import { useEffect, useState } from 'react';

import { Select } from '@mantine/core';

import ChevronIcon from '@/components/icons/ChevronIcon';
import { getYearsFilterOptions } from '@/utils/filters';

import commonClasses from '../MoviesFilters.module.css';

const ReleaseYearFilter = () => {
  const [yearOptions, setYearOptions] = useState<Array<string>>([]);
  const [year, setYear] = useState<string | null>(null);

  useEffect(() => {
    setYearOptions(getYearsFilterOptions());
  }, []);

  return (
    <Select
      label="Release year"
      placeholder="Select release year"
      data={yearOptions}
      value={year}
      onChange={setYear}
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

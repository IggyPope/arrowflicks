import { Flex, NumberInput } from '@mantine/core';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setRatingFrom, setRatingTo } from '@/store/slices/filtersSlice';

import commonClasses from '../MoviesFilters.module.css';

const RatingsFilter = () => {
  const { ratingFrom, ratingTo } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  return (
    <Flex gap="xxs" align="flex-end">
      <NumberInput
        label="Ratings"
        placeholder="From"
        value={ratingFrom}
        onChange={(value) => dispatch(setRatingFrom(Number(value)))}
        classNames={{
          root: commonClasses.filterRoot,
          label: commonClasses.filterLabel,
          input: commonClasses.inputRoot,
        }}
        min={0}
        max={10}
      />
      <NumberInput
        placeholder="To"
        value={ratingTo}
        onChange={(value) => dispatch(setRatingTo(Number(value)))}
        classNames={{ root: commonClasses.filterRoot, input: commonClasses.inputRoot }}
        min={0}
        max={10}
      />
    </Flex>
  );
};

export default RatingsFilter;

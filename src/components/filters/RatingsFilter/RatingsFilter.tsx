import { Flex } from '@mantine/core';

import { useAppSelector } from '@/store/hooks';
import {
  decrementRatingFrom,
  decrementRatingTo,
  incrementRatingFrom,
  incrementRatingTo,
  setRatingFrom,
  setRatingTo,
} from '@/store/slices/filtersSlice';

import RatingInput from './RatingInput/RatingInput';

const RatingsFilter = () => {
  const { ratingFrom, ratingTo } = useAppSelector((state) => state.filters);

  return (
    <Flex gap="xxs" align="flex-end" flex="1 1 100%" w="100%">
      <RatingInput
        label="Ratings"
        placeHolder="From"
        controlledValue={ratingFrom}
        setValueAction={setRatingFrom}
        incrementAction={incrementRatingFrom}
        decrementAction={decrementRatingFrom}
      />
      <RatingInput
        placeHolder="To"
        controlledValue={ratingTo}
        setValueAction={setRatingTo}
        incrementAction={incrementRatingTo}
        decrementAction={decrementRatingTo}
      />
    </Flex>
  );
};

export default RatingsFilter;

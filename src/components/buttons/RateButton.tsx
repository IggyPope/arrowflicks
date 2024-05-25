import { useEffect, useState } from 'react';

import { Group, Rating, Text } from '@mantine/core';

import StarIcon from '@/components/icons/StarIcon';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openModal } from '@/store/slices/ratingModalSlice';
import { Movie } from '@/types';

const RateButton = ({ movie }: { movie: Movie }) => {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState<number | undefined>(undefined);
  const ratedMovies = useAppSelector((state) => state.rating);

  useEffect(() => {
    if (movie) {
      const existingRating = ratedMovies[movie.id]?.rating;
      if (existingRating) {
        setRating(existingRating);
      } else {
        setRating(undefined);
      }
    }
  }, [movie, ratedMovies]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(openModal(movie));
  };

  return (
    <Group gap={4} align="center" wrap="nowrap">
      <Rating
        emptySymbol={<StarIcon />}
        fullSymbol={<StarIcon fillColor="purple" />}
        value={rating ?? 0}
        onClick={handleClick}
        count={1}
        size="lg"
        styles={{ symbolBody: { display: 'flex' } }}
      />
      {rating !== undefined && (
        <Text fz="sm" fw={600} lh="xs">
          {rating}
        </Text>
      )}
    </Group>
  );
};

export default RateButton;

import { Group, Paper, Stack } from '@mantine/core';

import { MovieDetails } from '@/types';

import RateButton from '../../../buttons/RateButton/RateButton';
import MoviePoster from '../../MoviePoster/MoviePoster';
import MovieTitle from '../../MovieTitle/MovieTitle';
import RatingBadge from '../../RatingBadge/RatingBadge';
import ReleaseYear from '../../ReleaseYear/ReleaseYear';
import DetailsGenresList from './DetailsGenresList';
import Duration from './Duration';
import MoneyValue from './MoneyValue';
import classes from './MovieDetailsHead.module.css';
import Premiere from './Premiere';

interface MovieDetailsHeadProps {
  movie: MovieDetails;
}

const MovieDetailsHead = ({ movie }: MovieDetailsHeadProps) => (
  <Paper maw={800} w="100%" h={400} p="xl" classNames={{ root: classes.root }}>
    <Group flex="1 0 0" justify="space-between" align="flex-start" gap="md" wrap="nowrap">
      <Group h="100%" justify="space-between" align="flex-start" gap="md" wrap="nowrap">
        <MoviePoster movie={movie} size="lg" />
        <Stack h="100%" justify="space-between" align="flex-start">
          <Stack justify="flex-start" align="flex-start" gap="xxs">
            <MovieTitle>{movie.original_title}</MovieTitle>
            <ReleaseYear releaseDate={movie.release_date} />
            <RatingBadge voteAverage={movie.vote_average} voteCount={movie.vote_count} />
          </Stack>
          <Stack justify="flex-end" align="flex-start" gap="sm">
            <Duration duration={movie.runtime} />
            <Premiere releaseDate={movie.release_date} />
            <MoneyValue label="Budget" amount={movie.budget} />
            <MoneyValue label="Gross worldwide" amount={movie.revenue} />
            <DetailsGenresList genres={movie.genres} />
          </Stack>
        </Stack>
      </Group>
      <RateButton />
    </Group>
  </Paper>
);

export default MovieDetailsHead;

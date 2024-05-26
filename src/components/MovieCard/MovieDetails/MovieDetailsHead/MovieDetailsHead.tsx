import { Flex, Paper, Stack } from '@mantine/core';

import { Movie, MovieDetails } from '@/types';

import RateButton from '../../../buttons/RateButton';
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

const MovieDetailsHead = ({ movie }: MovieDetailsHeadProps) => {
  const modalMovie: Movie = {
    id: movie.id,
    original_title: movie.original_title,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    release_date: movie.release_date,
    genre_ids: movie.genres.map(({ id }) => id),
    poster_path: movie.poster_path,
  };

  return (
    <Paper maw={800} w="100%" p={{ base: 'sm', sm: 'xl' }} classNames={{ root: classes.root }}>
      <Flex
        justify="space-between"
        align="flex-start"
        gap={{ base: 'xxs', sm: 'md' }}
        wrap="nowrap"
      >
        <Flex
          h="100%"
          direction={{ base: 'column', xs: 'row' }}
          justify="space-between"
          align="flex-start"
          gap={{ base: 'sm', sm: 'md' }}
          wrap="nowrap"
        >
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
        </Flex>
        <RateButton movie={modalMovie} />
      </Flex>
    </Paper>
  );
};

export default MovieDetailsHead;

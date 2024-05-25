'use client';

import Link from 'next/link';

import { Group, Paper, Stack } from '@mantine/core';

import { APP_ROUTES } from '@/constants/app';
import { Movie } from '@/types';

import RateButton from '../buttons/RateButton';
import GenresList from './GenresList/GenresList';
import classes from './MovieCard.module.css';
import MoviePoster from './MoviePoster/MoviePoster';
import MovieTitle from './MovieTitle/MovieTitle';
import RatingBadge from './RatingBadge/RatingBadge';
import ReleaseYear from './ReleaseYear/ReleaseYear';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => (
  <Paper
    component={Link}
    href={`${APP_ROUTES.MOVIES}/${movie.id}`}
    maw={482}
    w="100%"
    h={218}
    p="xl"
    classNames={{ root: classes.paperRoot }}
  >
    <Group h="100%" w="100%" justify="space-between" align="flex-start" gap="xxs" wrap="nowrap">
      <Group h="100%" justify="space-between" align="flex-start" gap="md" wrap="nowrap">
        <MoviePoster movie={movie} size="sm" />
        <Stack h="100%" justify="space-between" align="flex-start">
          <Stack justify="flex-start" align="flex-start" gap="xxs">
            <MovieTitle>{movie.original_title}</MovieTitle>
            <ReleaseYear releaseDate={movie.release_date} />
            <RatingBadge voteAverage={movie.vote_average} voteCount={movie.vote_count} />
          </Stack>
          <GenresList genreIds={movie.genre_ids} truncateLength={20} />
        </Stack>
      </Group>
      <RateButton movie={movie} />
    </Group>
  </Paper>
);

export default MovieCard;

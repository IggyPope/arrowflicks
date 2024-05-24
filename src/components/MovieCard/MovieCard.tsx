import Image from 'next/image';
import Link from 'next/link';

import { Group, Paper, Stack, Text, useMantineTheme } from '@mantine/core';

import noPosterImage from '@/assets/images/no_poster.png';
import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { useGetGenresQuery } from '@/services/moviesApi';
import { Movie } from '@/types';
import { getGenresByIds, shortenNumber, truncateString } from '@/utils/helpers';

import RateButton from '../buttons/RateButton/RateButton';
import StarIcon from '../icons/StarIcon';
import classes from './MovieCard.module.css';
import MovieTitle from './MovieTitle/MovieTitle';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const theme = useMantineTheme();

  const { data: genresData } = useGetGenresQuery();
  const genres = getGenresByIds(movie.genre_ids, genresData?.genres || []).join(', ');

  const releaseDate = new Date(movie.release_date);
  const releaseYear = releaseDate.getFullYear();

  return (
    <Paper
      component={Link}
      href={`/movie/${movie.id}`}
      maw={482}
      w="100%"
      h={218}
      p="xl"
      classNames={{ root: classes.paperRoot }}
    >
      <Group h="100%" w="100%" justify="space-between" align="flex-start" gap="xxs" wrap="nowrap">
        <Group h="100%" justify="space-between" align="flex-start" gap="md" wrap="nowrap">
          <Image
            width={119}
            height={170}
            alt={movie.original_title}
            placeholder="blur"
            blurDataURL={noPosterImage.blurDataURL}
            src={
              movie.poster_path
                ? `${API_BASE_URL}${API_ROUTES.IMAGES}${movie.poster_path}`
                : noPosterImage
            }
          />
          <Stack h="100%" justify="space-between" align="flex-start">
            <Stack justify="flex-start" align="flex-start" gap="xxs">
              <MovieTitle>{movie.original_title}</MovieTitle>
              {!Number.isNaN(releaseYear) && (
                <Text c={theme.colors.gray[6]} fz="sm" fw={400} lh="xs">
                  {releaseYear}
                </Text>
              )}
              <Group gap="xxs">
                <Group gap={4}>
                  <StarIcon fillColor="yellow" />
                  <Text fz="sm" fw={600} lh="xs">
                    {movie.vote_average.toFixed(1)}
                  </Text>
                </Group>
                <Text c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
                  {`(${shortenNumber(movie.vote_count)})`}
                </Text>
              </Group>
            </Stack>
            {genres.length > 0 && (
              <Group gap="xxs" wrap="nowrap">
                <Text c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
                  Genres
                </Text>
                <Text fz="sm" fw={400} lh="xs">
                  {truncateString(genres, 20)}
                </Text>
              </Group>
            )}
          </Stack>
        </Group>
        <RateButton />
      </Group>
    </Paper>
  );
};

export default MovieCard;

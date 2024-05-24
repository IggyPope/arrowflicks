'use client';

import { Anchor, Breadcrumbs, Stack, Title } from '@mantine/core';

import MovieDetailsBody from '@/components/MovieCard/MovieDetails/MovieDetailsBody/MovieDetailsBody';
import MovieDetailsHead from '@/components/MovieCard/MovieDetails/MovieDetailsHead/MovieDetailsHead';
import { APP_ROUTES } from '@/constants/app';
import { useGetMovieDetailsQuery } from '@/services/moviesApi';

const MoviePage = ({ params }: { params: { id: string } }) => {
  const { data, isLoading } = useGetMovieDetailsQuery(params.id);

  if (!isLoading && data) {
    return (
      <Stack gap="lg">
        <Breadcrumbs fz={15}>
          <Anchor fz={14} lh="20px" href={APP_ROUTES.MOVIES}>
            Movies
          </Anchor>
          <Anchor fz={14} lh="20px" href={`${APP_ROUTES.MOVIES}/${params.id}`}>
            {data?.original_title}
          </Anchor>
        </Breadcrumbs>
        <MovieDetailsHead movie={data} />
        <MovieDetailsBody movie={data} />
      </Stack>
    );
  }
  return <Title>Loading...</Title>;
};

export default MoviePage;

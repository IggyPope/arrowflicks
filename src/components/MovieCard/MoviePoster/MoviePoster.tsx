import { Image } from '@mantine/core';

import noPosterImage from '@/assets/images/no_poster.png';
import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { Movie, MovieDetails } from '@/types';

interface MoviePosterProps {
  movie: Movie | MovieDetails;
  size?: 'sm' | 'lg';
}

const MoviePoster = ({ movie, size = 'sm' }: MoviePosterProps) => (
  <Image
    display={{ base: 'none', xs: 'block' }}
    w={size === 'sm' ? 119 : { base: 200, xs: 250 }}
    alt={movie.original_title}
    fallbackSrc={noPosterImage.src}
    src={
      movie.poster_path
        ? `${API_BASE_URL}${API_ROUTES.IMAGES}${movie.poster_path}`
        : noPosterImage.src
    }
  />
);

export default MoviePoster;

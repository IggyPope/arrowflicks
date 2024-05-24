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
    w={size === 'sm' ? 119 : 250}
    h={size === 'sm' ? 170 : 352}
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

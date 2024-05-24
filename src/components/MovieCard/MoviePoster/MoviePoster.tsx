import Image from 'next/image';

import blurImage from '@/assets/images/blur.png';
import noPosterImage from '@/assets/images/no_poster.png';
import { API_BASE_URL, API_ROUTES } from '@/constants/app';
import { Movie, MovieDetails } from '@/types';

interface MoviePosterProps {
  movie: Movie | MovieDetails;
  size?: 'sm' | 'lg';
}

const MoviePoster = ({ movie, size = 'sm' }: MoviePosterProps) => (
  <Image
    width={size === 'sm' ? 119 : 250}
    height={size === 'sm' ? 170 : 352}
    alt={movie.original_title}
    placeholder="blur"
    blurDataURL={blurImage.blurDataURL}
    src={
      movie.poster_path ? `${API_BASE_URL}${API_ROUTES.IMAGES}${movie.poster_path}` : noPosterImage
    }
  />
);

export default MoviePoster;

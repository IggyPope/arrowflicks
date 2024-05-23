import { Paper } from '@mantine/core';

import { Movie } from '@/types';

import classes from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => (
  <Paper p="xl" classNames={{ root: classes.paperRoot }}>
    {movie.original_title}
  </Paper>
);

export default MovieCard;

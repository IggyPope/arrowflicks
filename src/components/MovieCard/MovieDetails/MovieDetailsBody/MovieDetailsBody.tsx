import { Paper, Stack } from '@mantine/core';

import { MovieDetails } from '@/types';

import Description from './Description';
import Production from './Production';
import Trailer from './Trailer';

interface MovieDetailsBodyProps {
  movie: MovieDetails;
}

const MovieDetailsBody = ({ movie }: MovieDetailsBodyProps) => {
  const trailer = movie.videos?.results.find(
    (video) => video.site === 'YouTube' && video.type === 'Trailer' && video.official === true
  );

  return (
    <Paper maw={800} w="100%" p={{ base: 'sm', sm: 'xl' }}>
      <Stack w="100%" justify="flex-start" align="flex-start" gap="lg">
        {trailer && <Trailer videoKey={trailer.key} />}
        {movie.overview && <Description description={movie.overview} />}
        {movie.production_companies.length > 0 && (
          <Production companies={movie.production_companies} />
        )}
      </Stack>
    </Paper>
  );
};

export default MovieDetailsBody;

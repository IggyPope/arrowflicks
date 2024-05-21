import { Title } from '@mantine/core';

const MoviePage = ({ params }: { params: { id: string } }) => (
  <>
    <Title>Movies: {params.id}</Title>
  </>
);

export default MoviePage;

import { Title } from '@mantine/core';

export default function MoviePage({ params }: { params: { id: string } }) {
  return (
    <>
      <Title>Movies: {params.id}</Title>
    </>
  );
}

import { ReactNode } from 'react';

import { Title } from '@mantine/core';

const MovieTitle = ({ children }: { children: ReactNode }) => (
  <Title order={3} fz="md" fw={600} lh={1.2} c="var(--mantine-color-purple-5)">
    {children}
  </Title>
);

export default MovieTitle;

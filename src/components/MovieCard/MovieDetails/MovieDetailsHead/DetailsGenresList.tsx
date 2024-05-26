import { Group, Text, useMantineTheme } from '@mantine/core';

import { GenreResponse } from '@/types';

interface DetailsGenresListProps {
  genres: Array<GenreResponse>;
}

const DetailsGenresList = ({ genres }: DetailsGenresListProps) => {
  const theme = useMantineTheme();

  const genreNamesString = genres.map(({ name }) => name).join(', ');

  return (
    <Group align="center" gap="xxs" wrap="nowrap">
      <Text w={{ base: 90, sm: 140 }} c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
        Genres
      </Text>
      <Text fz="sm" fw={400} lh="xs">
        {genreNamesString || 'N/A'}
      </Text>
    </Group>
  );
};

export default DetailsGenresList;

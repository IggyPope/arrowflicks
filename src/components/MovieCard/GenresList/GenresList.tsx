import { useEffect, useState } from 'react';

import { Group, Text, useMantineTheme } from '@mantine/core';

import { useGetGenresQuery } from '@/services/moviesApi';
import { getGenresByIds, truncateString } from '@/utils/helpers';

interface GenresListProps {
  genreIds: number[];
  truncateLength?: number;
}

const GenresList = ({ genreIds, truncateLength }: GenresListProps) => {
  const theme = useMantineTheme();

  const { data: genresData } = useGetGenresQuery();
  const [genresString, setGenresString] = useState<string>('N/A');

  useEffect(() => {
    const genresStr = getGenresByIds(genreIds, genresData?.genres || []).join(', ');

    if (genresStr.length > 0) {
      setGenresString(genresStr);
    } else {
      setGenresString('N/A');
    }
  }, [genreIds, genresData]);

  return (
    <Group gap="xxs" wrap="nowrap">
      <Text c={theme.colors.grey[6]} fz={{ base: 'xs', xs: 'sm' }} fw={400} lh="xs">
        Genres
      </Text>
      <Text fz={{ base: 'xs', xs: 'sm' }} fw={400} lh="xs">
        {truncateLength ? truncateString(genresString, truncateLength) : genresString}
      </Text>
    </Group>
  );
};

export default GenresList;

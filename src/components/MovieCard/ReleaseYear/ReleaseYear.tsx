import { Text, useMantineTheme } from '@mantine/core';

const ReleaseYear = ({ releaseDate }: { releaseDate: string }) => {
  const theme = useMantineTheme();

  const releaseYear = new Date(releaseDate).getFullYear();

  return (
    <Text c={theme.colors.gray[6]} fz="sm" fw={400} lh="xs">
      {Number.isNaN(releaseYear) ? 'N/A' : releaseYear}
    </Text>
  );
};

export default ReleaseYear;

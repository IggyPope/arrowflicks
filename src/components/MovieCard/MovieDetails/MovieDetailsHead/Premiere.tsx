import { Group, Text, useMantineTheme } from '@mantine/core';

interface PremiereProps {
  releaseDate: string;
}

const Premiere = ({ releaseDate }: PremiereProps) => {
  const theme = useMantineTheme();

  return (
    <Group align="flex-start" gap="xxs" wrap="nowrap">
      <Text w={140} c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
        Premiere
      </Text>
      <Text fz="sm" fw={400} lh="xs">
        {releaseDate === ''
          ? 'N/A'
          : new Date(releaseDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
      </Text>
    </Group>
  );
};

export default Premiere;

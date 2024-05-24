import { Group, Text, useMantineTheme } from '@mantine/core';

import { getDurationFromMinutes } from '@/utils/helpers';

interface DurationProps {
  duration: number;
}

const Duration = ({ duration }: DurationProps) => {
  const theme = useMantineTheme();

  return (
    <Group align="flex-start" gap="xxs" wrap="nowrap">
      <Text w={140} c={theme.colors.grey[6]} fz="sm" fw={400} lh="xs">
        Duration
      </Text>
      <Text fz="sm" fw={400} lh="xs">
        {duration ? getDurationFromMinutes(duration) : 'N/A'}
      </Text>
    </Group>
  );
};

export default Duration;

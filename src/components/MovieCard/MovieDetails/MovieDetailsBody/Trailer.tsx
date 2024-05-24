import { Divider, Stack, Title, useMantineTheme } from '@mantine/core';

import YouTubeEmbed from '@/components/YouTubeEmbed/YouTubeEmbed';

interface TrailerProps {
  videoKey: string;
}

const Trailer = ({ videoKey }: TrailerProps) => {
  const theme = useMantineTheme();

  return (
    <Stack align="flex-start" gap="lg" w="100%">
      <Stack align="flex-start" gap="md" w="100%">
        <Title order={4} fz={theme.fontSizes.md} lh={1}>
          Trailer
        </Title>
        <YouTubeEmbed videoKey={videoKey} />
      </Stack>
      <Divider my="0" w="100%" />
    </Stack>
  );
};

export default Trailer;

import { Divider, Stack, Text, Title, useMantineTheme } from '@mantine/core';

interface DescriptionProps {
  description: string;
}

const Description = ({ description }: DescriptionProps) => {
  const theme = useMantineTheme();

  return (
    <Stack align="flex-start" gap="lg" w="100%">
      <Stack align="flex-start" gap="md" w="100%">
        <Title order={4} fz={theme.fontSizes.md} lh={1}>
          Description
        </Title>
        <Text fz="sm" fw={400} lh="sm">
          {description}
        </Text>
      </Stack>
      <Divider my="0" w="100%" />
    </Stack>
  );
};

export default Description;

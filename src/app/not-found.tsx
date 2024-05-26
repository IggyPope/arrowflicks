'use client';

import { useRouter } from 'next/navigation';

import { Box, Button, Group, Stack, Title } from '@mantine/core';

import Logo from '@/components/Logo/Logo';
import NotFoundText from '@/components/icons/NotFoundText';
import { APP_ROUTES } from '@/constants/app';

const ColorBoxes = () => (
  <Group gap={0} w="100%" justify="center">
    {['#FFFFFF', '#FBE54D', '#74FADB', '#68DC42', '#E83CF2', '#D52D25', '#0732B3'].map((color) => (
      <Box key={color} bg={color} flex={1} h={50} />
    ))}
  </Group>
);

const NotFound = () => {
  const router = useRouter();

  return (
    <Stack
      pos="relative"
      p="md"
      gap="xxl"
      justify="center"
      align="center"
      w="100vw"
      h="100%"
      mih="100dvh"
    >
      <Box pos="absolute" top={24} left={24}>
        <Logo />
      </Box>
      <Stack gap={28} align="center" maw={656} w="100%">
        <ColorBoxes />
        <NotFoundText />
        <ColorBoxes />
      </Stack>
      <Stack gap="md" align="center">
        <Title order={3} fz="md" fw={600} lh="xs" ta="center">
          We can’t find the page you are looking for
        </Title>
        <Button onClick={() => router.push(APP_ROUTES.HOME)}>Go Home</Button>
      </Stack>
    </Stack>
  );
};

export default NotFound;

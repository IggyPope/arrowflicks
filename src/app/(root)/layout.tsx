'use client';

import React from 'react';

import { AppShell, Burger, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Logo from '@/components/Logo/Logo';
import NavLink from '@/components/NavLink/NavLink';
import { APP_ROUTES } from '@/constants/app';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  const theme = useMantineTheme();

  return (
    <AppShell
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="40px"
    >
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="md"
        pos="absolute"
        right="24px"
        top="24px"
        style={{ zIndex: 'calc(var(--mantine-z-index-overlay) - 1)' }}
      />
      <AppShell.Navbar p="xl" bg={theme.colors.purple[1]} withBorder={false}>
        <Stack gap="80px">
          <Logo />
          <Stack gap="md">
            <NavLink href={APP_ROUTES.MOVIES}>Movies</NavLink>
            <NavLink href={APP_ROUTES.RATED}>Rated movies</NavLink>
          </Stack>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default MainLayout;

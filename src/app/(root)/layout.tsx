'use client';

import React from 'react';

import { AppShell, Burger, Stack, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { Logo } from '@/components/Logo/Logo';
import { NavLink } from '@/components/NavLink/NavLink';

export default function MainLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();

  const theme = useMantineTheme();

  return (
    <AppShell
      navbar={{ width: 280, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="sm"
        size="md"
        pos="absolute"
        right="24px"
        top="24px"
        style={{ zIndex: 999 }}
      />
      <AppShell.Navbar p="xl" bg={theme.colors.purple[1]} withBorder={false}>
        <Stack gap="80px">
          <Logo />
          <Stack gap="md">
            <NavLink href="/movies">Movies</NavLink>
            <NavLink href="/rated">Rated movies</NavLink>
          </Stack>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

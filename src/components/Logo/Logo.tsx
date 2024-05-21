import { Poppins } from 'next/font/google';
import Link from 'next/link';

import { Group, Text, useMantineTheme } from '@mantine/core';

import ArrowsIcon from '../icons/ArrowsIcon';

const poppins = Poppins({
  weight: '600',
  subsets: ['latin'],
});

const Logo = () => {
  const theme = useMantineTheme();

  return (
    <Link href="/" style={{ textDecoration: 'none' }}>
      <Group gap="sm">
        <ArrowsIcon />
        <Text
          className={poppins.className}
          component="span"
          c={theme.colors.purple[5]}
          fz="lg"
          lh="md"
          fw={600}
          style={{ letterSpacing: '-0.48px' }}
        >
          ArrowFlicks
        </Text>
      </Group>
    </Link>
  );
};

export default Logo;

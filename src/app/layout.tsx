import React from 'react';

import { Inter } from 'next/font/google';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import '@/styles/globals.css';
import { themeOverride, resolver } from '@/styles/theme';

export const metadata = {
  title: 'ArrowFlicks',
  description: 'ArrowFlicks - the ultimate movie search app!',
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <ColorSchemeScript forceColorScheme="light" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body className={inter.className}>
      <MantineProvider
        forceColorScheme="light"
        theme={themeOverride}
        cssVariablesResolver={resolver}
      >
        {children}
      </MantineProvider>
    </body>
  </html>
);

export default RootLayout;

import React from 'react';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import RatingModal from '@/components/RatingModal/RatingModal';
import '@/styles/globals.css';
import { themeOverride, resolver } from '@/styles/theme';

import StoreProvider from './StoreProvider';

export const metadata = {
  title: 'ArrowFlicks',
  description: 'ArrowFlicks - the ultimate movie search app!',
};

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
    <body>
      <MantineProvider
        forceColorScheme="light"
        theme={themeOverride}
        cssVariablesResolver={resolver}
      >
        <StoreProvider>
          {children}
          <RatingModal />
        </StoreProvider>
      </MantineProvider>
    </body>
  </html>
);

export default RootLayout;

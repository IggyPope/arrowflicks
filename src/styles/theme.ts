'use client';

import { Inter } from 'next/font/google';

import { CSSVariablesResolver, createTheme, rem } from '@mantine/core';

import classes from './overrides.module.css';

const inter = Inter({ subsets: ['latin'] });

export const themeOverride = createTheme({
  fontFamily: inter.style.fontFamily,
  primaryColor: 'purple',
  spacing: {
    xxs: '8px',
    xs: '10px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '40px',
  },
  fontSizes: {
    xs: rem('14px'),
    sm: rem('16px'),
    md: rem('20px'),
    lg: rem('24px'),
    xl: rem('32px'),
  },
  lineHeights: {
    xs: '1.25',
    sm: '1.4',
    md: '1.5',
    lg: '1.6',
    xl: '1.65',
  },
  colors: {
    purple: [
      '#F0EAF0',
      '#F2EBF9',
      '#E5D5FA',
      '#D1B4F8',
      '#BD93F7',
      '#9854F6',
      '#541F9D',
      '#6107DA',
      '#5504C3',
      '#4900AC',
    ],
    grey: [
      '#FFFFFF',
      '#F5F5F6',
      '#EAEBED',
      '#D5D6DC',
      '#CBCBD1',
      '#ACADB9',
      '#7B7C88',
      '#6C6D78',
      '#60606D',
      '#505363',
    ],
  },
  defaultRadius: 'md',
  primaryShade: 5,
  components: {
    Button: {
      classNames: { root: classes.buttonOverrides },
    },
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--button-bg': theme.colors.purple[5],
    '--button-hover': theme.colors.purple[4],
    '--button-active': theme.colors.purple[6],
  },
  light: {},
  dark: {},
});

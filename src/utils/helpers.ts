import { Genre } from '@/types';

export const getYearsFilterOptions = (): Array<string> => {
  const firstYear = 1874;
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - firstYear + 1 }, (_, i) => String(currentYear - i));
};

export const getGenresByIds = (genreIds: Array<number>, genres: Array<Genre>): Array<string> =>
  genreIds
    .map((id) => {
      const genre = genres.find(({ value }) => value === String(id));
      return genre?.label;
    })
    .filter((genre) => genre) as Array<string>;

export const truncateString = (str: string, num: number): string => {
  if (str.length > num) {
    return `${str.slice(0, num)} ...`;
  }
  return str;
};

export const shortenNumber = (num: number): string => {
  if (num > 100000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num > 100) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return String(num);
};

export const getDurationFromMinutes = (minutes: number): string => {
  const fullHours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${fullHours}h ${remainingMinutes}m`;
};

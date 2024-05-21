export const getYearsFilterOptions = (): Array<string> => {
  const firstYear = 1874;
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - firstYear + 1 }, (_, i) => String(currentYear - i));
};

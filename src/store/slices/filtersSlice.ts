import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { API_SORT_OPTIONS, DEFAULT_SORT_OPTION } from '@/constants/api';

interface FiltersState {
  selectedGenres: Array<string>;
  selectedYear: string | null;
  ratingFrom: number | undefined;
  ratingTo: number | undefined;
  sortBy: (typeof API_SORT_OPTIONS)[number]['value'];
}

const initialState: FiltersState = {
  selectedGenres: [],
  selectedYear: null,
  ratingFrom: undefined,
  ratingTo: undefined,
  sortBy: DEFAULT_SORT_OPTION,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Array<string>>) => {
      state.selectedGenres = action.payload;
    },
    setReleaseYear: (state, action: PayloadAction<string | null>) => {
      state.selectedYear = action.payload;
    },
    setRatingFrom: (state, action: PayloadAction<number | undefined>) => {
      state.ratingFrom = action.payload;
    },
    setRatingTo: (state, action: PayloadAction<number | undefined>) => {
      state.ratingTo = action.payload;
    },
    setSortBy: (
      state,
      action: PayloadAction<(typeof API_SORT_OPTIONS)[number]['value'] | null>
    ) => {
      state.sortBy = action.payload || DEFAULT_SORT_OPTION;
    },
  },
});

export const { setGenres, setReleaseYear, setRatingFrom, setRatingTo, setSortBy } =
  filtersSlice.actions;

export default filtersSlice.reducer;

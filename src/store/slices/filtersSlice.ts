import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { API_SORT_OPTIONS, DEFAULT_SORT_OPTION } from '@/constants/api';
import { MAX_RATING } from '@/constants/app';

export interface FiltersState {
  selectedGenres: Array<string>;
  selectedYear: string | null;
  ratingFrom: number | undefined;
  ratingTo: number | undefined;
  sortBy: (typeof API_SORT_OPTIONS)[number]['value'];
  page: number;
}

const initialState: FiltersState = {
  selectedGenres: [],
  selectedYear: null,
  ratingFrom: undefined,
  ratingTo: undefined,
  sortBy: DEFAULT_SORT_OPTION,
  page: 1,
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

      if (
        action.payload !== undefined &&
        state.ratingTo !== undefined &&
        action.payload > state.ratingTo
      ) {
        state.ratingTo = action.payload;
      }
    },
    incrementRatingFrom: (state) => {
      if (state.ratingFrom === undefined) {
        state.ratingFrom = 0;
        return;
      }
      if (state.ratingFrom < MAX_RATING) {
        state.ratingFrom += 1;
      }
      if (state.ratingTo !== undefined && state.ratingFrom > state.ratingTo) {
        state.ratingTo = state.ratingFrom;
      }
    },
    decrementRatingFrom: (state) => {
      if (state.ratingFrom === undefined) {
        return;
      }
      if (state.ratingFrom === 0) {
        state.ratingFrom = undefined;
        return;
      }
      state.ratingFrom -= 1;
    },
    setRatingTo: (state, action: PayloadAction<number | undefined>) => {
      state.ratingTo = action.payload;

      if (
        state.ratingFrom !== undefined &&
        action.payload !== undefined &&
        action.payload < state.ratingFrom
      ) {
        state.ratingFrom = action.payload;
      }
    },
    incrementRatingTo: (state) => {
      if (state.ratingTo === undefined) {
        state.ratingTo = Math.max(0, state.ratingFrom ?? 0);
        return;
      }
      if (state.ratingTo < MAX_RATING) {
        state.ratingTo += 1;
      }
    },
    decrementRatingTo: (state) => {
      if (state.ratingTo === undefined) {
        return;
      }
      if (state.ratingTo === 0) {
        state.ratingTo = undefined;
        return;
      }
      state.ratingTo -= 1;

      if (state.ratingFrom !== undefined && state.ratingTo < state.ratingFrom) {
        state.ratingFrom = state.ratingTo;
      }
    },
    setSortBy: (
      state,
      action: PayloadAction<(typeof API_SORT_OPTIONS)[number]['value'] | null>
    ) => {
      state.sortBy = action.payload || DEFAULT_SORT_OPTION;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    resetFilters: (state) => {
      state.selectedGenres = initialState.selectedGenres;
      state.selectedYear = initialState.selectedYear;
      state.ratingFrom = initialState.ratingFrom;
      state.ratingTo = initialState.ratingTo;
      state.sortBy = initialState.sortBy;
      state.page = initialState.page;
    },
  },
});

export const {
  setGenres,
  setReleaseYear,
  setRatingFrom,
  incrementRatingFrom,
  decrementRatingFrom,
  setRatingTo,
  incrementRatingTo,
  decrementRatingTo,
  setSortBy,
  setPage,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;

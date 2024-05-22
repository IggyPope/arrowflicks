import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  selectedGenres: Array<string>;
  selectedYear: string | null;
  ratingFrom: number | undefined;
  ratingTo: number | undefined;
}

const initialState: FiltersState = {
  selectedGenres: [],
  selectedYear: null,
  ratingFrom: undefined,
  ratingTo: undefined,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Array<string>>) => {
      state.selectedGenres = action.payload;
    },
    setYear: (state, action: PayloadAction<string | null>) => {
      state.selectedYear = action.payload;
    },
    setRatingFrom: (state, action: PayloadAction<number | undefined>) => {
      state.ratingFrom = action.payload;
    },
    setRatingTo: (state, action: PayloadAction<number | undefined>) => {
      state.ratingTo = action.payload;
    },
  },
});

export const { setGenres, setYear, setRatingFrom, setRatingTo } = filtersSlice.actions;

export default filtersSlice.reducer;

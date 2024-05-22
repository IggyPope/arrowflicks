import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  selectedGenres: Array<string>;
  selectedYear: string | null;
}

const initialState: FiltersState = {
  selectedGenres: [],
  selectedYear: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setGenres: (state, action: PayloadAction<Array<string>>) => {
      state.selectedGenres = action.payload;
    },
  },
});

export const { setGenres } = filtersSlice.actions;

export default filtersSlice.reducer;

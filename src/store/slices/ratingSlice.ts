import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Movie } from '@/types';

export interface RatingState {
  [movieId: number]: {
    rating: number;
    movie: Movie;
  };
}

const initialState: RatingState = {};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {
    addRating: (state, action: PayloadAction<{ rating: number; movie: Movie }>) => {
      const { rating, movie } = action.payload;

      state[movie.id] = { rating, movie };
    },
    deleteRating: (state, action: PayloadAction<number>) => {
      delete state[action.payload];
    },
  },
});

export const { addRating, deleteRating } = ratingSlice.actions;

export default ratingSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Movie } from '@/types';

export interface RatingModalState {
  isModalOpened: boolean;
  movie: Movie | null;
  rating: number | undefined;
}

const initialState: RatingModalState = {
  isModalOpened: false,
  movie: null,
  rating: undefined,
};

export const ratingModalSlice = createSlice({
  name: 'ratingModal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<Movie & { rating?: number }>) => {
      state.movie = action.payload;
      state.isModalOpened = true;

      if (action.payload.rating) {
        state.rating = action.payload.rating;
      }
    },
    closeModal: (state) => {
      state.movie = null;
      state.isModalOpened = false;
      state.rating = undefined;
    },
    setRating: (state, action: PayloadAction<number | undefined>) => {
      state.rating = action.payload;
    },
  },
});

export const { openModal, closeModal, setRating } = ratingModalSlice.actions;

export default ratingModalSlice.reducer;

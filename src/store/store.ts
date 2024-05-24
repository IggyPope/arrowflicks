import { configureStore } from '@reduxjs/toolkit';

import { moviesApi } from '@/services/moviesApi';
import filtersReducer from '@/store/slices/filtersSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
      filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

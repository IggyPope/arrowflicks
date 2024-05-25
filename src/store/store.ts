import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { moviesApi } from '@/services/moviesApi';
import filtersReducer from '@/store/slices/filtersSlice';
import ratingModalReducer from '@/store/slices/ratingModalSlice';
import ratingReducer from '@/store/slices/ratingSlice';

import storage from './persistStorage';

const persistConfig = {
  key: 'iggy-rated-movies',
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, ratingReducer);

export const makeStore = () =>
  configureStore({
    reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
      filters: filtersReducer,
      rating: persistedReducer,
      ratingModal: ratingModalReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(moviesApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

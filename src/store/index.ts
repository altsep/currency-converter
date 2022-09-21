import { configureStore } from '@reduxjs/toolkit';
import { changeCurrencyValue } from './currencyValues';

export const store = configureStore({
  reducer: {
    changeCurrencyValue,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

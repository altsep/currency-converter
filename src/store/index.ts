import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currencyValues from './currencyValues';

const combinedReducers = combineReducers({
  currencies: currencyValues,
});

const store = configureStore({
  reducer: (state, action) => combinedReducers(state, action),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

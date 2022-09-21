import { createSlice } from '@reduxjs/toolkit';

export interface Currencies {
  'base-currency': string;
  'target-currency': string;
}

const initialState: Currencies = {
  'base-currency': '',
  'target-currency': '',
};

export const counterSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    changeCurrencyValue: (state, action) => {
      const {
        payload: { name, value },
      } = action;
      return { ...state, [name]: value };
    },
  },
});

export const { changeCurrencyValue } = counterSlice.actions;

export default counterSlice.reducer;

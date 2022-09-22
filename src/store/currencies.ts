import { createSlice } from '@reduxjs/toolkit';

export interface CurrenciesStore {
  'base-currency-code': string;
  'target-currency-code': string;
  'base-currency-value': string;
  'target-currency-value': string;
  rates: number | undefined;
}

const initialState: CurrenciesStore = {
  'base-currency-code': '',
  'target-currency-code': '',
  'base-currency-value': '',
  'target-currency-value': '',
  rates: undefined,
};

export const counterSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      const {
        payload: { name, value },
      } = action;
      return { ...state, [name]: value };
    },
    setRates: (state, action) => ({ ...state, rates: action.payload }),
  },
});

export const { setCurrency, setRates } = counterSlice.actions;

export default counterSlice.reducer;

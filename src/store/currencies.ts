import { createSlice } from '@reduxjs/toolkit';

export interface CurrenciesStore {
  'base-currency-code': string;
  'target-currency-code': string;
  'base-currency-value': string;
  'target-currency-value': string;
  baseRates: { [key: string]: number } | null;
  baseRatio: number | null;
}

const initialState: CurrenciesStore = {
  'base-currency-code': '',
  'target-currency-code': '',
  'base-currency-value': '',
  'target-currency-value': '',
  baseRates: null,
  baseRatio: null,
};

export const counterSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
    setRates: (state, action) => ({ ...state, baseRates: action.payload }),
    setRatio: (state, action) => ({
      ...state,
      baseRatio: action.payload,
    }),
  },
});

export const { setCurrency, setRates, setRatio } = counterSlice.actions;

export default counterSlice.reducer;

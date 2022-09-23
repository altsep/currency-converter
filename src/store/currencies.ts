import { createSlice } from '@reduxjs/toolkit';

export interface CurrenciesStore {
  'base-code': string;
  'target-code': string;
  'base-value': string;
  'target-value': string;
  baseRates: { [key: string]: number } | null;
  baseRatio: number | null;
  isLoading: false;
}

const initialState: CurrenciesStore = {
  'base-code': '',
  'target-code': '',
  'base-value': '',
  'target-value': '',
  baseRates: null,
  baseRatio: null,
  isLoading: false,
};

export const counterSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    setProperty: (state, action) => {
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

export const { setProperty, setRates, setRatio } = counterSlice.actions;

export default counterSlice.reducer;

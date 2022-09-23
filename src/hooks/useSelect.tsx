import { useEffect } from 'react';
import { setCurrency } from '../store/currencies';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import type { RootState } from '../store';
import { Currencies } from '../currencies';
import countryToCurrency from 'country-to-currency';

/// <reference path="../countryToCurrency.d.ts" />

function useSelect(
  isBaseInstance: boolean,
  name: string,
  symbols: Currencies.List
) {
  const optionList = Object.keys(symbols);

  const locale = navigator.language;
  const country = locale.split('-')[1] || 'US';
  const localCurrency = countryToCurrency[country];
  const defaultValue = isBaseInstance ? localCurrency : optionList[0];

  const value = useAppSelector(
    (state: RootState) => state.currencies[name] || defaultValue
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrency({ name, value }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(setCurrency({ name, value }));
  };

  const currencySymbol = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: value,
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
  })
    .format(0)
    .replace(/[\d.a-z]+/gi, '');

  const selectedSymbolData = symbols[value];

  const { description } = selectedSymbolData;

  return {
    currencySymbol,
    optionList,
    description,
    selectProps: {
      onChange: handleChange,
      name,
      value,
    },
  };
}

export default useSelect;

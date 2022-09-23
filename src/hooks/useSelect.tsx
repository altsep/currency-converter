import { useEffect } from 'react';
import { setCurrency } from '../store/currencies';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import type { RootState } from '../store';
import { Currencies } from '../currencies';
import localeCurrency from 'locale-currency';

function useSelect(
  isBaseInstance: boolean,
  name: string,
  symbols: Currencies.List
) {
  const optionList = Object.keys(symbols);

  const locale = navigator.language || 'en-US';
  const localCurrency = localeCurrency.getCurrency(locale) || 'USD';
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

  const currencySymbol = new Intl.NumberFormat('en-US', {
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

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setProperty } from '../store/currencies';
import { getCurrentValue } from '../functions';
import { RootState } from '../store';

function useOnSelect() {
  const {
    ['base-currency-value']: baseInputValue,
    ['target-currency-value']: targetInputValue,
    ['base-currency-code']: baseCode,
    ['target-currency-code']: targetCode,
    baseRates,
  } = useAppSelector((state: RootState) => state.currencies);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (baseRates) {
      const newCurrentValue = getCurrentValue(
        true,
        targetInputValue,
        baseRates[targetCode]
      );
      dispatch(
        setProperty({ name: 'base-currency-value', value: newCurrentValue })
      );
    }
  }, [baseCode, baseRates]);

  useEffect(() => {
    if (baseRates) {
      const newInputValue = getCurrentValue(
        false,
        baseInputValue,
        baseRates[targetCode]
      );
      dispatch(
        setProperty({ name: 'target-currency-value', value: newInputValue })
      );
    }
  }, [targetCode]);
}

export default useOnSelect;

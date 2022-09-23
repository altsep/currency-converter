import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setCurrency } from '../store/currencies';
import { getCurrentValue } from '../functions';
import { RootState } from '../store';

function useOnSelect() {
  const {
    ['base-currency-value']: baseInputValue,
    ['target-currency-value']: targetInputValue,
    ['base-currency-code']: baseCode,
    ['target-currency-code']: targetCode,
    baseRates,
    baseRatio,
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
        setCurrency({ name: 'base-currency-value', value: newCurrentValue })
      );
    }
  }, [baseCode, baseRates]);

  useEffect(() => {
    console.log(targetCode, baseRatio);
    if (baseRates) {
      const newInputValue = getCurrentValue(
        false,
        baseInputValue,
        baseRates[targetCode]
      );
      dispatch(
        setCurrency({ name: 'target-currency-value', value: newInputValue })
      );
    }
  }, [targetCode]);
}

export default useOnSelect;

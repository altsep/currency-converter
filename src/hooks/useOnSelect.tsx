import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setProperty } from '../store/currencies';
import { getCurrentValue } from '../functions';
import { RootState } from '../store';

function useOnSelect() {
  const {
    ['base-value']: baseInputValue,
    ['target-value']: targetInputValue,
    ['base-code']: baseCode,
    ['target-code']: targetCode,
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
      dispatch(setProperty({ name: 'base-value', value: newCurrentValue }));
    }
  }, [baseCode, baseRates]);

  useEffect(() => {
    if (baseRates) {
      const newInputValue = getCurrentValue(
        false,
        baseInputValue,
        baseRates[targetCode]
      );
      dispatch(setProperty({ name: 'target-value', value: newInputValue }));
    }
  }, [targetCode]);
}

export default useOnSelect;

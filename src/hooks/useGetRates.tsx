import { useEffect } from 'react';
import { RootState } from '../store';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { endpoints } from '../constants';
import useFetch from './useFetch';
import { setRates, setRatio } from '../store/currencies';

function useGetRates() {
  const { latestURL } = endpoints;

  const { ['base-code']: baseCode, ['target-code']: targetCode } =
    useAppSelector((state: RootState) => state.currencies);

  const { data } = useFetch(() => (baseCode ? latestURL(baseCode) : null));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setRates(data.rates));
      const ratio = data.rates[targetCode];
      dispatch(setRatio(ratio));
    }
  }, [data, dispatch, baseCode, targetCode]);
}

export default useGetRates;

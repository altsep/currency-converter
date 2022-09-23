import { useEffect } from 'react';
import useSWR from 'swr';
import { fetcher } from '../functions';
import { setProperty } from '../store/currencies';
import { useAppDispatch } from '../store/hooks';

function useFetch(key: string | (() => string | null)) {
  const { data, error } = useSWR(key, fetcher);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setProperty({ name: 'isLoading', value: !error && !data ? true : false })
    );
  }, [data, dispatch, error]);

  return {
    data,
    error,
  };
}

export default useFetch;

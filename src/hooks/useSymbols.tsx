import { useEffect, useState } from 'react';
import { endpoints } from '../constants';
import useFetch from './useFetch';
import type { Symbols } from '../interfaces';

function useSymbols() {
  const { availableURL } = endpoints;
  const [symbols, setSymbols] = useState<Symbols | undefined>();

  const { data, isLoading, error } = useFetch(availableURL);

  useEffect(() => {
    if (data && data.symbols) setSymbols(data.symbols);
  }, [data]);

  return { symbols, isLoading, error };
}

export default useSymbols;

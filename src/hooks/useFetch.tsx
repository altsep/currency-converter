import useSWR from 'swr';
import { fetcher } from '../functions';

function useFetch(key: string | (() => string | null)) {
  const { data, error } = useSWR(key, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}

export default useFetch;

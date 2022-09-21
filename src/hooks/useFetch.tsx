import useSWR from 'swr';
import fetcher from '../functions/fetcher';

function useFetch(url: string) {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
}

export default useFetch;

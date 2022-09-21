import { changeCurrencyValue } from '../store/currencyValues';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import type { RootState } from '../store';

function useInput(name: string) {
  const value = useAppSelector((state: RootState) => state.currencies[name]);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeCurrencyValue({ name, value }));
  };

  return {
    name,
    id: name,
    value,
    onChange: handleChange,
  };
}

export default useInput;

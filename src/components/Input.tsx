import { useShouldUpdate } from '../hooks';

import { changeCurrencyValue } from '../store/currencyValues';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import type { RootState } from '../store';
import { useEffect } from 'react';

interface P {
  name: string;
}

function Input({ name }: P) {
  const value = useAppSelector((state: RootState) => state.currencies[name]);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(changeCurrencyValue({ name, value }));
  };

  return (
    <input
      type='text'
      name={name}
      id={name}
      value={value}
      onChange={handleChange}
      className='block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
      placeholder='0.00'
    />
  );
}

export default Input;

import { useState } from 'react';
import type { Symbols } from '../interfaces';
import countryToCurrency from 'country-to-currency';
import { useInput } from '../hooks';

interface P {
  label: string;
  name: string;
  symbols: Symbols;
  base?: boolean;
}

function Select({ label, name, symbols, base }: P) {
  const country = navigator.language.split('-')[1];
  const localCurrency = countryToCurrency[country];
  const optionList = Object.keys(symbols);

  const [value, setValue] = useState<string>(() => {
    if (base) return localCurrency;
    else return optionList[0];
  });
  const currencySymbol = new Intl.NumberFormat([navigator.language], {
    style: 'currency',
    currency: value,
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
  })
    .format(0)
    .replace(/[\d.a-z]+/gi, '');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(e.target.value);

  const inputProps = useInput(name.split('-')[0] + '-currency');

  return (
    <div className='font-mono'>
      <label
        htmlFor='price'
        className='block text-sm font-medium text-gray-700 font-sans'
      >
        Amount
      </label>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'>{currencySymbol}</span>
        </div>
        <input
          {...inputProps}
          className='block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          placeholder='0.00'
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <label htmlFor={label} className='sr-only'></label>
          <select
            name={name}
            id={label}
            onChange={handleChange}
            defaultValue={base ? localCurrency : undefined}
            className='h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          >
            {optionList.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className='my-2 font-serif'>{symbols[value].description}</p>
    </div>
  );
}

export default Select;

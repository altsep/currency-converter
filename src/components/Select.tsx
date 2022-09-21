import { useState } from 'react';
import type { Symbols } from '../interfaces';
import countryToCurrency from 'country-to-currency';

interface P {
  label: string;
  name: string;
  symbols: Symbols;
  base?: boolean;
}

function Select({ label, name, symbols, base }: P) {
  const country = navigator.language.split('-')[1];
  const localCurrency = countryToCurrency[country];
  const [value, setValue] = useState<string | undefined>(() => {
    if (base) return localCurrency;
  });
  const optionList = Object.keys(symbols);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(e.target.value);

  return (
    <div className=''>
      <label htmlFor={label}></label>
      <select
        className='p-2'
        name={name}
        id={label}
        onChange={handleChange}
        defaultValue={base ? localCurrency : undefined}
      >
        {optionList.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <p className='my-2 font-serif'>{symbols[value || optionList[0]].description}</p>
    </div>
  );
}

export default Select;

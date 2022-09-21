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
  const [value, setValue] = useState<string | undefined>();
  const optionList = Object.keys(symbols);
  const country = navigator.language.split('-')[1];
  const localCurrency = countryToCurrency[country];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setValue(e.target.value);

  return (
    <div className=''>
      <label htmlFor={label}></label>
      <select name={name} id={label} onChange={handleChange}>
        {optionList.map((o) => (
          <option key={o} value={o} selected={base && localCurrency === o}>
            {o}
          </option>
        ))}
      </select>
      <p>{symbols[value || optionList[0]].description}</p>
    </div>
  );
}

export default Select;

import type { Currencies } from '../currencies';
import { useInput, useSelect } from '../hooks';

interface P {
  label: string;
  name: string;
  symbols: Currencies.List;
  base?: boolean;
}

const getName = (name: string, modifier: string) => `${name}-${modifier}`;

function Select({ label, name, symbols }: P) {
  const inputProps = useInput(getName(name, 'value'));
  const { selectProps, currencySymbol, optionList, description } = useSelect(
    getName(name, 'code'),
    symbols
  );
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
          <span className='text-gray-500 md:text-sm'>{currencySymbol}</span>
        </div>
        <input
          {...inputProps}
          className='block w-full rounded-md border-gray-300 border py-2 pl-7 pr-12 focus:ring-2 focus:border-indigo-500 focus:outline-indigo-500 focus:ring-indigo-500 md:text-sm'
          placeholder='0.00'
        />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <label htmlFor={label} className='sr-only'></label>
          <select
            {...selectProps}
            id={label}
            className='h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 md:text-sm'
          >
            {optionList.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>
      <p className='my-2 font-serif'>{description}</p>
    </div>
  );
}

export default Select;

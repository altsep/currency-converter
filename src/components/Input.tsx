import { useState, useEffect } from 'react';

interface P {
  name: string;
  label: string;
}

function Input({ name, label }: P) {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <input
      type='text'
      name={name}
      id={label}
      value={value}
      onChange={handleChange}
      className='block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
      placeholder='0.00'
    />
  );
}

export default Input;

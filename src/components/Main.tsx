import { useState, useEffect } from 'react';
import { useSymbols } from '../hooks';
import { Select } from '../components';

function Main() {
  const { symbols, isLoading, error } = useSymbols();

  if (symbols) {
    const targetSelectProps = {
      label: 'select-target-currency',
      name: 'target-currencies',
      symbols,
    };
    const baseSelectProps = {
      label: 'select-base-currency',
      name: 'base-currencies',
      symbols,
      base: true,
    };
    return (
      <main className='mx-auto w-max'>
        <Select {...baseSelectProps} />
        <Select {...targetSelectProps} />
      </main>
    );
  } else if (error) return <p>An error has occured</p>;
  else return <p>Loading</p>;
}

export default Main;

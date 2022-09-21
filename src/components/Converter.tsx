import { useState, useEffect } from 'react';
import { useSymbols } from '../hooks';
import { Select } from '.';
import { UpArrow } from '../icons';

function Converter() {
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
      <>
        <Select {...baseSelectProps} />
        <UpArrow />
        <Select {...targetSelectProps} />
      </>
    );
  } else if (error) return <p>An error has occured</p>;
  else return <p>Loading</p>;
}

export default Converter;

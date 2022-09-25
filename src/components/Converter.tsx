import { Form } from '.';
import { ArrowPath } from '../icons';
import { endpoints, symbolsTemp, prod } from '../constants';
import { useFetch, useGetRates, useOnSelect } from '../hooks';

function Converter() {
  const { availableURL } = endpoints;

  const { data, error } = useFetch(() => (prod ? availableURL : null));

  // Get rates for base code and update ratio on selection
  useGetRates();

  // Convert other input value to current on selection
  useOnSelect();

  // Use an offline list of symbols in development
  const symbols = prod ? data && data.symbols : symbolsTemp;

  const targetSelectProps = {
    label: 'select-target',
    name: 'target',
    symbols,
  };
  const baseSelectProps = {
    label: 'select-base',
    name: 'base',
    symbols,
  };

  if (error)
    return <p className='text-red-500 self-center'>Could not fetch data</p>;
  else if (symbols)
    return (
      <>
        <Form {...baseSelectProps} />
        <ArrowPath
          className={'self-center my-4 md:mt-0 md:rotate-90 text-neutral-600'}
        />
        <Form {...targetSelectProps} />
      </>
    );
  else return null;
}

export default Converter;

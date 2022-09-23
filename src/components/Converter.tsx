import { Form } from '.';
import { ArrowDoubleDown, ArrowDoubleUp } from '../icons';
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
        <div className='flex flex-col md:flex-row'>
          <ArrowDoubleUp />
          <ArrowDoubleDown />
        </div>
        <Form {...targetSelectProps} />
      </>
    );
  else return null;
}

export default Converter;

import { Form } from '.';
import { ArrowDoubleDown, ArrowDoubleUp } from '../icons';
import { endpoints, symbolsTemp, prod } from '../constants';
import { useFetch, useGetRates, useOnSelect } from '../hooks';
import Loader from './Loader';

function Converter() {
  const { availableURL } = endpoints;

  const { data, isLoading, error } = useFetch(() =>
    prod ? availableURL : null
  );

  // Get rates for base code and update ratio on selection
  useGetRates();

  // Convert other input value to current on selection
  useOnSelect();

  const symbols = prod ? data && data.symbols : symbolsTemp;

  if (error) return <p className='text-red-500'>Could not fetch data</p>;
  if (prod && isLoading) return <Loader />;

  const targetSelectProps = {
    label: 'select-target-currency',
    name: 'target-currency',
    symbols,
  };
  const baseSelectProps = {
    label: 'select-base-currency',
    name: 'base-currency',
    symbols,
  };
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
}

export default Converter;

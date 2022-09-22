import { Select } from '.';
import { ArrowDoubleDown } from '../icons';
import { endpoints, symbolsTemp } from '../constants';
// import { useFetch } from '../hooks';

function Converter() {
  const { availableURL } = endpoints;

  // const { data, error } = useFetch(availableURL);

  // if (data.symbols) {
    const targetSelectProps = {
      label: 'select-target-currency',
      name: 'target-currency',
      symbols: symbolsTemp,
    };
    const baseSelectProps = {
      label: 'select-base-currency',
      name: 'base-currency',
      symbols: symbolsTemp,
    };
    return (
      <>
        <Select {...baseSelectProps} />
        <ArrowDoubleDown />
        <Select {...targetSelectProps} />
      </>
    )
// } 
  // else if (error) return <p>An error has occured</p>;
  // else return <p>Loading</p>;
}

export default Converter;

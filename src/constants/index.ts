import { endpoints } from './endpoints';
import { symbolsTemp } from './symbolsTemp';

const prod = import.meta.env.PROD;

export { prod, endpoints, symbolsTemp };

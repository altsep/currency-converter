interface CountryToCurrency {
  [key: string]: string;
}

declare module 'country-to-currency' {
  const _default: CountryToCurrency;
  export default _default;
}

export const endpoints = {
  availableURL: 'https://api.exchangerate.host/symbols',
  convertURL: (from: string, to: string) =>
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`,
  latestURL: (base: string) =>
    `https://api.exchangerate.host/latest?base=${base}`,
};

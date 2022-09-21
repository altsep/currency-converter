const endpoints = {
  availableURL: 'https://api.exchangerate.host/symbols',
  convertURL: (from: string, to: string) =>
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`,
};

export { endpoints };

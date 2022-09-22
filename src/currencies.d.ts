declare namespace Currencies {
  interface Currency {
    description: string;
    code: string;
  }

  interface List {
    [key: string]: Currency;
  }
}

export type { Currencies };

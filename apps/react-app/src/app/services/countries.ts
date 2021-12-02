export type Country = {
  code: string;
  name: string;
};

export const getCountries = (): Country[] => [
  {
    code: 'it',
    name: 'Italy',
  },
  {
    code: 'de',
    name: 'Germany',
  },
  {
    code: 'fr',
    name: 'France',
  },
];

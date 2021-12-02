export type Color = {
  id: string;
  label: string;
};

export const getColors = (): Color[] => [
  {
    id: 'red',
    label: 'Red',
  },
  {
    id: 'orange',
    label: 'Orange',
  },
  {
    id: 'green',
    label: 'Green',
  },
];

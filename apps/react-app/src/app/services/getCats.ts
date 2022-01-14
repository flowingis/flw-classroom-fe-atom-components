type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const getCats = async (): Promise<Array<Cat>> => [
  { id: '0', url: '', width: 0, height: 0 },
];

export { getCats };

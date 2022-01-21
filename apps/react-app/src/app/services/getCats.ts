export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const getCats = async (): Promise<Array<Cat>> => {
  const response = await fetch(
    'https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc'
  );
  return response.json();
};

export { getCats };

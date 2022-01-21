import { Cat, getCats } from './getCats';

describe('Get Cats', () => {
  const cat1: Cat = {
    id: '1mg',
    url: 'https://cdn2.thecatapi.com/images/1mg.jpg',
    width: 4000,
    height: 3000,
  };
  const mockResponse: Cat[] = [cat1];

  beforeEach(() => {
    global.fetch = jest.fn(async () => ({
      json: async () => mockResponse,
    })) as any;
  });

  it('Should exists', () => {
    expect(getCats).toBeDefined();
  });

  it('Should return an array', async () => {
    expect(await getCats()).toBeInstanceOf(Array);
  });

  it('Shoud return an array of Cats', async () => {
    const cats = await getCats();
    expect(cats[0]).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        url: expect.any(String),
        width: expect.any(Number),
        height: expect.any(Number),
      })
    );
  });

  it('Should return a promise', () => {
    expect(getCats()).toBeInstanceOf(Promise);
  });

  it('Should call a fetch', async () => {
    await getCats();
    expect(fetch).toHaveBeenCalled();
  });

  it('Should return the cats response', async () => {
    const cats = await getCats();
    expect(cats).toEqual(mockResponse);
  });

  it('Should call the fetch with a valid url', async () => {
    await getCats();
    expect(fetch).toHaveBeenCalledWith(
      'https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc'
    );
  });

  it.todo('Should have length of 10 items');
});

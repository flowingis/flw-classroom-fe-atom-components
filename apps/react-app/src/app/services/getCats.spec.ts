import { getCats } from './getCats';

describe('Get Cats', () => {
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

  it.todo('Should have length of 10 items');
});

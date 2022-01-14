import { getCats, Cat } from './cats';
import fetchMock from "jest-fetch-mock";

const MOCK_CATS = [
    {
        "breeds": [],
        "id": "3v0",
        "url": "https://cdn2.thecatapi.com/images/3v0.jpg",
        "width": 500,
        "height": 332
    },
    {
        "breeds": [],
        "id": "74l",
        "url": "https://cdn2.thecatapi.com/images/74l.jpg",
        "width": 500,
        "height": 332
    },
    {
        "breeds": [],
        "id": "a3g",
        "url": "https://cdn2.thecatapi.com/images/a3g.jpg",
        "width": 800,
        "height": 530
    },
    {
        "breeds": [],
        "id": "cs7",
        "url": "https://cdn2.thecatapi.com/images/cs7.jpg",
        "width": 1200,
        "height": 1600
    },
    {
        "breeds": [],
        "id": "yTTGK6YL1",
        "url": "https://cdn2.thecatapi.com/images/yTTGK6YL1.jpg",
        "width": 1440,
        "height": 1440
    }
]
describe('Cats', () => {

    beforeAll(() => {
        fetchMock.enableMocks()
    })

    beforeEach(() => {
        fetchMock.resetMocks()
        fetchMock.mockResponse(JSON.stringify(MOCK_CATS))
    })
    it('should fetch successfully', async () => {
        const cats = await getCats()
        expect(cats).toBeDefined()
    })

    it('should get the first cat', async () => {
        const cats = await getCats()
        expect(cats[0]).toBeDefined()
    })

    it.each(['id', 'url', 'width', 'height'] as const)('first cat should have a %s', async (key) => {
        const cats = await getCats()
        expect(cats[0][key]).toBeDefined()
    })

    describe('fetch API', () => {

        let cats: Cat[]

        beforeEach(async () => {
            cats = await getCats()
        });

        it('should call the fetch api', async () => {
            expect(fetch).toHaveBeenCalledTimes(1)
        })

        it('should call fetch API to this url: https://api.thecatapi.com/v1/images/search?limit=5', async () => {
            expect(fetch).toHaveBeenCalledWith('https://api.thecatapi.com/v1/images/search?limit=5', expect.anything())
        })

        it('should call fetch API using GET', async () => {
            expect(fetch).toHaveBeenCalledWith(expect.anything(), expect.objectContaining({
                method: 'GET'
            }))
        })

    })
});

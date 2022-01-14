export type Cat = {
    id: string,
    url: string
    width: number
    height: number
}

export const getCats = async (): Promise<Cat[]> => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=5', {
        method: 'GET',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response.json();
}; 
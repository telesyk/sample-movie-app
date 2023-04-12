export const KEY_IMDB = 'k_1234567';

export const ENDPOINT = {
  test: {
    products: 'https://dummyjson.com/products/category/laptops',
  },
  mock: {
    products: 'http://localhost:3000/api/mock-data',
    limitProducts: 'http://localhost:3000/api/mock-limit-data',
  },
  imdb: {
    title: (id: number | string) =>
      `https://imdb-api.com/en/API/Title/${KEY_IMDB}/${id}`,
    resizeImage: (w: number, h: number, url: string | undefined) => {
      return !url
        ? null
        : `https://imdb-api.com/API/ResizeImage?apiKey=${KEY_IMDB}&size=${w}x${h}&url=${url}`;
    },
  },
};

export const NOTIFICATION = {
  error: {
    fetchData: 'Failed to fetch data',
  },
};

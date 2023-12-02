export const moviesListLength = 10;
export const maxMoviesLength = 240;

export const ENDPOINT = {
  test: {
    products: 'https://dummyjson.com/products/category/laptops',
  },
  mock: {
    inTheaters: 'http://localhost:3000/api/in-theaters',
    comingSoon: 'http://localhost:3000/api/coming-soon',
    mostPopular: 'http://localhost:3000/api/most-popular-movies',
    top250movies: 'http://localhost:3000/api/top-250-movies',
    top250moviesLimited: 'http://localhost:3000/api/top-250-movies-limited',
    moviePoster: (id: string) => `http://localhost:3000/api/movie/${id}/poster`,
    movieTrailer: (id: string) =>
      `http://localhost:3000/api/movie/${id}/trailer`,
    //
    fullList: 'http://localhost:3000/api/mock-data',
  },
};

export const NOTIFICATION = {
  error: {
    fetchData: 'Failed to fetch data! Check API path`s',
  },
};
